// Import des dependances
import { Request, Response } from "express";
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";
import { validationResult } from "express-validator";

// Import du modele User
import models from "../../models";
const { User } = models;
// Créer un utilisateur
export const createUser = async (req: Request, res: Response) => {
  try {
    const { name, email, password } = req.body;
    const roleId = 4;

    // Génération d'un salt et hashage du mot de passe
    const saltRounds = 10;
    const hashedPassword = await bcrypt.hash(password, saltRounds);

    // Création de l'utilisateur avec le mot de passe hashé
    const user = await User.create({
      name,
      email,
      password: hashedPassword,
      roleId,
    });

    // On ne renvoie pas le mot de passe dans la réponse
    const userWithoutPassword = {
      id: user.id,
      name: user.name,
      email: user.email,
      roleId: user.roleId,
      createdAt: user.createdAt,
    };

    res.status(201).json(userWithoutPassword);
  } catch (error) {
    res.status(500).json({
      error: "Erreur lors de la création de l'utilisateur",
      details: error,
    });
  }
};

// Récupérer tous les utilisateurs
export const getUsers = async (req: Request, res: Response) => {
  try {
    const users = await User.findAll({
      include: [{ association: "role" }],
    });
    res.status(200).json(users);
  } catch (error) {
    res.status(500).json({
      error: "Erreur lors de la récupération des utilisateurs",
      details: error,
    });
  }
};

// Récupérer un utilisateur via son id
export const getUser = async (req: Request, res: Response): Promise<void> => {
  try {
    const authenticatedUserId = (req.user as { id: number }).id;
    const requestedId = req.params.id;

    if (requestedId && parseInt(requestedId) !== authenticatedUserId) {
      res.status(403).json({
        error:
          "Vous n'êtes pas autorisé à accéder aux informations de cet utilisateur.",
      });
      return;
    }

    const user = await User.findByPk(authenticatedUserId, {
      include: [{ association: "role" }],
    });

    if (user) {
      res.status(200).json(user);
    } else {
      res.status(404).json({ error: "Utilisateur non trouvé" });
    }
  } catch (error) {
    console.error("Erreur lors de la récupération de l'utilisateur:", error);
    res.status(500).json({
      error: "Erreur lors de la récupération de l'utilisateur",
      details: error,
    });
  }
};

// Mettre à jour un utilisateur
export const updateUser = async (
  req: Request,
  res: Response
): Promise<void> => {
  try {
    const { id } = req.params;
    const { name, email, password, roleId } = req.body;
    const user = await User.findByPk(id);
    if (!user) {
      res.status(404).json({ error: "Utilisateur non trouvé" });
      return; // Terminer sans renvoyer une valeur
    }
    await user.update({ name, email, password, roleId });
    res.status(200).json(user);
    return;
  } catch (error) {
    res.status(500).json({
      error: "Erreur lors de la mise à jour de l'utilisateur",
      details: error,
    });
    return;
  }
};

// Supprimer un utilisateur
export const deleteUser = async (
  req: Request,
  res: Response
): Promise<void> => {
  try {
    const { id } = req.params;
    const user = await User.findByPk(id);
    if (!user) {
      res.status(404).json({ error: "Utilisateur non trouvé" });
      return;
    }
    await user.destroy();
    res.status(200).json({ message: "Utilisateur supprimé avec succès" });
    return;
  } catch (error) {
    res.status(500).json({
      error: "Erreur lors de la suppression de l'utilisateur",
      details: error,
    });
    return;
  }
};

export const login = async (req: Request, res: Response): Promise<void> => {
  // Vérification des erreurs de validation
  const errors = validationResult(req);
  if (!errors.isEmpty()) {
    res.status(400).json({ errors: errors.array() });
    return;
  }

  try {
    const { email, password } = req.body;

    // Recherche de l'utilisateur par email
    const user = await User.findOne({ where: { email } });
    if (!user) {
      res.status(404).json({ error: "Utilisateur non trouvé" });
      return;
    }

    // Vérification du mot de passe (en supposant que user.password est haché)
    const isValidPassword = await bcrypt.compare(password, user.password);
    if (!isValidPassword) {
      res.status(401).json({ error: "Mot de passe incorrect" });
      return;
    }
    // Création du token JWT
    const token = jwt.sign(
      { id: user.id, email: user.email, roleId: user.roleId },
      process.env.JWT_SECRET as string,
      { expiresIn: "1h" }
    );
    res.cookie("authToken", token, {
      httpOnly: true,
      secure: process.env.NODE_ENV === "production",
      sameSite: "strict",
      maxAge: 3600000,
    });
    res.status(200).json({
      message: "Utilisateur connecté avec succès",
    });
  } catch (error) {
    res.status(500).json({
      error: "Erreur lors de la connexion",
      details: error,
    });
  }
};

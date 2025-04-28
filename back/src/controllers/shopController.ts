import { Request, Response } from "express";
import Shop from "../../models/Shop";
import { Sequelize } from "sequelize";

// Récupérer tous les shops
export const getAllShops = async (
  req: Request,
  res: Response
): Promise<void> => {
  try {
    const shops = await Shop.findAll({
      include: [
        { association: "user" }, // Inclut l'utilisateur associé
        { association: "products" }, // Optionnel : inclut les produits associés
      ],
    });
    res.status(200).json(shops);
    return;
  } catch (error) {
    res.status(500).json({
      error: "Erreur lors de la récupération des shops",
      details: error,
    });
    return;
  }
};

export const getRandomShops = async (
  req: Request,
  res: Response
): Promise<void> => {
  try {
    const shops = await Shop.findAll({
      include: [
        { association: "user" }, // Inclut l'utilisateur associé
        { association: "products" }, // Optionnel : inclut les produits associés
      ],
      order: Sequelize.literal("RANDOM()"),
      limit: 6,
    });
    res.status(200).json(shops);
    return;
  } catch (error) {
    res.status(500).json({
      error: "Erreur lors de la récupération des shops",
      details: error,
    });
    return;
  }
};

// Récupérer un shop par son id
export const getShop = async (req: Request, res: Response): Promise<void> => {
  try {
    const { id } = req.params;
    const shop = await Shop.findByPk(id, {
      include: [
        { association: "user" }, // Inclut l'utilisateur associé
        { association: "products" }, // Optionnel : inclut les produits associés
      ],
    });
    if (shop) {
      res.status(200).json(shop);
    } else {
      res.status(404).json({ error: "Shop non trouvé" });
      return;
    }
  } catch (error) {
    console.log("error", error);
    res.status(500).json({
      error: "Erreur lors de la récupération du shop",
      details: error,
    });
    return;
  }
};

export const createShop = async (
  req: Request,
  res: Response
): Promise<void> => {
  try {
    const {
      siret,
      companyName,
      phone,
      email,
      street,
      postalCode,
      city,
      departement,
      image_url,
      describe,
      category,
      type,
    } = req.body;
    if (!req.user) {
      res.status(400).json({ error: "Utilisateur non authentifié" });
      return;
    }
    const userId = req.user.id;

    const shop = await Shop.create({
      siret,
      companyName,
      phone,
      email,
      street,
      postalCode,
      city,
      departement,
      image_url,
      describe,
      category,
      type,
      userId,
    });
    res.status(201).json(shop);
  } catch (error) {
    res.status(500).json({
      error: "Erreur lors de la création de la boutique",
      details: error,
    });
  }
};

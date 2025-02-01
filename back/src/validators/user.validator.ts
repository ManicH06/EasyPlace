import { body, validationResult } from "express-validator";
import { Request, Response, NextFunction } from "express";

// Validations pour la création d'un utilisateur
export const createUserValidator = [
  body("name")
    .notEmpty()
    .withMessage("Le nom est requis"),
  body("email")
    .isEmail()
    .withMessage("Email invalide"),
  body("password")
    .isLength({ min: 6 })
    .withMessage("Le mot de passe doit contenir au moins 6 caractères"),
  body("roleId")
    .optional()
    .isNumeric()
    .withMessage("roleId doit être un nombre")
];

// Validations pour la mise à jour d'un utilisateur
export const updateUserValidator = [
  body("name")
    .optional()
    .notEmpty()
    .withMessage("Le nom ne peut pas être vide"),
  body("email")
    .optional()
    .isEmail()
    .withMessage("Email invalide"),
  body("password")
    .optional()
    .isLength({ min: 6 })
    .withMessage("Le mot de passe doit contenir au moins 6 caractères"),
  body("roleId")
    .optional()
    .isNumeric()
    .withMessage("roleId doit être un nombre")
];

// Middleware pour vérifier les erreurs de validation
export const checkValidationResult = (
  req: Request, 
  res: Response, 
  next: NextFunction
): void => {
  const errors = validationResult(req);
  if (!errors.isEmpty()) {
    res.status(400).json({ errors: errors.array() });
    return; // on retourne simplement sans rien renvoyer
  }
  next();
};

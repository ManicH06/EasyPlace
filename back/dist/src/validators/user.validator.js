"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.checkValidationResult = exports.updateUserValidator = exports.createUserValidator = void 0;
const express_validator_1 = require("express-validator");
// Validations pour la création d'un utilisateur
exports.createUserValidator = [
    (0, express_validator_1.body)("name")
        .notEmpty()
        .withMessage("Le nom est requis"),
    (0, express_validator_1.body)("email")
        .isEmail()
        .withMessage("Email invalide"),
    (0, express_validator_1.body)("password")
        .isLength({ min: 6 })
        .withMessage("Le mot de passe doit contenir au moins 6 caractères"),
    (0, express_validator_1.body)("roleId")
        .optional()
        .isNumeric()
        .withMessage("roleId doit être un nombre")
];
// Validations pour la mise à jour d'un utilisateur
exports.updateUserValidator = [
    (0, express_validator_1.body)("name")
        .optional()
        .notEmpty()
        .withMessage("Le nom ne peut pas être vide"),
    (0, express_validator_1.body)("email")
        .optional()
        .isEmail()
        .withMessage("Email invalide"),
    (0, express_validator_1.body)("password")
        .optional()
        .isLength({ min: 6 })
        .withMessage("Le mot de passe doit contenir au moins 6 caractères"),
    (0, express_validator_1.body)("roleId")
        .optional()
        .isNumeric()
        .withMessage("roleId doit être un nombre")
];
// Middleware pour vérifier les erreurs de validation
const checkValidationResult = (req, res, next) => {
    const errors = (0, express_validator_1.validationResult)(req);
    if (!errors.isEmpty()) {
        res.status(400).json({ errors: errors.array() });
        return; // on retourne simplement sans rien renvoyer
    }
    next();
};
exports.checkValidationResult = checkValidationResult;

"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.loginUserValidator = void 0;
const express_validator_1 = require("express-validator");
exports.loginUserValidator = [
    (0, express_validator_1.check)('email')
        .trim()
        .notEmpty().withMessage("L'email est requis.")
        .isEmail().withMessage("L'email doit être une adresse valide."),
    (0, express_validator_1.check)('password')
        .notEmpty().withMessage("Le mot de passe est requis.")
];

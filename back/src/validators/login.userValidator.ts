import { check } from 'express-validator';

export const loginUserValidator = [
  check('email')
    .trim()
    .notEmpty().withMessage("L'email est requis.")
    .isEmail().withMessage("L'email doit être une adresse valide."),
    
  check('password')
    .notEmpty().withMessage("Le mot de passe est requis.")
];
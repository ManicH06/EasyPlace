"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
// routes/user.routes.ts
const express_1 = require("express");
const userController_1 = require("../../controllers/userController");
const user_validator_1 = require("../../validators/user.validator");
const login_userValidator_1 = require("../../validators/login.userValidator");
const router = (0, express_1.Router)();
// Route pour créer un utilisateur
router.post("/register", user_validator_1.createUserValidator, user_validator_1.checkValidationResult, userController_1.createUser);
router.post("/login", login_userValidator_1.loginUserValidator, userController_1.login);
// Route pour récupérer tous les utilisateurs
router.get("/", userController_1.getUsers);
// Route pour récupérer un utilisateur par son ID
router.get("/:id", userController_1.getUser);
// Route pour mettre à jour un utilisateur par son ID
router.put("/:id", user_validator_1.updateUserValidator, user_validator_1.checkValidationResult, userController_1.updateUser);
// Route pour supprimer un utilisateur par son ID
router.delete("/:id", userController_1.deleteUser);
exports.default = router;

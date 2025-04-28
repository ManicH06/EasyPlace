"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.login = exports.deleteUser = exports.updateUser = exports.getUser = exports.getUsers = exports.createUser = void 0;
const bcrypt_1 = __importDefault(require("bcrypt"));
const jsonwebtoken_1 = __importDefault(require("jsonwebtoken"));
const express_validator_1 = require("express-validator");
// Import du modele User
const User_1 = __importDefault(require("../../models/User"));
// Créer un utilisateur
const createUser = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const { name, email, password } = req.body;
        const roleId = 4;
        // Génération d'un salt et hashage du mot de passe
        const saltRounds = 10;
        const hashedPassword = yield bcrypt_1.default.hash(password, saltRounds);
        // Création de l'utilisateur avec le mot de passe hashé
        const user = yield User_1.default.create({
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
    }
    catch (error) {
        res.status(500).json({
            error: "Erreur lors de la création de l'utilisateur",
            details: error,
        });
    }
});
exports.createUser = createUser;
// Récupérer tous les utilisateurs
const getUsers = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const users = yield User_1.default.findAll({
            include: [{ association: "role" }],
        });
        res.status(200).json(users);
    }
    catch (error) {
        res.status(500).json({
            error: "Erreur lors de la récupération des utilisateurs",
            details: error,
        });
    }
});
exports.getUsers = getUsers;
// Récupérer un utilisateur via son id
const getUser = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const { id } = req.params;
        const user = yield User_1.default.findByPk(id, {
            include: [{ association: "role" }],
        });
        if (user) {
            res.status(200).json(user);
        }
        else {
            res.status(404).json({ error: "Utilisateur non trouvé" });
        }
    }
    catch (error) {
        res.status(500).json({
            error: "Erreur lors de la récupération de l'utilisateur",
            details: error,
        });
    }
});
exports.getUser = getUser;
// Mettre à jour un utilisateur
const updateUser = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const { id } = req.params;
        const { name, email, password, roleId } = req.body;
        const user = yield User_1.default.findByPk(id);
        if (!user) {
            res.status(404).json({ error: "Utilisateur non trouvé" });
            return; // Terminer sans renvoyer une valeur
        }
        yield user.update({ name, email, password, roleId });
        res.status(200).json(user);
        return;
    }
    catch (error) {
        res.status(500).json({
            error: "Erreur lors de la mise à jour de l'utilisateur",
            details: error,
        });
        return;
    }
});
exports.updateUser = updateUser;
// Supprimer un utilisateur
const deleteUser = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const { id } = req.params;
        const user = yield User_1.default.findByPk(id);
        if (!user) {
            res.status(404).json({ error: "Utilisateur non trouvé" });
            return;
        }
        yield user.destroy();
        res.status(200).json({ message: "Utilisateur supprimé avec succès" });
        return;
    }
    catch (error) {
        res.status(500).json({
            error: "Erreur lors de la suppression de l'utilisateur",
            details: error,
        });
        return;
    }
});
exports.deleteUser = deleteUser;
const login = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    // Vérification des erreurs de validation
    const errors = (0, express_validator_1.validationResult)(req);
    if (!errors.isEmpty()) {
        res.status(400).json({ errors: errors.array() });
        return;
    }
    try {
        const { email, password } = req.body;
        // Recherche de l'utilisateur par email
        const user = yield User_1.default.findOne({ where: { email } });
        if (!user) {
            res.status(404).json({ error: "Utilisateur non trouvé" });
            return;
        }
        // Vérification du mot de passe (en supposant que user.password est haché)
        const isValidPassword = yield bcrypt_1.default.compare(password, user.password);
        if (!isValidPassword) {
            res.status(401).json({ error: "Mot de passe incorrect" });
            return;
        }
        // Création du token JWT
        const token = jsonwebtoken_1.default.sign({ id: user.id, email: user.email, role: user.roleId }, process.env.JWT_SECRET, { expiresIn: "1h" });
        res.cookie("authToken", token, {
            httpOnly: true,
            secure: process.env.NODE_ENV === "production",
            sameSite: "strict",
            maxAge: 3600000,
        });
        res.status(200).json({
            message: "Utilisateur connecté avec succès",
        });
    }
    catch (error) {
        res.status(500).json({
            error: "Erreur lors de la connexion",
            details: error,
        });
    }
});
exports.login = login;

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
Object.defineProperty(exports, "__esModule", { value: true });
exports.createShop = exports.getShop = exports.getRandomShops = exports.getAllShops = void 0;
const Shop_1 = require("../../models/Shop");
const sequelize_1 = require("sequelize");
// Récupérer tous les shops
const getAllShops = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const shops = yield Shop_1.Shop.findAll({
            include: [
                { association: "user" }, // Inclut l'utilisateur associé
                { association: "products" }, // Optionnel : inclut les produits associés
            ],
        });
        res.status(200).json(shops);
        return;
    }
    catch (error) {
        res.status(500).json({
            error: "Erreur lors de la récupération des shops",
            details: error,
        });
        return;
    }
});
exports.getAllShops = getAllShops;
const getRandomShops = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const shops = yield Shop_1.Shop.findAll({
            include: [
                { association: "user" }, // Inclut l'utilisateur associé
                { association: "products" }, // Optionnel : inclut les produits associés
            ],
            order: sequelize_1.Sequelize.literal("RANDOM()"),
            limit: 6,
        });
        res.status(200).json(shops);
        return;
    }
    catch (error) {
        res.status(500).json({
            error: "Erreur lors de la récupération des shops",
            details: error,
        });
        return;
    }
});
exports.getRandomShops = getRandomShops;
// Récupérer un shop par son id
const getShop = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const { id } = req.params;
        const shop = yield Shop_1.Shop.findByPk(id, {
            include: [
                { association: "user" }, // Inclut l'utilisateur associé
                { association: "products" }, // Optionnel : inclut les produits associés
            ],
        });
        if (shop) {
            res.status(200).json(shop);
        }
        else {
            res.status(404).json({ error: "Shop non trouvé" });
            return;
        }
    }
    catch (error) {
        console.log("error", error);
        res.status(500).json({
            error: "Erreur lors de la récupération du shop",
            details: error,
        });
        return;
    }
});
exports.getShop = getShop;
const createShop = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const { siret, companyName, phone, email, street, postalCode, city, departement, image_url, describe, category, type, } = req.body;
        if (!req.user) {
            res.status(400).json({ error: "Utilisateur non authentifié" });
            return;
        }
        const userId = req.user.id;
        const shop = yield Shop_1.Shop.create({
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
    }
    catch (error) {
        res.status(500).json({
            error: "Erreur lors de la création de la boutique",
            details: error,
        });
    }
});
exports.createShop = createShop;

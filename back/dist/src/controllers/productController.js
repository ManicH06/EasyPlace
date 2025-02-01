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
exports.getProduct = exports.getAllProducts = void 0;
const Product_1 = __importDefault(require("../../models/Product"));
// Récupérer tous les produits
const getAllProducts = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const products = yield Product_1.default.findAll({
            include: [
                /*         { association: "user" }, // Inclut l'utilisateur associé
                 */ { association: "shop" }, // Inclut le shop associé
            ],
        });
        res.status(200).json(products);
    }
    catch (error) {
        console.error("Error in getAllProducts:", error);
        res.status(500).json({
            error: "Erreur lors de la récupération des produits",
            deatils: error,
        });
        return;
    }
});
exports.getAllProducts = getAllProducts;
// Récupérer un produit par son id
const getProduct = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const { id } = req.params;
        const product = yield Product_1.default.findByPk(id, {
            include: [{ association: "shop" }], // Inclut le shop associé
        });
        if (product) {
            res.status(200).json(product);
        }
        else {
            res.status(404).json({ error: "Produit non trouvé" });
            return;
        }
    }
    catch (error) {
        console.error("Error in getProduct:", error);
        res.status(500).json({
            error: "Erreur lors de la récupération du produit",
            details: error,
        });
        return;
    }
});
exports.getProduct = getProduct;

"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const shopUploader_1 = __importDefault(require("../../middlewares/shopUploader"));
const MWErrorDecorator_1 = __importDefault(require("../../decorators/MWErrorDecorator"));
const shopController_1 = require("../../controllers/shopController");
const authToken_1 = require("../../middlewares/authToken");
const router = (0, express_1.Router)();
// Route pour uploader des fichiers
router.post("/upload", (0, MWErrorDecorator_1.default)(shopUploader_1.default), (req, res) => {
    res.send(`Fichiers envoyés avec succès !, le texte est : ${req.body.text}`);
});
router.post("/register", authToken_1.authToken, (0, MWErrorDecorator_1.default)(shopController_1.createShop));
// Route pour récupérer tous les shops
router.get("/", (0, MWErrorDecorator_1.default)(shopController_1.getAllShops));
router.get("/promoteshops", (0, MWErrorDecorator_1.default)(shopController_1.getRandomShops));
router.get("/:id", shopController_1.getShop);
exports.default = router;

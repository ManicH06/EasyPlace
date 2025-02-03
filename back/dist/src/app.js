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
const express_1 = require("express");
const index_1 = __importDefault(require("./routes/shop/index"));
const index_2 = __importDefault(require("./routes/user/index"));
const index_3 = __importDefault(require("./routes/product/index"));
const errorHandler_1 = __importDefault(require("./middlewares/errorHandler"));
const HTTPError_1 = __importDefault(require("./errors/HTTPError"));
const db_1 = __importDefault(require("./db/db"));
const db_2 = require("./db/db");
const router = (0, express_1.Router)();
// Route GET sur "/"
router.get("/", (req, res) => {
    res.send("Hello, bienvenue sur l’API !");
});
// Ajouter les routes 
router.use("/shops", index_1.default);
router.use("/users", index_2.default);
router.use("/products", index_3.default);
router.get("/auth/status", (req, res) => {
    req.cookies.authToken
        ? res.json({ isAuthenticated: true })
        : res.json({ isAuthenticated: false });
});
// Gestion des routes non trouvées
router.use((_, __, next) => {
    next(new HTTPError_1.default(404, "Ressource introuvable"));
});
// Middleware de gestion des erreurs
router.use(errorHandler_1.default);
// Connecter à la base de données et synchroniser
(() => __awaiter(void 0, void 0, void 0, function* () {
    try {
        yield (0, db_2.connectToDB)();
        yield db_1.default.sync({ alter: true });
        /*     console.log("Les modèles ont été synchronisés avec la base de données.");
         */ }
    catch (error) {
        /*     console.error("Erreur lors de la connexion à la base de données :", error);
         */ process.exit(1);
    }
}))();
exports.default = router;

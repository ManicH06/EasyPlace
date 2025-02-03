"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const app_1 = __importDefault(require("./app"));
const cors_1 = __importDefault(require("cors")); // Import du module cors pour
const cookie_parser_1 = __importDefault(require("cookie-parser")); // pour lire les cookies dans les requêtes
const app = (0, express_1.default)();
const PORT = process.env.BACK_PORT || 5000;
app.use((0, cookie_parser_1.default)());
// Ajouter les middlewares globaux
app.use((0, cors_1.default)({
    origin: process.env.FRONT_URL,
    credentials: true,
}));
app.use(express_1.default.json());
app.use(app_1.default);
// Démarrer le serveur
if (process.env.NODE_ENV !== "test") {
    app.listen(PORT);
}
exports.default = app;

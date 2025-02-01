"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
// src/models/index.ts
const fs_1 = __importDefault(require("fs"));
const path_1 = __importDefault(require("path"));
const db_1 = __importDefault(require("../src/db/db")); // Vérifiez bien le chemin
const sequelize_1 = require("sequelize");
const models = {};
const modelsPath = path_1.default.resolve(__dirname, "./");
fs_1.default.readdirSync(modelsPath)
    .filter((file) => {
    return (file.indexOf(".") !== 0 &&
        (file.slice(-3) === ".js" || file.slice(-3) === ".ts") &&
        file.indexOf(".test.js") === -1 &&
        file !== "index.ts");
})
    .forEach((file) => {
    const modelModule = require(path_1.default.join(modelsPath, file));
    // Récupérer l'export par défaut si présent
    const exported = modelModule.default || modelModule;
    let model;
    // Si l'export est une fonction d'initialisation (non déjà initialisée)
    if (typeof exported === "function" &&
        !(exported.prototype instanceof sequelize_1.Model)) {
        try {
            model = exported(db_1.default, sequelize_1.DataTypes);
        }
        catch (err) {
            console.error(`Erreur lors de l'initialisation du modèle ${file}:`, err);
        }
    }
    // Sinon, si l'export est une classe déjà initialisée (vérifiée par instanceof Model)
    else if (exported &&
        typeof exported === "function" &&
        exported.prototype instanceof sequelize_1.Model) {
        model = exported;
    }
    else {
        console.error(`Le fichier ${file} n'exporte pas un modèle Sequelize valide.`);
        return;
    }
    if (model && model.name) {
        models[model.name] = model;
    }
});
// Configurer les associations des modèles, si nécessaire
Object.keys(models).forEach((modelName) => {
    if (models[modelName].associate) {
        models[modelName].associate(models);
    }
});
exports.default = models;

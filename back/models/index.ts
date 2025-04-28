// src/models/index.ts
import fs from "fs";
import path from "path";
import sequelize from "../src/db/db"; // Vérifiez bien le chemin
import { DataTypes, Model } from "sequelize";
import associate from "./associations";

const models: Record<string, any> = {};
const modelsPath = path.resolve(__dirname, "./");

fs.readdirSync(modelsPath)
  .filter((file) => {
    return (
      file.indexOf(".") !== 0 &&
      (file.slice(-3) === ".js" || file.slice(-3) === ".ts") &&
      file.indexOf(".test.js") === -1 &&
      file !== "index.ts" &&
      file !== "associations.ts" // Exclure le fichier d'associations
    );
  })
  .forEach((file) => {
    const modelModule = require(path.join(modelsPath, file));
    // Récupérer l'export par défaut si présent
    const exported = modelModule.default || modelModule;

    let model;
    // Si l'export est une fonction d'initialisation (non déjà initialisée)
    if (
      typeof exported === "function" &&
      !(exported.prototype instanceof Model)
    ) {
      try {
        model = exported(sequelize, DataTypes);
      } catch (err) {
        console.error(
          `Erreur lors de l'initialisation du modèle ${file}:`,
          err
        );
      }
    }
    // Sinon, si l'export est une classe déjà initialisée (vérifiée par instanceof Model)
    else if (
      exported &&
      typeof exported === "function" &&
      exported.prototype instanceof Model
    ) {
      model = exported;
    } else {
      console.error(
        `Le fichier ${file} n'exporte pas un modèle Sequelize valide.`
      );
      return;
    }
    if (model && model.name) {
      models[model.name] = model;
    }
  });

associate();

// Configurer les associations des modèles, si nécessaire
Object.keys(models).forEach((modelName) => {
  if (models[modelName].associate) {
    models[modelName].associate(models);
  }
});

export default models;

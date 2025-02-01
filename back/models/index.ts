import fs from "fs";
import path from "path";
import { Sequelize, DataTypes } from "sequelize";
import { Dialect } from "sequelize/types";
import configJson from "../config/config.json";

// Détecter l'environnement
const env = process.env.NODE_ENV || "development";
const config = (configJson as Record<string, any>)[env];
const basename = path.basename(__filename);

// Base de données et configuration Sequelize
const db: Record<string, any> = {};
let sequelize: Sequelize;

if (config.use_env_variable) {
  // Utiliser une URL de connexion depuis les variables d'environnement
  sequelize = new Sequelize(process.env[config.use_env_variable] as string, config);
} else {
  // Configuration manuelle
  sequelize = new Sequelize(
    config.database as string,
    config.username as string,
    config.password as string,
    {
      host: config.host as string,
      port: config.port as number,
      dialect: config.dialect as Dialect,
      logging: config.logging || false, // Désactiver les logs SQL par défaut
    }
  );
}

// Lecture des fichiers de modèles dans le dossier actuel
fs.readdirSync(__dirname)
  .filter((file) => {
    return (
      file.indexOf(".") !== 0 && // Ignorer les fichiers cachés
      file !== basename && // Ignorer le fichier index.ts
      file.slice(-3) === ".js" && // Prendre uniquement les fichiers .js ou .ts
      file.indexOf(".test.js") === -1 // Ignorer les fichiers de test
    );
  })
  .forEach((file) => {
    const model = require(path.join(__dirname, file))(sequelize, DataTypes);
    db[model.name] = model;
  });

// Configurer les associations des modèles
Object.keys(db).forEach((modelName) => {
  if (db[modelName].associate) {
    db[modelName].associate(db);
  }
});

// Exporter Sequelize et les modèles
db.sequelize = sequelize;
db.Sequelize = Sequelize;

export default db;
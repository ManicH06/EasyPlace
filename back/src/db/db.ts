import { Sequelize } from "sequelize";
import dotenv from "dotenv";

dotenv.config(); // Charger les variables d'environnement

// Initialiser Sequelize avec les variables d'environnement
const sequelize = new Sequelize(
  process.env.POSTGRES_DB as string,
  process.env.POSTGRES_USER as string,
  process.env.POSTGRES_PASSWORD as string,
  {
    host: process.env.POSTGRES_HOST || "localhost",
    port: Number(process.env.POSTGRES_PORT || 5432),
    dialect: "postgres",
    logging: false, // Désactiver les logs SQL
  }
);

// Fonction pour tester la connexion
export const connectToDB = async (): Promise<void> => {
  try {
    await sequelize.authenticate();
    console.log("Connexion à la base de données réussie.");
  } catch (error) {
    console.error("Erreur lors de la connexion à la base de données :", error);
    throw error; // Propager l'erreur pour la gérer dans app.ts
  }
};

export default sequelize;

// src/db/database.ts
import dotenv from "dotenv";
import path from "path";
import { Sequelize, Dialect } from "sequelize";
import configModule from "../../config/config";

dotenv.config({ path: path.resolve(process.cwd(), "../.env") });
console.log("test:", process.env.DATABASE_URL);
console.log("process.cwd():", process.cwd());
type Env = "development" | "production";
const env = (process.env.NODE_ENV || "production") as Env;

const config = {
  ...configModule[env],
  dialect: configModule[env].dialect as Dialect,
  password: configModule[env].password || undefined,
  logging: configModule[env].logging || false,
};

const connectionUrl = process.env[config.use_env_variable as string];
if (!connectionUrl) {
  throw new Error(
    `Environment variable ${config.use_env_variable} is not set.`
  );
}
console.log("Using connection URL:", connectionUrl);

const sequelize = new Sequelize(connectionUrl, config);

// Load all models from the models folder
import fs from "fs";
const modelsPath = path.resolve(__dirname, "../../models/");

export const connectToDB = async (): Promise<void> => {
  try {
    await sequelize.authenticate();
    console.log("Database connection successful.");
  } catch (error) {
    console.error("Error connecting to the database:", error);
    throw error;
  }
};
console.log("Sequelize instance created:", !!sequelize);
export default sequelize;

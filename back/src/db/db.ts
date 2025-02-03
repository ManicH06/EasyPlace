import dotenv from "dotenv";
import path from "path";
import { Sequelize, Dialect } from "sequelize";
import configModule from "../../config/config";

dotenv.config({ path: path.resolve(process.cwd(), "../.env") });

type Env = "development" | "production" | "test";
const env: Env = (process.env.NODE_ENV as Env) || "production";

if (!configModule[env]) {
  throw new Error(
    `Database configuration for environment "${env}" is missing.`
  );
}

const config = {
  ...configModule[env],
  dialect: configModule[env].dialect as Dialect,
  password: configModule[env].password || undefined,
  logging: configModule[env].logging || false,
};

let connectionUrl: string | undefined =
  process.env[config.use_env_variable as string];

if (!connectionUrl) {
  if (env === "test") {
    connectionUrl = "postgres://test_user:test_pass@localhost:5432/test_db"; // Use test DB
  } else {
    throw new Error(
      `Environment variable ${config.use_env_variable} is not set.`
    );
  }
}

const sequelize =
  env === "test"
    ? new Sequelize("sqlite::memory:", { dialect: "sqlite", logging: false })
    : new Sequelize(connectionUrl, config);

export const connectToDB = async (): Promise<void> => {
  try {
    if (env !== "test") {
      // Don't connect in test mode
      await sequelize.authenticate();
      /*       console.log("Database connection successful.");
       */
    }
  } catch (error) {
    /*     console.error("Error connecting to the database:", error);
     */ throw error;
  }
};

/* console.log("Sequelize instance created:", !!sequelize);
 */ export default sequelize;

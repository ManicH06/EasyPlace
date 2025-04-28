import dotenv from "dotenv";
import path = require("path");
dotenv.config({ path: path.resolve(process.cwd(), ".env") });

interface DialectOptions {
  ssl?: {
    require: boolean;
    rejectUnauthorized: boolean;
  };
  [key: string]: any;
}

interface SequelizeConfig {
  use_env_variable?: string;
  username?: string;
  password?: string | null;
  database?: string;
  host?: string;
  port?: number;
  dialect: string;
  dialectOptions?: DialectOptions;
  [key: string]: any;
}

interface Config {
  development: SequelizeConfig;
  production: SequelizeConfig;
  test: SequelizeConfig;
}

const config: Config = {
  development: {
    use_env_variable: "DATABASE_URL",
    dialect: "postgres",
  },
  production: {
    use_env_variable: "NEON_URL",
    dialect: "postgres",
    dialectOptions: {
      ssl: {
        require: true,
        rejectUnauthorized: false,
      },
    },
  },
  test: {
    use_env_variable: "DATABASE_URL",
    dialect: "postgres",
  },
};

export default config;

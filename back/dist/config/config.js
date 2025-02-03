"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const dotenv_1 = __importDefault(require("dotenv"));
const path = require("path");
dotenv_1.default.config({ path: path.resolve(process.cwd(), ".env") });
const config = {
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
exports.default = config;

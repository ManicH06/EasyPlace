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
exports.connectToDB = void 0;
const dotenv_1 = __importDefault(require("dotenv"));
const path_1 = __importDefault(require("path"));
const sequelize_1 = require("sequelize");
const config_1 = __importDefault(require("../../config/config"));
dotenv_1.default.config({ path: path_1.default.resolve(process.cwd(), "../.env") });
console.log("procesdwqdwqdwqs.env.NODE_ENV:", process.env.NODE_ENV);
console.log("process.cwd():", process.cwd());
const env = process.env.NODE_ENV || "production";
if (!config_1.default[env]) {
    throw new Error(`Database configuration for environment "${env}" is missing.`);
}
const config = Object.assign(Object.assign({}, config_1.default[env]), { dialect: config_1.default[env].dialect, password: config_1.default[env].password || undefined, logging: config_1.default[env].logging || false });
let connectionUrl = process.env[config.use_env_variable];
if (!connectionUrl) {
    if (env === "test") {
        connectionUrl = "postgres://test_user:test_pass@localhost:5432/test_db"; // Use test DB
    }
    else {
        throw new Error(`Environment variable ${config.use_env_variable} is not set.`);
    }
}
const sequelize = env === "test"
    ? new sequelize_1.Sequelize("sqlite::memory:", { dialect: "sqlite", logging: false })
    : new sequelize_1.Sequelize(connectionUrl, config);
const connectToDB = () => __awaiter(void 0, void 0, void 0, function* () {
    try {
        if (env !== "test") {
            // Don't connect in test mode
            yield sequelize.authenticate();
            /*       console.log("Database connection successful.");
             */
        }
    }
    catch (error) {
        /*     console.error("Error connecting to the database:", error);
         */ throw error;
    }
});
exports.connectToDB = connectToDB;
/* console.log("Sequelize instance created:", !!sequelize);
 */ exports.default = sequelize;

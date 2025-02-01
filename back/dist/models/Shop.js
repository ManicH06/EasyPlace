"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const sequelize_1 = require("sequelize");
const db_1 = __importDefault(require("../src/db/db"));
const User_1 = __importDefault(require("./User"));
const Product_1 = __importDefault(require("./Product"));
class Shop extends sequelize_1.Model {
}
Shop.init({
    id: {
        type: sequelize_1.DataTypes.INTEGER,
        autoIncrement: true,
        primaryKey: true,
    },
    siret: {
        type: sequelize_1.DataTypes.STRING,
        unique: true,
    },
    companyName: {
        type: sequelize_1.DataTypes.STRING,
        allowNull: false,
    },
    phone: {
        type: sequelize_1.DataTypes.STRING,
        allowNull: false,
    },
    email: {
        type: sequelize_1.DataTypes.STRING,
        unique: true,
    },
    street: {
        type: sequelize_1.DataTypes.STRING,
        allowNull: false,
    },
    postalCode: {
        type: sequelize_1.DataTypes.STRING,
        allowNull: false,
    },
    city: {
        type: sequelize_1.DataTypes.STRING,
        allowNull: false,
    },
    departement: {
        type: sequelize_1.DataTypes.STRING,
        allowNull: false,
    },
    image_url: {
        type: sequelize_1.DataTypes.STRING,
        allowNull: true,
    },
    describe: {
        type: sequelize_1.DataTypes.TEXT,
    },
    category: {
        type: sequelize_1.DataTypes.STRING,
    },
    type: {
        type: sequelize_1.DataTypes.STRING,
    },
    userId: {
        type: sequelize_1.DataTypes.INTEGER,
        allowNull: false,
    },
}, {
    sequelize: db_1.default,
    tableName: "shops",
});
// Relations
Shop.belongsTo(User_1.default, { foreignKey: "userId", as: "user" });
User_1.default.hasMany(Shop, { foreignKey: "userId", as: "shops" });
Shop.hasMany(Product_1.default, { foreignKey: "shopId", as: "products" });
Product_1.default.belongsTo(Shop, { foreignKey: "shopId", as: "shop" });
exports.default = Shop;

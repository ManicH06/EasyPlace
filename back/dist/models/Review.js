"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const sequelize_1 = require("sequelize");
const db_1 = __importDefault(require("../src/db/db"));
const User_1 = __importDefault(require("./User"));
const Product_1 = __importDefault(require("./Product"));
class Review extends sequelize_1.Model {
}
Review.init({
    id: {
        type: sequelize_1.DataTypes.INTEGER,
        autoIncrement: true,
        primaryKey: true,
    },
    text: {
        type: sequelize_1.DataTypes.TEXT,
        allowNull: false,
    },
    stars: {
        type: sequelize_1.DataTypes.INTEGER,
        allowNull: false,
    },
    review_date: {
        type: sequelize_1.DataTypes.DATE,
        defaultValue: sequelize_1.DataTypes.NOW,
    },
    modification_reason: {
        type: sequelize_1.DataTypes.TEXT,
        allowNull: false,
    },
    userId: {
        type: sequelize_1.DataTypes.INTEGER,
        allowNull: false,
    },
    productId: {
        type: sequelize_1.DataTypes.INTEGER,
        allowNull: false,
    },
}, {
    sequelize: db_1.default,
    tableName: "reviews",
});
// Relations
Review.belongsTo(User_1.default, { foreignKey: "userId", as: "user" });
User_1.default.hasMany(Review, { foreignKey: "userId", as: "reviews" });
Review.belongsTo(Product_1.default, { foreignKey: "productId", as: "product" });
Product_1.default.hasMany(Review, { foreignKey: "productId", as: "reviews" });
exports.default = Review;

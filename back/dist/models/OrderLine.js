"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const sequelize_1 = require("sequelize");
const db_1 = __importDefault(require("../src/db/db"));
const Order_1 = __importDefault(require("./Order"));
const Product_1 = __importDefault(require("./Product"));
class OrderLine extends sequelize_1.Model {
}
OrderLine.init({
    id: {
        type: sequelize_1.DataTypes.INTEGER,
        autoIncrement: true,
        primaryKey: true,
    },
    orderId: {
        type: sequelize_1.DataTypes.INTEGER,
        allowNull: false,
    },
    productId: {
        type: sequelize_1.DataTypes.INTEGER,
        allowNull: true,
    },
}, {
    sequelize: db_1.default,
    tableName: "order_lines",
});
// Relations
OrderLine.belongsTo(Order_1.default, { foreignKey: "orderId", as: "order" });
Order_1.default.hasMany(OrderLine, { foreignKey: "orderId", as: "orderLines" });
OrderLine.belongsTo(Product_1.default, { foreignKey: "productId", as: "product" });
Product_1.default.hasMany(OrderLine, { foreignKey: "productId", as: "orderLines" });
exports.default = OrderLine;

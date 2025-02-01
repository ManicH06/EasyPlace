import { DataTypes, Model, Optional } from "sequelize";
import sequelize from "../src/db/db";
import Order from "./Order";
import Product from "./Product";

interface OrderLineAttributes {
  id: number;
  orderId: number;
  productId?: number;
}

interface OrderLineCreationAttributes extends Optional<OrderLineAttributes, "id" | "productId"> {}

class OrderLine extends Model<OrderLineAttributes, OrderLineCreationAttributes> implements OrderLineAttributes {
  public id!: number;
  public orderId!: number;
  public productId?: number;
}

OrderLine.init(
  {
    id: {
      type: DataTypes.INTEGER,
      autoIncrement: true,
      primaryKey: true,
    },
    orderId: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
    productId: {
      type: DataTypes.INTEGER,
      allowNull: true,
    },
  },
  {
    sequelize,
    tableName: "order_lines",
  }
);

// Relations
OrderLine.belongsTo(Order, { foreignKey: "orderId", as: "order" });
Order.hasMany(OrderLine, { foreignKey: "orderId", as: "orderLines" });

OrderLine.belongsTo(Product, { foreignKey: "productId", as: "product" });
Product.hasMany(OrderLine, { foreignKey: "productId", as: "orderLines" });

export default OrderLine;
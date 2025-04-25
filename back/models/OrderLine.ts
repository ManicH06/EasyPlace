import { DataTypes, Model } from "sequelize";
import sequelize from "../src/db/db";
import Order from "./Order";
import Product from "./Product";

interface OrderLineAttributes {
  orderId: number;
  productId: number;
  quantity: number;
}

class OrderLine
  extends Model<OrderLineAttributes>
  implements OrderLineAttributes
{
  public orderId!: number;
  public productId!: number;
  public quantity!: number;
}

OrderLine.init(
  {
    orderId: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true, 
    },
    productId: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true, 
    },
    quantity: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
  },
  {
    sequelize,
    tableName: "order_lines",
    timestamps: false,
  }
);

OrderLine.belongsTo(Order, { foreignKey: "orderId", as: "order" });
Order.hasMany(OrderLine, { foreignKey: "orderId", as: "orderLines" });

OrderLine.belongsTo(Product, { foreignKey: "productId", as: "product" });
Product.hasMany(OrderLine, { foreignKey: "productId", as: "orderLines" });

export default OrderLine;

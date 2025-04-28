import { DataTypes, Model } from "sequelize";
import sequelize from "../src/db/db";


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

export default OrderLine;

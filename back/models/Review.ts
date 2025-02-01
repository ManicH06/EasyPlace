import { DataTypes, Model, Optional } from "sequelize";
import sequelize from "../src/db/db";
import User from "./User";
import Product from "./Product";

interface ReviewAttributes {
  id: number;
  text: string;
  stars: number;
  review_date: Date;
  modification_reason: string;
  userId: number;
  productId: number;
}

interface ReviewCreationAttributes extends Optional<ReviewAttributes, "id"> {}

class Review extends Model<ReviewAttributes, ReviewCreationAttributes> implements ReviewAttributes {
  public id!: number;
  public text!: string;
  public stars!: number;
  public review_date!: Date;
  public modification_reason!: string;
  public userId!: number;
  public productId!: number;
}

Review.init(
  {
    id: {
      type: DataTypes.INTEGER,
      autoIncrement: true,
      primaryKey: true,
    },
    text: {
      type: DataTypes.TEXT,
      allowNull: false,
    },
    stars: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
    review_date: {
      type: DataTypes.DATE,
      defaultValue: DataTypes.NOW,
    },
    modification_reason: {
      type: DataTypes.TEXT,
      allowNull: false,
    },
    userId: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
    productId: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
  },
  {
    sequelize,
    tableName: "reviews",
  }
);

// Relations
Review.belongsTo(User, { foreignKey: "userId", as: "user" });
User.hasMany(Review, { foreignKey: "userId", as: "reviews" });

Review.belongsTo(Product, { foreignKey: "productId", as: "product" });
Product.hasMany(Review, { foreignKey: "productId", as: "reviews" });

export default Review;
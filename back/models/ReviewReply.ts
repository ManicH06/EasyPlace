import { DataTypes, Model, Optional } from "sequelize";
import sequelize from "../src/db/db";

interface ReviewReplyAttributes {
  id: number;
  content: string;
  reviewId: number;
  userId: number;
}

interface ReviewReplyCreationAttributes extends Optional<ReviewReplyAttributes, "id"> {}

class ReviewReply extends Model<ReviewReplyAttributes, ReviewReplyCreationAttributes> implements ReviewReplyAttributes {
  public id!: number;
  public content!: string;
  public reviewId!: number;
  public userId!: number;
  public createdAt!: Date;
  public updatedAt!: Date;
}

ReviewReply.init(
  {
    id: {
      type: DataTypes.INTEGER,
      autoIncrement: true,
      primaryKey: true,
    },
    content: {
      type: DataTypes.TEXT,
      allowNull: false,
    },
    reviewId: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
    userId: {
      type: DataTypes.INTEGER,
      allowNull: false,
    }
  },
  {
    sequelize,
    tableName: "review_replies",
    timestamps: true,
    indexes: [{
      unique: true,
      fields: ["reviewId"]
    }]
  }
)
import { DataTypes, Model, Optional } from "sequelize";
import sequelize from "../src/db/db";

interface UserAttributes {
  id: number;
  name: string;
  email: string;
  password: string;
  createdAt: Date;
  roleId?: number;
}

interface UserCreationAttributes
  extends Optional<UserAttributes, "id" | "roleId" | "createdAt"> {}

class User
  extends Model<UserAttributes, UserCreationAttributes>
  implements UserAttributes
{
  public id!: number;
  public name!: string;
  public email!: string;
  public password!: string;
  public createdAt!: Date;
  public roleId?: number;
}

User.init(
  {
    id: {
      type: DataTypes.INTEGER,
      autoIncrement: true,
      primaryKey: true,
    },
    name: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    email: {
      type: DataTypes.STRING,
      allowNull: false,
      unique: true,
    },
    password: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    createdAt: {
      type: DataTypes.DATE,
      defaultValue: DataTypes.NOW,
    },
    roleId: {
      type: DataTypes.INTEGER,
      allowNull: true,
    },
  },
  {
    sequelize,
    tableName: "users",
  }
);
export default User;

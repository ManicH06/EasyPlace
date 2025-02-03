import { DataTypes, Model, Optional } from "sequelize";
import sequelize from "../src/db/db"
import User from "./User"; // ✅ Import User properly
import Product from "./Product"; // ✅ Import Product properly

interface ShopAttributes {
  id: number;
  siret: number;
  companyName: string;
  phone: string;
  email: string;
  street: string;
  postalCode: string;
  city: string;
  departement: string;
  image_url: string;
  describe?: string;
  category?: string;
  type?: string;
  userId: number;
}

interface ShopCreationAttributes
  extends Optional<ShopAttributes, "id" | "describe" | "category" | "type"> {}

class Shop extends Model<ShopAttributes, ShopCreationAttributes> implements ShopAttributes {
  public id!: number;
  public siret!: number;
  public companyName!: string;
  public phone!: string;
  public email!: string;
  public street!: string;
  public postalCode!: string;
  public city!: string;
  public departement!: string;
  public image_url!: string;
  public describe?: string;
  public category?: string;
  public type?: string;
  public userId!: number;
}

Shop.init(
  {
    id: { type: DataTypes.INTEGER, autoIncrement: true, primaryKey: true },
    siret: { type: DataTypes.STRING, unique: true },
    companyName: { type: DataTypes.STRING, allowNull: false },
    phone: { type: DataTypes.STRING, allowNull: false },
    email: { type: DataTypes.STRING, unique: true },
    street: { type: DataTypes.STRING, allowNull: false },
    postalCode: { type: DataTypes.STRING, allowNull: false },
    city: { type: DataTypes.STRING, allowNull: false },
    departement: { type: DataTypes.STRING, allowNull: false },
    image_url: { type: DataTypes.STRING, allowNull: true },
    describe: { type: DataTypes.TEXT },
    category: { type: DataTypes.STRING },
    type: { type: DataTypes.STRING },
    userId: { type: DataTypes.INTEGER, allowNull: false },
  },
  {
    sequelize,
    tableName: "shops",
  }
);

// ✅ Make sure associations are set **after** all models are imported
const setupAssociations = () => {
  Shop.belongsTo(User, { foreignKey: "userId", as: "user" });
  User.hasMany(Shop, { foreignKey: "userId", as: "shops" });

  Shop.hasMany(Product, { foreignKey: "shopId", as: "products" });
  Product.belongsTo(Shop, { foreignKey: "shopId", as: "shop" });
};

// ✅ Export both Shop model and the function to initialize associations
export { Shop, setupAssociations };

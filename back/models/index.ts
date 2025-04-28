import sequelize from "../src/db/db";
import User from "./User";
import Role from "./Role";
import Shop from "./Shop";
import Product from "./Product";
import Order from "./Order";
import OrderLine from "./OrderLine";

const setupAssociations = () => {
  // User-Role
  User.belongsTo(Role, { foreignKey: "roleId", as: "role" });
  Role.hasMany(User, { foreignKey: "roleId", as: "users" });

  // User-Shop
  User.hasMany(Shop, { foreignKey: "userId", as: "shops" });
  Shop.belongsTo(User, { foreignKey: "userId", as: "user" });

  // Shop-Product
  Shop.hasMany(Product, { foreignKey: "shopId", as: "products" });
  Product.belongsTo(Shop, { foreignKey: "shopId", as: "shop" });

  // User-Order
  User.hasMany(Order, { foreignKey: "userId", as: "orders" });
  Order.belongsTo(User, { foreignKey: "userId", as: "user" });

  // Order-OrderLine
  Order.hasMany(OrderLine, { foreignKey: "orderId", as: "orderLines" });
  OrderLine.belongsTo(Order, { foreignKey: "orderId", as: "order" });

  // Product-OrderLine
  Product.hasMany(OrderLine, { foreignKey: "productId", as: "orderLines" });
  OrderLine.belongsTo(Product, { foreignKey: "productId", as: "product" });
};

setupAssociations();

const models = {
  User,
  Role,
  Shop,
  Product,
  Order,
  OrderLine
};

export { sequelize };
export default models;
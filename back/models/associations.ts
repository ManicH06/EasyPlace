import User from "./User.js";
import Shop from "./Shop.js";
import Product from "./Product.js";
import Role from "./Role.js";
import Order from "./Order.js";
import OrderLine from "./OrderLine.js";
import Review from "./Review.js";

export default function associate(models: Record<string, any>) {
  //User
  models.User.belongsTo(models.Role, { foreignKey: "roleId", as: "role" });
  models.Role.hasMany(models.User, { foreignKey: "roleId", as: "users" });

  models.User.hasMany(models.Order, { foreignKey: "userId", as: "orders" });

  //Shop
  models.Shop.belongsTo(models.User, { foreignKey: "userId", as: "user" });
  models.User.hasMany(models.Shop, { foreignKey: "userId", as: "shops" });

  models.Shop.hasMany(models.Product, { foreignKey: "shopId", as: "products" });
  models.Product.belongsTo(models.Shop, { foreignKey: "shopId", as: "shop" });

  //Order
  models.Order.belongsTo(models.User, { foreignKey: "userId", as: "user" });
  models.User.hasMany(models.Order, { foreignKey: "userId", as: "orders" });

  //OrderLine
  models.OrderLine.belongsTo(models.Order, {
    foreignKey: "orderId",
    as: "order",
  });
  models.Order.hasMany(models.OrderLine, {
    foreignKey: "orderId",
    as: "orderLines",
  });

  models.OrderLine.belongsTo(models.Product, {
    foreignKey: "productId",
    as: "product",
  });
  models.Product.hasMany(models.OrderLine, {
    foreignKey: "productId",
    as: "orderLines",
  });

  //Product
  models.Product.hasMany(models.OrderLine, {
    foreignKey: "productId",
    as: "orderLines",
  });

  //Review
  models.Review.belongsTo(models.User, { foreignKey: "userId", as: "user" });
  models.User.hasMany(models.Review, { foreignKey: "userId", as: "reviews" });

  models.Review.belongsTo(models.Product, {
    foreignKey: "productId",
    as: "product",
  });
  models.Product.hasMany(models.Review, {
    foreignKey: "productId",
    as: "reviews",
  });

  console.log("Associations done!");
}

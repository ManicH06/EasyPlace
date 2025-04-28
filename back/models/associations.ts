import User from "./User.js";
import Shop from "./Shop.js";
import Product from "./Product.js";
import Role from "./Role.js";
import Order from "./Order.js";
import OrderLine from "./OrderLine.js";
import Review from "./Review.js";

//User
User.belongsTo(Role, { foreignKey: "roleId", as: "role" });
Role.hasMany(User, { foreignKey: "roleId", as: "users" });

User.hasMany(Order, { foreignKey: "userId", as: "orders" });

//Shop
Shop.belongsTo(User, { foreignKey: "userId", as: "user" });
User.hasMany(Shop, { foreignKey: "userId", as: "shops" });

Shop.hasMany(Product, { foreignKey: "shopId", as: "products" });
Product.belongsTo(Shop, { foreignKey: "shopId", as: "shop" });

//Order
Order.belongsTo(User, { foreignKey: "userId", as: "user" });
User.hasMany(Order, { foreignKey: "userId", as: "orders" });

//OrderLine
OrderLine.belongsTo(Order, { foreignKey: "orderId", as: "order" });
Order.hasMany(OrderLine, { foreignKey: "orderId", as: "orderLines" });

OrderLine.belongsTo(Product, { foreignKey: "productId", as: "product" });
Product.hasMany(OrderLine, { foreignKey: "productId", as: "orderLines" });

//Product
Product.hasMany(OrderLine, { foreignKey: "productId", as: "orderLines" });

//Review
Review.belongsTo(User, { foreignKey: "userId", as: "user" });
User.hasMany(Review, { foreignKey: "userId", as: "reviews" });

Review.belongsTo(Product, { foreignKey: "productId", as: "product" });
Product.hasMany(Review, { foreignKey: "productId", as: "reviews" });



export default function associate() {
  console.log("Associations done!");
}

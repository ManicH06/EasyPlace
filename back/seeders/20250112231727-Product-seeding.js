"use strict";

module.exports = {
  async up(queryInterface, sequelize) {
    await queryInterface.bulkInsert("products", [
      {
        name: "T-shirt React",
        description: "T-shirt confortable, parfait pour les fans de React.",
        price: 19.99,
        stock: 50,
        category: "Clothing",
        image_url: "/products/react-tshirt.jpeg",
        shopId: 1,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        name: "Node.js Mug",
        description: "Mug imprimé logo Node.js pour le petit déjeuner.",
        price: 9.99,
        stock: 100,
        category: "Accessories",
        image_url: "/products/mug.jpg",
        shopId: 2,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        name: "Docker Cap",
        description: "Casquette Docker de couleur bleue.",
        price: 15.5,
        stock: 25,
        category: "Clothing",
        image_url: "/products/casquette.jpg",
        shopId: 1,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        name: "TypeScript Book",
        description: "Guide complet pour maîtriser TypeScript.",
        price: 29.9,
        stock: 10,
        category: "Books",
        image_url: "/products/book.jpg",
        shopId: 2,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        name: "Vue.js Stickers Pack",
        description: "Pack de stickers Vue.js pour personnaliser ton laptop.",
        price: 4.99,
        stock: 200,
        category: "Accessories",
        image_url: "/products/stickers.jpg",
        shopId: 3,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        name: "Set Vases Potterie Vitnage",
        description: "Set de 4 vases en potterie vintage, fabriqués à la main.",
        price: 4.99,
        stock: 200,
        category: "Accessories",
        image_url: "/products/potterie.jpg",
        shopId: 3,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        name: "Figurine Elephant",
        description: "Figurine éléphant en bois, fabriquée à la main, 10 cm.",
        price: 4.99,
        stock: 200,
        category: "Accessories",
        image_url: "/products/figurines.jpg",
        shopId: 3,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        name: "Pommes Fuji",
        description: "Pommes Fuji de qualité, idéales pour les desserts.",
        price: 4.99,
        stock: 200,
        category: "Accessories",
        image_url: "/products/apple.jpg",
        shopId: 3,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
    ]);
  },

  async down(queryInterface, sequelize) {
    await queryInterface.bulkDelete("products", {}, {});
  },
};

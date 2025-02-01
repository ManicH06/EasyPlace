'use strict';

module.exports = {
  async up(queryInterface, sequelize) {
    await queryInterface.bulkInsert('products', [
      {
        name: 'T-shirt React',
        description: 'T-shirt confortable, parfait pour les fans de React.',
        price: 19.99,
        stock: 50,
        category: 'Clothing',
        added_date: new Date(),
        image_url: '/images/react-tshirt.jpg',
        shopId: 1,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        name: 'Node.js Mug',
        description: 'Mug imprimé logo Node.js pour le petit déjeuner.',
        price: 9.99,
        stock: 100,
        category: 'Accessories',
        added_date: new Date(),
        image_url: '/images/mug.jpg',
        shopId: 2,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        name: 'Docker Cap',
        description: 'Casquette Docker de couleur bleue.',
        price: 15.5,
        stock: 25,
        category: 'Clothing',
        added_date: new Date(),
        image_url: '/images/casquette.jpg',
        shopId: 1,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        name: 'TypeScript Book',
        description: 'Guide complet pour maîtriser TypeScript.',
        price: 29.9,
        stock: 10,
        category: 'Books',
        added_date: new Date(),
        image_url: '/images/book.jpg',
        shopId: 2,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        name: 'Vue.js Stickers Pack',
        description: 'Pack de stickers Vue.js pour personnaliser ton laptop.',
        price: 4.99,
        stock: 200,
        category: 'Accessories',
        added_date: new Date(),
        image_url: '/images/stickers.jpg',
        shopId: 3,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
    ]);
  },

  async down(queryInterface, sequelize) {
    await queryInterface.bulkDelete('products', {}, {});
  },
};

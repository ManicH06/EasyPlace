"use strict";

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.bulkInsert(
      "roles",
      [
        {
          name: "admin",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          name: "vendor",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          name: "customer",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          name: "guest",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          name: "superadmin",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
      ],
      {}
    );
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.bulkDelete("roles", null, {});
  },
};

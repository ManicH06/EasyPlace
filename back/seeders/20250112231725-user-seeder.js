"use strict";
const bcrypt = require("bcrypt");

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    try {
      await queryInterface.bulkDelete("users", null, {
        truncate: true,
        cascade: true,
        restartIdentity: true,
      });

      const roles = await queryInterface.sequelize.query(
        "SELECT id, name FROM roles;"
      );
      const roleRows = roles[0];

      const roleIds = {};
      roleRows.forEach((role) => {
        roleIds[role.name] = role.id;
      });

      const hashPassword = async (password) => {
        const saltRounds = 10;
        return await bcrypt.hash(password, saltRounds);
      };

      return await queryInterface.bulkInsert("users", [
        {
          name: "Admin User",
          email: "chouchoucahuete@example.com",
          password: await hashPassword("admin123"),
          roleId: roleIds["admin"],
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          name: "Vendor One",
          email: "vendor13@example.com",
          password: await hashPassword("vendor123"),
          roleId: roleIds["vendor"],
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          name: "Customer One",
          email: "customer2@example.com",
          password: await hashPassword("customer123"),
          roleId: roleIds["customer"],
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          name: "Vendor Two",
          email: "vendor33@example.com",
          password: await hashPassword("vendor123"),
          roleId: roleIds["vendor"],
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          name: "Customer Two",
          email: "customer34@example.com",
          password: await hashPassword("customer123"),
          roleId: roleIds["customer"],
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          name: "Jean Dupont",
          email: "jean.dupont@example.com",
          password: await hashPassword("password123"),
          roleId: roleIds["vendor"],
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          name: "Marie Curie",
          email: "marie.curie@example.com",
          password: await hashPassword("password123"),
          roleId: roleIds["vendor"],
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          name: "Pierre Durand",
          email: "pierre.durand@example.com",
          password: await hashPassword("password123"),
          roleId: roleIds["vendor"],
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          name: "Sophie Martin",
          email: "sophie.martin@example.com",
          password: await hashPassword("password123"),
          roleId: roleIds["vendor"],
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          name: "Lucie Bernard",
          email: "lucie.bernard@example.com",
          password: await hashPassword("password123"),
          roleId: roleIds["vendor"],
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          name: "Thomas Petit",
          email: "thomas.petit@example.com",
          password: await hashPassword("password123"),
          roleId: roleIds["vendor"],
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          name: "Emma Robert",
          email: "emma.robert@example.com",
          password: await hashPassword("password123"),
          roleId: roleIds["vendor"],
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          name: "Louis Richard",
          email: "louis.richard@example.com",
          password: await hashPassword("password123"),
          roleId: roleIds["vendor"],
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          name: "Julie Lefevre",
          email: "julie.lefevre@example.com",
          password: await hashPassword("password123"),
          roleId: roleIds["vendor"],
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          name: "Paul Moreau",
          email: "paul.moreau@example.com",
          password: await hashPassword("password123"),
          roleId: roleIds["vendor"],
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          name: "Laura Simon",
          email: "laura.simon@example.com",
          password: await hashPassword("password123"),
          roleId: roleIds["vendor"],
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          name: "Antoine Michel",
          email: "antoine.michel@example.com",
          password: await hashPassword("password123"),
          roleId: roleIds["vendor"],
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          name: "Camille Leroy",
          email: "camille.leroy@example.com",
          password: await hashPassword("password123"),
          roleId: roleIds["vendor"],
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          name: "Nicolas Roux",
          email: "nicolas.roux@example.com",
          password: await hashPassword("password123"),
          roleId: roleIds["vendor"],
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          name: "Isabelle David",
          email: "isabelle.david@example.com",
          password: await hashPassword("password123"),
          roleId: roleIds["vendor"],
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          name: "Alexandre Bertrand",
          email: "alexandre.bertrand@example.com",
          password: await hashPassword("password123"),
          roleId: roleIds["vendor"],
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          name: "Charlotte Fournier",
          email: "charlotte.fournier@example.com",
          password: await hashPassword("password123"),
          roleId: roleIds["vendor"],
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          name: "Hugo Girard",
          email: "hugo.girard@example.com",
          password: await hashPassword("password123"),
          roleId: roleIds["vendor"],
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          name: "Alice Bonnet",
          email: "alice.bonnet@example.com",
          password: await hashPassword("password123"),
          roleId: roleIds["vendor"],
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          name: "Victor Dupuis",
          email: "victor.dupuis@example.com",
          password: await hashPassword("password123"),
          roleId: roleIds["vendor"],
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          name: "Elodie Lambert",
          email: "elodie.lambert@example.com",
          password: await hashPassword("password123"),
          roleId: roleIds["vendor"],
          createdAt: new Date(),
          updatedAt: new Date(),
        },
      ]);
    } catch (error) {
      console.error("Error during seeding:", error);
      throw error;
    }
  },

  async down(queryInterface, Sequelize) {
    return queryInterface.bulkDelete("users", null, {});
  },
};

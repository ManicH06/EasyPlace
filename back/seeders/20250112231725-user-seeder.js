'use strict';
const bcrypt = require('bcrypt');

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    try {
      // 1. D'abord, supprimer toutes les données existantes
      await queryInterface.bulkDelete('users', null, {
        truncate: true,
        cascade: true,
        restartIdentity: true
      });

      // 2. Récupérer les IDs des rôles créés
      const roles = await queryInterface.sequelize.query(
        'SELECT id, name FROM roles;'
      );
      const roleRows = roles[0];

      // 3. Créer un mapping des noms de rôles vers leurs IDs
      const roleIds = {};
      roleRows.forEach(role => {
        roleIds[role.name] = role.id;
      });

      // 4. Créer les utilisateurs avec les bons roleIds
      return await queryInterface.bulkInsert('users', [
        {
          name: 'Admin User',
          email: 'chouchoucahuete@example.com',
          password: await bcrypt.hash('admin123', 10),
          roleId: roleIds['admin'],
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          name: 'Vendor One',
          email: 'vendor13@example.com',
          password: await bcrypt.hash('vendor123', 10),
          roleId: roleIds['vendor'],
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          name: 'Customer One',
          email: 'customer2@example.com',
          password: await bcrypt.hash('customer123', 10),
          roleId: roleIds['customer'],
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          name: 'Vendor Two',
          email: 'vendor33@example.com',
          password: await bcrypt.hash('vendor123', 10),
          roleId: roleIds['vendor'],
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          name: 'Customer Two',
          email: 'customer34@example.com',
          password: await bcrypt.hash('customer123', 10),
          roleId: roleIds['customer'],
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          name: 'Jean Dupont',
          email: 'jean.dupont@example.com',
          password: 'password123',
          roleId: 2, // Assuming 2 is the role ID for "vendor"
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          name: 'Marie Curie',
          email: 'marie.curie@example.com',
          password: 'password123',
          roleId: 2,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          name: 'Pierre Durand',
          email: 'pierre.durand@example.com',
          password: 'password123',
          roleId: 2,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          name: 'Sophie Martin',
          email: 'sophie.martin@example.com',
          password: 'password123',
          roleId: 2,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          name: 'Lucie Bernard',
          email: 'lucie.bernard@example.com',
          password: 'password123',
          roleId: 2,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          name: 'Thomas Petit',
          email: 'thomas.petit@example.com',
          password: 'password123',
          roleId: 2,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          name: 'Emma Robert',
          email: 'emma.robert@example.com',
          password: 'password123',
          roleId: 2,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          name: 'Louis Richard',
          email: 'louis.richard@example.com',
          password: 'password123',
          roleId: 2,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          name: 'Julie Lefevre',
          email: 'julie.lefevre@example.com',
          password: 'password123',
          roleId: 2,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          name: 'Paul Moreau',
          email: 'paul.moreau@example.com',
          password: 'password123',
          roleId: 2,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          name: 'Laura Simon',
          email: 'laura.simon@example.com',
          password: 'password123',
          roleId: 2,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          name: 'Antoine Michel',
          email: 'antoine.michel@example.com',
          password: 'password123',
          roleId: 2,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          name: 'Camille Leroy',
          email: 'camille.leroy@example.com',
          password: 'password123',
          roleId: 2,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          name: 'Nicolas Roux',
          email: 'nicolas.roux@example.com',
          password: 'password123',
          roleId: 2,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          name: 'Isabelle David',
          email: 'isabelle.david@example.com',
          password: 'password123',
          roleId: 2,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          name: 'Alexandre Bertrand',
          email: 'alexandre.bertrand@example.com',
          password: 'password123',
          roleId: 2,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          name: 'Charlotte Fournier',
          email: 'charlotte.fournier@example.com',
          password: 'password123',
          roleId: 2,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          name: 'Hugo Girard',
          email: 'hugo.girard@example.com',
          password: 'password123',
          roleId: 2,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          name: 'Alice Bonnet',
          email: 'alice.bonnet@example.com',
          password: 'password123',
          roleId: 2,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          name: 'Victor Dupuis',
          email: 'victor.dupuis@example.com',
          password: 'password123',
          roleId: 2,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          name: 'Elodie Lambert',
          email: 'elodie.lambert@example.com',
          password: 'password123',
          roleId: 2,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
      ]);
    } catch (error) {
      console.error('Error during seeding:', error);
      throw error;
    }
  },

  async down(queryInterface, Sequelize) {
    return queryInterface.bulkDelete('users', null, {});
  }
};
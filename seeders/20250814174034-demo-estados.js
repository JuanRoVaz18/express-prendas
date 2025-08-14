'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.bulkInsert('Estados', [
      { estado: 'Activo', createdAt: new Date(), updatedAt: new Date() },
      { estado: 'Inactivo', createdAt: new Date(), updatedAt: new Date() },
    ]);
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.bulkDelete('Estados', null, {});
  },
};

'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.bulkInsert('Categoria', [
      { nombre: 'Deportivo', createdAt: new Date(), updatedAt: new Date() },
      { nombre: 'Casual', createdAt: new Date(), updatedAt: new Date() },
      { nombre: 'Elegante', createdAt: new Date(), updatedAt: new Date() },
    ]);
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.bulkDelete('Categoria', null, {});
  },
};

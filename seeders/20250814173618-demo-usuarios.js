'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.bulkInsert('Usuarios', [
      {
        nombre: 'Juan Pérez',
        email: 'juan@correo.com',
        edad: 30,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        nombre: 'Ana Gómez',
        email: 'ana@correo.com',
        edad: 25,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
    ]);
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.bulkDelete('Usuarios', null, {});
  },
};

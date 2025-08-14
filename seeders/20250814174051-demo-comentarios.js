'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.bulkInsert('Comentarios', [
      {
        texto: 'Excelente calidad',
        fecha: new Date(),
        usuario: 'Juan Pérez',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        texto: 'Muy cómodo y elegante',
        fecha: new Date(),
        usuario: 'Ana Gómez',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
    ]);
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.bulkDelete('Comentarios', null, {});
  },
};

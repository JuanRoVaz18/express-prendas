'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  up: async (queryInterface, Sequelize) => {
    // Agregar la columna usuarioId en Prendas
    await queryInterface.addColumn('Prendas', 'usuarioId', {
      type: Sequelize.INTEGER,
      references: {
        model: 'Usuarios', // Tabla 'Usuarios'
        key: 'id',         // Referencia al campo 'id' de 'Usuarios'
      },
      allowNull: false,      // La columna no puede ser nula
      onDelete: 'CASCADE',   // Si el usuario es eliminado, las prendas relacionadas también lo serán
    });
  },

  down: async (queryInterface, Sequelize) => {
    // Eliminar la columna usuarioId de Prendas
    await queryInterface.removeColumn('Prendas', 'usuarioId');
  }
};

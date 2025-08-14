'use strict';
module.exports = (sequelize, DataTypes) => {
  const Usuario = sequelize.define('Usuario', {
    nombre: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    email: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    edad: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
  });

  Usuario.associate = function (models) {
    Usuario.hasMany(models.Prenda, {
      foreignKey: 'usuarioId',
    });
  };

  return Usuario;
};

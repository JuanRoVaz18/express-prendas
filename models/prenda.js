'use strict';
module.exports = (sequelize, DataTypes) => {
  const Prenda = sequelize.define('Prenda', {
    nombrePrenda: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    url: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    valor: {
      type: DataTypes.FLOAT,
      allowNull: false,
    },
    usuario: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    categoria: {
      type: DataTypes.STRING,
      allowNull: false,
    },
  });

  Prenda.associate = function (models) {
    Prenda.belongsTo(models.Usuario, {
      foreignKey: 'usuarioId',
    });
  };

  return Prenda;
};

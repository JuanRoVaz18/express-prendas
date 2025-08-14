'use strict';
module.exports = (sequelize, DataTypes) => {
  const Comentario = sequelize.define('Comentario', {
    texto: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    fecha: {
      type: DataTypes.DATE,
      allowNull: false,
    },
    usuario: {
      type: DataTypes.STRING,
      allowNull: false,
    },
  });

  return Comentario;
};

'use strict';
module.exports = (sequelize, DataTypes) => {
  const Estado = sequelize.define('Estado', {
    estado: {
      type: DataTypes.STRING,
      allowNull: false,
    },
  });

  return Estado;
};

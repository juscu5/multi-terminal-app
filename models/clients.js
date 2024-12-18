
const { DataTypes } = require('sequelize');

module.exports = function(sequelize) {
  return sequelize.define('clients', {
    recid: {
      primaryKey: true,
      type: DataTypes.BIGINT,
      allowNull: false,
      autoIncrement: true
    },
    ipaddress: {
      type: DataTypes.STRING(100),
      allowNull: true
    },
    port: {
      type: DataTypes.STRING(100),
      allowNull: true
    },
    terminal_name: {
      type: DataTypes.STRING(100),
      allowNull: true
    },
    has_zread: {
      type: DataTypes.BOOLEAN,
      allowNull: false,
      defaultValue: false
    }
  }, {
    sequelize,
    tableName: 'clients',
    timestamps: false
  });
};


const { DataTypes } = require('sequelize');

module.exports = function(sequelize) {
  return sequelize.define('sequence', {
    recid: {
      primaryKey: true,
      type: DataTypes.BIGINT,
      allowNull: false,
      autoIncrement: true
    },
    name: {
      type: DataTypes.STRING(100),
      allowNull: true
    },
    value: {
      type: DataTypes.STRING(100),
      allowNull: true
    }
  }, {
    sequelize,
    tableName: 'sequence',
    timestamps: false
  });
};

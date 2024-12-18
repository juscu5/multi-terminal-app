const {DataTypes} = require("sequelize");

module.exports = function (sequelize) {
  return sequelize.define(
    "itemclassfile",
    {
      recid: {
        type: DataTypes.BIGINT(20),
        allowNull: false,
        primaryKey: true,
        autoIncrement: true,
      },
      itmclacde: {
        type: DataTypes.STRING,
        allowNull: true,
      },
      itmcladsc: {
        type: DataTypes.STRING,
        allowNull: true,
      },
      locationcde: {
        type: DataTypes.STRING,
        allowNull: true,
      },
    },
    {
      tableName: "itemclassfile",
      timestamps: false,
      indexes: [
        {
          unique: true,
          fields: ["recid"],
        },
      ],
    });
}

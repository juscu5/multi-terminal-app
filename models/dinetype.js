const {DataTypes} = require("sequelize");

module.exports = function (sequelize) {
  return sequelize.define(
    "postypefile",
    {
      recid: {
        type: DataTypes.BIGINT(20),
        allowNull: false,
        primaryKey: true,
        autoIncrement: true,
      },
      postypcde: {
        type: DataTypes.STRING(40),
        allowNull: true,
      },
      postypdsc: {
        type: DataTypes.STRING(100),
        allowNull: true,
      },
      ordertyp: {
        type: DataTypes.STRING(50),
        allowNull: true,
      },
    },
    {
      tableName: "postypefile",
      timestamps: false,
      indexes: [
        {
          unique: true,
          fields: ["recid"],
        },
        {
          fields: ["postypdsc"],
        },
      ],
    }
  );
}

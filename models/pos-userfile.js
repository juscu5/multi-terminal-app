const {DataTypes} = require("sequelize");

module.exports = function (sequelize) {
  return sequelize.define("pos_userfile",
    {
      recid: {
        type: DataTypes.INTEGER(11),
        allowNull: false,
        autoIncrement: true,
        unique: "recid",
      },
      usrcde: {
        type: DataTypes.STRING(255),
        allowNull: false,
        primaryKey: true,
      },
      usrname: {
        type: DataTypes.STRING(255),
        allowNull: true,
      },
      usrpwd: {
        type: DataTypes.STRING(255),
        allowNull: true,
      },
      usrtyp: {
        type: DataTypes.STRING(255),
        allowNull: true,
      },
      email: {
        type: DataTypes.STRING(255),
        allowNull: true,
        validate: {
          isEmail: true,
        },
      },
      receive_zreading: {
        type: DataTypes.INTEGER(1),
        allowNull: false,
        defaultValue: "0",
      },
      approver: {
        type: DataTypes.INTEGER(1),
        allowNull: false,
        defaultValue: "0",
      },
      prntrange: {
        type: DataTypes.INTEGER(1),
        allowNull: false,
        defaultValue: "0",
      },
      cardholder: {
        type: DataTypes.STRING(255),
        allowNull: true,
      },
      cardno: {
        type: DataTypes.STRING(255),
        allowNull: true,
      },
    },
    {
      tableName: "pos_userfile",
      timestamps: false,
      indexes: [
        {
          unique: true,
          fields: ["recid"],
        },
        {
          fields: ["cardno", "cardholder"],
        },
        {
          fields: ["usrcde"],
        },
      ],
    });
}
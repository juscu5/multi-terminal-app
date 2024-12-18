const {DataTypes} = require("sequelize");

module.exports = function(sequelize){
  return sequelize.define(
    "itemfile",
    {
      recid: {
        type: DataTypes.BIGINT(20),
        allowNull: false,
        primaryKey: true,
        autoIncrement: true,
      },
      itmcde: {
        type: DataTypes.STRING,
        allowNull: true,
      },
      itmnum: {
        type: DataTypes.STRING,
        allowNull: true,
      },
      itmdsc: {
        type: DataTypes.STRING,
        allowNull: true,
      },
      itmdscshort: {
        type: DataTypes.STRING,
        allowNull: true,
      },
      itmdscforeign: {
        type: DataTypes.STRING,
        allowNull: true,
      },
      barcde: {
        type: DataTypes.STRING,
        allowNull: true,
      },
      itmtyp: {
        type: DataTypes.STRING,
        allowNull: true,
      },
      itmclacde: {
        type: DataTypes.STRING,
        allowNull: true,
      },
      itemsubclasscde: {
        type: DataTypes.STRING,
        allowNull: true,
        foreignKey: true,
      },
      locationcde: {
        type: DataTypes.STRING,
        allowNull: true,
      },
      untmea: {
        type: DataTypes.STRING,
        allowNull: true,
      },
      untcst: {
        type: DataTypes.DECIMAL(18,5),
        allowNull: true,
      },
      untprc: {
        type: DataTypes.DECIMAL(18,5),
        allowNull: true,
      },
      crilvl: {
        type: DataTypes.DECIMAL(18,5),
        allowNull: true,
      },
      itmpaxcount: {
        type: DataTypes.INTEGER(3),
        allowNull: false,
        defaultValue: "1",
      },
      taxcde: {
        type: DataTypes.STRING,
        allowNull: true,
      },
      memc: {
        type: DataTypes.STRING,
        allowNull: true,
      },
      isaddon: {
        type: DataTypes.BOOLEAN,
        allowNull: true,
      },
      inactive: {
        type: DataTypes.BOOLEAN,
        allowNull: true,
      },
      chkcombo: {
        type: DataTypes.BOOLEAN,
        allowNull: true,
      }
    },
    {
      tableName: "itemfile",
      timestamps: false,
      indexes: [
        {
          unique: true,
          fields: ["recid"],
        },
        {
          fields: ["itmdsc"],
        },
        {
          fields: ["itmcde"],
        },
        {
          fields: ["itemsubclasscde"],
        },
      ],
    });
}

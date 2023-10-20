const { DataTypes, Model } = require("sequelize");
const { sequelize } = require(".");

module.exports = (sequelize, DataTypes) => {
  class Kundkontakt extends Model {}
  Kundkontakt.init(
    {
      id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true,
        unique: true,
        allowNull: false,
      },
      förNamn: {
        type: DataTypes.STRING,
      },
      efterNamn: {
        type: DataTypes.STRING,
      },
      telephone: {
        type: DataTypes.STRING,
      },
      mail: {
        type: DataTypes.STRING,
      },
      företagNamn: {
        type: DataTypes.STRING,
      },
      medelande: {
        type: DataTypes.STRING,
      },
    },
    {
      underscored: true,
      sequelize,
      modelName: "kund_kontakt_fråga",
    }
  );

  return Kundkontakt;
};

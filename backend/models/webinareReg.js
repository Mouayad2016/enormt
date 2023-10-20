const { DataTypes, Model } = require("sequelize");
const { sequelize } = require(".");

module.exports = (sequelize, DataTypes) => {
    class Webinare extends Model {}
    Webinare.init({
        id: {
            type: DataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true,
            unique: true,
            allowNull: false,
        },
        email: {
            type: DataTypes.STRING,
        },

    }, {
        underscored: true,
        sequelize,
        modelName: "webinare",
    });

    return Webinare;
};
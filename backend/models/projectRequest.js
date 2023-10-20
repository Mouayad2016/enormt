const { DataTypes, Model } = require("sequelize");
const { sequelize } = require(".");

module.exports = (sequelize, DataTypes) => {
    class Project extends Model {}
    Project.init({
        id: {
            type: DataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true,
            unique: true,
            allowNull: false,
        },
        namn: {
            type: DataTypes.STRING,
        },
        org: {
            type: DataTypes.STRING,
        },
        org_nummer: {
            type: DataTypes.STRING,
        },
        mail: {
            type: DataTypes.STRING,
        },
        budget: {
            type: DataTypes.STRING,
        },
        land: {
            type: DataTypes.STRING,
        },
        medelande: {
            type: DataTypes.STRING,
        },
    }, {
        underscored: true,
        sequelize,
        modelName: "project_demo_request",
    });

    return Project;
};
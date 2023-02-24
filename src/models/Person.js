const { Model, DataTypes } = require("sequelize");
const sequelize = require("../config/db.js");

class Person extends Model { }

Person.init(
    {
        id: {
            type: DataTypes.INTEGER,
            autoIncrement: true,
            allowNull: false,
            primaryKey: true
        },
        gender: {
            type: DataTypes.STRING,
        },
        nameSet: {
            type: DataTypes.STRING,
        },
        title: {
            type: DataTypes.STRING,
        },
        givenName: {
            type: DataTypes.STRING,
        },
        middleInitial: {
            type: DataTypes.STRING,
        },
        surname: {
            type: DataTypes.STRING,
        },
        streetAddress: {
            type: DataTypes.STRING,
        },
        city: {
            type: DataTypes.STRING,
        },
        state: {
            type: DataTypes.STRING,
        },
        stateFull: {
            type: DataTypes.STRING,
        },

        username: {
            type: DataTypes.STRING,
        },

        birthday: {
            type: DataTypes.STRING,
        },

        browserUserAgent: {
            type: DataTypes.STRING,
        },

        kilograms: {
            type: DataTypes.STRING,
        },

        centimeters: {
            type: DataTypes.STRING,
        },

        latitude: {
            type: DataTypes.STRING,
        },

        longitude: {
            type: DataTypes.STRING,
        },

        bloodType: {
            type: DataTypes.STRING,
        },

        vehicle: {
            type: DataTypes.STRING,
        },

        domain: {
            type: DataTypes.STRING,
        },

        occupation: {
            type: DataTypes.STRING,
        },
    },
    {
        sequelize,
        tableName: 'db',
        createdAt: false,
        updatedAt: false,
    }
);

module.exports = Person
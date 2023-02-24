const { Model, DataTypes } = require("sequelize");
const sequelize = require("../config/db.js");

class Person extends Model { }

Person.init(
    {
        gender: {
            type: DataTypes.STRING,
        },
        nameSet: {
            type: DataTypes.DECIMAL,
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
            type: DataTypes.DATE,
        },
        
        browserUserAgent: {
            type: DataTypes.STRING,
        },
        
        kilograms: {
            type: DataTypes.DECIMAL,
        },
        
        centimeters: {
            type: DataTypes.NUMBER,
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
        modelName: "person"
    }
);

module.exports = Person
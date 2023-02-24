const { Model, DataTypes } = require("sequelize");
const sequelize = require("../config/db.js");

class Person extends Model { }

Person.init(
    {
        Gender: {
            type: DataTypes.STRING,
        },
        NameSet: {
            type: DataTypes.DECIMAL,
        },
        Title: {
            type: DataTypes.STRING,
        },
        GivenName: {
            type: DataTypes.STRING,
        },
        MiddleInitial: {
            type: DataTypes.STRING,
        },
        Surname: {
            type: DataTypes.STRING,
        },
        StreetAddress: {
            type: DataTypes.STRING,
        },
        City: {
            type: DataTypes.STRING,
        },
        State: {
            type: DataTypes.STRING,
        },
        StateFull: {
            type: DataTypes.STRING,
        },
        
        Username: {
            type: DataTypes.STRING,
        },
        
        Birthday: {
            type: DataTypes.DATE,
        },
        
        BrowserUserAgent: {
            type: DataTypes.STRING,
        },
        
        Kilograms: {
            type: DataTypes.DECIMAL,
        },
        
        Centimeters: {
            type: DataTypes.NUMBER,
        },
        
        Latitude: {
            type: DataTypes.STRING,
        },
        
        Longitude: {
            type: DataTypes.STRING,
        },
        
        BloodType: {
            type: DataTypes.STRING,
        },
        
        Vehicle: {
            type: DataTypes.STRING,
        },
        
        Domain: {
            type: DataTypes.STRING,
        },
        
        Occupation: {
            type: DataTypes.STRING,
        },
    },
    {
        sequelize,
        modelName: "person"
    }
);

module.exports = Person
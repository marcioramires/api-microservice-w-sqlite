const Sequelize = require("sequelize");
const sequelize = new Sequelize("crud-db", "user", "password", {
  dialect: "sqlite",
  host: "./people.sqlite",
});

module.exports = sequelize;
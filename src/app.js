const express = require("express");
const sequelize = require("./config/db");
const personRoutes = require("./routes.js");
const app = express();


sequelize.sync().then(() => console.log("database connected successfully 🏦"));

app.use(express.json());

app.use("/api/",personRoutes)

app.listen(3000, () => {
  console.log("Server started on port 3000 🔥");
});
const express = require("express");
const sequelize = require("./config/db.js");
const personRoutes = require("./routes.js");
const app = express();

const port = process.env.PORT || 3000;

sequelize.sync().then(() => console.log("database connected successfully 🏦"));

app.use(express.json());

app.use("/api/",personRoutes)

app.listen(port, () => {
  console.log(`Server started on port ${port} 🚀`);
});
const express = require("express");
const cors = require("cors");

const sequelize = require("./config/db.js");
const personRoutes = require("./routes.js");
const app = express();

const port = process.env.PORT || 80;

sequelize.sync().then(() => console.log("database connected successfully 🏦"));

app.use(express.json());

app.use(cors());

app.use("/api/",personRoutes);

app.listen(port, () => {
  console.log(`Server started on port ${port} 🚀`);
});
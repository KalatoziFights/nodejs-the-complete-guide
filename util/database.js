const Sequelize = require("sequelize");

const sequelize = new Sequelize("node-complete", "root", "giorgi2002", {
  dialect: "mysql",
  host: "localhost",
});

module.exports = sequelize;

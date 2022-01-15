const { sequelize } = require("./models");

console.log("run index successfully");

sequelize.sync();

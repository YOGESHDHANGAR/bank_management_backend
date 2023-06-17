const { Sequelize } = require("sequelize");

// Create a new Sequelize instance
const sequelize = new Sequelize("bank_management", "root", "487215", {
  host: "localhost",
  dialect: "mysql",
  logging: false,
});

sequelize
  .authenticate()
  .then(() => {
    console.log("Database connection has been established successfully.");
  })
  .catch((error) => {
    console.error("Unable to connect to the database:", error);
  });

module.exports = sequelize;

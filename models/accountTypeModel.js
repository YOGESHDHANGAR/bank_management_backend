const { DataTypes } = require("sequelize");
const sequelize = require("../database/database");

const AccountType = sequelize.define("accountType", {
  id: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true,
  },
  name: {
    type: DataTypes.STRING,
    allowNull: false,
  },
});

module.exports = AccountType;

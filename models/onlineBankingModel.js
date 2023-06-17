const { DataTypes } = require("sequelize");
const sequelize = require("../database/database");
const User = require("./userModel");

const OnlineBanking = sequelize.define("onlineBanking", {
  id: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true,
  },
  userId: {
    type: DataTypes.INTEGER,
    allowNull: false,
    references: {
      model: User,
      key: "id",
    },
  },
  username: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  password: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  lastLogin: {
    type: DataTypes.DATE,
  },
  isActive: {
    type: DataTypes.BOOLEAN,
    defaultValue: true,
  },
});

module.exports = OnlineBanking;

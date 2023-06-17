const { DataTypes } = require("sequelize");
const sequelize = require("../database/database");

const AccessLog = sequelize.define("accessLog", {
  id: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true,
  },
  userId: {
    type: DataTypes.INTEGER,
    allowNull: false,
  },
  timestamp: {
    type: DataTypes.DATE,
    allowNull: false,
    defaultValue: DataTypes.NOW,
  },
  ipAddress: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  deviceInfo: {
    type: DataTypes.STRING,
    allowNull: true,
  },
});

module.exports = AccessLog;

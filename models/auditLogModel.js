const { DataTypes } = require("sequelize");
const sequelize = require("../database/database");

const AuditLog = sequelize.define("auditLog", {
  id: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true,
  },
  userId: {
    type: DataTypes.INTEGER,
    allowNull: false,
  },
  action: {
    type: DataTypes.STRING,
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
});

module.exports = AuditLog;

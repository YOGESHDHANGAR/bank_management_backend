const { DataTypes } = require("sequelize");
const sequelize = require("../database/database");

const Transaction = sequelize.define("transaction", {
  id: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true,
  },
  accountId: {
    type: DataTypes.INTEGER,
    allowNull: false,
  },
  transactionType: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  amount: {
    type: DataTypes.DECIMAL(10, 2),
    allowNull: false,
  },
  transactionDate: {
    type: DataTypes.DATE,
    allowNull: false,
    defaultValue: DataTypes.NOW,
  },
  description: {
    type: DataTypes.STRING,
    allowNull: false,
  },
});

module.exports = Transaction;

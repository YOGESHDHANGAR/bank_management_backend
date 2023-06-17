const { DataTypes } = require("sequelize");
const sequelize = require("../database/database");

const CashTransaction = sequelize.define("CashTransaction", {
  id: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true,
  },
  amount: {
    type: DataTypes.DECIMAL(10, 2),
    allowNull: false,
  },
  transactionType: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  transactionDate: {
    type: DataTypes.DATE,
    allowNull: false,
    defaultValue: DataTypes.NOW,
  },
});

module.exports = CashTransaction;

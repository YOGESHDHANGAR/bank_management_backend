const { DataTypes } = require("sequelize");
const sequelize = require("../database/database");

const Cheque = sequelize.define("cheque", {
  id: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true,
  },
  accountId: {
    type: DataTypes.INTEGER,
    allowNull: false,
  },
  chequeNumber: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  amount: {
    type: DataTypes.DECIMAL(10, 2),
    allowNull: false,
  },
  issueDate: {
    type: DataTypes.DATE,
    allowNull: false,
  },
  dueDate: {
    type: DataTypes.DATE,
    allowNull: false,
  },
});

module.exports = Cheque;

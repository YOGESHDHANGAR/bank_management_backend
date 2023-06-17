const { DataTypes } = require("sequelize");
const sequelize = require("../database/database");
const Customer = require("./customerModel");

const Loan = sequelize.define("loan", {
  id: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true,
  },
  customerId: {
    type: DataTypes.INTEGER,
    allowNull: false,
    references: {
      model: Customer,
      key: "id",
    },
  },
  loanAmount: {
    type: DataTypes.FLOAT,
    allowNull: false,
  },
  interestRate: {
    type: DataTypes.FLOAT,
    allowNull: false,
  },
  loanTerm: {
    type: DataTypes.INTEGER,
    allowNull: false,
  },
});

module.exports = Loan;

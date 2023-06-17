const { DataTypes } = require("sequelize");
const sequelize = require("../database/database");

const PaymentGateway = sequelize.define("paymentGateway", {
  id: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true,
  },
  name: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  details: {
    type: DataTypes.STRING,
    allowNull: false,
  },
});

module.exports = PaymentGateway;

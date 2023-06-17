const { DataTypes } = require("sequelize");
const sequelize = require("../database/database");
const Customer = require("./customerModel");

const KYCDocument = sequelize.define("kycDocument", {
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
  documentType: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  documentNumber: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  expiryDate: {
    type: DataTypes.DATE,
    allowNull: false,
  },
});

module.exports = KYCDocument;

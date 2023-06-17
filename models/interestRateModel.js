const { DataTypes } = require("sequelize");
const sequelize = require("../database/database");
const AccountType = require("./accountTypeModel");

const InterestRate = sequelize.define("interestRate", {
  id: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true,
  },
  accountTypeId: {
    type: DataTypes.INTEGER,
    allowNull: false,
    references: {
      model: AccountType,
      key: "id",
    },
  },
  interestRate: {
    type: DataTypes.FLOAT,
    allowNull: false,
  },
  effectiveDate: {
    type: DataTypes.DATE,
    allowNull: false,
  },
});

module.exports = InterestRate;

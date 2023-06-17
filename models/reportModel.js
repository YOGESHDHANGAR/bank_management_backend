const { DataTypes } = require("sequelize");
const sequelize = require("../database/database");

const Report = sequelize.define("report", {
  accountId: {
    type: DataTypes.INTEGER,
    allowNull: false,
  },
  customerId: {
    type: DataTypes.INTEGER,
    allowNull: false,
  },
  startDate: {
    type: DataTypes.DATE,
    allowNull: false,
  },
  endDate: {
    type: DataTypes.DATE,
    allowNull: false,
  },
  reportType: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  data: {
    type: DataTypes.JSON,
    allowNull: false,
  },
});

module.exports = Report;

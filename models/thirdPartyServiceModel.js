const { DataTypes } = require("sequelize");
const sequelize = require("../database/database");

const ThirdPartyService = sequelize.define("thirdPartyService", {
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

module.exports = ThirdPartyService;

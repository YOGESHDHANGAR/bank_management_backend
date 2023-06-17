const express = require("express");
const mysql = require("mysql2");
const bodyParser = require("body-parser");

// Import your route files here
const userRoutes = require("./routes/userRoutes");
const customerRoutes = require("./routes/customerRoutes");
const accountRoutes = require("./routes/accountRoutes");
const transactionRoutes = require("./routes/transactionRoutes");
const chequeRoutes = require("./routes/chequeRoutes");
const loanRoutes = require("./routes/loanRoutes");
const reportRoutes = require("./routes/reportRoutes");
const auditLogRoutes = require("./routes/auditLogRoutes");
const paymentGatewayRoutes = require("./routes/paymentGatewayRoutes");
const thirdPartyServiceRoutes = require("./routes/thirdPartyServiceRoutes");
const currencyRoutes = require("./routes/currencyRoutes");
const interestRateRoutes = require("./routes/interestRateRoutes");
const roleRoutes = require("./routes/roleRoutes");
const addressRoutes = require("./routes/addressRoutes");
const contactRoutes = require("./routes/contactRoutes");
const kYCDocumentRoutes = require("./routes/kYCDocumentRoutes");
const accessLogRoutes = require("./routes/accessLogRoutes");
const notificationRoutes = require("./routes/notificationRoutes");
const cashTransactionRoutes = require("./routes/cashTransactionRoutes");
const onlineBankingRoutes = require("./routes/onlineBankingRoutes");

// Create an Express app
const app = express();

// Configure body-parser middleware
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

// Create a MySQL connection pool
const pool = mysql.createPool({
  host: "localhost",
  user: "root",
  password: "487215",
  database: "bank_management",
  connectionLimit: 10, // Adjust the limit based on your needs
});

// Middleware to add the MySQL connection pool to the request object
app.use((req, res, next) => {
  req.pool = pool;
  next();
});

// Import your database file
const sequelize = require("./database/database");

// Sync the models with the database
sequelize
  .sync()
  .then(() => {
    console.log("Database synchronized");

    // Define your routes here
    app.use("/api/users", userRoutes);
    app.use("/api/customers", customerRoutes);
    app.use("/api/accounts", accountRoutes);
    app.use("/api/transactions", transactionRoutes);
    app.use("/api/cheques", chequeRoutes);
    app.use("/api/loans", loanRoutes);
    app.use("/api/reports", reportRoutes);
    app.use("/api/audit-logs", auditLogRoutes);
    app.use("/api/payment-gateways", paymentGatewayRoutes);
    app.use("/api/third-party-services", thirdPartyServiceRoutes);
    app.use("/api/currencies", currencyRoutes);
    app.use("/api/interest-rates", interestRateRoutes);
    app.use("/api/roles", roleRoutes);
    app.use("/api/addresses", addressRoutes);
    app.use("/api/contacts", contactRoutes);
    app.use("/api/kyc-documents", kYCDocumentRoutes);
    app.use("/api/access-logs", accessLogRoutes);
    app.use("/api/notifications", notificationRoutes);
    app.use("/api/cash-transaction", cashTransactionRoutes);
    app.use("/api/online-banking", onlineBankingRoutes);
  })
  .catch((error) => {
    console.error("Unable to synchronize database:", error);
  });

module.exports = app;

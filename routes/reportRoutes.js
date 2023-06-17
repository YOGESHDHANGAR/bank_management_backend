const express = require("express");
const router = express.Router();

// Import the ReportController
const reportController = require("../controllers/reportController");

// Define the routes
router.get("/account-statements", reportController.generateAccountStatements);
router.get("/transaction-history", reportController.generateTransactionHistory);
router.get("/customer-activity", reportController.generateCustomerActivity);
router.get("/financial-analysis", reportController.generateFinancialAnalysis);

// Export the router
module.exports = router;

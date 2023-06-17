const express = require("express");
const router = express.Router();

// Import the TransactionController
const transactionController = require("../controllers/transactionController");

// Define the routes
router.get("/", transactionController.getAllTransactions);
router.get("/:id", transactionController.getTransactionById);
router.post("/", transactionController.createTransaction);
router.put("/:id", transactionController.updateTransaction);
router.delete("/:id", transactionController.deleteTransaction);

// Export the router
module.exports = router;

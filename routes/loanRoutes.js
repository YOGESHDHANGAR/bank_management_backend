const express = require("express");
const router = express.Router();

// Import the LoanController
const loanController = require("../controllers/loanController");

// Define the routes
router.get("/", loanController.getAllLoans);
router.get("/:id", loanController.getLoanByCustomerId);
router.post("/", loanController.createLoan);
router.put("/:id", loanController.updateLoan);
router.delete("/:id", loanController.deleteLoan);

// Export the router
module.exports = router;

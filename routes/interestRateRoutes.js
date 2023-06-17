const express = require("express");
const router = express.Router();

// Import the InterestRateController
const interestRateController = require("../controllers/interestRateController");

// Define the routes
router.get("/", interestRateController.getAllInterestRates);
router.get("/:id", interestRateController.getInterestRateByAccountType);
router.post("/", interestRateController.createInterestRate);
router.put("/:id", interestRateController.updateInterestRate);
router.delete("/:id", interestRateController.deleteInterestRate);

// Export the router
module.exports = router;

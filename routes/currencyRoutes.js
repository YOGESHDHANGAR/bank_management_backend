const express = require("express");
const router = express.Router();

// Import the CurrencyController
const currencyController = require("../controllers/currencyController");

// Define the routes
router.get("/", currencyController.getAllCurrencies);
router.get("/:id", currencyController.getCurrencyDetails);
router.post("/", currencyController.createCurrency);
router.put("/:id", currencyController.updateCurrency);
router.delete("/:id", currencyController.deleteCurrency);

// Export the router
module.exports = router;

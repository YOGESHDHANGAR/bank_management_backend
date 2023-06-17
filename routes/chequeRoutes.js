const express = require("express");
const router = express.Router();

// Import the ChequeController
const chequeController = require("../controllers/chequeController");

// Define the routes
router.get("/", chequeController.getAllCheques);
router.get("/:id", chequeController.getChequeDetails);
router.post("/", chequeController.createCheque);
router.put("/:id", chequeController.updateCheque);
router.delete("/:id", chequeController.deleteCheque);

// Export the router
module.exports = router;

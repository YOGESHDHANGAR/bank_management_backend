const express = require("express");
const router = express.Router();

// Import the PaymentGatewayController
const paymentGatewayController = require("../controllers/paymentGatewayController");

// Define the routes
router.get("/", paymentGatewayController.getAllPaymentGateways);
router.get("/:id", paymentGatewayController.getPaymentGatewayById);
router.post("/", paymentGatewayController.createPaymentGateway);
router.put("/:id", paymentGatewayController.updatePaymentGateway);
router.delete("/:id", paymentGatewayController.deletePaymentGateway);

// Export the router
module.exports = router;

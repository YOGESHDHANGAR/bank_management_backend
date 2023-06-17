const express = require("express");
const router = express.Router();

// Import the CustomerController
const customerController = require("../controllers/customerController");

// Define the routes
router.get("/", customerController.getAllCustomers);
router.get("/:id", customerController.getCustomerDetails);
router.post("/", customerController.createCustomer);
router.put("/:id", customerController.updateCustomer);
router.delete("/:id", customerController.deleteCustomer);

// Export the router
module.exports = router;

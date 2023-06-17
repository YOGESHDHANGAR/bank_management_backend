const express = require("express");
const router = express.Router();

// Import the AddressController
const addressController = require("../controllers/addressController");

// Define the routes
router.get("/", addressController.getAllAddresses);
router.get("/:id", addressController.getAddressDetails);
router.post("/", addressController.createAddress);
router.put("/:id", addressController.updateAddress);
router.delete("/:id", addressController.deleteAddress);

// Export the router
module.exports = router;

const express = require("express");
const router = express.Router();

// Import the ContactController
const contactController = require("../controllers/contactController");

// Define the routes
router.get("/", contactController.getAllContacts);
router.get("/:id", contactController.getContactDetails);
router.post("/", contactController.createContact);
router.put("/:id", contactController.updateContact);
router.delete("/:id", contactController.deleteContact);

// Export the router
module.exports = router;

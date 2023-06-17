const express = require("express");
const router = express.Router();

// Import the UserController
const userController = require("../controllers/userController");

// Define the routes
router.get("/", userController.getAllUsers);
router.get("/:id", userController.getUserById);
router.post("/", userController.createUser);
router.put("/:id", userController.updateUser);
router.delete("/:id", userController.deleteUser);

// Export the router
module.exports = router;

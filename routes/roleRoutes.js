const express = require("express");
const router = express.Router();

// Import the RoleController
const roleController = require("../controllers/roleController");

// Define the routes
router.get("/", roleController.getAllRoles);
router.get("/:id", roleController.getRoleById);
router.post("/", roleController.createRole);
router.put("/:id", roleController.updateRole);
router.delete("/:id", roleController.deleteRole);

// Export the router
module.exports = router;

const express = require("express");
const router = express.Router();

// Import the AccessLogController
const accessLogController = require("../controllers/accessLogController");

// Define the routes
router.get("/", accessLogController.getAllAccessLogs);
router.get("/:id", accessLogController.getAccessLogById);
router.post("/", accessLogController.createAccessLog);
router.put("/:id", accessLogController.updateAccessLog);
router.delete("/:id", accessLogController.deleteAccessLog);

// Export the router
module.exports = router;

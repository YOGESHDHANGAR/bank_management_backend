const express = require("express");
const router = express.Router();

// Import the AuditLogController
const auditLogController = require("../controllers/auditLogController");

// Define the routes
router.get("/", auditLogController.getAllAuditLogs);
router.get("/:id", auditLogController.getAuditLogDetails);
router.post("/", auditLogController.createAuditLog);
router.put("/:id", auditLogController.updateAuditLog);
router.delete("/:id", auditLogController.deleteAuditLog);

// Export the router
module.exports = router;

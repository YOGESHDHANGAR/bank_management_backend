const AuditLogModel = require("../models/auditLogModel");

// Create a new audit log
const createAuditLog = async (req, res) => {
  try {
    // Extract necessary data from the request body
    const { userId, action, description } = req.body;

    // Create a new audit log using the AuditLogModel
    const auditLog = await AuditLogModel.createAuditLog(
      userId,
      action,
      description
    );

    // Return the created audit log in the response
    res.status(201).json(auditLog);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Server Error" });
  }
};

// Get audit log details
const getAuditLogDetails = async (req, res) => {
  try {
    // Extract the audit log ID from the request parameters
    const auditLogId = req.params.id;

    // Get the audit log details using the AuditLogModel
    const auditLog = await AuditLogModel.getAuditLogDetails(auditLogId);

    // Check if the audit log exists
    if (!auditLog) {
      return res.status(404).json({ message: "Audit log not found" });
    }

    // Return the audit log details in the response
    res.status(200).json(auditLog);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Server Error" });
  }
};

// Get all audit logs
const getAllAuditLogs = async (req, res) => {
  try {
    const auditLogs = await AuditLogModel.findAll();
    res.status(200).json(auditLogs);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Server Error" });
  }
};

// Update audit log details
const updateAuditLog = async (req, res) => {
  try {
    // Extract the audit log ID and updated data from the request body
    const { auditLogId, action, description } = req.body;

    // Update the audit log details using the AuditLogModel
    const updatedAuditLog = await AuditLogModel.updateAuditLog(
      auditLogId,
      action,
      description
    );

    // Return the updated audit log in the response
    res.status(200).json(updatedAuditLog);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Server Error" });
  }
};

// Delete an audit log
const deleteAuditLog = async (req, res) => {
  try {
    // Extract the audit log ID from the request parameters
    const auditLogId = req.params.id;

    // Delete the audit log using the AuditLogModel
    await AuditLogModel.deleteAuditLog(auditLogId);

    // Return a success message in the response
    res.status(200).json({ message: "Audit log deleted successfully" });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Server Error" });
  }
};

// Export the controller functions
module.exports = {
  createAuditLog,
  getAuditLogDetails,
  getAllAuditLogs,
  updateAuditLog,
  deleteAuditLog,
};

const AccessLog = require("../models/accessLogModel");

// Create a new access log
exports.createAccessLog = async (req, res) => {
  try {
    const { userId, action } = req.body;
    const accessLog = await AccessLog.create({ userId, action });
    res.status(201).json(accessLog);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Server Error" });
  }
};

// Get all access logs
exports.getAllAccessLogs = async (req, res) => {
  try {
    const accessLogs = await AccessLog.findAll();
    res.status(200).json(accessLogs);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Server Error" });
  }
};

// Get access log by ID
exports.getAccessLogById = async (req, res) => {
  try {
    const accessLogId = req.params.id;
    const accessLog = await AccessLog.findByPk(accessLogId);
    if (!accessLog) {
      return res.status(404).json({ error: "Access Log not found" });
    }
    res.status(200).json(accessLog);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Server Error" });
  }
};

// Update access log
exports.updateAccessLog = async (req, res) => {
  try {
    const accessLogId = req.params.id;
    const { userId, action } = req.body;

    const accessLog = await AccessLog.findByPk(accessLogId);
    if (!accessLog) {
      return res.status(404).json({ error: "Access Log not found" });
    }

    accessLog.userId = userId;
    accessLog.action = action;

    await accessLog.save();

    res.status(200).json(accessLog);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Server Error" });
  }
};

// Delete access log
exports.deleteAccessLog = async (req, res) => {
  try {
    const accessLogId = req.params.id;

    const accessLog = await AccessLog.findByPk(accessLogId);
    if (!accessLog) {
      return res.status(404).json({ error: "Access Log not found" });
    }

    await accessLog.destroy();

    res.status(200).json({ message: "Access Log deleted successfully" });
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Server Error" });
  }
};

const express = require("express");
const router = express.Router();
const notificationController = require("../controllers/notificationController");

router.get("/", notificationController.getAllNotifications);
router.get("/:id", notificationController.getNotificationsByCustomerId);
router.post("/", notificationController.createNotification);
router.patch("/:id", notificationController.markNotificationAsRead);
router.delete("/:id", notificationController.deleteNotification);

module.exports = router;

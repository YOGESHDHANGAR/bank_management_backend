const NotificationModel = require("../models/notificationModel");

// Create a new notification
const createNotification = async (req, res) => {
  try {
    // Extract necessary data from the request body
    const { customerId, message } = req.body;

    // Create a new notification using the NotificationModel
    const notificationObj = await NotificationModel.createNotification(
      customerId,
      message
    );

    // Return the created notification in the response
    res.status(201).json(notificationObj);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Server Error" });
  }
};

// Get all notifications for a customer
const getNotificationsByCustomerId = async (req, res) => {
  try {
    // Extract the customer ID from the request parameters
    const customerId = req.params.id;

    // Get all notifications for the specified customer ID using the NotificationModel
    const notifications = await NotificationModel.getNotificationsByCustomerId(
      customerId
    );

    // Return the notifications in the response
    res.status(200).json(notifications);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Server Error" });
  }
};

// Get all notifications
const getAllNotifications = async (req, res) => {
  try {
    const notifications = await NotificationModel.findAll();
    res.status(200).json(notifications);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Server Error" });
  }
};

// Mark a notification as read
const markNotificationAsRead = async (req, res) => {
  try {
    // Extract the notification ID from the request parameters
    const notificationId = req.params.id;

    // Mark the notification as read using the NotificationModel
    const updatedNotificationObj =
      await NotificationModel.markNotificationAsRead(notificationId);

    // Return the updated notification in the response
    res.status(200).json(updatedNotificationObj);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Server Error" });
  }
};

// Delete a notification
const deleteNotification = async (req, res) => {
  try {
    // Extract the notification ID from the request parameters
    const notificationId = req.params.id;

    // Delete the notification using the NotificationModel
    await NotificationModel.deleteNotification(notificationId);

    // Return a success message in the response
    res.status(200).json({ message: "Notification deleted successfully" });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Server Error" });
  }
};

// Export the controller functions
module.exports = {
  createNotification,
  getNotificationsByCustomerId,
  getAllNotifications,
  markNotificationAsRead,
  deleteNotification,
};

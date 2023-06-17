const PaymentGatewayModel = require("../models/paymentGatewayModel");

// Get all payment gateways
const getAllPaymentGateways = async (req, res) => {
  try {
    // Get all payment gateways using the PaymentGatewayModel
    const paymentGateways = await PaymentGatewayModel.getAllPaymentGateways();

    // Return the payment gateways in the response
    res.status(200).json(paymentGateways);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Server Error" });
  }
};

// Get a payment gateway by ID
const getPaymentGatewayById = async (req, res) => {
  try {
    // Extract the payment gateway ID from the request parameters
    const paymentGatewayId = req.params.id;

    // Get the payment gateway by ID using the PaymentGatewayModel
    const paymentGateway = await PaymentGatewayModel.getPaymentGatewayById(
      paymentGatewayId
    );

    // If the payment gateway is found, return it in the response
    if (paymentGateway) {
      res.status(200).json(paymentGateway);
    } else {
      res.status(404).json({ message: "Payment gateway not found" });
    }
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Server Error" });
  }
};

// Create a new payment gateway
const createPaymentGateway = async (req, res) => {
  try {
    // Extract necessary data from the request body
    const { name, details } = req.body;

    // Create a new payment gateway using the PaymentGatewayModel
    const paymentGateway = await PaymentGatewayModel.createPaymentGateway(
      name,
      details
    );

    // Return the created payment gateway in the response
    res.status(201).json(paymentGateway);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Server Error" });
  }
};

// Update a payment gateway
const updatePaymentGateway = async (req, res) => {
  try {
    // Extract the payment gateway ID from the request parameters
    const paymentGatewayId = req.params.id;

    // Extract updated data from the request body
    const { name, details } = req.body;

    // Update the payment gateway using the PaymentGatewayModel
    const updatedPaymentGateway =
      await PaymentGatewayModel.updatePaymentGateway(
        paymentGatewayId,
        name,
        details
      );

    // If the payment gateway is updated successfully, return it in the response
    if (updatedPaymentGateway) {
      res.status(200).json(updatedPaymentGateway);
    } else {
      res.status(404).json({ message: "Payment gateway not found" });
    }
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Server Error" });
  }
};

// Delete a payment gateway
const deletePaymentGateway = async (req, res) => {
  try {
    // Extract the payment gateway ID from the request parameters
    const paymentGatewayId = req.params.id;

    // Delete the payment gateway using the PaymentGatewayModel
    const deletedPaymentGateway =
      await PaymentGatewayModel.deletePaymentGateway(paymentGatewayId);

    // If the payment gateway is deleted successfully, return a success message in the response
    if (deletedPaymentGateway) {
      res.status(200).json({ message: "Payment gateway deleted successfully" });
    } else {
      res.status(404).json({ message: "Payment gateway not found" });
    }
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Server Error" });
  }
};

// Export the controller functions
module.exports = {
  getAllPaymentGateways,
  getPaymentGatewayById,
  createPaymentGateway,
  updatePaymentGateway,
  deletePaymentGateway,
};

const ChequeModel = require("../models/chequeModel");

// Create a new cheque
const createCheque = async (req, res) => {
  try {
    // Extract necessary data from the request body
    const { accountNumber, amount, recipientName } = req.body;

    // Create a new cheque using the ChequeModel
    const cheque = await ChequeModel.createCheque(
      accountNumber,
      amount,
      recipientName
    );

    // Return the created cheque in the response
    res.status(201).json(cheque);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Server Error" });
  }
};

// Get cheque details
const getChequeDetails = async (req, res) => {
  try {
    // Extract the cheque ID from the request parameters
    const chequeId = req.params.id;

    // Get the cheque details using the ChequeModel
    const cheque = await ChequeModel.getChequeDetails(chequeId);

    // Check if the cheque exists
    if (!cheque) {
      return res.status(404).json({ message: "Cheque not found" });
    }

    // Return the cheque details in the response
    res.status(200).json(cheque);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Server Error" });
  }
};

// Get all cheques
const getAllCheques = async (req, res) => {
  try {
    const cheques = await ChequeModel.findAll();
    res.status(200).json(cheques);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Server Error" });
  }
};

// Update cheque details
const updateCheque = async (req, res) => {
  try {
    // Extract the cheque ID and updated data from the request body
    const { chequeId, amount, recipientName } = req.body;

    // Update the cheque details using the ChequeModel
    const updatedCheque = await ChequeModel.updateCheque(
      chequeId,
      amount,
      recipientName
    );

    // Return the updated cheque in the response
    res.status(200).json(updatedCheque);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Server Error" });
  }
};

// Delete a cheque
const deleteCheque = async (req, res) => {
  try {
    // Extract the cheque ID from the request parameters
    const chequeId = req.params.id;

    // Delete the cheque using the ChequeModel
    await ChequeModel.deleteCheque(chequeId);

    // Return a success message in the response
    res.status(200).json({ message: "Cheque deleted successfully" });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Server Error" });
  }
};

// Export the controller functions
module.exports = {
  createCheque,
  getChequeDetails,
  getAllCheques,
  updateCheque,
  deleteCheque,
};

const CashTransaction = require("../models/cashTransactionModel");

// Create a new cash transaction
const createCashTransaction = async (req, res) => {
  try {
    // Extract necessary data from the request body
    const { transactionType, amount } = req.body;

    // Create a new cash transaction using the CashTransaction model
    const cashTransaction = await CashTransaction.create({
      transactionType,
      amount,
    });

    // Return the created cash transaction in the response
    res.status(201).json(cashTransaction);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Server Error" });
  }
};

// Get all cash transactions
const getAllCashTransactions = async (req, res) => {
  try {
    const cashTransactions = await CashTransaction.findAll();
    res.status(200).json(cashTransactions);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Server Error" });
  }
};

// Get cash transaction by ID
const getCashTransactionById = async (req, res) => {
  try {
    const cashTransactionId = req.params.id;

    // Find the cash transaction by ID using the CashTransaction model
    const cashTransaction = await CashTransaction.findByPk(cashTransactionId);

    // Check if the cash transaction exists
    if (!cashTransaction) {
      return res.status(404).json({ message: "Cash transaction not found" });
    }

    // Return the cash transaction in the response
    res.status(200).json(cashTransaction);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Server Error" });
  }
};

// Update cash transaction
const updateCashTransaction = async (req, res) => {
  try {
    const cashTransactionId = req.params.id;
    const { transactionType, amount } = req.body;

    // Find the cash transaction by ID using the CashTransaction model
    const cashTransaction = await CashTransaction.findByPk(cashTransactionId);

    // Check if the cash transaction exists
    if (!cashTransaction) {
      return res.status(404).json({ message: "Cash transaction not found" });
    }

    // Update the cash transaction
    cashTransaction.transactionType = transactionType;
    cashTransaction.amount = amount;
    await cashTransaction.save();

    // Return the updated cash transaction in the response
    res.status(200).json(cashTransaction);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Server Error" });
  }
};

// Delete cash transaction
const deleteCashTransaction = async (req, res) => {
  try {
    const cashTransactionId = req.params.id;

    // Find the cash transaction by ID using the CashTransaction model
    const cashTransaction = await CashTransaction.findByPk(cashTransactionId);

    // Check if the cash transaction exists
    if (!cashTransaction) {
      return res.status(404).json({ message: "Cash transaction not found" });
    }

    // Delete the cash transaction
    await cashTransaction.destroy();

    // Return a success message in the response
    res.status(200).json({ message: "Cash transaction deleted successfully" });
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Server Error" });
  }
};

module.exports = {
  createCashTransaction,
  getAllCashTransactions,
  getCashTransactionById,
  updateCashTransaction,
  deleteCashTransaction,
};

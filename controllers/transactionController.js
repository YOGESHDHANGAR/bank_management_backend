const TransactionModel = require("../models/transactionModel");

// Get all transactions
const getAllTransactions = async (req, res) => {
  try {
    // Get all transactions using the TransactionModel
    const transactions = await TransactionModel.getAllTransactions();

    // Return the transactions in the response
    res.status(200).json(transactions);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Server Error" });
  }
};

// Get a transaction by ID
const getTransactionById = async (req, res) => {
  try {
    // Extract the transaction ID from the request parameters
    const transactionId = req.params.id;

    // Get the transaction by ID using the TransactionModel
    const transaction = await TransactionModel.getTransactionById(
      transactionId
    );

    // If the transaction is found, return it in the response
    if (transaction) {
      res.status(200).json(transaction);
    } else {
      res.status(404).json({ message: "Transaction not found" });
    }
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Server Error" });
  }
};

// Create a new transaction
const createTransaction = async (req, res) => {
  try {
    // Extract necessary data from the request body
    const { accountId, amount, type } = req.body;

    // Create a new transaction using the TransactionModel
    const transaction = await TransactionModel.createTransaction(
      accountId,
      amount,
      type
    );

    // Return the created transaction in the response
    res.status(201).json(transaction);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Server Error" });
  }
};

// Update a transaction
const updateTransaction = async (req, res) => {
  try {
    // Extract the transaction ID from the request parameters
    const transactionId = req.params.id;

    // Extract updated data from the request body
    const { accountId, amount, type } = req.body;

    // Update the transaction using the TransactionModel
    const updatedTransaction = await TransactionModel.updateTransaction(
      transactionId,
      accountId,
      amount,
      type
    );

    // If the transaction is updated successfully, return it in the response
    if (updatedTransaction) {
      res.status(200).json(updatedTransaction);
    } else {
      res.status(404).json({ message: "Transaction not found" });
    }
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Server Error" });
  }
};

// Delete a transaction
const deleteTransaction = async (req, res) => {
  try {
    // Extract the transaction ID from the request parameters
    const transactionId = req.params.id;

    // Delete the transaction using the TransactionModel
    const deletedTransaction = await TransactionModel.deleteTransaction(
      transactionId
    );

    // If the transaction is deleted successfully, return a success message in the response
    if (deletedTransaction) {
      res.status(200).json({ message: "Transaction deleted successfully" });
    } else {
      res.status(404).json({ message: "Transaction not found" });
    }
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Server Error" });
  }
};

// Export the controller functions
module.exports = {
  getAllTransactions,
  getTransactionById,
  createTransaction,
  updateTransaction,
  deleteTransaction,
};

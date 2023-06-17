const AccountModel = require("../models/accountModel");

// Create a new account
const createAccount = async (req, res) => {
  try {
    // Extract necessary data from the request body
    const { accountNumber, accountType, customerId, balance } = req.body;

    // Create a new account using the AccountModel
    const account = await AccountModel.createAccount(
      accountNumber,
      accountType,
      customerId,
      balance
    );

    // Return the created account in the response
    res.status(201).json(account);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Server Error" });
  }
};

// Get all accounts
const getAllAccounts = async (req, res) => {
  try {
    const accounts = await Account.findAll();
    res.status(200).json(accounts);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Server Error" });
  }
};

// Get account details
const getAccountDetails = async (req, res) => {
  try {
    // Extract the account ID from the request parameters
    const accountId = req.params.id;

    // Get the account details using the AccountModel
    const account = await AccountModel.getAccountDetails(accountId);

    // Check if the account exists
    if (!account) {
      return res.status(404).json({ message: "Account not found" });
    }

    // Return the account details in the response
    res.status(200).json(account);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Server Error" });
  }
};

// Update account balance
const updateAccountBalance = async (req, res) => {
  try {
    // Extract the account ID and new balance from the request body
    const { accountId, newBalance } = req.body;

    // Update the account balance using the AccountModel
    const updatedAccount = await AccountModel.updateAccountBalance(
      accountId,
      newBalance
    );

    // Return the updated account in the response
    res.status(200).json(updatedAccount);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Server Error" });
  }
};

// Delete an account
const deleteAccount = async (req, res) => {
  try {
    // Extract the account ID from the request parameters
    const accountId = req.params.id;

    // Delete the account using the AccountModel
    await AccountModel.deleteAccount(accountId);

    // Return a success message in the response
    res.status(200).json({ message: "Account deleted successfully" });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Server Error" });
  }
};

// Export the controller functions
module.exports = {
  createAccount,
  getAccountDetails,
  getAllAccounts,
  updateAccountBalance,
  deleteAccount,
};

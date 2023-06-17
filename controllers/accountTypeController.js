const AccountType = require("../models/accountTypeModel");

// Create a new account type
const createAccountType = async (req, res) => {
  try {
    // Extract necessary data from the request body
    const { name } = req.body;

    // Create a new account type using the AccountType model
    const accountType = await AccountType.create({ name });

    // Return the created account type in the response
    res.status(201).json(accountType);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Server Error" });
  }
};

// Get all account types
const getAllAccountTypes = async (req, res) => {
  try {
    const accountTypes = await AccountType.findAll();
    res.status(200).json(accountTypes);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Server Error" });
  }
};

// Get account type by ID
const getAccountTypeById = async (req, res) => {
  try {
    const { id } = req.params;

    const accountType = await AccountType.findByPk(id);

    if (!accountType) {
      return res.status(404).json({ message: "Account type not found" });
    }

    res.status(200).json(accountType);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Server Error" });
  }
};

// Update an account type
const updateAccountType = async (req, res) => {
  try {
    const { id } = req.params;
    const { name } = req.body;

    const accountType = await AccountType.findByPk(id);

    if (!accountType) {
      return res.status(404).json({ message: "Account type not found" });
    }

    accountType.name = name;
    await accountType.save();

    res.status(200).json(accountType);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Server Error" });
  }
};

// Delete an account type
const deleteAccountType = async (req, res) => {
  try {
    const { id } = req.params;

    const accountType = await AccountType.findByPk(id);

    if (!accountType) {
      return res.status(404).json({ message: "Account type not found" });
    }

    await accountType.destroy();

    res.status(200).json({ message: "Account type deleted successfully" });
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Server Error" });
  }
};

// Export the controller functions
module.exports = {
  createAccountType,
  getAllAccountTypes,
  getAccountTypeById,
  updateAccountType,
  deleteAccountType,
};

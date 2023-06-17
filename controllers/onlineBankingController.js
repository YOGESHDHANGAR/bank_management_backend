const OnlineBanking = require("../models/onlineBankingModel");

// Create a new online banking account
const createOnlineBankingAccount = async (req, res) => {
  try {
    const { customerId, username, password } = req.body;

    // Create a new online banking account using the OnlineBanking model
    const onlineBankingAccount = await OnlineBanking.create({
      customerId,
      username,
      password,
    });

    res.status(201).json(onlineBankingAccount);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Server Error" });
  }
};

// Get online banking account by customer ID
const getOnlineBankingAccountByCustomerId = async (req, res) => {
  try {
    const customerId = req.params.id;

    // Find the online banking account for the specified customer ID using the OnlineBanking model
    const onlineBankingAccount = await OnlineBanking.findOne({
      where: { customerId },
    });

    if (!onlineBankingAccount) {
      return res
        .status(404)
        .json({ error: "Online banking account not found" });
    }

    res.status(200).json(onlineBankingAccount);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Server Error" });
  }
};

// Update online banking account
const updateOnlineBankingAccount = async (req, res) => {
  try {
    const { username, password } = req.body;
    const { id } = req.params;

    // Find the online banking account by ID using the OnlineBanking model
    const onlineBankingAccount = await OnlineBanking.findByPk(id);

    if (!onlineBankingAccount) {
      return res
        .status(404)
        .json({ error: "Online banking account not found" });
    }

    // Update the online banking account
    onlineBankingAccount.username = username;
    onlineBankingAccount.password = password;

    await onlineBankingAccount.save();

    res.status(200).json(onlineBankingAccount);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Server Error" });
  }
};

// Delete online banking account
const deleteOnlineBankingAccount = async (req, res) => {
  try {
    const { id } = req.params;

    // Find the online banking account by ID using the OnlineBanking model
    const onlineBankingAccount = await OnlineBanking.findByPk(id);

    if (!onlineBankingAccount) {
      return res
        .status(404)
        .json({ error: "Online banking account not found" });
    }

    // Delete the online banking account
    await onlineBankingAccount.destroy();

    res
      .status(200)
      .json({ message: "Online banking account deleted successfully" });
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Server Error" });
  }
};

module.exports = {
  createOnlineBankingAccount,
  getOnlineBankingAccountByCustomerId,
  updateOnlineBankingAccount,
  deleteOnlineBankingAccount,
};

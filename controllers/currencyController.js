const CurrencyModel = require("../models/currencyModel");

// Create a new currency
const createCurrency = async (req, res) => {
  try {
    // Extract necessary data from the request body
    const { currencyCode, currencyName } = req.body;

    // Create a new currency using the CurrencyModel
    const currency = await CurrencyModel.createCurrency(
      currencyCode,
      currencyName
    );

    // Return the created currency in the response
    res.status(201).json(currency);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Server Error" });
  }
};

// Get currency details
const getCurrencyDetails = async (req, res) => {
  try {
    // Extract the currency ID from the request parameters
    const currencyId = req.params.id;

    // Get the currency details using the CurrencyModel
    const currency = await CurrencyModel.getCurrencyDetails(currencyId);

    // Check if the currency exists
    if (!currency) {
      return res.status(404).json({ message: "Currency not found" });
    }

    // Return the currency details in the response
    res.status(200).json(currency);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Server Error" });
  }
};

// Get all currencies
const getAllCurrencies = async (req, res) => {
  try {
    const currencies = await CurrencyModel.findAll();
    res.status(200).json(currencies);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Server Error" });
  }
};

// Update currency details
const updateCurrency = async (req, res) => {
  try {
    // Extract the currency ID and updated data from the request body
    const { currencyId, currencyName } = req.body;

    // Update the currency details using the CurrencyModel
    const updatedCurrency = await CurrencyModel.updateCurrency(
      currencyId,
      currencyName
    );

    // Return the updated currency in the response
    res.status(200).json(updatedCurrency);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Server Error" });
  }
};

// Delete a currency
const deleteCurrency = async (req, res) => {
  try {
    // Extract the currency ID from the request parameters
    const currencyId = req.params.id;

    // Delete the currency using the CurrencyModel
    await CurrencyModel.deleteCurrency(currencyId);

    // Return a success message in the response
    res.status(200).json({ message: "Currency deleted successfully" });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Server Error" });
  }
};

// Export the controller functions
module.exports = {
  createCurrency,
  getCurrencyDetails,
  getAllCurrencies,
  updateCurrency,
  deleteCurrency,
};

const InterestRateModel = require("../models/interestRateModel");

// Create a new interest rate
const createInterestRate = async (req, res) => {
  try {
    // Extract necessary data from the request body
    const { accountTypeId, interestRate, effectiveDate } = req.body;

    // Create a new interest rate using the InterestRateModel
    const interestRateObj = await InterestRateModel.createInterestRate(
      accountTypeId,
      interestRate,
      effectiveDate
    );

    // Return the created interest rate in the response
    res.status(201).json(interestRateObj);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Server Error" });
  }
};

// Get interest rate by account type
const getInterestRateByAccountType = async (req, res) => {
  try {
    // Extract the account type ID from the request parameters
    const accountTypeId = req.params.id;

    // Get the interest rate for the specified account type using the InterestRateModel
    const interestRateObj =
      await InterestRateModel.getInterestRateByAccountType(accountTypeId);

    // Check if the interest rate exists
    if (!interestRateObj) {
      return res.status(404).json({ message: "Interest rate not found" });
    }

    // Return the interest rate in the response
    res.status(200).json(interestRateObj);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Server Error" });
  }
};

const getAllInterestRates = async (req, res) => {
  try {
    const interestRates = await InterestRateModel.findAll();
    res.status(200).json(interestRates);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Server Error" });
  }
};

// Update interest rate
const updateInterestRate = async (req, res) => {
  try {
    // Extract the interest rate ID and updated data from the request body
    const { interestRateId, accountTypeId, interestRate, effectiveDate } =
      req.body;

    // Update the interest rate using the InterestRateModel
    const updatedInterestRateObj = await InterestRateModel.updateInterestRate(
      interestRateId,
      accountTypeId,
      interestRate,
      effectiveDate
    );

    // Return the updated interest rate in the response
    res.status(200).json(updatedInterestRateObj);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Server Error" });
  }
};

// Delete interest rate
const deleteInterestRate = async (req, res) => {
  try {
    // Extract the interest rate ID from the request parameters
    const interestRateId = req.params.id;

    // Delete the interest rate using the InterestRateModel
    await InterestRateModel.deleteInterestRate(interestRateId);

    // Return a success message in the response
    res.status(200).json({ message: "Interest rate deleted successfully" });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Server Error" });
  }
};

// Export the controller functions
module.exports = {
  createInterestRate,
  getInterestRateByAccountType,
  getAllInterestRates,
  updateInterestRate,
  deleteInterestRate,
};

const LoanModel = require("../models/loanModel");

// Create a new loan
const createLoan = async (req, res) => {
  try {
    // Extract necessary data from the request body
    const { customerId, loanAmount, interestRate, duration } = req.body;

    // Create a new loan using the LoanModel
    const loanObj = await LoanModel.createLoan(
      customerId,
      loanAmount,
      interestRate,
      duration
    );

    // Return the created loan in the response
    res.status(201).json(loanObj);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Server Error" });
  }
};

// Get loan by customer ID
const getLoanByCustomerId = async (req, res) => {
  try {
    // Extract the customer ID from the request parameters
    const customerId = req.params.id;

    // Get the loan for the specified customer ID using the LoanModel
    const loanObj = await LoanModel.getLoanByCustomerId(customerId);

    // Check if the loan exists
    if (!loanObj) {
      return res.status(404).json({ message: "Loan not found" });
    }

    // Return the loan in the response
    res.status(200).json(loanObj);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Server Error" });
  }
};

// Get all loans
const getAllLoans = async (req, res) => {
  try {
    const loans = await Loan.findAll();
    res.status(200).json(loans);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Server Error" });
  }
};

// Update loan
const updateLoan = async (req, res) => {
  try {
    // Extract the loan ID and updated data from the request body
    const { loanId, customerId, loanAmount, interestRate, duration } = req.body;

    // Update the loan using the LoanModel
    const updatedLoanObj = await LoanModel.updateLoan(
      loanId,
      customerId,
      loanAmount,
      interestRate,
      duration
    );

    // Return the updated loan in the response
    res.status(200).json(updatedLoanObj);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Server Error" });
  }
};

// Delete loan
const deleteLoan = async (req, res) => {
  try {
    // Extract the loan ID from the request parameters
    const loanId = req.params.id;

    // Delete the loan using the LoanModel
    await LoanModel.deleteLoan(loanId);

    // Return a success message in the response
    res.status(200).json({ message: "Loan deleted successfully" });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Server Error" });
  }
};

// Export the controller functions
module.exports = {
  createLoan,
  getLoanByCustomerId,
  getAllLoans,
  updateLoan,
  deleteLoan,
};

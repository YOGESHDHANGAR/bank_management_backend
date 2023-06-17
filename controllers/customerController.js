const CustomerModel = require("../models/customerModel");

// Create a new customer
const createCustomer = async (req, res) => {
  try {
    // Extract necessary data from the request body
    const { firstName, lastName, email, phoneNumber } = req.body;

    // Create a new customer using the CustomerModel
    const customer = await CustomerModel.createCustomer(
      firstName,
      lastName,
      email,
      phoneNumber
    );

    // Return the created customer in the response
    res.status(201).json(customer);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Server Error" });
  }
};

// Get customer details
const getCustomerDetails = async (req, res) => {
  try {
    // Extract the customer ID from the request parameters
    const customerId = req.params.id;

    // Get the customer details using the CustomerModel
    const customer = await CustomerModel.getCustomerDetails(customerId);

    // Check if the customer exists
    if (!customer) {
      return res.status(404).json({ message: "Customer not found" });
    }

    // Return the customer details in the response
    res.status(200).json(customer);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Server Error" });
  }
};

// Get all customers
const getAllCustomers = async (req, res) => {
  try {
    const customers = await CustomerModel.findAll();
    res.status(200).json(customers);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Server Error" });
  }
};

// Update customer details
const updateCustomer = async (req, res) => {
  try {
    // Extract the customer ID and updated data from the request body
    const { customerId, firstName, lastName, email, phoneNumber } = req.body;

    // Update the customer details using the CustomerModel
    const updatedCustomer = await CustomerModel.updateCustomer(
      customerId,
      firstName,
      lastName,
      email,
      phoneNumber
    );

    // Return the updated customer in the response
    res.status(200).json(updatedCustomer);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Server Error" });
  }
};

// Delete a customer
const deleteCustomer = async (req, res) => {
  try {
    // Extract the customer ID from the request parameters
    const customerId = req.params.id;

    // Delete the customer using the CustomerModel
    await CustomerModel.deleteCustomer(customerId);

    // Return a success message in the response
    res.status(200).json({ message: "Customer deleted successfully" });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Server Error" });
  }
};

// Export the controller functions
module.exports = {
  createCustomer,
  getCustomerDetails,
  getAllCustomers,
  updateCustomer,
  deleteCustomer,
};

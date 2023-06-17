const AddressModel = require("../models/addressModel");

// Create a new address
const createAddress = async (req, res) => {
  try {
    // Extract necessary data from the request body
    const { customerId, street, city, state, postalCode } = req.body;

    // Create a new address using the AddressModel
    const address = await AddressModel.createAddress(
      customerId,
      street,
      city,
      state,
      postalCode
    );

    // Return the created address in the response
    res.status(201).json(address);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Server Error" });
  }
};

// Get address details
const getAddressDetails = async (req, res) => {
  try {
    // Extract the address ID from the request parameters
    const addressId = req.params.id;

    // Get the address details using the AddressModel
    const address = await AddressModel.getAddressDetails(addressId);

    // Check if the address exists
    if (!address) {
      return res.status(404).json({ message: "Address not found" });
    }

    // Return the address details in the response
    res.status(200).json(address);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Server Error" });
  }
};

// Get all addresses
const getAllAddresses = async (req, res) => {
  try {
    const addresses = await AddressModel.findAll();
    res.status(200).json(addresses);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Server Error" });
  }
};

// Update address details
const updateAddress = async (req, res) => {
  try {
    // Extract the address ID and updated data from the request body
    const { addressId, street, city, state, postalCode } = req.body;

    // Update the address details using the AddressModel
    const updatedAddress = await AddressModel.updateAddress(
      addressId,
      street,
      city,
      state,
      postalCode
    );

    // Return the updated address in the response
    res.status(200).json(updatedAddress);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Server Error" });
  }
};

// Delete an address
const deleteAddress = async (req, res) => {
  try {
    // Extract the address ID from the request parameters
    const addressId = req.params.id;

    // Delete the address using the AddressModel
    await AddressModel.deleteAddress(addressId);

    // Return a success message in the response
    res.status(200).json({ message: "Address deleted successfully" });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Server Error" });
  }
};

// Export the controller functions
module.exports = {
  createAddress,
  getAddressDetails,
  getAllAddresses,
  updateAddress,
  deleteAddress,
};

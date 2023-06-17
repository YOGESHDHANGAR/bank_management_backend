const ContactModel = require("../models/contactModel");

// Create a new contact
const createContact = async (req, res) => {
  try {
    // Extract necessary data from the request body
    const { customerId, contactType, contactDetails } = req.body;

    // Create a new contact using the ContactModel
    const contact = await ContactModel.createContact(
      customerId,
      contactType,
      contactDetails
    );

    // Return the created contact in the response
    res.status(201).json(contact);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Server Error" });
  }
};

// Get contact details
const getContactDetails = async (req, res) => {
  try {
    // Extract the contact ID from the request parameters
    const contactId = req.params.id;

    // Get the contact details using the ContactModel
    const contact = await ContactModel.getContactDetails(contactId);

    // Check if the contact exists
    if (!contact) {
      return res.status(404).json({ message: "Contact not found" });
    }

    // Return the contact details in the response
    res.status(200).json(contact);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Server Error" });
  }
};

// Get all contacts
const getAllContacts = async (req, res) => {
  try {
    const contacts = await ContactModel.findAll();
    res.status(200).json(contacts);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Server Error" });
  }
};

// Update contact details
const updateContact = async (req, res) => {
  try {
    // Extract the contact ID and updated data from the request body
    const { contactId, contactDetails } = req.body;

    // Update the contact details using the ContactModel
    const updatedContact = await ContactModel.updateContact(
      contactId,
      contactDetails
    );

    // Return the updated contact in the response
    res.status(200).json(updatedContact);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Server Error" });
  }
};

// Delete a contact
const deleteContact = async (req, res) => {
  try {
    // Extract the contact ID from the request parameters
    const contactId = req.params.id;

    // Delete the contact using the ContactModel
    await ContactModel.deleteContact(contactId);

    // Return a success message in the response
    res.status(200).json({ message: "Contact deleted successfully" });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Server Error" });
  }
};

// Export the controller functions
module.exports = {
  createContact,
  getContactDetails,
  getAllContacts,
  updateContact,
  deleteContact,
};

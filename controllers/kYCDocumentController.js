const KYCDocument = require("../models/kYCDocumentModel");

// Create a new KYC document
const createKYCDocument = async (req, res) => {
  try {
    // Extract necessary data from the request body
    const { customerId, documentType, documentNumber } = req.body;

    // Create a new KYC document using the KYCDocument model
    const kycDocument = await KYCDocument.create({
      customerId,
      documentType,
      documentNumber,
    });

    // Return the created KYC document in the response
    res.status(201).json(kycDocument);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Server Error" });
  }
};

// Get all KYC documents
const getAllKYCDocuments = async (req, res) => {
  try {
    const kycDocuments = await KYCDocument.findAll();
    res.status(200).json(kycDocuments);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Server Error" });
  }
};

// Get KYC document by ID
const getKYCDocumentById = async (req, res) => {
  try {
    const { id } = req.params;
    const kycDocument = await KYCDocument.findByPk(id);

    if (!kycDocument) {
      return res.status(404).json({ message: "KYC document not found" });
    }

    res.status(200).json(kycDocument);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Server Error" });
  }
};

// Update KYC document by ID
const updateKYCDocument = async (req, res) => {
  try {
    const { id } = req.params;
    const { documentType, documentNumber } = req.body;
    const updatedKYCDocument = await KYCDocument.update(
      { documentType, documentNumber },
      { where: { id } }
    );

    if (updatedKYCDocument[0] === 0) {
      return res.status(404).json({ message: "KYC document not found" });
    }

    res.status(200).json({ message: "KYC document updated successfully" });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Server Error" });
  }
};

// Delete KYC document by ID
const deleteKYCDocument = async (req, res) => {
  try {
    const { id } = req.params;
    const deletedKYCDocument = await KYCDocument.destroy({ where: { id } });

    if (deletedKYCDocument === 0) {
      return res.status(404).json({ message: "KYC document not found" });
    }

    res.status(200).json({ message: "KYC document deleted successfully" });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Server Error" });
  }
};

// Export the controller functions
module.exports = {
  createKYCDocument,
  getAllKYCDocuments,
  getKYCDocumentById,
  updateKYCDocument,
  deleteKYCDocument,
};

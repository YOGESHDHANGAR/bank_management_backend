// Import the ThirdPartyService model
const ThirdPartyService = require("../models/thirdPartyServiceModel");

// Get all third-party services
const getAllThirdPartyServices = async (req, res) => {
  try {
    const thirdPartyServices = await ThirdPartyService.findAll();
    res.status(200).json(thirdPartyServices);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Server Error" });
  }
};

// Get a specific third-party service by ID
const getThirdPartyServiceById = async (req, res) => {
  try {
    const { id } = req.params;
    const thirdPartyService = await ThirdPartyService.findByPk(id);

    if (!thirdPartyService) {
      return res.status(404).json({ message: "Third-party service not found" });
    }

    res.status(200).json(thirdPartyService);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Server Error" });
  }
};

// Create a new third-party service
const createThirdPartyService = async (req, res) => {
  try {
    const { name, description, apiKey } = req.body;
    const thirdPartyService = await ThirdPartyService.create({
      name,
      description,
      apiKey,
    });
    res.status(201).json(thirdPartyService);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Server Error" });
  }
};

// Update a specific third-party service by ID
const updateThirdPartyService = async (req, res) => {
  try {
    const { id } = req.params;
    const { name, description, apiKey } = req.body;
    const updatedThirdPartyService = await ThirdPartyService.update(
      { name, description, apiKey },
      { where: { id } }
    );

    if (updatedThirdPartyService[0] === 0) {
      return res.status(404).json({ message: "Third-party service not found" });
    }

    res
      .status(200)
      .json({ message: "Third-party service updated successfully" });
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Server Error" });
  }
};

// Delete a specific third-party service by ID
const deleteThirdPartyService = async (req, res) => {
  try {
    const { id } = req.params;
    const deletedThirdPartyService = await ThirdPartyService.destroy({
      where: { id },
    });

    if (deletedThirdPartyService === 0) {
      return res.status(404).json({ message: "Third-party service not found" });
    }

    res
      .status(200)
      .json({ message: "Third-party service deleted successfully" });
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Server Error" });
  }
};

// Export the controller functions
module.exports = {
  getAllThirdPartyServices,
  getThirdPartyServiceById,
  createThirdPartyService,
  updateThirdPartyService,
  deleteThirdPartyService,
};

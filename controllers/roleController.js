const RoleModel = require("../models/roleModel");

// Get all roles
const getAllRoles = async (req, res) => {
  try {
    // Get all roles using the RoleModel
    const roles = await RoleModel.getAllRoles();

    // Return the roles in the response
    res.status(200).json(roles);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Server Error" });
  }
};

// Get a role by ID
const getRoleById = async (req, res) => {
  try {
    // Extract the role ID from the request parameters
    const roleId = req.params.id;

    // Get the role by ID using the RoleModel
    const role = await RoleModel.getRoleById(roleId);

    // If the role is found, return it in the response
    if (role) {
      res.status(200).json(role);
    } else {
      res.status(404).json({ message: "Role not found" });
    }
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Server Error" });
  }
};

// Create a new role
const createRole = async (req, res) => {
  try {
    // Extract necessary data from the request body
    const { name, description } = req.body;

    // Create a new role using the RoleModel
    const role = await RoleModel.createRole(name, description);

    // Return the created role in the response
    res.status(201).json(role);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Server Error" });
  }
};

// Update a role
const updateRole = async (req, res) => {
  try {
    // Extract the role ID from the request parameters
    const roleId = req.params.id;

    // Extract updated data from the request body
    const { name, description } = req.body;

    // Update the role using the RoleModel
    const updatedRole = await RoleModel.updateRole(roleId, name, description);

    // If the role is updated successfully, return it in the response
    if (updatedRole) {
      res.status(200).json(updatedRole);
    } else {
      res.status(404).json({ message: "Role not found" });
    }
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Server Error" });
  }
};

// Delete a role
const deleteRole = async (req, res) => {
  try {
    // Extract the role ID from the request parameters
    const roleId = req.params.id;

    // Delete the role using the RoleModel
    const deletedRole = await RoleModel.deleteRole(roleId);

    // If the role is deleted successfully, return a success message in the response
    if (deletedRole) {
      res.status(200).json({ message: "Role deleted successfully" });
    } else {
      res.status(404).json({ message: "Role not found" });
    }
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Server Error" });
  }
};

// Export the controller functions
module.exports = {
  getAllRoles,
  getRoleById,
  createRole,
  updateRole,
  deleteRole,
};

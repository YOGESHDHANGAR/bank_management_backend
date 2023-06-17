const UserModel = require("../models/userModel");

// Get all users
const getAllUsers = async (req, res) => {
  try {
    // Get all users using the UserModel
    const users = await UserModel.getAllUsers();

    // Return the users in the response
    res.status(200).json(users);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Server Error" });
  }
};

// Get a user by ID
const getUserById = async (req, res) => {
  try {
    // Extract the user ID from the request parameters
    const userId = req.params.id;

    // Get the user by ID using the UserModel
    const user = await UserModel.getUserById(userId);

    // If the user is found, return it in the response
    if (user) {
      res.status(200).json(user);
    } else {
      res.status(404).json({ message: "User not found" });
    }
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Server Error" });
  }
};

// Create a new user
const createUser = async (req, res) => {
  try {
    // Extract necessary data from the request body
    const { username, email, password } = req.body;

    // Create a new user using the UserModel
    const user = await UserModel.createUser(username, email, password);

    // Return the created user in the response
    res.status(201).json(user);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Server Error" });
  }
};

// Update a user
const updateUser = async (req, res) => {
  try {
    // Extract the user ID from the request parameters
    const userId = req.params.id;

    // Extract updated data from the request body
    const { username, email, password } = req.body;

    // Update the user using the UserModel
    const updatedUser = await UserModel.updateUser(
      userId,
      username,
      email,
      password
    );

    // If the user is updated successfully, return it in the response
    if (updatedUser) {
      res.status(200).json(updatedUser);
    } else {
      res.status(404).json({ message: "User not found" });
    }
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Server Error" });
  }
};

// Delete a user
const deleteUser = async (req, res) => {
  try {
    // Extract the user ID from the request parameters
    const userId = req.params.id;

    // Delete the user using the UserModel
    const deletedUser = await UserModel.deleteUser(userId);

    // If the user is deleted successfully, return a success message in the response
    if (deletedUser) {
      res.status(200).json({ message: "User deleted successfully" });
    } else {
      res.status(404).json({ message: "User not found" });
    }
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Server Error" });
  }
};

// Export the controller functions
module.exports = {
  getAllUsers,
  getUserById,
  createUser,
  updateUser,
  deleteUser,
};

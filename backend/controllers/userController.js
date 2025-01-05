const middleware = require("../utils/middleware");
const User = require("../models/userModel");
const generateToken = require("../utils/generateToken");

const loginUser = middleware.asyncHandler(async (req, res) => {
  const { email, password } = req.body;
  const user = await User.findOne({ email });

  if (user && (await user.matchPassword(password))) {
    generateToken(res, user._id);

    res.json({
      _id: user._id,
      name: user.name,
      email: user.email,
      isAdmin: user.isAdmin,
    });
  } else {
    res.status(401);
    throw new Error("Invalid email or password");
  }
});

const registerUser = middleware.asyncHandler(async (req, res) => {
  const { name, email, password } = req.body;

  const userExist = await User.findOne({ email });

  if (userExist) {
    res.status(400);
    throw new Error("user already exists");
  }
  console.log(userExist);
  const user = await User.create({
    name,
    email,
    password,
  });

  if (user) {
    generateToken(res, user._id);
    res.status(201).json({
      _id: user._id,
      name: user.name,
      email: user.email,
      isAdmin: user.isAdmin,
    });
  } else {
    res.status(404);
    throw new Error("Invalid user data");
  }
});

const logoutUser = middleware.asyncHandler(async (req, res) => {
  res.cookie("jwt", "", {
    httpOnly: true,
    expires: new Date(0),
  });

  res.status(200).json({ message: "logged out Successfully" });
});

const getUserProfile = middleware.asyncHandler(async (req, res) => {
  res.send("get user profile");
});

const updateUserProfile = middleware.asyncHandler(async (req, res) => {
  res.send("update user profile");
});

const getUsers = middleware.asyncHandler(async (req, res) => {
  res.send("get user");
});

const deleteUser = middleware.asyncHandler(async (req, res) => {
  res.send("delete user");
});

const getUserById = middleware.asyncHandler(async (req, res) => {
  res.send("get user by id");
});

const updateUser = middleware.asyncHandler(async (req, res) => {
  res.send("update user");
});

module.exports = {
  loginUser,
  registerUser,
  logoutUser,
  getUserProfile,
  updateUserProfile,
  getUsers,
  deleteUser,
  getUserById,
  updateUser,
};

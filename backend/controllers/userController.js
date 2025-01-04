const middleware = require("../utils/middleware");
const User = require("../models/userModel");
const jwt = require("jsonwebtoken");
const loginUser = middleware.asyncHandler(async (req, res) => {
  const { email, password } = req.body;
  const user = await User.findOne({ email });

  if (user && (await user.matchPassword(password))) {
    const token = jwt.sign({ userId: user._id }, process.env.SECRET, {
      expiresIn: "1d",
    });

    // set JWT on HTTP-only cookie
    res.cookie("jwt", token, {
      httpOnly: true,
      secure: process.env.NODE_ENV !== "development",
      sameSite: "Strict",
      maxAge: "1d",
    });

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
  res.send("register user");
});

const logoutUser = middleware.asyncHandler(async (req, res) => {
  res.send("logout user");
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

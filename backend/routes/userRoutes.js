const express = require("express");
const router = express.Router();
const {
  loginUser,
  registerUser,
  logoutUser,
  getUserProfile,
  updateUserProfile,
  getUsers,
  deleteUser,
  getUserById,
  updateUser,
} = require("../controllers/userController");

router.route("/").post(registerUser).get(getUsers);
router.post("/logout", logoutUser);
router.post("/login", loginUser);
router.route("/profile").get(getUserProfile).put(updateUserProfile);
router.route("/:id").get(getUserById).delete(deleteUser).put(updateUser);

module.exports = router;

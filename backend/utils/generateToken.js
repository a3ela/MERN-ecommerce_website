const jwt = require("jsonwebtoken");
require("dotenv").config();

console.log('secret key: ',process.env.SECRET);
const generateToken = (res, userId) => {
  const token = jwt.sign({ userId }, process.env.SECRET, {
    expiresIn: "1d",
  });

  // set JWT on HTTP-only cookie
  res.cookie("token", token, {
    httpOnly: true,
    secure: false, // Ensure secure cookies in production
    sameSite: "lax", // Adjust based on environment
  });

  console.log("Generated token:", token);
};

module.exports = generateToken;

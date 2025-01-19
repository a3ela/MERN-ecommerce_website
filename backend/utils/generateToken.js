const jwt = require("jsonwebtoken");

const generateToken = (res, userId) => {
  const token = jwt.sign({ userId }, process.env.SECRET, {
    expiresIn: "1d",
  });

  // set JWT on HTTP-only cookie
  res.cookie("token", token, {
    httpOnly: true,
    secure: process.env.NODE_ENV === "production", // Ensure secure cookies in production
    sameSite: process.env.NODE_ENV === "production" ? "strict" : "lax", // Adjust based on environment
  });
};

module.exports = generateToken;

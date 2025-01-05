const jwt = require("jsonwebtoken");
const User = require("../models/userModel");

const asyncHandler = (fn) => (req, res, next) => {
  Promise.resolve(fn(req, res, next)).catch(next);
};

const notFound = (req, res, next) => {
  const error = new Error(`Not Found - ${req.originalUrl}`);
  res.status(404);
  next(error);
};

const errorHandler = (err, req, res, next) => {
  let statusCode = res.statusCode === 200 ? 500 : res.statusCode;
  let message = err.message;

  if (err.name === "CastError" && err.kind === "ObjectId") {
    message = "Product not Found";
    statusCode = 404;
  }

  res.status(statusCode).json({
    message,
    stack: process.env.NODE_ENV === "production" ? "nah uh" : err.stack,
  });
};

const protect = asyncHandler(async (req, res, next) => {
  let token;

  token = req.cookies.jwt;

  if (token) {
    try {
      const decoded = jwt.verify(token, process.env.SECRET);
      req.user = await User.findById(decoded.userId).select("-password");
    } catch (error) {
      console.log(error);
      res.status(401);
      throw new Error("Token not recognized!");
    }

    next();
  } else {
    res.status(401);
    throw new Error("None authorized token");
  }
});

const admin = (req, res, next) => {
  if (req.user && req.user.isAdmin) {
    next();
  } else {
    res.status(401);
    throw new Error("not authorized");
  }
};

module.exports = { asyncHandler, notFound, errorHandler, protect, admin };

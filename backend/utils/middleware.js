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

module.exports = { asyncHandler, notFound, errorHandler };

const middleware = require("../utils/middleware");
const Product = require("../models/productModel");

const getProducts = middleware.asyncHandler(async (req, res) => {
  const products = await Product.find({});
  res.json(products);
});

const getProductsById = middleware.asyncHandler(async (req, res) => {
  const product = await Product.findById(req.params.id);

  if (!product) {
    throw new Error("Product Not Found");
  }
  res.json(product);
});

module.exports = { getProducts, getProductsById };

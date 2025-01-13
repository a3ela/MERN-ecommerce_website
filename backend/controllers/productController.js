const asyncHandler = require("../middleware/asyncHandler");
const Product = require("../models/productModel");

const getProducts = asyncHandler(async (req, res) => {
  const products = await Product.find({});
  res.json(products);
});

const getProductsById = asyncHandler(async (req, res) => {
  const product = await Product.findById(req.params.id);

  if (!product) {
    throw new Error("Product Not Found");
  }
  res.json(product);
});

module.exports = { getProducts, getProductsById };

const routes = require("express").Router();
const {
  getProducts,
  getProductsById,
  createProduct,
  updateProduct,
} = require("../controllers/productController");
const { protect, admin } = require("../middleware/authMiddleware");

routes.route("/").get(getProducts).post(protect, admin, createProduct);
routes.route("/:id").get(getProductsById).put(protect, admin, updateProduct);

module.exports = routes;

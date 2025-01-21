const routes = require("express").Router();
const {
  getProducts,
  getProductsById,
  createProduct,
  updateProduct,
  deleteProduct,
} = require("../controllers/productController");
const { protect, admin } = require("../middleware/authMiddleware");

routes.route("/").get(getProducts).post(protect, admin, createProduct);
routes
  .route("/:id")
  .get(getProductsById)
  .put(protect, admin, updateProduct)
  .delete(protect, admin, deleteProduct);

module.exports = routes;

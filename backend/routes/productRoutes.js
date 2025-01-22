const routes = require("express").Router();
const {
  getProducts,
  getProductsById,
  createProduct,
  updateProduct,
  deleteProduct,
  createProductReview,
  getTopProducts,
} = require("../controllers/productController");
const { protect, admin } = require("../middleware/authMiddleware");

routes.route("/").get(getProducts).post(protect, admin, createProduct);
routes.get("/top", getTopProducts);
routes
  .route("/:id")
  .get(getProductsById)
  .put(protect, admin, updateProduct)
  .delete(protect, admin, deleteProduct);
routes.route("/:id/reviews").post(protect, createProductReview);

module.exports = routes;

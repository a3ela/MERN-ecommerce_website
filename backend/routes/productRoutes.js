const routes = require("express").Router();
const productController = require("../controllers/productController");

routes.route("/").get(productController.getProducts);
routes.route("/:id").get(productController.getProductsById);

module.exports = routes;

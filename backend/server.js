const express = require("express");
require("dotenv").config();
const app = express();
const PORT = process.env.PORT;
const products = require("./products");
const connectDB = require("./config/db");
const cors = require("cors");

connectDB();

app.use(cors());
app.use(express.json());

app.get("/api", (req, res) => {
  res.send("API is running");
});

app.get("/api/products", (req, res) => {
  res.json(products);
});

app.get("/api/products/:id", (req, res) => {
  const product = products.find((p) => p._id === req.params.id);
  res.json(product);
});

app.listen(PORT, () => console.log(`Server is running on port ${PORT}`));

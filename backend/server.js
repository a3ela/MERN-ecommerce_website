const express = require("express");
require("dotenv").config();
const app = express();
const PORT = process.env.PORT;
const connectDB = require("./config/db");
const cors = require("cors");
const logger = require("./utils/logger");
const middleware = require("./utils/middleware");
const cookieParser = require("cookie-parser");

const productRoutes = require("./routes/productRoutes");
const userRoutes = require("./routes/userRoutes");
const orderRoutes = require("./routes/orderRoutes");

connectDB();

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cookieParser());

// routes
app.use("/api/products", productRoutes);
app.use("/api/users", userRoutes);
app.use("/api/orders", orderRoutes);

app.use(middleware.notFound);
app.use(middleware.errorHandler);

app.listen(PORT, () => logger.info(`Server is running on port ${PORT}`));

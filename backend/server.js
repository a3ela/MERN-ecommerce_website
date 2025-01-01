const express = require("express");
require("dotenv").config();
const app = express();
const PORT = process.env.PORT;
const connectDB = require("./config/db");
const cors = require("cors");
const logger = require("./utils/logger");
const middleware = require("./utils/middleware");
const productRoutes = require("./routes/productRoutes");
connectDB();

app.use(cors());
app.use(express.json());

// routes
app.use("/api/products", productRoutes);
app.use(middleware.notFound);
app.use(middleware.errorHandler);

app.listen(PORT, () => logger.info(`Server is running on port ${PORT}`));

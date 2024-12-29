const mongoose = require("mongoose");
require("dotenv").config();

const connectDB = async () => {
  try {
    console.log(process.env.MONGO_DB_URI);
    const conn = await mongoose.connect(process.env.MONGO_DB_URI);
    console.log(`mongodb connected to: ${conn.connection.host}`);
  } catch (err) {
    console.log("Error:", err);
    process.exit(1);
  }
};

module.exports = connectDB;

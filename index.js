require("dotenv").config();
const express = require("express");
const connectDB = require("./config/db");

const productRoutes = require("./routes/productRoutes");

const app = express();

app.use(express.json());

connectDB();

app.use("/products", productRoutes);

app.listen(3000, () => {
  console.log("Server running on port 3000");
});
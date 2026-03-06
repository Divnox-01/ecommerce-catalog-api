require("dotenv").config();
const express = require("express");
const connectDB = require("./config/db");

const productRoutes = require("./routes/productRoutes");

const app = express();

app.use(express.json());

connectDB();

// root route
app.get("/", (req, res) => {
  res.send("E-commerce Catalog API is running 🚀");
});

// product routes
app.use("/products", productRoutes);

const PORT = process.env.PORT || 3000;

app.listen(PORT, "0.0.0.0", () => {
  console.log(`Server running on port ${PORT}`);
});
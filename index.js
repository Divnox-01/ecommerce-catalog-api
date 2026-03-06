require("dotenv").config();
const express = require("express");
const connectDB = require("./config/db");

const productRoutes = require("./routes/productRoutes");

const app = express();

app.use(express.json());

connectDB();

app.use("/products", productRoutes);

// PORT for Render / production
const PORT = process.env.PORT || 3000;

// start server
app.listen(PORT, "0.0.0.0", () => {
  console.log(`Server running on port ${PORT}`);
});

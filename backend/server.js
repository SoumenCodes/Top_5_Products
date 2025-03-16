const express = require("express");
const cors = require("cors");
const pool = require("./db"); // Import the database connection
require("dotenv").config();

const app = express();
app.use(cors());
app.use(express.json()); // Parse JSON requests

const PORT = process.env.PORT || 3000;

// ✅ API to get all products
app.get("/allproducts", async (req, res) => {
  try {
    const result = await pool.query("SELECT * FROM products");
    res.json(result.rows); // Send all products as response
  } catch (err) {
    console.error("❌ Error fetching products:", err);
    res.status(500).json({ error: "Internal Server Error" });
  }
});

// ✅ API to add a new product
app.post("/addproduct", async (req, res) => {
  try {
    const { name, category, price, buy_link } = req.body;

    if (!name || !category || !price || !buy_link) {
      return res.status(400).json({ error: "All fields are required" });
    }

    const result = await pool.query(
      "INSERT INTO products (name, category, price, buy_link) VALUES ($1, $2, $3, $4) RETURNING *",
      [name, category, price, buy_link]
    );

    res.status(201).json(result.rows[0]);
  } catch (err) {
    console.error("❌ Error adding product:", err);
    res.status(500).json({ error: "Internal Server Error" });
  }
});

// ✅ API to delete a product
app.delete("/deleteproduct/:id", async (req, res) => {
  try {
    const { id } = req.params;
    await pool.query("DELETE FROM products WHERE id = $1", [id]);
    res.json({ message: "Product deleted successfully" });
  } catch (err) {
    console.error("❌ Error deleting product:", err);
    res.status(500).json({ error: "Internal Server Error" });
  }
});

// ================================= phones  under 20 =============================
app.get("/phonesunder20k", async (req, res) => {
  try {
    const result = await pool.query("SELECT * FROM phonesunder20k");

    console.log("result =", result); // ✅ Logs the result to the console

    res.json(result.rows); // ✅ Sends JSON response to client
  } catch (error) {
    console.error("Error fetching phones:", error);
    res.status(500).json({ error: "Internal Server Error" });
  }
});

// ========================== phones under 30 =============================
app.get("/phonesunder30k", async (req, res) => {
  try {
    const result = await pool.query("SELECT * FROM phonesunder30k");
    res.json(result.rows);
  } catch (error) {
    console.error("Error fetching phones:", error);
    res.status(500).json({ error: "Internal Server Error" });
  }
});

app.post("/addphonesunder30k", async (req, res) => {
  try {
    const { brand, model, price, release_date, image_url } = req.body;
    if (!brand || !model || !price || !release_date || !image_url) {
      return res.status(400).json({ error: "All the fields are required" });
    }

    const result = await pool.query(
      "INSERT INTO phonesunder30k (brand , model ,price,release_date,image_url) VALUES ($1,$2,$3,$4,$5) RETURNING*",
      [brand, model, price, release_date, image_url]
    );

    res.status(201).json({
      success: true,
      message: "Phone added successfully",
      data: result.rows[0],
    });
  } catch (error) {
    console.error("❌ Error inserting data:", error);
    res.status(500).json({ success: false, message: "Internal Server Error" });
  }
});

app.listen(PORT, () => {
  console.log(`🚀 Server running on http://localhost:${PORT}`);
});

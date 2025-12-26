const express = require("express");
const mysql = require("mysql2");
const cors = require("cors");

const app = express();
const port = 3000;

// MySQL connection setup (XAMPP)
const db = mysql.createConnection({
    host: "localhost",
    user: "root",
    password: "",
    database: "menu_db",
});

db.connect((err) => {
    if (err) {
        console.error("Database connection failed:", err);
    } else {
        console.log("Connected to the database");
    }
});

// Middleware
app.use(cors());
app.use(express.json());

// GET all products
app.get("/api/products", (req, res) => {
    db.query(
        "SELECT id, name, description, price, image_url FROM products ORDER BY id DESC",
        (err, results) => {
            if (err) return res.status(500).json({ error: "Failed to fetch products" });
            res.json(results);
        }
    );
});


// POST add new product (name + price)
app.post("/api/products", (req, res) => {
    const { name, description, price, image_url } = req.body;

    if (!name || price === undefined) {
        return res.status(400).json({ error: "Missing required fields (name, price)" });
    }

    db.query(
        "INSERT INTO products (name, description, price, image_url) VALUES (?, ?, ?, ?)",
        [name, description || "", price, image_url || ""],
        (err) => {
            if (err) return res.status(500).json({ error: "Failed to add product" });
            res.status(201).json({ message: "Product added successfully" });
        }
    );
});


// (optional) DELETE product
app.delete("/api/products/:id", (req, res) => {
    const { id } = req.params;

    db.query("DELETE FROM products WHERE id = ?", [id], (err) => {
        if (err) return res.status(500).json({ error: "Failed to delete product" });
        res.json({ message: "Product deleted successfully" });
    });
});

app.listen(port, () => {
    console.log(`Server is running on http://localhost:${port}`);
});

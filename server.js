
require("dns").setServers(["8.8.8.8", "1.1.1.1"]);

require("dotenv").config();

const express = require("express");
const mongoose = require("mongoose");

const noteRoutes = require("./routes/noteRoutes");

const app = express();
const PORT = 3003;

app.use(express.json());

// Home route
app.get("/", (req, res) => {
    res.send("Notes Management API is running!");
});

// Notes API routes
app.use("/notes", noteRoutes);

// Connect MongoDB and start server
mongoose.connect(process.env.MONGO_URI)
    .then(() => {
        console.log("MongoDB connected successfully!");

        app.listen(PORT, () => {
            console.log(`Server running on port ${PORT}`);
        });
    })
    .catch((error) => {
        console.log("MongoDB connection failed:", error.message);
    });

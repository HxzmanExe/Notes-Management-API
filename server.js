
const express = require("express");
const mongoose = require("mongoose");
const Note = require("./models/Note");
require("dotenv").config();

const app = express();
const PORT = 3003;

app.use(express.json());

// Home route
app.get("/", (req, res) => {
    res.send("Notes Management API is running!");
});

// Create a new note
app.post("/notes", async (req, res) => {
    try {
        const { title, content } = req.body;
        const note = new Note({ title, content });
        await note.save();

        res.status(201).json({
            message: "Note created successfully!",
            note
        });
    } catch (error) {
        res.status(400).json({
            message: error.message
        });
    }
});

// Get all notes
app.get("/notes", async (req, res) => {
    try {
        const notes = await Note.find();

        res.status(200).json({
            message: "Notes retrieved successfully!",
            notes
        });
    } catch (error) {
        res.status(500).json({
            message: error.message
        });
    }
});

// Get a single note by ID
app.get("/notes/:id", async (req, res) => {
    try {
        const note = await Note.findById(req.params.id);

        if (!note) {
            return res.status(404).json({
                message: "Note not found"
            });
        }

        res.status(200).json(note);
    } catch (error) {
        res.status(400).json({
            message: "Invalid note ID"
        });
    }
});

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
// Update a note
app.put("/notes/:id", async (req, res) => {
    try {
        const { title, content } = req.body;

        const note = await Note.findByIdAndUpdate(
            req.params.id,
            { title, content },
            { new: true, runValidators: true }
        );

        if (!note) {
            return res.status(404).json({
                message: "Note not found"
            });
        }

        res.status(200).json({
            message: "Note updated successfully!",
            note
        });
    } catch (error) {
        res.status(400).json({
            message: error.message
        });
    }
});
// Delete a note
app.delete("/notes/:id", async (req, res) => {
    try {
        const note = await Note.findByIdAndDelete(req.params.id);

        if (!note) {
            return res.status(404).json({
                message: "Note not found"
            });
        }

        res.status(200).json({
            message: "Note deleted successfully!"
        });
    } catch (error) {
        res.status(400).json({
            message: error.message
        });
    }
});
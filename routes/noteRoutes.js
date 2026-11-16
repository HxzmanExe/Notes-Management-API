
const express = require("express");
const router = express.Router();

const {
    createNote,
    getAllNotes,
    getNoteById,
    updateNote,
    deleteNote
} = require("../controllers/noteController");

// Create a note
router.post("/", createNote);

// Get all notes
router.get("/", getAllNotes);

// Get a single note
router.get("/:id", getNoteById);

// Update a note
router.put("/:id", updateNote);

// Delete a note
router.delete("/:id", deleteNote);

module.exports = router;

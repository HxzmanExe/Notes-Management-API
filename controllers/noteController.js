
const Note = require("../models/Note");

// Create a new note
exports.createNote = async (req, res) => {
    try {
        const { title, content } = req.body;

        const note = new Note({ title, content });
        await note.save();

        res.status(201).json({
            message: "Note created successfully!",
            note
        });
    } catch (error) {
        res.status(400).json({ message: error.message });
    }
};

// Get all notes
exports.getAllNotes = async (req, res) => {
    try {
        const notes = await Note.find();

        res.status(200).json({
            message: "Notes retrieved successfully!",
            notes
        });
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

// Get a single note
exports.getNoteById = async (req, res) => {
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
};

// Update a note
exports.updateNote = async (req, res) => {
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
        res.status(400).json({ message: error.message });
    }
};

// Delete a note
exports.deleteNote = async (req, res) => {
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
        res.status(400).json({ message: error.message });
    }
};

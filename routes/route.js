const express = require("express");
const router = express.Router();

const get_notes = require("../controllers/notes");
const get_notes_ID = require("../controllers/notesByID");

router.get("/api/notes", get_notes.notes);

router.get("/api/notes/:id", get_notes_ID.notesByID);

module.exports = router;

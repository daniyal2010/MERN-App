const notes = require("../data/notes");

exports.notesByID = async (req, res) => {
  const notesID = req.params.id;
  const note = notes.find((n) => n._id === notesID);
  console.log("note", note);
  res.send(note);
};

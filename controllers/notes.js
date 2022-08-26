const notes = require("../data/notes");

exports.notes = async (req, res) => {
  res.json(notes);
};

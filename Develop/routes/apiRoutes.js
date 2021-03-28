var newNote = require("../db/db");

module.exports = function (app) {
  app.get("/api/notes", function (req, res) {
    res.json(db);
  });

  //what is newNote?
  app.post("/api/notes", function (req, res) {
    var newNote = req.body;
    console.log(newNote);
    newNote.push(newNote);
    res.json(newNote);
  });

  app.delete("/api/notes/:id", function (req, res) {
    var deleteNote = "id" + req.params.id;
    console.log(deleteNote);
    deleteNote.push(deleteNote);
    res.json(deleteNote);
  });
};

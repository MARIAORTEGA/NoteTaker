var db = require("../db/db");
var fs = require("fs");
const router = require("express").Router();

router.get("/api/notes", function (req, res) {
  fs.readFile(__dirname + "../db/db.json", function (err, data) {
    if (err) throw err;
    res.json(JSON.parse(db));
  });
});

router.post("/api/notes", function (req, res) {
  fs.readFile(path.join);
  fs.writeFile(
    path.join(__dirname, "/db/db.json"),
    JSON.stringify(newNote),
    (err) => {
      var newNote = req.body;
      console.log(newNote);
      newNote.push(newNote);
      res.json(newNote);
    }
  );

router.delete("/api/notes/:id", function (req, res) {
  var deleteNote = "id" + req.params.id;
  console.log(deleteNote);
  deleteNote.push(deleteNote);
  res.json(deleteNote);
});

module.exports = router;

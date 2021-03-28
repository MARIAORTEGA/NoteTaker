var tableData = require("Develop/db/db.json");

module.exports = function(app) {
    app.get("/api/notes", function(req, res) {
        res.json(db);
      });

      app.post("/api/notes", function(req, res) {
    //     if (tableData.length < 5) {
    //         tableData.push(req.body);
    //         res.json(true);
    //       }
    //       else {
    //         waitListData.push(req.body);
    //         res.json(false);
    //       }
    //     });
    //     res.json(db);
    //   });
    
      app.delete("/api/notes/:id", function(req, res) {
        res.json(db);
      });
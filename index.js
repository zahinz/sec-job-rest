const express = require("express");
const app = express();
const fs = require("fs");

app.get("/api/jobs", (req, res) => {
  fs.readFile("jobs.json", (err, data) => {
    if (err) throw err;
    const jobs = JSON.parse(data);
    res.json(jobs);
  });
});

app.listen(3000, () => {
  console.log("Server started on port 3000");
});

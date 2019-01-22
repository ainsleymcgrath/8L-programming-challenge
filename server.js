const express = require("express");
const app = express();
const PORT = 9876;
const path = require("path");

// static
app.use(express.static("dist"));

// routes
app.get("/", (req, res) =>
  res.sendFile(path.join(__dirname + "/dist/index.html")),
);

app.listen(PORT, () => console.log(`Example app listening on port ${PORT}!`));

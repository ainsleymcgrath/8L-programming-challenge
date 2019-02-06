require("dotenv").config();

const express = require("express");
const path = require("path");
const fetch = require("node-fetch");

const parseBooksApiResponse = require("./parsers");

// server configuration
const app = express();
app.use(express.static("dist"));
app.listen(process.env.PORT, () =>
  console.log(`Example app listening on port ${process.env.PORT}!`),
);

// route configuration
app.get("/", (req, res) =>
  res.sendFile(path.join(__dirname + "/dist/index.html")),
);

app.get("/search", (req, res) => {
  const options = {
    method: "GET",
    headers: { "Content-Type": "application/json; charset=utf-8" },
  };

  const googleBooksUrl = `${process.env.URL}?key=${process.env.API_KEY}&q=${
    req.query.q
  }`;

  fetch(googleBooksUrl, options)
    .then(res =>
      res.ok ? res.json() : new Error("Books API did not return 200"),
    )
    .then(json => parseBooksApiResponse(json))
    .then(data => {
      res.send({ resultList: data });
    });
});

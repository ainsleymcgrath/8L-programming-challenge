require("dotenv").config();

const express = require("express");
const app = express();
const path = require("path");
const fetch = require("node-fetch");

const parseRawApiResponse = require("./plumbing");

// static
app.use(express.static("dist"));

// the page itself is served from the index route
app.get("/", (req, res) =>
  res.sendFile(path.join(__dirname + "/dist/index.html")),
);

// the client send gets to this route to get search results
app.get("/search", (req, res) => {
  const options = {
    method: "GET",
    headers: { "Content-Type": "application/json; charset=utf-8" },
  };

  const url = `${process.env.URL}?key=${process.env.API_KEY}&q=${req.query.q}`;

  fetch(url, options)
    .then(res =>
      res.ok ? res.json() : new Error("Books API did not return 200"),
    )
    .then(json => parseRawApiResponse(json))
    .then(data => {
      res.send({ resultList: data });
    });
});

app.listen(process.env.PORT, () =>
  console.log(`Example app listening on port ${process.env.PORT}!`),
);

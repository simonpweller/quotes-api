const quotes = require("./quotes");
const { getRandomElement } = require("./utils");

const express = require("express");
const app = express();
const port = process.env.PORT || 3000;

app.get("/", (req, res) => {
  res.json(quotes);
});

app.get("/random", (req, res) => {
  const quote = getRandomElement(quotes);
  res.json(quote);
});

app.listen(port, () => console.log(`Quotes API listening on port ${port}`));

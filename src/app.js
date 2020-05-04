const quotes = require("./quotes");

const express = require("express");
const app = express();
const port = process.env.PORT || 3000;

app.get("/", (req, res) => {
  res.json(quotes.all);
});

app.get("/random", (req, res) => {
  const quote = quotes.random();
  res.json(quote);
});

app.listen(port, () => console.log(`Quotes API listening on port ${port}`));

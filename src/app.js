const quotes = require("./quotes");

const express = require("express");
const app = express();
const port = 3000;

app.get("/", (req, res) => {
  const quote = quotes.random();
  res.json(quote);
});

app.listen(port, () => console.log(`Quotes API listening on port ${port}`));

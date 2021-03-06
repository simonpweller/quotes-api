const express = require("express");
const quotes = require("./quotes");
const { getRandomElement } = require("./utils");

const router = express.Router();

router.get("/", (req, res) => {
  const { category } = req.query;
  const categoryQuotes = category
    ? quotes.filter((quote) => quote.category === category)
    : quotes;
  res.json(categoryQuotes);
});

router.get("/random", (req, res) => {
  const { category } = req.query;
  const categoryQuotes = category
    ? quotes.filter((quote) => quote.category === category)
    : quotes;
  const quote = getRandomElement(categoryQuotes);
  res.json(quote);
});

router.get("/:quoteID", (req, res) => {
  const quoteID = parseInt(req.params.quoteID, 10);

  const quote = quotes[quoteID];
  if (quote !== undefined) {
    res.json(quote);
  } else {
    res
      .status(404)
      .send(`Invalid quoteID; quoteID range: [0, ${quotes.length - 1}]`);
  }
});

module.exports = router;

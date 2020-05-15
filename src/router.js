const express = require("express");
const quotes = require("./quotes");
const { getRandomElement } = require("./utils");

const router = express.Router();

router.get("/", (req, res) => {
  res.json(quotes);
});

router.get("/random", (req, res) => {
  const quote = getRandomElement(quotes);
  res.json(quote);
});

router.get("/:quoteID", (req, res) => {
  const quoteID = parseInt(req.params.quoteID);
  const quotesLength = quotes.length;

  if (0 <= quoteID && quoteID < quotesLength) {
    res.json(quotes[quoteID]);
  } else {
    res.json({
      err: `Invalid quoteID; quoteID range: [0, ${quotesLength - 1}]`,
    });
  }
});

module.exports = router;

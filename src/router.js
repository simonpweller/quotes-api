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

module.exports = router;

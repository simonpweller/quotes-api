const express = require('express')
const router = express.Router()
const quotes = require("./quotes");
const { getRandomElement } = require("./utils");
//const port = process.env.PORT || 3000;

// define the home page route
router.get("/", (req, res) => {
    res.json(quotes);
  });
  
router.get("/random", (req, res) => {
    const quote = getRandomElement(quotes);
    res.json(quote);
  });
//router.listen(port, () => console.log(`Quotes API listening on port ${port}`));

module.exports = router
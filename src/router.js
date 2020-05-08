const express = require('express')
const router = express.Router()
const port = process.env.PORT || 3000;

// middleware that is specific to this router
router.use(function timeLog (req, res, next) {
  console.log('Time: ', Date.now())
  next()
})
// define the home page route
router.get("/", (req, res) => {
    res.json(quotes);
  });
  
app.get("/random", (req, res) => {
    const quote = getRandomElement(quotes);
    res.json(quote);
  });

module.exports = router
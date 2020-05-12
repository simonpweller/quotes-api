

const router = require("./router")
const express = require("express");
const app = express();
const port = process.env.PORT || 3000;

app.use("/", router);

app.listen(port, () => console.log(`Quotes API listening on port ${port}`));




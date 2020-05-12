const express = require("express");
const cors = require("cors");
const router = require("./router");

const port = process.env.PORT || 3000;

const app = express();

app.use(cors());

app.use("/", router);

app.listen(port, () => console.log(`Quotes API listening on port ${port}`));

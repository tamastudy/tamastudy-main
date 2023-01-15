const express = require("express");
const app = express();
const port = 8080;

app.use(express.json());)

app.get("/", (req, res) => {
  res.status(200).json("Hello World! Welcome to Tamastudy :)");
});

app.get("/v1/hello", (req, res) => {
  res.status(200).json("v1 hello");
});

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
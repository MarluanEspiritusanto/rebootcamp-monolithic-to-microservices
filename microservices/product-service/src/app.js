const express = require("express");
const app = express();

app.get("/api/v2/product", (req, res) => {
  res.json(["Volvo", "Some less safe car", "from service"]);
});

module.exports = app;

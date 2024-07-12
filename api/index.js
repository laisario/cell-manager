require('dotenv').config()
const express = require("express");
const productRoute = require('../routes/product')
const app = express();

app.use(express.json());
app.get("/", productRoute);

app.listen(API_PORT, () => console.log("Server ready on port", API_PORT));

module.exports = app;
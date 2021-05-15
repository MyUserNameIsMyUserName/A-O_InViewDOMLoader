// Express
require('dotenv').config();
const compression = require("compression");
const express = require("express");
const bodyParser = require("body-parser");
const path = require("path");

const LOCAL_PROTOCOL = process.env.LOCAL_PROTOCOL;
const LOCAL_HOST = process.env.LOCAL_HOST;
const LOCAL_PORT = process.env.LOCAL_PORT;

const STATIC = path.resolve(__dirname, "PUBLIC");
const INDEX = path.resolve(STATIC, "index.html");


const app = express();
app.use(bodyParser.json());

// compress all responses
app.use(compression());
// Static content
app.use(express.static(STATIC));

// All GET request handled by INDEX file
app.get("*", function (req, res) {
    res.sendFile(INDEX);
});

// Start server
app.listen(PORT, function () {
    console.log("Server up and running on " + LOCAL_PROTOCOL + "://" + LOCAL_HOST + ":" + LOCAL_PORT + "/");
});
const express = require("express");
const dotenv = require("dotenv");

var app = express();
dotenv.config();

app.use("/", require("./routes/route.js"));
const port = process.env.port || 2000;
app.listen(port, console.log("listening on port", port));

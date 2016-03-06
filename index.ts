import express = require("express");
import path = require("path");

var app = express();

app.route("/api").get((req, res) => {
    res.send("Hello");
});
this.app.use(express.static(path.join(__dirname, "client")));
app.use("/node_modules", express.static(path.join(__dirname, "../node_modules")));

app.listen(3000);
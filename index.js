const express = require("express");
let app = express();

app.get("/", (req, res) => {
    res.send("Bem-Vindo ao servidor Web!");
});
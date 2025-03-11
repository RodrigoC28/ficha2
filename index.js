const express = require("express");
let app = express();

app.listen(80, () =>{
    console.log("PING! Recebi um pedido HTTP!");
});

app.get("/", (req, res) => {
    res.send("Bem-Vindo ao servidor Web!");
});
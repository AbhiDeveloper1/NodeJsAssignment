const express = require('express');

const app = express();

let port = process.env.PORT || 8000;

const data = require("./data.json");

app.use(express.json());

app.get("/getData", (req,res) =>{
    res.json(data)
});

app.listen(port, ()=>{
    console.log("server running.....");
})
const express = require('express')
const fs = require("fs");
const app = express()
const port = 3000
const student = require("./student.json")

app.use(express.json());


app.get("/student/getDetail", (req, res) => {
  res.json(student)
});

app.post('/student/add', (req, res) => {
  const { id, studentFirstName, collegeName, location } = req.body;
  res.json({ msg: "Added detail Successfully" });
});

app.listen(port, () => {
  console.log("server running.....")
})
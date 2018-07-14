const express = require("express");


const app = express();

app.get('/', (req, res) => {
  res.redirect('/home');
})

app.get('/home', (req, res) => {
  res.send("home automation center");
})

app.get('/toggle/:lightid', (req, res) => {
  const lightid = req.params.lightid;
  // logic to toggle the light

  res.json({
    value: lightid,
    toggled: true
  });
})



app.listen('5500');

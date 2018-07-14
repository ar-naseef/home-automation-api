// require modules
const express = require('express');
const { Gpio } = require('onoff');

// express app
const app = express();

// RPi pins
const LED1 = new Gpio(17, 'out');

// endpoints
app.get('/', (req, res) => {
  res.redirect('/home');
});

app.get('/home', (req, res) => {
  res.send('home automation center');
});

app.get('/toggle', (req, res) => {
  const lightid = req.params.lightid;
  // logic to toggle the light

  const led1Status = LED1.readSync();
  if (led1Status) {
    LED1.writeSync(0);
  } else {
    LED1.writeSync(1);
  }

  res.json({
    value: lightid,
    toggled: true,
    currentStatus: !led1Status,
  });
});

app.listen('5500');

const express = require('express');
const app = express();
const nodemailer = require('nodemailer');
const port = 4444;
const contactRoute = require('./routes/contact');

// define app
app.use(express.json());

app.listen(port, () => {
  console.log(`app is live on ${port}!`);
});

// get the contact route
app.use('/contact', contactRoute);

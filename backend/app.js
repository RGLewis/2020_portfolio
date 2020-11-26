const express = require('express');
const app = express();
const port = process.env.PORT || 4444;
const contactRoute = require('./routes/contact');

// define app
app.use(express.json());

// Register middleware to stop CORS errors (happening because request from localhost:3000 is being sent to localhost:5000)
app.use((req, res, next) => {
  // add the headers
  // * = allowing for any domain (in the browser)
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader(
    'Access-Control-Allow-Headers',
    'Origin, X-Requested-With, Content-Type, Accept, Authorization'
  );
  // define the methods that we use in our site
  res.setHeader('Access-Control-Allow-Methods', 'GET, POST, PATCH, DELETE');

  // continue onto next middleware
  next();
});

app.listen(port, () => {
  console.log(`app is live on ${port}!`);
});

// get the contact route
// app.use(process.env.ROUTE, contactRoute);

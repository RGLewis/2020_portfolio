const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const sgMail = require('@sendgrid/mail');

// define app
const app = express();

// define port
const port = process.env.PORT || 4444;

// use body parser
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

// use cors
app.use(cors());

app.listen(port, () => {
  console.log(`app is live on ${port}!`);
});

// root app page
app.get('/', (req, res) => {
  res.send('Welcome to my api');
});

//define sendgrid API
sgMail.setApiKey(process.env.SENDGRID_API_KEY);

app.post('/api', (req, res, next) => {
  //make mailable object
  const mail = {
    from: `<${process.env.USER}>`,
    to: process.env.USER,
    subject: `INQUIRY: - ${req.body.subject}`,
    text: `
    from:
    ${req.body.name} 

    contact: ${req.body.email}

    message: 

    ${req.body.message}`,

    html: `
    <html>
      <body>
        <div>
          <div style="width: 100%; background: #1F6CC7; padding: 10px 0; text-align: center">
            <h1 style="font-family:Impact, Charcoal, sans-serif; color: white; text-align: center; text-transform: uppercase; letter-spacing: 2.5px; padding-bottom: 5px; border-bottom: 1px solid #200C90; margin-bottom: 5px">You've got mail!</h1>
            <span style="margin: 0 auto; font-size: 40px">✉️</span>
          </div>

          <div style="padding: 10px">
            <p style="font-family: sans-serif; text-align: left; font-size: 16px"><b>From:</b> ${req.body.name}</p>
            <div style="height: 10px"/>
            <p style="font-family: sans-serif; text-align: left; font-size: 16px"><b>Contact:</b> ${req.body.email}</p>
            <div style="height: 10px"/>
            <p style="font-family: sans-serif; text-align: left; font-size: 16px"><b>Message:</b> ${req.body.message}</p>
            <div style="height: 10px"/>
          </div>
        </div>
      </body>
    </html>
    `,
  };

  sgMail
    .send(mail)
    .then(() => {
      res.json({
        status: 'success',
      });
    })
    .catch((error) => {
      res.json({
        status: 'fail',
      });
    });
});

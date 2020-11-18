const express = require('express');
const contactRouter = express.Router();
const nodemailer = require('nodemailer');

// set up the transport object
const transport = {
  //all of the configuration for making a site send an email.

  host: 'smtp.gmail.com',
  port: 587,
  secure: false,
  auth: {
    user: process.env.USER,
    pass: process.env.PASS,
  },
};

// call transporter function
const transporter = nodemailer.createTransport(transport);
transporter.verify((error, success) => {
  if (error) {
    //if error happened code ends here
    console.error(error);
  } else {
    //this means success
    console.log('Ready to email!');
  }
});

contactRouter.post('/', (req, res, next) => {
  //make mailable object
  const mail = {
    from: `"www.rafaelalewis.com" <${process.env.USER}>`,
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

  // error handling goes here.
  transporter.sendMail(mail, (err, data) => {
    if (err) {
      res.json({
        status: 'fail',
      });
    } else {
      res.json({
        status: 'success',
      });
    }
  });
});

module.exports = contactRouter;

const nodemailer = require("nodemailer");

const dotenv = require("dotenv");
dotenv.config();

async function sendMail({ from, to, subject, text, html }) {
  let transporter = nodemailer.createTransport({
    host: process.env.SMTP_HOST, //we are hosting it on smtp
    port: process.env.SMTP_PORT,
    secure: false, // true for 465, false for other ports
   // service: "gmail",
    auth: {
     // type: "OAUTH2",
      user: process.env.MAIL_USER, // generated ethereal user
      pass: process.env.MAIL_PASS, // generated ethereal password

    },
  });

  // send mail with defined transport object
  let info = await transporter.sendMail({
    from: `inShare <${from}>`, // sender address
    to: to, // list of receivers
    subject: subject, // Subject line
    text: text, // plain text body
    html: html, // html body
  });
}

module.exports = sendMail;

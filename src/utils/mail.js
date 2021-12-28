const nodemailer = require('nodemailer');
require('dotenv').config();

const transporter = nodemailer.createTransport({
  host: process.env.MAIL_HOST,
  port: process.env.MAIL_PORT,
  auth: {
    user: process.env.MAIL_USER,
    pass: process.env.MAIL_PASS,
  },
});

function enviarEmail(email, mensagem) {
  const mailOptions = {
    from: process.env.MAIL_USER,
    to: email,
    subject: 'Envio de mensagem',
    text: mensagem,
  };

  transporter.sendMail(mailOptions, (error) => {
    if (error) {
      return console.log(error);
    }
  });
}

module.exports = { enviarEmail };

const nodemailer = require('nodemailer');
exports.sendSingleMail = (callback) => {


    let transporter = nodemailer.createTransport({
        service: 'gmail',
        auth: {
          type: 'OAuth2',
          user: process.env.MAIL_USERNAME,
          pass: process.env.MAIL_PASSWORD,
          clientId: process.env.OAUTH_CLIENTID,
          clientSecret: process.env.OAUTH_CLIENT_SECRET,
          refreshToken: process.env.OAUTH_REFRESH_TOKEN
        }
      });


      let mailOptions = {
        from: "opcode3@gmail.com",
        to: "josephemmanuelemeka@gmail.com",
        subject: 'Nodemailer Project',
        text: 'Hi from your nodemailer project',
        html: "<h3> Jesus loves me</h3>"
      };

      transporter.sendMail(mailOptions, callback);


}
const nodemailer = require("nodemailer");

require("dotenv").config();
let forgetPassword = (req, res) => {
  const email = "ssingh64631@gmail.com";
  // Generate a random Verification Code on Email
  let verificationCode = Math.floor(Math.random() * 100000) + 100000;
  // Setup Nodemailer
  let transpoter = nodemailer.createTransport({
    service: "gmail",
    auth: {
      user: process.env.E_EMAIL,
      pass: process.env.E_PASSWORD,
    },
  });
  // Setup email data with unicode symbols
  let mailOptions = {
    from: process.env.E_EMAIL,
    to: email,
    subject: "Instagram - Reset Password",
    text: `Your verification code is: ${verificationCode}`,
  };
  // Send email
  transpoter.sendMail(mailOptions, (error, info) => {
    if (error) {
      console.log("Error occurred: ", error);
      res.status(500).send({ message: "Failed to send email" });
    } else {
      console.log("Email sent: ", info.response);
      res.status(200).send({ message: "Email sent successfully" });
    }
  });
};

module.exports = forgetPassword;

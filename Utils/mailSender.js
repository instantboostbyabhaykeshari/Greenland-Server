const nodemailer = require("nodemailer");
require("dotenv").config();

const mailSender = async (name, email, subject, messageHtml) => {
  try {
    const transporter = nodemailer.createTransport({
      host: process.env.MAIL_HOST,
      port: 587, // or 465 for SSL
      secure: false, // true for port 465, false for other ports
      auth: {
        user: process.env.MAIL_USER,
        pass: process.env.MAIL_PASS,
      },
    });

    const info = await transporter.sendMail({
      from: `"${name}"`,
      to: process.env.SCHOOL_EMAIL,
      subject: `Mail from school website`,
      html: messageHtml,
    });

    console.log("Email sent:", info.messageId);
    return info;
  } catch (err) {
    console.error("Error in mailSender:", err);
  }
};

module.exports = mailSender;

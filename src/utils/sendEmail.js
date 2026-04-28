// const nodemailer = require("nodemailer");

// const sendEmail = async (to, subject, text) => {
//   const transporter = nodemailer.createTransport({
//     service: "gmail",
//     auth: {
//       user: process.env.EMAIL_USER,
//       pass: process.env.EMAIL_PASS,
//     },
//   });

//   await transporter.sendMail({
//     from: process.env.EMAIL_USER,
//     to,
//     subject,
//     text,
//   });
// };

// module.exports = sendEmail;







// const nodemailer = require("nodemailer");

// const sendEmail = async (to, subject, text) => {
//   const transporter = nodemailer.createTransport({
//     service: "gmail",
//     auth: {
//       user: "yourgmail@gmail.com",
//       pass: "your_app_password"
//     }
//   });

//   await transporter.sendMail({
//     from: "yourgmail@gmail.com",
//     to,
//     subject,
//     text
//   });
// };

// module.exports = sendEmail;








const nodemailer = require("nodemailer");

const sendEmail = async (to, subject, text) => {
  const transporter = nodemailer.createTransport({
    service: "gmail",
    auth: {
      user: process.env.EMAIL_USER,
      pass: process.env.EMAIL_PASS,
    },
  });

  await transporter.sendMail({
    from: process.env.EMAIL_USER,
    to,
    subject,
    text,
  });
};

module.exports = sendEmail;
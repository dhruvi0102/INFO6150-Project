const nodemailer = require("nodemailer");
const sendEmail = ({
  firstName,
  lastName,
  totalPrice,
  RentalName,
  RentalModel,
  to,
  startDate,
  endDate,
  totalDays,
}) => {
  return new Promise((resolve, reject) => {
    try {
      console.log("Sending to ", to);
      const transporter = nodemailer.createTransport({
        service: "Gmail",
        port: 465,
        secure: true,
        auth: {
          user: process.env.EMAIL,
          pass: process.env.PASS,
        },
      });

      const mailOptions = {
        from: process.env.EMAIL,
        to,
        subject: "Your Rent Incoice",
        html: `<h3>This is your Rent Invoice</h3>
        </br>
        <h4> Dear ${firstName} ${lastName}</h4>
        <p>You have rented ${carName} ${carModel}</p>
        <p>for total ${totalDays} days - starting from ${startDate} to ${endDate}</p>
        <h3>Your total rent price is ${totalPrice} Dollars</h3>
        </br>
        <P>We are very happy, that you choose us</p>`,
      };

      transporter.sendMail(mailOptions, (error) => {
        if (error) return reject(error);
        console.log("Sent");
        resolve();
      });
    } catch (err) {
      reject(err);
    }
  });
};

const sendPasswordResetEmail = ({ to, token }) => {
  try {
    const transporter = nodemailer.createTransport({
      service: "Gmail",
      port: 465,
      secure: true,
      auth: {
        user: "jm@wcgcap.io",
        pass: "dlznsazmhpvraecw",
      },
    });

    const mailOptions = {
      from: "jm@wcgcap.io",
      to,
      subject: "Password reset",
      html: `<h3>This is your Password reset link</h3>
        <P>Click the <a href="http://localhost:3000/auth/reset/${token}">link</a> to reset your password and create a new one</p>
        <p>The key will expired after 1 hour</p>
        </br/
        <h3>Thank you for choosing us</h3>`,
    };
  } catch (error) {
    reject(err);
  }
};

module.exports = {
  sendEmail,
  sendPasswordResetEmail,
};

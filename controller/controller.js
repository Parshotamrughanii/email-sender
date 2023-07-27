const nodemailer = require("nodemailer");
const dotenv = require("dotenv").config();
// Set up Nodemailer transporter
const transporter = nodemailer.createTransport({
  service: "gmail",
  auth: {
    user: process.env.EMAIL,
    pass: process.env.PASS,
  },
});

// Define API endpoint for feedback submission
const feedback = (req, res) => {
  const { name, email, message } = req.body;

  // Create email message
  const mailOptions = {
    from: "parshotamrughanii@gmail.com",
    to: "parshotamrughanii@gmail.com", // Change to the recipient's email address
    subject: "Parshotam Rughani - Portfolio",
    html: `
    <div style="font-family: Arial, sans-serif; background-color: #f2f2f2; padding: 20px;">
      <div style="max-width: 600px; margin: 0 auto; background-color: #ffffff; border-radius: 5px; box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1); padding: 20px;">
        <h1 style="color: #333333; font-size: 24px; margin-bottom: 20px;">Parshotam Rughani - Portfolio</h1>
        <p style="color: #666666; font-size: 14px; margin-bottom: 10px;"><strong>Name:</strong> ${name}</p>
        <p style="color: #666666; font-size: 14px; margin-bottom: 10px;"><strong>Email:</strong> ${email}</p>
        <p style="color: #666666; font-size: 14px;"><strong>Message:</strong> ${message}</p>
      </div>
    </div>
  `,
  };

  // Send email
  transporter.sendMail(mailOptions, (error, info) => {
    if (error) {
      console.error(error);
      res
        .status(500)
        .json({ error: "An error occurred while sending the email." });
    } else {
      console.log("Email sent:", info.response);
      res.status(200).json({ message: "Feedback submitted successfully." });
    }
  });
};

module.exports = { feedback };

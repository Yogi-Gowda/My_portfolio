require('dotenv').config();
const express = require('express');
const cors = require('cors');
const nodemailer = require('nodemailer');
const bodyParser = require('body-parser');

const app = express();
const PORT = process.env.PORT || 5000;

// ✅ Correct CORS Setup
app.use(cors({
  origin: ['https://yogigowda44.netlify.app', 'http://localhost:3000'], // Allow Netlify & Localhost
  methods: ['POST'],
  allowedHeaders: ['Content-Type'],
  credentials: true // Allow cookies/auth if needed
}));

app.use(bodyParser.json());

// ✅ Email Setup (Ensure .env has correct credentials)
const transporter = nodemailer.createTransport({
  service: 'gmail',
  auth: {
    user: process.env.EMAIL_USER,
    pass: process.env.EMAIL_PASS,
  },
});

app.post('/api/contact', (req, res) => {
  const { name, email, message, recipient } = req.body; // Recipient now comes from request body

  if (!recipient) {
    return res.status(400).json({ message: 'Recipient email is required' });
  }

  const mailOptions = {
    from: email,
    to: recipient, // Dynamically set recipient email
    subject: `New Message from ${name}`,
    text: `You have received a new message from ${name} (${email}):\n\n${message}`,
  };

  transporter.sendMail(mailOptions, (error, info) => {
    if (error) {
      console.error(error);
      return res.status(500).json({ message: 'Error sending email' });
    }
    res.status(200).json({ message: 'Message sent successfully!' });
  });
});

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});

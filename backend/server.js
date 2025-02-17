require('dotenv').config();
const express = require('express');
const cors = require('cors');
const nodemailer = require('nodemailer');
const bodyParser = require('body-parser');

const app = express();
const PORT = process.env.PORT || 5000;

// ✅ Fixed: CORS Middleware for both Localhost & Deployed Frontend
app.use(cors({
  origin: ['http://localhost:3000', 'https://your-netlify-site.netlify.app'], // Add Netlify domain
  methods: ['POST'],
  allowedHeaders: ['Content-Type'],
}));

app.use(bodyParser.json());

// ✅ Fixed: Use `RECEIVER_EMAIL` Instead of `EMAIL_USER`
const transporter = nodemailer.createTransport({
  service: 'gmail',
  auth: {
    user: process.env.EMAIL_USER,
    pass: process.env.EMAIL_PASS,
  },
});

app.post('/api/contact', (req, res) => {
  const { name, email, message } = req.body;

  const mailOptions = {
    from: email,
    to: process.env.RECEIVER_EMAIL, // ✅ Now correctly sending to RECEIVER_EMAIL
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

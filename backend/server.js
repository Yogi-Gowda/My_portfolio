require('dotenv').config();
const express = require('express');
const cors = require('cors');
const nodemailer = require('nodemailer');
const bodyParser = require('body-parser');

const app = express();
const PORT = process.env.PORT || 5000;


app.use(cors({
  origin: ['https://yogigowda44.netlify.app', 'http://localhost:3000'], 
  methods: ['POST'],
  allowedHeaders: ['Content-Type'],
  credentials: true 
}));

app.use(bodyParser.json());

const transporter = nodemailer.createTransport({
  service: 'gmail',
  auth: {
    user: process.env.EMAIL_USER,
    pass: process.env.EMAIL_PASS,
  },
});

const DEFAULT_RECIPIENT = 'default@example.com';

app.post('/api/contact', (req, res) => {
  const { name, email, message } = req.body;

  if (!email) {
    return res.status(400).json({ message: 'Sender email is required' });
  }

  const mailOptions = {
    from: email,
    to: DEFAULT_RECIPIENT, 
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

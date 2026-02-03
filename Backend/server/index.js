import express from 'express';
import cors from 'cors';
import { initDb } from './database.js';
import nodemailer from 'nodemailer';
import dotenv from 'dotenv';

dotenv.config();

const app = express();
const PORT = process.env.PORT || 10000;

app.use(cors({
  origin: [
    "https://gk-chess.vercel.app"
  ],
  methods: ["GET", "POST"],
}));

app.use(express.json());

// Initialize DB
let db;
initDb().then((database) => {
    db = database;
});

// Brevo SMTP Transporter
const transporter = nodemailer.createTransport({
  host: "smtp-relay.brevo.com",
  port: 587,
  secure: false,
  auth: {
    user: process.env.SMTP_USER,
    pass: process.env.SMTP_PASS
  }
});

// Test SMTP connection on startup
transporter.verify(function (error, success) {
  if (error) {
    console.log("SMTP connection error:", error);
  } else {
    console.log("SMTP server is ready to send emails");
  }
});

// Register endpoint
app.post('/api/register', async (req, res) => {
  try {
    const { studentName, parentName, email, phone, level } = req.body;

    if (!studentName || !email || !phone || !level) {
      return res.status(400).json({ error: 'Missing required fields' });
    }

    const result = await db.run(
      'INSERT INTO students (studentName, parentName, email, phone, level) VALUES (?, ?, ?, ?, ?)',
      [studentName, parentName, email, phone, level]
    );

    const mailOptions = {
      from: process.env.SMTP_USER,
      to: "saibalajigopi16@gmail.com",
      subject: "New Registration - GK Chess Academy",
      html: `
        <h2>New Student Registration</h2>
        <p><strong>Student Name:</strong> ${studentName}</p>
        <p><strong>Parent Name:</strong> ${parentName || 'N/A'}</p>
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>Phone:</strong> ${phone}</p>
        <p><strong>Level:</strong> ${level}</p>
      `
    };

    try {
      await transporter.sendMail(mailOptions);
      console.log("Email sent successfully");

      res.json({
        success: true,
        message: "Registration successful and email sent",
        id: result.lastID
      });

    } catch (mailError) {
      console.error("Email sending failed:", mailError.message);

      res.json({
        success: true,
        message: "Registration saved but email failed",
        id: result.lastID
      });
    }

  } catch (error) {
    console.error("Registration error:", error);
    res.status(500).json({ error: "Internal server error" });
  }
});

app.listen(PORT, () => {
  console.log(`Server running on ${PORT}`);
});




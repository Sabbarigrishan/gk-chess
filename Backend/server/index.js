import express from 'express';
import cors from 'cors';
import { initDb } from './database.js';
import axios from 'axios';
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
    console.log("Database initialized");
});

// Function to send email using Brevo API
async function sendBrevoEmail(studentData) {

  const BREVO_API_KEY = process.env.BREVO_API_KEY;

  const emailData = {
    sender: {
      name: "GK Chess Academy",
      email: "noreply@gkchessacademy.com"
    },
    to: [
      {
        email: "saibalajigopi16@gmail.com",
        name: "Admin"
      }
    ],
    subject: "New Registration - GK Chess Academy",
    htmlContent: `
      <h2>New Student Registration</h2>
      <p><strong>Student Name:</strong> ${studentData.studentName}</p>
      <p><strong>Parent Name:</strong> ${studentData.parentName || 'N/A'}</p>
      <p><strong>Email:</strong> ${studentData.email}</p>
      <p><strong>Phone:</strong> ${studentData.phone}</p>
      <p><strong>Level:</strong> ${studentData.level}</p>
    `
  };

  await axios.post(
    "https://api.brevo.com/v3/smtp/email",
    emailData,
    {
      headers: {
        "api-key": BREVO_API_KEY,
        "Content-Type": "application/json"
      }
    }
  );
}

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

    try {
      await sendBrevoEmail({ studentName, parentName, email, phone, level });

      console.log("Email sent successfully via Brevo API");

      res.json({
        success: true,
        message: "Registration successful and email sent",
        id: result.lastID
      });

    } catch (mailError) {
      console.error("Email sending failed:", mailError.response?.data || mailError.message);

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





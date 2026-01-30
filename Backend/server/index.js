import express from 'express';
import cors from 'cors';
import { initDb } from './database.js';

const app = express();
const port = 3000;

app.use(cors());
app.use(express.json());

// Initialize DB
let db;
initDb().then((database) => {
    db = database;
});

import nodemailer from 'nodemailer';
import dotenv from 'dotenv';

dotenv.config();

// Email Transporter
const transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
        user: process.env.EMAIL_USER,
        pass: process.env.EMAIL_PASS,
    },
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

        // Send Email to Admin
        const mailOptions = {
            from: process.env.EMAIL_USER,
            to: 'saibalajigopi16@gmail.com',
            subject: 'New Registration - GK Chess Academy',
            html: `
            <h2>New Student Registration</h2>
            <p><strong>Student Name:</strong> ${studentName}</p>
            <p><strong>Parent Name:</strong> ${parentName || 'N/A'}</p>
            <p><strong>Email:</strong> ${email}</p>
            <p><strong>Phone:</strong> ${phone}</p>
            <p><strong>Level:</strong> ${level}</p>
          `
        };

        transporter.sendMail(mailOptions, (error, info) => {
            if (error) {
                console.error('Error sending email:', error);
            } else {
                console.log('Email sent:', info.response);
            }
        });

        res.json({
            success: true,
            message: 'Registration successful',
            id: result.lastID
        });
    } catch (error) {
        console.error('Registration error:', error);
        res.status(500).json({ error: 'Internal server error' });
    }
});

app.listen(port, () => {
    console.log(`Server running at http://localhost:${port}`);
});

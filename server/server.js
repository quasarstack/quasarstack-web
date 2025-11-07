import express from 'express';
import cors from 'cors';
import { sendEmail } from './emailService.js';
import dotenv from 'dotenv';

// Load environment variables
dotenv.config();

const app = express();
const port = process.env.SERVER_PORT || 3000;

// Middleware
app.use(cors({
    origin: 'http://localhost:8080',
    credentials: true
}));
app.use(express.json());

// Health check endpoint
app.get('/api/health', (req, res) => {
    res.json({ status: 'ok' });
});

app.post('/api/sendEmail', async (req, res) => {
    try {
        const { name, email, subject, message, html } = req.body;

        if (!process.env.SMTP_USER) {
            throw new Error('SMTP_USER not configured');
        }

        await sendEmail({
            to: process.env.SMTP_USER,
            subject: `New Contact Form Message: ${subject}`,
            html: html || `
                <h1>New Contact Form Submission</h1>
                <p><strong>From:</strong> ${name} (${email})</p>
                <p><strong>Subject:</strong> ${subject}</p>
                <div>
                    <strong>Message:</strong>
                    <p>${message}</p>
                </div>
            `,
            replyTo: email,
        });

        res.json({ success: true });
    } catch (error) {
        console.error('Failed to send email:', error);
        res.status(500).json({
            success: false,
            error: error instanceof Error ? error.message : 'Failed to send email'
        });
    }
});

// Start the server
app.listen(port, () => {
    console.log(`Server running at http://localhost:${port}`);
    console.log('Environment:', {
        SMTP_HOST: process.env.SMTP_HOST,
        SMTP_PORT: process.env.SMTP_PORT,
        SMTP_USER: process.env.SMTP_USER ? '**configured**' : '**missing**'
    });
});
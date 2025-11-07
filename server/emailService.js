import nodemailer from 'nodemailer';

// Gmail SMTP configuration
const createTransporter = async () => {
    // Console log to debug environment variables
    console.log('Environment Check:', {
        SMTP_HOST: process.env.SMTP_HOST,
        SMTP_PORT: process.env.SMTP_PORT,
        SMTP_USER: process.env.SMTP_USER ? 'SET' : 'MISSING',
        MAIL_FROM: process.env.MAIL_FROM
    });

    const config = {
        service: 'gmail',  // Using predefined service instead of manual host/port
        auth: {
            user: process.env.SMTP_USER,
            pass: process.env.SMTP_PASS
        },
        debug: true, // Enable debug logs
        logger: true // Enable logger
    };

    try {
        const transport = nodemailer.createTransport(config);
        // Verify connection
        await transport.verify();
        console.log('SMTP Connection verified successfully');
        return transport;
    } catch (error) {
        console.error('Failed to create email transport:', error);
        throw error;
    }
};

export const sendEmail = async ({ to, subject, html, replyTo }) => {
    try {
        const transporter = await createTransporter();

        if (!process.env.SMTP_USER || !process.env.SMTP_PASS) {
            throw new Error('SMTP credentials are not configured');
        }

        const mailOptions = {
            from: process.env.MAIL_FROM,
            to,
            subject,
            html,
            replyTo
        };

        console.log('Attempting to send email with options:', {
            to,
            subject,
            replyTo,
            from: process.env.MAIL_FROM
        });

        const result = await transporter.sendMail(mailOptions);
        console.log('Email sent successfully:', result.messageId);
        return { success: true, messageId: result.messageId };
    } catch (error) {
        console.error('Failed to send email:', error);
        return {
            success: false,
            error: error.message || 'Failed to send email'
        };
    }
};
import { useState } from 'react';
import { renderContactFormEmail } from '@/components/email/ContactFormTemplate';

interface ApiResponse {
    success: boolean;
    error?: string;
}

interface ContactFormData {
    name: string;
    email: string;
    subject: string;
    message: string;
}

interface UseSendMailResult {
    sendMail: (data: ContactFormData) => Promise<void>;
    loading: boolean;
    error: string | null;
    sent: boolean;
}

export const useSendMail = (): UseSendMailResult => {
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState<string | null>(null);
    const [sent, setSent] = useState(false);

    const sendMail = async (data: ContactFormData) => {
        setLoading(true);
        setError(null);
        setSent(false);

        try {
            const htmlContent = renderContactFormEmail(data);

            const response = await fetch('/api/sendEmail', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({
                    ...data,
                    html: htmlContent
                }),
            });

            const result: ApiResponse = await response.json();

            if (!result.success) {
                throw new Error(result.error || 'Failed to send email');
            }

            setSent(true);
        } catch (err) {
            setError(err instanceof Error ? err.message : 'Failed to send email');
        } finally {
            setLoading(false);
        }
    }; return { sendMail, loading, error, sent };
};
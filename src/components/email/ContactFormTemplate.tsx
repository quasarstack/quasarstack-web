interface ContactFormTemplateProps {
    name: string;
    email: string;
    subject: string;
    message: string;
}

export const ContactFormTemplate: React.FC<ContactFormTemplateProps> = ({
    name,
    email,
    subject,
    message,
}) => {
    return (
        <div>
            <h1>New Contact Form Submission</h1>
            <div>
                <p><strong>From:</strong> {name} ({email})</p>
                <p><strong>Subject:</strong> {subject}</p>
                <div>
                    <strong>Message:</strong>
                    <p>{message}</p>
                </div>
            </div>
            <hr />
            <p>This email was sent from QuasarStack contact form.</p>
        </div>
    );
};

export const renderContactFormEmail = (props: ContactFormTemplateProps): string => {
    // Render a plain HTML string from props (do not attempt to render the React component
    // directly — calling the component returns a React element object which becomes
    // "[object Object]" when interpolated into a string). We also escape user input
    // to avoid injection.
    const esc = (str: string) =>
        String(str)
            .replace(/&/g, '&amp;')
            .replace(/</g, '&lt;')
            .replace(/>/g, '&gt;')
            .replace(/"/g, '&quot;')
            .replace(/'/g, '&#39;');

    const { name, email, subject, message } = props;

    const template = `
      <div>
        <h1>New Contact Form Submission</h1>
        <div>
          <p><strong>From:</strong> ${esc(name)} (${esc(email)})</p>
          <p><strong>Subject:</strong> ${esc(subject)}</p>
          <div>
            <strong>Message:</strong>
            <p>${esc(message)}</p>
          </div>
        </div>
        <hr />
        <p>This email was sent from QuasarStack contact form.</p>
      </div>
    `;

    return `
    <!DOCTYPE html>
    <html>
      <head>
        <meta charset="utf-8" />
        <style>
          body { font-family: Arial, sans-serif; line-height: 1.6; color: #333; }
          h1 { color: #2563eb; }
          hr { border: 1px solid #eee; }
          strong { color: #1f2937; }
        </style>
      </head>
      <body>
        ${template}
      </body>
    </html>
  `;
};
import { Card } from "@/components/ui/card";
import { Mail, Phone, MapPin } from "lucide-react";
import { useSendMail } from "@/hooks/useSendMail";
import { useRef, useEffect } from 'react';

const Contact = () => {
  const { sendMail, loading, error, sent } = useSendMail();

  const formRef = useRef<HTMLFormElement | null>(null);

  useEffect(() => {
    if (sent && formRef.current) {
      // Reset the form fields after a successful send
      formRef.current.reset();
    }
  }, [sent]);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const formData = new FormData(e.currentTarget);

    await sendMail({
      name: formData.get('name') as string,
      email: formData.get('email') as string,
      subject: formData.get('subject') as string,
      message: formData.get('message') as string,
    });
  };

  return (
    <section id="contact" className="py-24 px-6 relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-primary/5 rounded-full blur-3xl" />
      </div>

      <div className="container mx-auto relative z-10">
        <div className="text-center mb-12 animate-fade-in">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            Contact <span className="text-gradient">Information</span>
          </h2>
        </div>
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
          <div className="lg:col-span-4">
            <Card className="p-8 h-full">
              <div className="info">
                <h3 className="text-2xl font-bold mb-3">Get in touch</h3>
                <p className="text-sm text-muted-foreground mb-6">
                  Ready to transform your business? Let's discuss how we can help you achieve your goals.
                </p>

                <div className="info-item flex items-start gap-3 mb-4">
                  <MapPin className="w-5 h-5 text-primary mt-1" />
                  <div>
                    <h4 className="font-medium">Location:</h4>
                    <p className="text-sm text-muted-foreground">Whitefield, Bengaluru, Karnataka</p>
                  </div>
                </div>

                <div className="info-item flex items-start gap-3 mb-4">
                  <Mail className="w-5 h-5 text-primary mt-1" />
                  <div>
                    <h4 className="font-medium">Email:</h4>
                    <p className="text-sm text-muted-foreground">contact.quasarstack@gmail.com</p>
                  </div>
                </div>

                {/* <div className="info-item flex items-start gap-3">
                  <Phone className="w-5 h-5 text-primary mt-1" />
                  <div>
                    <h4 className="font-medium">Call:</h4>
                    <p className="text-sm text-muted-foreground">+91 9999 999 99</p>
                  </div>
                </div> */}
              </div>
            </Card>
          </div>

          <div className="lg:col-span-8">
            <Card className="p-8">
              <form ref={formRef} onSubmit={handleSubmit} role="form" className="space-y-4">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div className="form-group">
                    <label htmlFor="name" className="sr-only">
                      Your Name
                    </label>
                    <input id="name" name="name" type="text" placeholder="Your Name" required className="w-full rounded-md border px-3 py-2" />
                  </div>
                  <div className="form-group">
                    <label htmlFor="email" className="sr-only">
                      Your Email
                    </label>
                    <input id="email" name="email" type="email" placeholder="Your Email" required className="w-full rounded-md border px-3 py-2" />
                  </div>
                </div>

                <div>
                  <label htmlFor="subject" className="sr-only">
                    Subject
                  </label>
                  <input id="subject" name="subject" type="text" placeholder="Subject" required className="w-full rounded-md border px-3 py-2" />
                </div>

                <div>
                  <label htmlFor="message" className="sr-only">
                    Message
                  </label>
                  <textarea id="message" name="message" placeholder="Message" required className="w-full rounded-md border px-3 py-2 h-36" />
                </div>

                <div className="my-2">
                  {loading && <div className="text-sm text-muted-foreground">Loading</div>}
                  {error && <div className="text-sm text-destructive">{error}</div>}
                  {sent && <div className="text-sm text-success">Your message has been sent. Thank you!</div>}
                </div>

                <div className="text-left">
                  <button
                    type="submit"
                    className="inline-flex items-center rounded-md bg-primary px-4 py-2 text-white hover:opacity-95 transition"
                    disabled={loading}
                  >
                    {loading ? "Sending..." : "Send Message"}
                  </button>
                </div>
              </form>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;

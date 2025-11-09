import { Card } from "@/components/ui/card";
import { Mail, Phone, MapPin } from "lucide-react";
import { useRef, useEffect } from 'react';

const Contact = () => {
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
          <div className="lg:col-span-12">
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
              </div>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;

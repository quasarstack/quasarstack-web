import { Heart } from "lucide-react";

const Footer = () => {
  return (
    <footer className="py-12 px-6 border-t border-primary/10">
      <div className="container mx-auto">
        <div className="grid md:grid-cols-4 gap-8 mb-8 items-start">
          <div className="md:col-span-3">
            <h3 className="text-xl font-bold mb-4 text-gradient">QuasarStack</h3>
            <p className="text-sm text-muted-foreground max-w-md">
              Transforming ideas into scalable software solutions with innovation and excellence.
            </p>
          </div>

          <div className="text-right">
            <h4 className="font-semibold mb-4">Get in touch</h4>
            <ul className="space-y-2 text-sm text-muted-foreground">
              <li className="hover:text-primary transition-smooth cursor-pointer"><b>Email:</b> contact.quasarstack@gmail.com</li>
            </ul>
          </div>
        </div>

        <div className="pt-8 border-t border-primary/10 text-center text-sm text-muted-foreground">
          <p className="flex items-center justify-center gap-2">
            Made with <Heart className="w-4 h-4 text-primary fill-primary animate-glow" /> by QuasarStack
          </p>
          <p className="mt-2">© 2025 QuasarStack. All rights reserved.</p>
        </div>
      </div>
    </footer>

  );
};

export default Footer;

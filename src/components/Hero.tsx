import { Button } from "@/components/ui/button";
import { ArrowRight, Sparkles } from "lucide-react";
import heroBg from "@/assets/hero-bg.jpg";

const Hero = () => {
  const scrollToSection = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Animated Background */}
      <div className="absolute inset-0 z-0">
        <img
          src={heroBg}
          alt="Technology background"
          className="w-full h-full object-cover opacity-30"
        />
        <div className="absolute inset-0 gradient-hero" />
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-background/50 to-background" />
      </div>

      {/* Floating Elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-1/4 left-1/4 w-64 h-64 bg-primary/10 rounded-full blur-3xl animate-float" />
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-secondary/10 rounded-full blur-3xl animate-float" style={{ animationDelay: '2s' }} />
      </div>

      {/* Content */}
      <div className="relative z-10 container mx-auto px-6 text-center animate-fade-in-up">

        <div className="text-center mb-16 animate-fade-in">
          <a href="/" className="text-4xl md:text-5xl font-bold mb-5 text-gradient">
            QuasarStack
          </a>
        </div>

        <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-primary/20 bg-primary/5 mb-8 animate-scale-in">
          <Sparkles className="w-4 h-4 text-primary animate-glow" />
          <span className="text-sm font-medium">Innovation Meets Excellence</span>
        </div>

        <h1 className="text-5xl md:text-7xl lg:text-8xl font-bold mb-6 leading-tight">
          Transforming Ideas into{" "}
          <span className="text-gradient">Scalable Software</span>
        </h1>

        <p className="text-lg md:text-xl text-muted-foreground max-w-3xl mx-auto mb-12 leading-relaxed">
          Empowering businesses with cutting-edge technology solutions. From data analytics to AI automation,
          we build the future of your digital presence.
        </p>

        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
          <Button
            size="lg"
            className="text-lg px-8 py-6 shadow-glow hover:shadow-glow hover:scale-105 transition-smooth group"
            onClick={() => scrollToSection('services')}
          >
            Explore Services
            <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-smooth" />
          </Button>
          <Button
            size="lg"
            variant="outline"
            className="text-lg px-8 py-6 border-primary/30 hover:bg-primary/10 hover:border-primary hover:scale-105 transition-smooth"
            onClick={() => scrollToSection('contact')}
          >
            Contact Us
          </Button>
        </div>

      </div>
    </section>
  );
};

export default Hero;

import { Target, Lightbulb, Users } from "lucide-react";
import { Card } from "@/components/ui/card";

const About = () => {
  const values = [
    {
      icon: Target,
      title: "Our Mission",
      description: "To deliver innovative technology solutions that empower businesses to achieve their goals and stay ahead in the digital age."
    },
    {
      icon: Lightbulb,
      title: "Our Vision",
      description: "To be the leading technology partner recognized for excellence, innovation, and transformative impact across industries."
    },
    {
      icon: Users,
      title: "Our Team",
      description: "A diverse group of passionate experts in software development, data science, cloud architecture, and AI, committed to your success."
    }
  ];

  return (
    <section id="about" className="py-24 px-6">
      <div className="container mx-auto">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            About <span className="text-gradient">QuasarStack</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            We're a forward-thinking technology company dedicated to transforming businesses through innovative software solutions and cutting-edge technology.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {values.map((value, index) => (
            <Card
              key={index}
              className="p-8 gradient-card border-primary/10 hover-lift animate-fade-in"
              style={{ animationDelay: `${index * 0.2}s` }}
            >
              <div className="w-16 h-16 rounded-2xl bg-primary/10 flex items-center justify-center mb-6 mx-auto shadow-glow">
                <value.icon className="w-8 h-8 text-primary" />
              </div>
              <h3 className="text-2xl font-bold mb-4 text-center">{value.title}</h3>
              <p className="text-muted-foreground text-center leading-relaxed">
                {value.description}
              </p>
            </Card>
          ))}
        </div>

        <div className="mt-16 text-center animate-fade-in">
          <p className="text-lg max-w-3xl mx-auto leading-relaxed">
            With over a decade of experience and a portfolio of successful projects, we combine technical expertise 
            with creative problem-solving to deliver solutions that drive real business value. Our commitment to 
            excellence and innovation makes us the trusted partner for companies looking to thrive in the digital era.
          </p>
        </div>
      </div>
    </section>
  );
};

export default About;

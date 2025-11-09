import { Card } from "@/components/ui/card";
import { Code, Cloud, Brain } from "lucide-react";


const Services = () => {
  const services = [
    {
      icon: Code,
      title: "Web & App Development",
      description: "Build scalable web applications and mobile apps tailored to your business needs.",
      features: ["Custom Web Apps", "Mobile Development", "E-commerce Solutions", "API Integration"]
    },
    {
      icon: Cloud,
      title: "Cloud & DevOps Consulting",
      description: "Optimize your infrastructure with cloud migration and CI/CD pipelines for faster deployment.",
      features: ["AWS/Azure/GCP", "Docker & Kubernetes", "CI/CD Pipelines", "Infrastructure as Code"]
    },
    {
      icon: Brain,
      title: "AI-Powered Automation",
      description: "Leverage AI and machine learning to automate workflows and enhance customer experience.",
      features: ["Intelligent Chatbots", "NLP Automation", "ML Model Integration", "Process Automation"]
    }
  ];

  return (
    <section id="services" className="py-24 px-6 relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none opacity-30">
        <div className="absolute top-0 right-0 w-96 h-96 bg-primary/10 rounded-full blur-3xl" />
        <div className="absolute bottom-0 left-0 w-96 h-96 bg-secondary/10 rounded-full blur-3xl" />
      </div>

      <div className="container mx-auto relative z-10">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            Our <span className="text-gradient">Services</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Comprehensive technology solutions designed to accelerate your digital transformation and business growth.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {services.map((service, index) => (
            <Card
              key={index}
              className="p-8 gradient-card border-primary/10 group hover-lift cursor-pointer animate-fade-in"
              style={{ animationDelay: `${index * 0.15}s` }}
            >
              <div className="w-16 h-16 rounded-2xl bg-primary/10 flex items-center justify-center mb-6 group-hover:shadow-glow transition-smooth">
                <service.icon className="w-8 h-8 text-primary group-hover:scale-110 transition-smooth" />
              </div>

              <h3 className="text-2xl font-bold mb-4 group-hover:text-primary transition-smooth">
                {service.title}
              </h3>

              <p className="text-muted-foreground mb-6 leading-relaxed">
                {service.description}
              </p>

              <div className="space-y-2">
                {service.features.map((feature, idx) => (
                  <div key={idx} className="flex items-center gap-2">
                    <div className="w-1.5 h-1.5 rounded-full bg-primary" />
                    <span className="text-sm text-muted-foreground">{feature}</span>
                  </div>
                ))}
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;

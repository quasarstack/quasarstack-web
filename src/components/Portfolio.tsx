import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { ExternalLink } from "lucide-react";
import {
  Code2,          // Web & App Development
  CloudCog,       // Cloud & DevOps Consulting
  BrainCircuit,   // AI-Powered Automation
  GraduationCap,  // Edu-Tech
  Leaf,           // GreenOrbit
} from "lucide-react";


const Portfolio = () => {
  const projects = [
    {
      category: "Data and Analytics",
      projectName: "QuasarRetail",
      image: 'src/assets/QuasarRetail.png',
      description:
        "Web-based platform for distributors to upload and process Excel files, manage inventory levels, update job data, and generate automated performance reports. Built for scalability and easy integration with government data systems.",
      icon: Code2,
      pagePath: "/QuasarRetail"
    },
    {
      category: "Cloud-Native Development Platform",
      projectName: "QuasarForge",
      image: 'src/assets/QuasarForge.png',
      description:
        "Digital Agriculture Scheme Portal — a comprehensive platform for managing government agriculture schemes, beneficiary registration, and tracking.",
      icon: CloudCog,
      pagePath: "/QuasarForge"
    },
    {
      category: "Edu-Tech",
      projectName: "QuasarLearn",
      image: 'src/assets/QuasarLearn.png',
      description: "Making knowledge accessible for everyone through open learning solutions.",
      icon: GraduationCap,
      pagePath: "/QuasarLearn"
    },
    {
      category: "AgriTech",
      projectName: "GreenOrbit",
      image: 'src/assets/greenOrbit.png',
      description:
        "Modern SaaS platform for farmers to digitize the organic farming process — from internal control systems to reports and certification management.",
      icon: Leaf,
      pagePath: "/GreenOrbit"
    },
  ];

  const topRow = projects.slice(0, 2);
  const bottomRow = projects.slice(2);

  return (
    <section id="portfolio" className="py-24 px-6 bg-card/30">
      <div className="container mx-auto">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            Our <span className="text-gradient">Products & Services</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Explore our successful projects and the impact we've made across various industries.
          </p>
        </div>

        <div className="max-w-7xl mx-auto space-y-8">
          {/* First row - 3 cards centered */}
          <div className="flex justify-center gap-6 flex-wrap">
            {[...topRow].map((project, index) => (
              <a
                key={index}
                href={project.pagePath}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={`Open ${project.projectName} project page`}
              >
                <Card
                  className="p-6 gradient-card border-primary/10 group hover-lift cursor-pointer animate-fade-in w-96"
                  style={{ animationDelay: `${index * 0.1}s` }}
                >
                  <div className="flex items-center justify-between mb-6">
                    <div className="flex items-center gap-2">
                      <project.icon className="w-6 h-6 text-primary" />
                      <span className="text-base font-bold text-foreground">
                        {project.category}
                      </span>
                    </div>
                  </div>

                  <div className="flex gap-4">
                    <div className="w-1/3 h-36 bg-muted/20 rounded-lg flex items-center justify-center shrink-0">
                      {project.image ? (
                        <img
                          src={project.image}
                          alt={project.projectName}
                          className="object-cover w-full h-full rounded-lg"
                          style={{ width: "80px", height: "90px" }}
                        />
                      ) : (
                        <span className="text-muted-foreground text-sm">No Image</span>
                      )}
                    </div>
                    <div className="flex items-center">
                      <h3 className="text-xl font-bold group-hover:text-primary transition-smooth">
                        {project.projectName}
                      </h3>
                    </div>
                  </div>
                </Card>
              </a>
            ))}
          </div>

          {/* Second row - 2 cards centered */}
          <div className="flex justify-center gap-6 flex-wrap">
            {[...bottomRow].map((project, index) => (
              <a
                key={index}
                href={project.pagePath}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={`Open ${project.projectName} project page`}
              >
                <Card
                  className="p-6 gradient-card border-primary/10 group hover-lift cursor-pointer animate-fade-in w-96"
                  style={{ animationDelay: `${(index + 3) * 0.1}s` }}
                >
                  <div className="flex items-center justify-between mb-6">
                    <div className="flex items-center gap-2">
                      <project.icon className="w-6 h-6 text-primary" />
                      <span className="text-base font-bold text-foreground">
                        {project.category}
                      </span>
                    </div>
                  </div>

                  <div className="flex gap-4">
                    <div className="w-1/3 h-36 bg-muted/20 rounded-lg flex items-center justify-center shrink-0">
                      {project.image ? (
                        <img
                          src={project.image}
                          alt={project.projectName}
                          className="object-cover w-full h-full rounded-lg"
                          style={{ width: "80px", height: "90px" }}
                        />
                      ) : (
                        <span className="text-muted-foreground text-sm">No Image</span>
                      )}
                    </div>
                    <div className="flex items-center">
                      <h3 className="text-xl font-bold group-hover:text-primary transition-smooth">
                        {project.projectName}
                      </h3>
                    </div>
                  </div>
                </Card>
              </a>
            ))}
          </div>
        </div>




      </div>
    </section>
  );
};

export default Portfolio;

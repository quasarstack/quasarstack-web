import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { ExternalLink } from "lucide-react";
import { useEffect, useRef, useState } from "react";

const Portfolio = () => {
  const projects = [

    {
      title: "AI Customer Support Bot",
      category: "AI Automation",
      description: "Intelligent chatbot with NLP capabilities handling 10K+ customer queries daily with 95% accuracy.",
      tags: ["Python", "TensorFlow", "NLP", "FastAPI"],
      pagePath: "/projects/ai-customer-support"
    },
    {
      title: "Distributor Inventory Management System",
      category: "Automation & Reporting",
      description: "Web-based platform for distributors to upload and process Excel files, manage inventory levels, update job data, and generate automated performance reports. Built for scalability and easy integration with government data systems.",
      tags: ["Node.js", "Python", "AWS", "ExcelJS", "Pandas", "Lambda", "Serverless"],
      pagePath: "/inventory-management"
    },
    {
      title: "Digital Agriculture Scheme Portal",
      category: "Government & Public Sector Solutions",
      description: "Comprehensive platform for managing government agriculture schemes, beneficiary registration, and tracking.",
      tags: ["Java", "Spring Boot", "React", "PostgreSQL", "AWS"],
      pagePath: "/projects/agriculture-scheme-portal"
    }
  ];

  // refs + state for horizontal carousel
  const containerRef = useRef<HTMLDivElement | null>(null);
  const [current, setCurrent] = useState(0);
  const autoplayRef = useRef<number | null>(null);
  const slideWidthRef = useRef<number>(0);

  // Calculate the width of a single slide
  const updateSlideWidth = () => {
    const el = containerRef.current;
    if (!el || !el.children.length) return;
    const firstSlide = el.children[0] as HTMLElement;
    slideWidthRef.current = firstSlide.offsetWidth + 24; // width + gap
  };

  const getCurrentIndex = () => {
    const el = containerRef.current;
    if (!el || slideWidthRef.current === 0) return current;
    const scrollPosition = el.scrollLeft;
    return Math.round(scrollPosition / slideWidthRef.current);
  };

  const goTo = (index: number) => {
    const el = containerRef.current;
    if (!el) return;
    updateSlideWidth();
    const clamped = Math.max(0, Math.min(index, projects.length - 1));
    const target = clamped * slideWidthRef.current;
    el.scrollTo({ left: target, behavior: "smooth" });
    setCurrent(clamped);
  };

  const stopAutoplay = () => {
    if (autoplayRef.current) {
      window.clearInterval(autoplayRef.current);
      autoplayRef.current = null;
    }
  };

  const startAutoplay = (interval = 5000) => {
    stopAutoplay();
    autoplayRef.current = window.setInterval(() => {
      setCurrent((c) => {
        const nextIdx = (c + 1) % projects.length;
        goTo(nextIdx);
        return nextIdx;
      });
    }, interval) as unknown as number;
  };

  useEffect(() => {
    // Initialize slide width and start autoplay
    updateSlideWidth();
    startAutoplay();

    const onResize = () => {
      updateSlideWidth();
      goTo(current);
    };

    window.addEventListener("resize", onResize);
    return () => {
      stopAutoplay();
      window.removeEventListener("resize", onResize);
    };
  }, []);

  return (
    <section id="portfolio" className="py-24 px-6 bg-card/30">
      <div className="container mx-auto">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            Our <span className="text-gradient">Portfolio</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Explore our successful projects and the impact we've made across various industries.
          </p>
        </div>

        <div className="relative max-w-5xl mx-auto">
          <div
            ref={containerRef}
            className="overflow-x-auto scroll-smooth snap-x snap-mandatory flex gap-6 py-6 px-4 [scrollbar-width:none] [-ms-overflow-style:none] [&::-webkit-scrollbar]:hidden"
            onScroll={() => {
              const newIndex = getCurrentIndex();
              if (newIndex !== current) {
                setCurrent(newIndex);
              }
            }}
          >
            {projects.map((project, index) => (
              <div
                key={index}
                className="min-w-full md:min-w-[80%] lg:min-w-[60%] snap-center"
                style={{ scrollSnapAlign: "center" }}
              >
                <Card className="p-6 gradient-card border-primary/10 group hover-lift cursor-pointer">
                  <div className="flex items-start justify-between mb-4">
                    <Badge variant="secondary" className="bg-primary/10 text-primary">
                      {project.category}
                    </Badge>
                    {project.pagePath ? (
                      <a
                        href={project.pagePath}
                        target="_blank"
                        rel="noopener noreferrer"
                        aria-label={`Open ${project.title} project page`}
                        className="ml-2"
                      >
                        <ExternalLink className="w-5 h-5 text-muted-foreground group-hover:text-primary transition-smooth" />
                      </a>
                    ) : (
                      <ExternalLink className="w-5 h-5 text-muted-foreground group-hover:text-primary transition-smooth" />
                    )}
                  </div>

                  <h3 className="text-xl font-bold mb-3 group-hover:text-primary transition-smooth">
                    {project.title}
                  </h3>

                  <p className="text-sm text-muted-foreground mb-4 leading-relaxed">
                    {project.description}
                  </p>

                  <div className="flex flex-wrap gap-2">
                    {project.tags.map((tag, idx) => (
                      <span key={idx} className="text-xs px-2 py-1 rounded bg-primary/5 text-primary border border-primary/20">
                        {tag}
                      </span>
                    ))}
                  </div>
                </Card>
              </div>
            ))}
          </div>

          {/* Dots */}
          <div className="flex justify-center gap-2 mt-4">
            {projects.map((_, i) => (
              <button
                key={i}
                aria-label={`Go to slide ${i + 1}`}
                onClick={() => {
                  goTo(i);
                  stopAutoplay();
                }}
                className={`w-3 h-3 rounded-full ${i === current ? "bg-primary" : "bg-muted-foreground/30"}`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Portfolio;

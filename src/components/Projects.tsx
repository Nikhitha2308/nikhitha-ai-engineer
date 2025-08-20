import { useEffect, useRef } from "react";
import { ExternalLink, Github, FolderOpen, Database, Search, Monitor } from "lucide-react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";

const Projects = () => {
  const sectionRef = useRef<HTMLElement>(null);

  const projects = [
    {
      title: "Duplicate File Download Alert System",
      description: "A Python-based system that detects and alerts users about duplicate data downloads, preventing redundant storage and improving data management efficiency.",
      tech: ["Python", "SQLite3", "Search API", "Data Management"],
      icon: Search,
      highlights: [
        "Automated duplicate detection algorithm",
        "Real-time alert notifications",
        "Efficient storage optimization",
        "User-friendly interface"
      ]
    },
    {
      title: "Smart Retail Management System",
      description: "Comprehensive retail management solution that streamlines operations and enhances customer experience through intelligent automation and data analytics.",
      tech: ["Python", "MySQL", "HTML/CSS", "Data Analytics"],
      icon: Database,
      highlights: [
        "Inventory management automation",
        "Customer analytics dashboard",
        "Sales performance tracking",
        "Improved operational efficiency"
      ]
    },
    {
      title: "Local Server Monitoring Toolkit",
      description: "Advanced monitoring system that tracks application performance with real-time monitoring agents, alerts, resource tracking, and comprehensive security checks.",
      tech: ["Python", "Monitoring", "Security", "Performance"],
      icon: Monitor,
      highlights: [
        "Real-time performance metrics",
        "Automated alert system",
        "Resource usage tracking",
        "Security vulnerability scanning"
      ]
    }
  ];

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("in-view");
          }
        });
      },
      { threshold: 0.1 }
    );

    const elements = sectionRef.current?.querySelectorAll(".animate-on-scroll");
    elements?.forEach((el) => observer.observe(el));

    return () => observer.disconnect();
  }, []);

  return (
    <section id="projects" ref={sectionRef} className="py-20 bg-muted/30">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="animate-on-scroll text-center mb-16">
          <div className="flex items-center justify-center mb-4">
            <FolderOpen className="w-8 h-8 text-accent mr-3" />
            <span className="text-accent font-semibold text-lg uppercase tracking-wide">Projects</span>
          </div>
          <h2 className="text-4xl sm:text-5xl font-bold text-foreground mb-6">
            Featured{" "}
            <span className="text-gradient">Work</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            A showcase of my technical projects that demonstrate problem-solving skills,
            innovation, and practical application of AI/ML concepts.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => {
            const IconComponent = project.icon;
            return (
              <div key={project.title} className="animate-on-scroll" style={{ animationDelay: `${index * 0.2}s` }}>
                <Card className="h-full bg-card/70 backdrop-blur-sm border-border/50 card-hover group">
                  <CardHeader>
                    <div className="flex items-center justify-between mb-4">
                      <div className="w-12 h-12 bg-gradient-primary rounded-lg flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                        <IconComponent className="w-6 h-6 text-white" />
                      </div>
                      <div className="flex space-x-2">
                        <Button size="sm" variant="ghost" className="p-2 h-8 w-8 opacity-60 hover:opacity-100">
                          <Github className="w-4 h-4" />
                        </Button>
                        <Button size="sm" variant="ghost" className="p-2 h-8 w-8 opacity-60 hover:opacity-100">
                          <ExternalLink className="w-4 h-4" />
                        </Button>
                      </div>
                    </div>
                    <CardTitle className="text-xl text-foreground group-hover:text-primary transition-colors duration-200">
                      {project.title}
                    </CardTitle>
                    <CardDescription className="text-muted-foreground leading-relaxed">
                      {project.description}
                    </CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-4">
                      <div>
                        <h4 className="font-medium text-foreground mb-2">Key Features:</h4>
                        <ul className="space-y-1">
                          {project.highlights.map((highlight, idx) => (
                            <li key={idx} className="flex items-center text-sm text-muted-foreground">
                              <div className="w-1.5 h-1.5 bg-accent rounded-full mr-2 flex-shrink-0" />
                              {highlight}
                            </li>
                          ))}
                        </ul>
                      </div>
                      <div>
                        <h4 className="font-medium text-foreground mb-2">Technologies:</h4>
                        <div className="flex flex-wrap gap-2">
                          {project.tech.map((tech) => (
                            <Badge key={tech} variant="secondary" className="text-xs">
                              {tech}
                            </Badge>
                          ))}
                        </div>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </div>
            );
          })}
        </div>

        {/* Call to Action */}
        <div className="animate-on-scroll text-center mt-16">
          <Card className="bg-gradient-primary text-white">
            <CardContent className="p-8">
              <h3 className="text-2xl font-bold mb-4">Interested in My Work?</h3>
              <p className="text-white/90 text-lg mb-6 max-w-2xl mx-auto">
                These projects represent my passion for creating intelligent solutions. 
                I'm always excited to discuss technical details and explore new opportunities.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button variant="secondary" size="lg" className="button-hover">
                  <Github className="w-5 h-5 mr-2" />
                  View All Projects
                </Button>
                <Button variant="outline" size="lg" className="border-white/30 text-white hover:bg-white/10 button-hover">
                  <ExternalLink className="w-5 h-5 mr-2" />
                  Live Demos
                </Button>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default Projects;
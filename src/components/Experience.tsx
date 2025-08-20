import { useEffect, useRef } from "react";
import { Briefcase, Calendar, MapPin, CheckCircle } from "lucide-react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

const Experience = () => {
  const sectionRef = useRef<HTMLElement>(null);

  const experience = [
    {
      title: "Intern",
      company: "EZ-TS",
      period: "May 2024 – March 2025",
      location: "Remote",
      type: "Internship",
      status: "Current",
      description: "Building intelligent ticketing systems and optimizing backend performance using modern Python frameworks.",
      achievements: [
        "Built a Smart Ticketing System using Python & Flask",
        "Implemented real-time tracking and monitoring capabilities",
        "Optimized backend performance with lightweight framework architecture",
        "Enhanced UI development skills through hands-on projects",
        "Strengthened problem-solving abilities through complex challenges"
      ],
      technologies: ["Python", "Flask", "Real-time Systems", "Backend Optimization", "UI Development"],
      highlights: [
        "10+ months of hands-on industry experience",
        "Led development of core ticketing features",
        "Improved system performance by 30%",
        "Collaborated with cross-functional teams"
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
    <section id="experience" ref={sectionRef} className="py-20 bg-background">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="animate-on-scroll text-center mb-16">
          <div className="flex items-center justify-center mb-4">
            <Briefcase className="w-8 h-8 text-accent mr-3" />
            <span className="text-accent font-semibold text-lg uppercase tracking-wide">Experience</span>
          </div>
          <h2 className="text-4xl sm:text-5xl font-bold text-foreground mb-6">
            Professional{" "}
            <span className="text-gradient">Journey</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Hands-on experience in building real-world applications and solving complex technical challenges
            in a professional environment.
          </p>
        </div>

        <div className="max-w-4xl mx-auto">
          {experience.map((exp, index) => (
            <div key={index} className="animate-on-scroll relative">
              {/* Timeline Line */}
              <div className="absolute left-8 top-0 bottom-0 w-0.5 bg-gradient-to-b from-accent to-accent/20"></div>
              
              {/* Timeline Dot */}
              <div className="absolute left-6 top-8 w-4 h-4 bg-accent rounded-full border-4 border-background shadow-lg animate-pulse"></div>

              <div className="ml-20 mb-12">
                <Card className="bg-card/70 backdrop-blur-sm border-border/50 shadow-lg card-hover">
                  <CardHeader>
                    <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
                      <div>
                        <div className="flex items-center gap-3 mb-2">
                          <CardTitle className="text-2xl text-foreground">{exp.title}</CardTitle>
                          {exp.status === "Current" && (
                            <Badge className="bg-accent text-white">Current</Badge>
                          )}
                        </div>
                        <div className="flex items-center text-lg font-semibold text-primary mb-2">
                          <Briefcase className="w-5 h-5 mr-2" />
                          {exp.company}
                        </div>
                        <div className="flex flex-col sm:flex-row sm:items-center gap-2 text-muted-foreground">
                          <div className="flex items-center">
                            <Calendar className="w-4 h-4 mr-1" />
                            {exp.period}
                          </div>
                          <span className="hidden sm:inline">•</span>
                          <div className="flex items-center">
                            <MapPin className="w-4 h-4 mr-1" />
                            {exp.location}
                          </div>
                        </div>
                      </div>
                    </div>
                    <CardDescription className="text-lg text-muted-foreground leading-relaxed mt-4">
                      {exp.description}
                    </CardDescription>
                  </CardHeader>
                  
                  <CardContent>
                    <div className="grid lg:grid-cols-2 gap-8">
                      {/* Key Achievements */}
                      <div>
                        <h4 className="font-semibold text-foreground mb-4 flex items-center">
                          <CheckCircle className="w-5 h-5 text-accent mr-2" />
                          Key Achievements
                        </h4>
                        <ul className="space-y-3">
                          {exp.achievements.map((achievement, idx) => (
                            <li key={idx} className="flex items-start text-muted-foreground">
                              <div className="w-2 h-2 bg-accent rounded-full mr-3 mt-2 flex-shrink-0" />
                              <span className="leading-relaxed">{achievement}</span>
                            </li>
                          ))}
                        </ul>
                      </div>

                      {/* Technologies & Highlights */}
                      <div className="space-y-6">
                        <div>
                          <h4 className="font-semibold text-foreground mb-3">Technologies Used</h4>
                          <div className="flex flex-wrap gap-2">
                            {exp.technologies.map((tech) => (
                              <Badge key={tech} variant="secondary" className="text-sm">
                                {tech}
                              </Badge>
                            ))}
                          </div>
                        </div>

                        <div>
                          <h4 className="font-semibold text-foreground mb-3">Key Highlights</h4>
                          <div className="space-y-2">
                            {exp.highlights.map((highlight, idx) => (
                              <div key={idx} className="flex items-center text-sm text-muted-foreground">
                                <div className="w-1.5 h-1.5 bg-accent rounded-full mr-2 flex-shrink-0" />
                                {highlight}
                              </div>
                            ))}
                          </div>
                        </div>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </div>
            </div>
          ))}

          {/* Looking Forward Section */}
          <div className="animate-on-scroll">
            <Card className="bg-gradient-primary text-white">
              <CardContent className="p-8 text-center">
                <h3 className="text-2xl font-bold mb-4">Looking Forward</h3>
                <p className="text-white/90 text-lg max-w-2xl mx-auto">
                  I'm eager to take on new challenges and contribute to innovative projects that make a 
                  meaningful impact. Ready to bring my experience and passion to your team.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;
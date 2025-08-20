import { useEffect, useRef, useState } from "react";
import { Code, Database, Brain, Users, Lightbulb, MessageSquare, Mic, Target } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

const Skills = () => {
  const sectionRef = useRef<HTMLElement>(null);
  const [animatedBars, setAnimatedBars] = useState<Set<string>>(new Set());

  const technicalSkills = [
    { name: "Python", level: 95, icon: Code },
    { name: "JavaScript", level: 85, icon: Code },
    { name: "Machine Learning", level: 90, icon: Brain },
    { name: "Flask", level: 80, icon: Code },
    { name: "MySQL/SQLite3", level: 85, icon: Database },
    { name: "Data Structures & Algorithms", level: 88, icon: Code },
    { name: "HTML/CSS", level: 90, icon: Code },
    { name: "Pandas", level: 85, icon: Database },
  ];

  const softSkills = [
    { name: "Analytical Thinking", icon: Brain },
    { name: "Problem-Solving", icon: Lightbulb },
    { name: "Effective Communication", icon: MessageSquare },
    { name: "Public Speaking", icon: Mic },
    { name: "Team Collaboration", icon: Users },
    { name: "Goal-Oriented", icon: Target },
  ];

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("in-view");
            
            // Animate skill bars
            if (entry.target.classList.contains("skill-section")) {
              setTimeout(() => {
                technicalSkills.forEach((skill) => {
                  setAnimatedBars(prev => new Set([...prev, skill.name]));
                });
              }, 500);
            }
          }
        });
      },
      { threshold: 0.1 }
    );

    const elements = sectionRef.current?.querySelectorAll(".animate-on-scroll, .skill-section");
    elements?.forEach((el) => observer.observe(el));

    return () => observer.disconnect();
  }, []);

  return (
    <section id="skills" ref={sectionRef} className="py-20 bg-background">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="animate-on-scroll text-center mb-16">
          <div className="flex items-center justify-center mb-4">
            <Brain className="w-8 h-8 text-accent mr-3" />
            <span className="text-accent font-semibold text-lg uppercase tracking-wide">Skills</span>
          </div>
          <h2 className="text-4xl sm:text-5xl font-bold text-foreground mb-6">
            My{" "}
            <span className="text-gradient">Expertise</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            A comprehensive set of technical and soft skills that enable me to tackle complex challenges
            and deliver innovative solutions.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Technical Skills */}
          <div className="animate-on-scroll skill-section">
            <Card className="bg-card/70 backdrop-blur-sm border-border/50 shadow-lg">
              <CardHeader>
                <CardTitle className="flex items-center text-2xl">
                  <Code className="w-6 h-6 text-accent mr-3" />
                  Technical Skills
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-6">
                {technicalSkills.map((skill) => {
                  const IconComponent = skill.icon;
                  return (
                    <div key={skill.name} className="space-y-2">
                      <div className="flex items-center justify-between">
                        <div className="flex items-center space-x-2">
                          <IconComponent className="w-4 h-4 text-accent" />
                          <span className="font-medium text-foreground">{skill.name}</span>
                        </div>
                        <span className="text-sm text-muted-foreground">{skill.level}%</span>
                      </div>
                      <div className="skill-bar">
                        <div 
                          className="skill-progress"
                          style={{
                            width: animatedBars.has(skill.name) ? `${skill.level}%` : '0%'
                          }}
                        />
                      </div>
                    </div>
                  );
                })}
              </CardContent>
            </Card>
          </div>

          {/* Soft Skills */}
          <div className="animate-on-scroll">
            <Card className="bg-card/70 backdrop-blur-sm border-border/50 shadow-lg">
              <CardHeader>
                <CardTitle className="flex items-center text-2xl">
                  <Users className="w-6 h-6 text-accent mr-3" />
                  Soft Skills
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="grid grid-cols-2 gap-4">
                  {softSkills.map((skill) => {
                    const IconComponent = skill.icon;
                    return (
                      <div 
                        key={skill.name}
                        className="flex items-center space-x-3 p-4 rounded-lg bg-muted/30 card-hover"
                      >
                        <div className="w-10 h-10 bg-gradient-primary rounded-full flex items-center justify-center flex-shrink-0">
                          <IconComponent className="w-5 h-5 text-white" />
                        </div>
                        <span className="font-medium text-foreground text-sm leading-tight">
                          {skill.name}
                        </span>
                      </div>
                    );
                  })}
                </div>
              </CardContent>
            </Card>
          </div>
        </div>

        {/* Additional Skills Section */}
        <div className="animate-on-scroll mt-12">
          <Card className="bg-gradient-primary text-white">
            <CardContent className="p-8 text-center">
              <h3 className="text-2xl font-bold mb-4">Always Learning</h3>
              <p className="text-white/90 text-lg max-w-2xl mx-auto">
                I'm constantly expanding my skill set, staying updated with the latest technologies 
                in AI/ML, and exploring new frameworks to enhance my problem-solving capabilities.
              </p>
              <div className="mt-6 flex flex-wrap justify-center gap-3">
                {["GitHub", "Git", "Agile", "Research", "Innovation"].map((skill) => (
                  <span 
                    key={skill}
                    className="px-4 py-2 bg-white/20 rounded-full text-sm font-medium backdrop-blur-sm"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default Skills;
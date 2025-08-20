import { useEffect, useRef } from "react";
import { FileCheck, ExternalLink, Calendar, Award } from "lucide-react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";

const Certifications = () => {
  const sectionRef = useRef<HTMLElement>(null);

  const certifications = [
    {
      title: "Artificial Intelligence using Python",
      issuer: "Infosys",
      date: "2024",
      description: "Comprehensive certification covering AI fundamentals, machine learning algorithms, and practical Python implementation for AI applications.",
      skills: ["Python", "AI Fundamentals", "Machine Learning", "Data Processing"],
      level: "Professional",
      color: "from-blue-500 to-blue-600",
      certificateUrl: "https://drive.google.com/file/d/1G2syliRyETYd2_x-NBvNob2kXznrUi6G/view?usp=drivesdk"
    },
    {
      title: "Data Structures & Algorithms",
      issuer: "Infosys",
      date: "2024",
      description: "In-depth coverage of essential data structures and algorithmic problem-solving techniques for efficient software development.",
      skills: ["Data Structures", "Algorithms", "Problem Solving", "Optimization"],
      level: "Professional",
      color: "from-green-500 to-green-600",
      certificateUrl: "https://drive.google.com/file/d/1G7SwS-Rkbu5CeRAo1mDMQHCPqYiAx5vN/view?usp=drivesdk"
    },
    {
      title: "Java for Beginners",
      issuer: "Infosys",
      date: "2024",
      description: "Fundamental Java programming concepts, object-oriented programming, and application development best practices.",
      skills: ["Java", "OOP", "Programming Fundamentals", "Software Development"],
      level: "Beginner",
      color: "from-orange-500 to-orange-600",
      certificateUrl: "https://drive.google.com/file/d/1G1ZaKnGqZchBt9LDGPxyeUFk6t1il9xm/view?usp=drivesdk"
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
    <section id="certifications" ref={sectionRef} className="py-20 bg-muted/30">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="animate-on-scroll text-center mb-16">
          <div className="flex items-center justify-center mb-4">
            <FileCheck className="w-8 h-8 text-accent mr-3" />
            <span className="text-accent font-semibold text-lg uppercase tracking-wide">Certifications</span>
          </div>
          <h2 className="text-4xl sm:text-5xl font-bold text-foreground mb-6">
            Professional{" "}
            <span className="text-gradient">Credentials</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Validated expertise through industry-recognized certifications that demonstrate 
            commitment to continuous learning and professional development.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {certifications.map((cert, index) => (
            <div key={cert.title} className="animate-on-scroll" style={{ animationDelay: `${index * 0.2}s` }}>
              <Card className="h-full bg-card/70 backdrop-blur-sm border-border/50 card-hover group overflow-hidden">
                {/* Certificate Header with Gradient */}
                <div className={`h-2 bg-gradient-to-r ${cert.color}`}></div>
                
                <CardHeader className="relative">
                  <div className="flex items-start justify-between mb-4">
                    <div className="w-12 h-12 bg-gradient-primary rounded-lg flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                      <FileCheck className="w-6 h-6 text-white" />
                    </div>
                    <Badge variant={cert.level === "Professional" ? "default" : "secondary"} className="text-xs">
                      {cert.level}
                    </Badge>
                  </div>
                  
                  <CardTitle className="text-xl text-foreground group-hover:text-primary transition-colors duration-200 leading-tight">
                    {cert.title}
                  </CardTitle>
                  
                  <div className="flex items-center justify-between">
                    <CardDescription className="text-primary font-semibold">
                      {cert.issuer}
                    </CardDescription>
                    <div className="flex items-center text-sm text-muted-foreground">
                      <Calendar className="w-4 h-4 mr-1" />
                      {cert.date}
                    </div>
                  </div>
                </CardHeader>
                
                <CardContent className="pt-0">
                  <p className="text-muted-foreground leading-relaxed mb-6">
                    {cert.description}
                  </p>
                  
                  <div className="space-y-4">
                    <div>
                      <h4 className="font-medium text-foreground mb-2">Key Skills</h4>
                      <div className="flex flex-wrap gap-2">
                        {cert.skills.map((skill) => (
                          <Badge key={skill} variant="outline" className="text-xs">
                            {skill}
                          </Badge>
                        ))}
                      </div>
                    </div>
                    
                    <div className="pt-2">
                      <Button 
                        variant="ghost" 
                        size="sm" 
                        className="w-full justify-between p-3 h-auto hover:bg-muted/50"
                        onClick={() => window.open(cert.certificateUrl, '_blank')}
                      >
                        <span className="flex items-center">
                          <Award className="w-4 h-4 mr-2" />
                          View Certificate
                        </span>
                        <ExternalLink className="w-4 h-4" />
                      </Button>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          ))}
        </div>

        {/* Certification Stats & Future Learning */}
        <div className="grid lg:grid-cols-2 gap-8 mt-16">
          {/* Stats */}
          <div className="animate-on-scroll">
            <Card className="bg-card/70 backdrop-blur-sm border-border/50">
              <CardHeader>
                <CardTitle className="flex items-center text-xl">
                  <Award className="w-6 h-6 text-accent mr-3" />
                  Certification Summary
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="grid grid-cols-2 gap-6">
                  <div className="text-center">
                    <div className="text-3xl font-bold text-foreground mb-2">3</div>
                    <div className="text-sm text-muted-foreground">Completed</div>
                  </div>
                  <div className="text-center">
                    <div className="text-3xl font-bold text-foreground mb-2">2024</div>
                    <div className="text-sm text-muted-foreground">Recent Year</div>
                  </div>
                </div>
                <div className="mt-6 p-4 bg-muted/30 rounded-lg">
                  <div className="flex items-center justify-between mb-2">
                    <span className="text-sm font-medium">Learning Progress</span>
                    <span className="text-sm text-muted-foreground">Ongoing</span>
                  </div>
                  <div className="text-xs text-muted-foreground">
                    Continuously updating skills with new certifications and courses
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Future Learning */}
          <div className="animate-on-scroll">
            <Card className="bg-gradient-primary text-white">
              <CardContent className="p-8">
                <h3 className="text-xl font-bold mb-4 flex items-center">
                  <FileCheck className="w-6 h-6 mr-3" />
                  Continuous Learning
                </h3>
                <p className="text-white/90 mb-6">
                  I'm committed to staying current with the latest technologies and 
                  best practices in AI/ML through ongoing certification and learning.
                </p>
                <div className="space-y-2">
                  <div className="flex items-center text-sm">
                    <div className="w-2 h-2 bg-white/60 rounded-full mr-3" />
                    Advanced Machine Learning Specialization
                  </div>
                  <div className="flex items-center text-sm">
                    <div className="w-2 h-2 bg-white/60 rounded-full mr-3" />
                    Cloud Computing Certifications
                  </div>
                  <div className="flex items-center text-sm">
                    <div className="w-2 h-2 bg-white/60 rounded-full mr-3" />
                    DevOps and MLOps Training
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Certifications;
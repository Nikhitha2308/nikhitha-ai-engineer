import { useEffect, useRef } from "react";
import { GraduationCap, Calendar, MapPin, Award, TrendingUp } from "lucide-react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

const Education = () => {
  const sectionRef = useRef<HTMLElement>(null);

  const education = {
    degree: "B.Tech in Artificial Intelligence & Machine Learning",
    institution: "Ballari Institute of Technology and Management",
    location: "Ballari, Karnataka, India",
    period: "Dec 2022 – Present",
    gpa: "8.06",
    semester: "6th semester",
    status: "Ongoing",
    coursework: [
      "Machine Learning Algorithms",
      "Deep Learning & Neural Networks",
      "Data Structures & Algorithms",
      "Database Management Systems",
      "Computer Vision",
      "Natural Language Processing",
      "Statistics & Probability",
      "Software Engineering"
    ],
    achievements: [
      "Consistent academic excellence with 8.06 GPA",
      "Strong foundation in AI/ML concepts",
      "Practical project implementation experience",
      "Active participation in technical activities"
    ]
  };

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
    <section id="education" ref={sectionRef} className="py-20 bg-muted/30">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="animate-on-scroll text-center mb-16">
          <div className="flex items-center justify-center mb-4">
            <GraduationCap className="w-8 h-8 text-accent mr-3" />
            <span className="text-accent font-semibold text-lg uppercase tracking-wide">Education</span>
          </div>
          <h2 className="text-4xl sm:text-5xl font-bold text-foreground mb-6">
            Academic{" "}
            <span className="text-gradient">Foundation</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Building a strong theoretical foundation while gaining practical experience in 
            artificial intelligence and machine learning.
          </p>
        </div>

        <div className="max-w-4xl mx-auto">
          <div className="animate-on-scroll">
            <Card className="bg-card/70 backdrop-blur-sm border-border/50 shadow-lg">
              <CardHeader>
                <div className="flex items-start justify-between">
                  <div className="flex-1">
                    <div className="flex items-center gap-3 mb-3">
                      <div className="w-12 h-12 bg-gradient-primary rounded-lg flex items-center justify-center">
                        <GraduationCap className="w-6 h-6 text-white" />
                      </div>
                      <div>
                        <CardTitle className="text-2xl text-foreground">{education.degree}</CardTitle>
                        <CardDescription className="text-lg font-semibold text-primary">
                          {education.institution}
                        </CardDescription>
                      </div>
                    </div>
                    
                    <div className="flex flex-col sm:flex-row sm:items-center gap-2 text-muted-foreground mb-4">
                      <div className="flex items-center">
                        <Calendar className="w-4 h-4 mr-1" />
                        {education.period}
                      </div>
                      <span className="hidden sm:inline">•</span>
                      <div className="flex items-center">
                        <MapPin className="w-4 h-4 mr-1" />
                        {education.location}
                      </div>
                      <span className="hidden sm:inline">•</span>
                      <Badge className="bg-accent text-white">{education.status}</Badge>
                    </div>
                  </div>

                  {/* GPA Highlight */}
                  <div className="text-center">
                    <div className="w-20 h-20 bg-gradient-primary rounded-full flex items-center justify-center mb-2">
                      <span className="text-2xl font-bold text-white">{education.gpa}</span>
                    </div>
                    <p className="text-sm text-muted-foreground">GPA</p>
                    <p className="text-xs text-muted-foreground">till {education.semester}</p>
                  </div>
                </div>
              </CardHeader>

              <CardContent>
                <div className="grid lg:grid-cols-2 gap-8">
                  {/* Coursework */}
                  <div>
                    <h4 className="font-semibold text-foreground mb-4 flex items-center">
                      <Award className="w-5 h-5 text-accent mr-2" />
                      Key Coursework
                    </h4>
                    <div className="grid grid-cols-1 gap-3">
                      {education.coursework.map((course, idx) => (
                        <div key={idx} className="flex items-center text-muted-foreground">
                          <div className="w-2 h-2 bg-accent rounded-full mr-3 flex-shrink-0" />
                          <span className="leading-relaxed">{course}</span>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Academic Achievements */}
                  <div>
                    <h4 className="font-semibold text-foreground mb-4 flex items-center">
                      <TrendingUp className="w-5 h-5 text-accent mr-2" />
                      Academic Highlights
                    </h4>
                    <div className="space-y-4">
                      {education.achievements.map((achievement, idx) => (
                        <div key={idx} className="flex items-start">
                          <div className="w-2 h-2 bg-accent rounded-full mr-3 mt-2 flex-shrink-0" />
                          <span className="text-muted-foreground leading-relaxed">{achievement}</span>
                        </div>
                      ))}
                    </div>

                    {/* Progress Indicator */}
                    <div className="mt-6 p-4 bg-muted/30 rounded-lg">
                      <div className="flex items-center justify-between mb-2">
                        <span className="text-sm font-medium text-foreground">Academic Progress</span>
                        <span className="text-sm text-muted-foreground">75% Complete</span>
                      </div>
                      <div className="w-full bg-muted rounded-full h-2">
                        <div className="bg-gradient-primary h-2 rounded-full w-3/4 transition-all duration-1000"></div>
                      </div>
                      <p className="text-xs text-muted-foreground mt-2">
                        Currently in 6th semester, expected graduation: 2026
                      </p>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Future Goals */}
          <div className="animate-on-scroll mt-8">
            <Card className="bg-gradient-primary text-white">
              <CardContent className="p-8 text-center">
                <h3 className="text-2xl font-bold mb-4">Academic Excellence</h3>
                <p className="text-white/90 text-lg max-w-2xl mx-auto">
                  Committed to maintaining high academic standards while actively applying 
                  theoretical knowledge through practical projects and industry experience.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Education;
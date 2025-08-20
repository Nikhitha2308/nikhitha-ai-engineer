import { useEffect, useRef } from "react";
import { Trophy, Star, Target, Zap, Award, TrendingUp } from "lucide-react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";

const Achievements = () => {
  const sectionRef = useRef<HTMLElement>(null);

  const achievements = [
    {
      icon: Trophy,
      title: "Impactful AI & Software Projects",
      description: "Successfully completed multiple AI and software development projects that solve real-world problems and demonstrate technical expertise.",
      details: [
        "Built 3+ major AI/ML projects",
        "Integrated advanced algorithms",
        "Focused on practical applications",
        "Demonstrated innovation"
      ]
    },
    {
      icon: Target,
      title: "Practical Problem-Solving Expertise",
      description: "Gained extensive practical problem-solving and development expertise through hands-on internships and project implementations.",
      details: [
        "10+ months of industry experience",
        "Complex problem resolution",
        "Real-world application skills",
        "Continuous skill development"
      ]
    },
    {
      icon: Star,
      title: "Academic Excellence",
      description: "Maintained consistent academic performance with a strong GPA while actively engaging in practical learning experiences.",
      details: [
        "8.06 GPA achievement",
        "Consistent performance record",
        "Strong theoretical foundation",
        "Practical application focus"
      ]
    },
    {
      icon: Zap,
      title: "Technical Innovation",
      description: "Demonstrated ability to innovate and implement cutting-edge solutions in AI/ML and software development domains.",
      details: [
        "Creative solution development",
        "Technology integration",
        "Performance optimization",
        "System improvement initiatives"
      ]
    }
  ];

  const stats = [
    { number: "3+", label: "Major Projects", icon: Target },
    { number: "8.06", label: "Academic GPA", icon: Award },
    { number: "10+", label: "Months Experience", icon: TrendingUp },
    { number: "100%", label: "Commitment", icon: Zap }
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
    <section id="achievements" ref={sectionRef} className="py-20 bg-background">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="animate-on-scroll text-center mb-16">
          <div className="flex items-center justify-center mb-4">
            <Trophy className="w-8 h-8 text-accent mr-3" />
            <span className="text-accent font-semibold text-lg uppercase tracking-wide">Achievements</span>
          </div>
          <h2 className="text-4xl sm:text-5xl font-bold text-foreground mb-6">
            Notable{" "}
            <span className="text-gradient">Accomplishments</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            A track record of excellence in academics, technical projects, and professional development
            that showcases my commitment to continuous growth.
          </p>
        </div>

        {/* Stats Section */}
        <div className="animate-on-scroll mb-16">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-6">
            {stats.map((stat, index) => {
              const IconComponent = stat.icon;
              return (
                <Card key={stat.label} className="bg-card/70 backdrop-blur-sm border-border/50 text-center card-hover">
                  <CardContent className="p-6">
                    <div className="w-12 h-12 bg-gradient-primary rounded-full flex items-center justify-center mx-auto mb-4">
                      <IconComponent className="w-6 h-6 text-white" />
                    </div>
                    <div className="text-3xl font-bold text-foreground mb-2">{stat.number}</div>
                    <div className="text-sm text-muted-foreground font-medium">{stat.label}</div>
                  </CardContent>
                </Card>
              );
            })}
          </div>
        </div>

        {/* Main Achievements */}
        <div className="grid md:grid-cols-2 gap-8">
          {achievements.map((achievement, index) => {
            const IconComponent = achievement.icon;
            return (
              <div key={achievement.title} className="animate-on-scroll" style={{ animationDelay: `${index * 0.2}s` }}>
                <Card className="h-full bg-card/70 backdrop-blur-sm border-border/50 card-hover group">
                  <CardHeader>
                    <div className="flex items-start space-x-4">
                      <div className="w-12 h-12 bg-gradient-primary rounded-lg flex items-center justify-center group-hover:scale-110 transition-transform duration-300 flex-shrink-0">
                        <IconComponent className="w-6 h-6 text-white" />
                      </div>
                      <div className="flex-1">
                        <CardTitle className="text-xl text-foreground group-hover:text-primary transition-colors duration-200 mb-2">
                          {achievement.title}
                        </CardTitle>
                        <CardDescription className="text-muted-foreground leading-relaxed">
                          {achievement.description}
                        </CardDescription>
                      </div>
                    </div>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-2">
                      {achievement.details.map((detail, idx) => (
                        <div key={idx} className="flex items-center text-sm text-muted-foreground">
                          <div className="w-1.5 h-1.5 bg-accent rounded-full mr-3 flex-shrink-0" />
                          {detail}
                        </div>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              </div>
            );
          })}
        </div>

        {/* Future Aspirations */}
        <div className="animate-on-scroll mt-16">
          <Card className="bg-gradient-primary text-white">
            <CardContent className="p-8 text-center">
              <div className="flex items-center justify-center mb-4">
                <Star className="w-10 h-10 text-white mr-3" />
                <h3 className="text-2xl font-bold">Continuous Growth</h3>
              </div>
              <p className="text-white/90 text-lg max-w-2xl mx-auto mb-6">
                These achievements are just the beginning. I'm committed to pushing boundaries, 
                learning new technologies, and making meaningful contributions to the AI/ML field.
              </p>
              <div className="flex flex-wrap justify-center gap-3">
                {["Innovation", "Excellence", "Impact", "Growth", "Leadership"].map((value) => (
                  <span 
                    key={value}
                    className="px-4 py-2 bg-white/20 rounded-full text-sm font-medium backdrop-blur-sm"
                  >
                    {value}
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

export default Achievements;
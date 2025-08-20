import { useEffect, useRef } from "react";
import { Download, User, Target, Heart } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";

const About = () => {
  const sectionRef = useRef<HTMLElement>(null);

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
    <section id="about" ref={sectionRef} className="py-20 bg-muted/30">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="animate-on-scroll text-center mb-16">
          <div className="flex items-center justify-center mb-4">
            <User className="w-8 h-8 text-accent mr-3" />
            <span className="text-accent font-semibold text-lg uppercase tracking-wide">About Me</span>
          </div>
          <h2 className="text-4xl sm:text-5xl font-bold text-foreground mb-6">
            Get to know{" "}
            <span className="text-gradient">who I am</span>
          </h2>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Column - Story */}
          <div className="animate-on-scroll">
            <Card className="bg-card/50 backdrop-blur-sm border-border/50 shadow-lg">
              <CardContent className="p-8">
                <div className="space-y-6">
                  <div className="flex items-start space-x-4">
                    <div className="flex-shrink-0 w-12 h-12 bg-gradient-primary rounded-full flex items-center justify-center">
                      <Heart className="w-6 h-6 text-white" />
                    </div>
                    <div>
                      <h3 className="text-xl font-semibold text-foreground mb-3">My Passion</h3>
                      <p className="text-muted-foreground leading-relaxed">
                        I am an aspiring AI & ML Engineer with a strong passion for machine learning, 
                        data-driven problem solving, and software development. I thrive on transforming 
                        complex data into actionable insights and building intelligent systems that make a difference.
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start space-x-4">
                    <div className="flex-shrink-0 w-12 h-12 bg-gradient-primary rounded-full flex items-center justify-center">
                      <Target className="w-6 h-6 text-white" />
                    </div>
                    <div>
                      <h3 className="text-xl font-semibold text-foreground mb-3">My Mission</h3>
                      <p className="text-muted-foreground leading-relaxed">
                        With hands-on experience in building scalable applications and intelligent systems, 
                        I aim to apply my academic knowledge to real-world challenges and contribute to 
                        impactful projects that solve meaningful problems.
                      </p>
                    </div>
                  </div>
                </div>

                <div className="mt-8 pt-6 border-t border-border/50">
                  <Button 
                    size="lg"
                    className="bg-gradient-primary button-hover font-semibold"
                  >
                    <Download className="w-5 h-5 mr-2" />
                    Download Resume
                  </Button>
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Right Column - Highlights */}
          <div className="animate-on-scroll space-y-6">
            <div className="grid grid-cols-2 gap-6">
              <Card className="bg-card/70 backdrop-blur-sm border-border/50 card-hover">
                <CardContent className="p-6 text-center">
                  <div className="w-16 h-16 bg-gradient-primary rounded-full flex items-center justify-center mx-auto mb-4">
                    <span className="text-2xl font-bold text-white">3+</span>
                  </div>
                  <h4 className="font-semibold text-foreground mb-2">Projects</h4>
                  <p className="text-sm text-muted-foreground">Completed AI/ML projects</p>
                </CardContent>
              </Card>

              <Card className="bg-card/70 backdrop-blur-sm border-border/50 card-hover">
                <CardContent className="p-6 text-center">
                  <div className="w-16 h-16 bg-gradient-primary rounded-full flex items-center justify-center mx-auto mb-4">
                    <span className="text-2xl font-bold text-white">8.06</span>
                  </div>
                  <h4 className="font-semibold text-foreground mb-2">GPA</h4>
                  <p className="text-sm text-muted-foreground">Academic excellence</p>
                </CardContent>
              </Card>
            </div>

            <Card className="bg-card/70 backdrop-blur-sm border-border/50 card-hover">
              <CardContent className="p-6">
                <h4 className="font-semibold text-foreground mb-4">Currently Working On</h4>
                <div className="space-y-3">
                  <div className="flex items-center space-x-3">
                    <div className="w-2 h-2 bg-accent rounded-full animate-pulse"></div>
                    <span className="text-muted-foreground">Smart Ticketing System at EZ-TS</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <div className="w-2 h-2 bg-accent rounded-full animate-pulse"></div>
                    <span className="text-muted-foreground">Real-time Performance Monitoring</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <div className="w-2 h-2 bg-accent rounded-full animate-pulse"></div>
                    <span className="text-muted-foreground">Backend Optimization Projects</span>
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

export default About;
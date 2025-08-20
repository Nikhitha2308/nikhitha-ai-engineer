import { useState, useEffect } from "react";
import { ChevronDown, Download, Mail, Sparkles } from "lucide-react";
import { Button } from "@/components/ui/button";
import heroImage from "@/assets/hero-bg.jpg";

const Hero = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  const scrollToSection = (href: string) => {
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image with Overlay */}
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: `url(${heroImage})` }}
      />
      <div className="absolute inset-0 bg-gradient-to-br from-navy/80 via-navy/60 to-teal/70" />
      
      {/* Animated Background Elements */}
      <div className="absolute inset-0">
        <div className="absolute top-20 left-10 w-2 h-2 bg-teal rounded-full animate-pulse opacity-60" />
        <div className="absolute top-40 right-20 w-3 h-3 bg-accent rounded-full animate-ping opacity-40" />
        <div className="absolute bottom-40 left-20 w-1 h-1 bg-white rounded-full animate-pulse opacity-80" />
        <div className="absolute bottom-20 right-10 w-2 h-2 bg-teal-light rounded-full animate-ping opacity-50" />
      </div>

      {/* Main Content */}
      <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <div className={`transition-all duration-1000 transform ${
          isVisible ? "translate-y-0 opacity-100" : "translate-y-10 opacity-0"
        }`}>
          {/* Greeting with Icon */}
          <div className="flex items-center justify-center mb-6">
            <Sparkles className="w-6 h-6 text-accent mr-3 animate-pulse" />
            <span className="text-accent font-medium text-lg">Hi, I'm Nikhitha 👋</span>
          </div>

          {/* Main Title */}
          <h1 className="text-4xl sm:text-5xl lg:text-7xl font-bold text-white leading-tight mb-6">
            An{" "}
            <span className="text-gradient bg-gradient-to-r from-accent to-teal-light bg-clip-text text-transparent">
              AI & ML Engineer
            </span>
          </h1>

          {/* Subtitle */}
          <p className="text-xl sm:text-2xl text-white/90 max-w-3xl mx-auto leading-relaxed mb-8">
            passionate about building{" "}
            <span className="text-accent font-semibold">intelligent systems</span>
            {" "}and solving{" "}
            <span className="text-accent font-semibold">real-world problems</span>
          </p>

          {/* CTA Buttons */}
          <div className={`flex flex-col sm:flex-row gap-4 justify-center items-center transition-all duration-1000 delay-300 transform ${
            isVisible ? "translate-y-0 opacity-100" : "translate-y-10 opacity-0"
          }`}>
            <Button 
              size="lg"
              className="bg-accent hover:bg-accent/90 text-white font-semibold px-8 py-4 text-lg button-hover shadow-glow"
            >
              <Download className="w-5 h-5 mr-2" />
              Download Resume
            </Button>
            <Button 
              size="lg"
              variant="outline" 
              onClick={() => scrollToSection("#contact")}
              className="border-white/30 text-white hover:bg-white/10 font-semibold px-8 py-4 text-lg button-hover backdrop-blur-sm"
            >
              <Mail className="w-5 h-5 mr-2" />
              Let's Connect
            </Button>
          </div>
        </div>

        {/* Scroll Indicator */}
        <div className={`absolute bottom-8 left-1/2 transform -translate-x-1/2 transition-all duration-1000 delay-700 ${
          isVisible ? "translate-y-0 opacity-100" : "translate-y-10 opacity-0"
        }`}>
          <button
            onClick={() => scrollToSection("#about")}
            className="text-white/70 hover:text-white transition-colors duration-200 animate-bounce"
            aria-label="Scroll to about section"
          >
            <ChevronDown className="w-8 h-8" />
          </button>
        </div>
      </div>
    </section>
  );
};

export default Hero;
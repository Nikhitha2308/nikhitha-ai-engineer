import { Heart, ArrowUp, Mail, Linkedin, Github, Phone } from "lucide-react";
import { Button } from "@/components/ui/button";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const quickLinks = [
    { name: "About", href: "#about" },
    { name: "Skills", href: "#skills" },
    { name: "Projects", href: "#projects" },
    { name: "Experience", href: "#experience" },
    { name: "Education", href: "#education" },
    { name: "Contact", href: "#contact" },
  ];

  const socialLinks = [
    {
      name: "Email",
      href: "mailto:nikhitha.d23@gmail.com",
      icon: Mail,
      description: "nikhitha.d23@gmail.com"
    },
    {
      name: "LinkedIn",
      href: "https://linkedin.com/in/nikhitha-d-3200692b0",
      icon: Linkedin,
      description: "Professional Profile"
    },
    {
      name: "GitHub",
      href: "#",
      icon: Github,
      description: "Code Repository"
    },
    {
      name: "Phone",
      href: "tel:+919704604291",
      icon: Phone,
      description: "+91 9704604291"
    }
  ];

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const scrollToSection = (href: string) => {
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <footer className="bg-navy-dark text-white relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-br from-accent/10 to-transparent" />
        <div className="absolute top-10 left-10 w-2 h-2 bg-accent rounded-full animate-pulse" />
        <div className="absolute top-20 right-20 w-1 h-1 bg-white rounded-full animate-ping" />
        <div className="absolute bottom-20 left-20 w-1 h-1 bg-accent rounded-full animate-pulse" />
        <div className="absolute bottom-10 right-10 w-2 h-2 bg-white/50 rounded-full animate-ping" />
      </div>

      <div className="relative z-10">
        {/* Main Footer Content */}
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
          <div className="grid lg:grid-cols-4 md:grid-cols-2 gap-8">
            {/* Brand Section */}
            <div className="lg:col-span-2">
              <div className="mb-6">
                <h3 className="text-2xl font-bold text-gradient bg-gradient-to-r from-accent to-teal-light bg-clip-text text-transparent mb-3">
                  Nikhitha D
                </h3>
                <p className="text-white/70 text-lg leading-relaxed">
                  AI & ML Engineer passionate about building intelligent systems and solving real-world problems. 
                  Let's create something amazing together.
                </p>
              </div>
              
              <div className="flex items-center space-x-4">
                {socialLinks.map((social) => {
                  const IconComponent = social.icon;
                  return (
                    <a
                      key={social.name}
                      href={social.href}
                      target={social.href.startsWith('http') ? '_blank' : undefined}
                      rel={social.href.startsWith('http') ? 'noopener noreferrer' : undefined}
                      className="w-10 h-10 bg-white/10 hover:bg-accent/20 rounded-full flex items-center justify-center transition-all duration-300 hover:scale-110"
                      aria-label={social.name}
                    >
                      <IconComponent className="w-5 h-5" />
                    </a>
                  );
                })}
              </div>
            </div>

            {/* Quick Links */}
            <div>
              <h4 className="text-lg font-semibold mb-4 text-white">Quick Links</h4>
              <ul className="space-y-2">
                {quickLinks.map((link) => (
                  <li key={link.name}>
                    <button
                      onClick={() => scrollToSection(link.href)}
                      className="text-white/70 hover:text-accent transition-colors duration-200 text-left"
                    >
                      {link.name}
                    </button>
                  </li>
                ))}
              </ul>
            </div>

            {/* Contact Info */}
            <div>
              <h4 className="text-lg font-semibold mb-4 text-white">Get in Touch</h4>
              <div className="space-y-3">
                <div className="text-white/70">
                  <p className="text-sm">📧 nikhitha.d23@gmail.com</p>
                </div>
                <div className="text-white/70">
                  <p className="text-sm">📱 +91 9704604291</p>
                </div>
                <div className="text-white/70">
                  <p className="text-sm">📍 Ballari, Karnataka, India</p>
                </div>
              </div>
              
              <div className="mt-6">
                <Button
                  onClick={() => scrollToSection("#contact")}
                  variant="outline"
                  className="border-accent/30 text-accent hover:bg-accent/10"
                >
                  <Mail className="w-4 h-4 mr-2" />
                  Let's Connect
                </Button>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="border-t border-white/10">
          <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
            <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
              <div className="flex items-center text-white/60 text-sm">
                <span>© {currentYear} Nikhitha D. Made with</span>
                <Heart className="w-4 h-4 mx-2 text-accent animate-pulse" />
                <span>and passion for AI/ML</span>
              </div>

              <div className="flex items-center space-x-6">
                <div className="text-white/60 text-sm">
                  Built with React & TypeScript
                </div>
                <Button
                  onClick={scrollToTop}
                  variant="ghost"
                  size="sm"
                  className="text-white/60 hover:text-accent hover:bg-accent/10"
                  aria-label="Scroll to top"
                >
                  <ArrowUp className="w-4 h-4" />
                </Button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
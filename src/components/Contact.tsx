import { useState, useEffect, useRef } from "react";
import { Mail, Phone, MapPin, Linkedin, Send, User, MessageSquare } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { useToast } from "@/hooks/use-toast";

const Contact = () => {
  const sectionRef = useRef<HTMLElement>(null);
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: ""
  });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const contactInfo = [
    {
      icon: Mail,
      label: "Email",
      value: "nikhitha.d23@gmail.com",
      href: "mailto:nikhitha.d23@gmail.com",
      description: "Send me an email"
    },
    {
      icon: Phone,
      label: "Phone",
      value: "+91 9704604291",
      href: "tel:+919704604291",
      description: "Give me a call"
    },
    {
      icon: MapPin,
      label: "Location",
      value: "Ballari, Karnataka, India",
      href: "#",
      description: "Current location"
    },
    {
      icon: Linkedin,
      label: "LinkedIn",
      value: "nikhitha-d-3200692b0",
      href: "https://linkedin.com/in/nikhitha-d-3200692b0",
      description: "Connect with me"
    }
  ];

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      const formDataToSend = new FormData();
      formDataToSend.append('access_key', 'f782c240-6531-4dda-a5b1-3daf146d5940');
      formDataToSend.append('name', formData.name);
      formDataToSend.append('email', formData.email);
      formDataToSend.append('message', formData.message);
      formDataToSend.append('subject', 'New Portfolio Contact Form Submission');
      formDataToSend.append('from_name', formData.name);
      formDataToSend.append('redirect', 'false');

      const response = await fetch('https://api.web3forms.com/submit', {
        method: 'POST',
        body: formDataToSend
      });

      const result = await response.json();

      if (result.success) {
        toast({
          title: "Message sent successfully ✅",
          description: "Thank you for reaching out! I'll get back to you soon.",
        });
        
        setFormData({
          name: "",
          email: "",
          message: ""
        });
      } else {
        throw new Error(result.message || 'Failed to send message');
      }
    } catch (error) {
      console.error('Form submission error:', error);
      toast({
        title: "Failed to send message ❌",
        description: "Something went wrong. Please try again or contact me directly via email.",
        variant: "destructive",
      });
    } finally {
      setIsSubmitting(false);
    }
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
    <section id="contact" ref={sectionRef} className="py-20 bg-background">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="animate-on-scroll text-center mb-16">
          <div className="flex items-center justify-center mb-4">
            <Mail className="w-8 h-8 text-accent mr-3" />
            <span className="text-accent font-semibold text-lg uppercase tracking-wide">Contact</span>
          </div>
          <h2 className="text-4xl sm:text-5xl font-bold text-foreground mb-6">
            Let's{" "}
            <span className="text-gradient">Connect</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            I'm always excited to discuss new opportunities, collaborate on interesting projects, 
            or simply have a conversation about AI/ML and technology.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Contact Information */}
          <div className="animate-on-scroll">
            <Card className="bg-card/70 backdrop-blur-sm border-border/50 shadow-lg">
              <CardHeader>
                <CardTitle className="text-2xl text-foreground mb-4">Get in Touch</CardTitle>
                <p className="text-muted-foreground">
                  Feel free to reach out through any of these channels. I typically respond within 24 hours.
                </p>
              </CardHeader>
              <CardContent className="space-y-6">
                {contactInfo.map((info) => {
                  const IconComponent = info.icon;
                  return (
                    <div key={info.label} className="group">
                      <a
                        href={info.href}
                        target={info.href.startsWith('http') ? '_blank' : undefined}
                        rel={info.href.startsWith('http') ? 'noopener noreferrer' : undefined}
                        className="flex items-center space-x-4 p-4 rounded-lg hover:bg-muted/30 transition-colors duration-200 card-hover"
                      >
                        <div className="w-12 h-12 bg-gradient-primary rounded-lg flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                          <IconComponent className="w-6 h-6 text-white" />
                        </div>
                        <div className="flex-1">
                          <h4 className="font-semibold text-foreground group-hover:text-primary transition-colors duration-200">
                            {info.label}
                          </h4>
                          <p className="text-muted-foreground">{info.value}</p>
                          <p className="text-xs text-muted-foreground mt-1">{info.description}</p>
                        </div>
                      </a>
                    </div>
                  );
                })}
                
                {/* Quick Response Promise */}
                <div className="mt-8 p-4 bg-accent/10 rounded-lg border border-accent/20">
                  <div className="flex items-center space-x-3">
                    <div className="w-8 h-8 bg-accent/20 rounded-full flex items-center justify-center">
                      <MessageSquare className="w-4 h-4 text-accent" />
                    </div>
                    <div>
                      <h4 className="font-semibold text-foreground">Quick Response</h4>
                      <p className="text-sm text-muted-foreground">I aim to respond to all messages within 24 hours</p>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Contact Form */}
          <div className="animate-on-scroll">
            <Card className="bg-card/70 backdrop-blur-sm border-border/50 shadow-lg">
              <CardHeader>
                <CardTitle className="text-2xl text-foreground">Send a Message</CardTitle>
                <p className="text-muted-foreground">
                  Have a project in mind or want to discuss opportunities? Drop me a message!
                </p>
              </CardHeader>
              <CardContent>
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="space-y-2">
                    <Label htmlFor="name" className="text-foreground font-medium">
                      Your Name
                    </Label>
                    <div className="relative">
                      <User className="absolute left-3 top-3 h-4 w-4 text-muted-foreground" />
                      <Input
                        id="name"
                        name="name"
                        type="text"
                        placeholder="Enter your full name"
                        value={formData.name}
                        onChange={handleInputChange}
                        className="pl-10"
                        required
                      />
                    </div>
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="email" className="text-foreground font-medium">
                      Email Address
                    </Label>
                    <div className="relative">
                      <Mail className="absolute left-3 top-3 h-4 w-4 text-muted-foreground" />
                      <Input
                        id="email"
                        name="email"
                        type="email"
                        placeholder="your.email@example.com"
                        value={formData.email}
                        onChange={handleInputChange}
                        className="pl-10"
                        required
                      />
                    </div>
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="message" className="text-foreground font-medium">
                      Message
                    </Label>
                    <Textarea
                      id="message"
                      name="message"
                      placeholder="Tell me about your project, opportunity, or just say hello!"
                      value={formData.message}
                      onChange={handleInputChange}
                      rows={5}
                      className="resize-none"
                      required
                    />
                  </div>

                  <Button
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full bg-gradient-primary button-hover font-semibold py-3 text-lg"
                  >
                    {isSubmitting ? (
                      <div className="flex items-center">
                        <div className="w-4 h-4 border-2 border-white/30 border-t-white rounded-full animate-spin mr-2" />
                        Sending...
                      </div>
                    ) : (
                      <div className="flex items-center justify-center">
                        <Send className="w-5 h-5 mr-2" />
                        Send Message
                      </div>
                    )}
                  </Button>
                </form>
              </CardContent>
            </Card>
          </div>
        </div>

        {/* Call to Action */}
        <div className="animate-on-scroll mt-16">
          <Card className="bg-gradient-primary text-white">
            <CardContent className="p-8 text-center">
              <h3 className="text-2xl font-bold mb-4">Ready to Work Together?</h3>
              <p className="text-white/90 text-lg max-w-2xl mx-auto mb-6">
                Whether you have a project in mind, want to discuss AI/ML solutions, or are looking 
                for a passionate team member, I'd love to hear from you.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button variant="secondary" size="lg" className="button-hover" asChild>
                  <a href="mailto:nikhitha.d23@gmail.com">
                    <Mail className="w-5 h-5 mr-2" />
                    Email Me Directly
                  </a>
                </Button>
                <Button variant="outline" size="lg" className="border-white/30 text-white hover:bg-white/10 button-hover" asChild>
                  <a href="https://linkedin.com/in/nikhitha-d-3200692b0" target="_blank" rel="noopener noreferrer">
                    <Linkedin className="w-5 h-5 mr-2" />
                    Connect on LinkedIn
                  </a>
                </Button>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default Contact;
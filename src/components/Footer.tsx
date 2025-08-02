import { Button } from "@/components/ui/button";
import { ArrowUp, Github, Linkedin, Mail, Heart } from "lucide-react";

export const Footer = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-secondary-dark text-white relative overflow-hidden">
      <div className="container mx-auto px-6 py-12">
        <div className="max-w-6xl mx-auto">
          {/* Main Footer Content */}
          <div className="grid md:grid-cols-3 gap-8 mb-8">
            {/* Brand Section */}
            <div className="space-y-4">
              <h3 className="font-heading text-2xl font-bold">
                Kapil <span className="text-accent">Subedi</span>
              </h3>
              <p className="text-gray-300 leading-relaxed">
                Civil Engineer passionate about building innovative solutions 
                and turning complex problems into elegant designs.
              </p>
              <div className="flex gap-3">
                <Button variant="ghost" size="icon" className="text-gray-300 hover:text-accent hover:bg-accent/10">
                  <Github className="w-5 h-5" />
                </Button>
                <Button variant="ghost" size="icon" className="text-gray-300 hover:text-accent hover:bg-accent/10">
                  <Linkedin className="w-5 h-5" />
                </Button>
                <Button variant="ghost" size="icon" className="text-gray-300 hover:text-accent hover:bg-accent/10">
                  <Mail className="w-5 h-5" />
                </Button>
              </div>
            </div>

            {/* Quick Links */}
            <div className="space-y-4">
              <h4 className="font-heading text-lg font-semibold">Quick Links</h4>
              <nav className="space-y-2">
                <a href="#about" className="block text-gray-300 hover:text-accent transition-colors">
                  About Me
                </a>
                <a href="#skills" className="block text-gray-300 hover:text-accent transition-colors">
                  Skills
                </a>
                <a href="#projects" className="block text-gray-300 hover:text-accent transition-colors">
                  Projects
                </a>
                <a href="#achievements" className="block text-gray-300 hover:text-accent transition-colors">
                  Achievements
                </a>
                <a href="#contact" className="block text-gray-300 hover:text-accent transition-colors">
                  Contact
                </a>
              </nav>
            </div>

            {/* Contact Info */}
            <div className="space-y-4">
              <h4 className="font-heading text-lg font-semibold">Get In Touch</h4>
              <div className="space-y-2 text-gray-300">
                <p>kapilsubedi60@example.com</p>
                <p>Kathmandu, Nepal</p>
                <p>Available for projects</p>
              </div>
            </div>
          </div>

          {/* Bottom Section */}
          <div className="border-t border-gray-600 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
            <div className="text-gray-300 text-sm">
              <p className="flex items-center gap-2">
                © {currentYear} Kapil Subedi. Made with <Heart className="w-4 h-4 text-red-500" /> and lots of love.
              </p>
            </div>

            <div className="text-gray-300 text-sm text-center md:text-right">
              <p className="italic">"Built with love and crafted with curiosity."</p>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll to Top Button */}
      <Button
        onClick={scrollToTop}
        className="fixed bottom-8 right-8 w-12 h-12 rounded-full bg-accent hover:bg-accent-glow shadow-lg glow-accent z-50 transition-all duration-300"
        size="icon"
      >
        <ArrowUp className="w-5 h-5" />
      </Button>

      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="grid-pattern w-full h-full"></div>
      </div>

      {/* Floating Gears */}
      <div className="absolute top-10 right-20 w-16 h-16 border border-accent/20 rounded-full gear-spin opacity-20"></div>
      <div className="absolute bottom-10 left-20 w-12 h-12 border border-accent/20 rounded-full gear-spin opacity-15" style={{ animationDirection: 'reverse' }}></div>
    </footer>
  );
};
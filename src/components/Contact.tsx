import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { Mail, Github, Linkedin, Send, MapPin, Phone } from "lucide-react";
import { useState } from "react";
import { text } from "stream/consumers";

export const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission here
    console.log('Form submitted:', formData);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData(prev => ({
      ...prev,
      [e.target.name]: e.target.value
    }));
  };

  return (
    <section className="py-20 relative">
      <div className="container mx-auto px-6">
        <div className="max-w-6xl mx-auto">
          {/* Section Header */}
          <div className="text-center mb-16">
            <h2 className="font-heading text-4xl md:text-5xl font-bold mb-4">
              Let's <span className="text-accent">Connect</span>
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Ready to collaborate on your next project? Let's build something amazing together.
            </p>
            <div className="w-24 h-1 bg-gradient-accent mx-auto mt-6"></div>
          </div>

          <div className="grid lg:grid-cols-2 gap-12">
            {/* Contact Info */}
            <div className="space-y-8">
              <div>
                <h3 className="font-heading text-2xl font-semibold mb-6">
                  Get In <span className="text-accent">Touch</span>
                </h3>
                <p className="text-muted-foreground leading-relaxed mb-8">
                  I'm always excited to discuss new opportunities, innovative projects, 
                  or potential collaborations. Whether you have a question about my work 
                  or want to explore working together, feel free to reach out.
                </p>
              </div>

              {/* Contact Methods */}
              <div className="space-y-4">
                <div className="flex items-center gap-4 p-4 rounded-lg bg-card border hover-lift">
                  <div className="w-10 h-10 bg-accent/10 rounded-lg flex items-center justify-center">
                    <Mail className="w-5 h-5 text-accent" />
                  </div>
                  <div>
                    <div className="font-semibold">Email</div>
                    <div className="text-muted-foreground">kapilsubedi60@example.com</div>
                  </div>
                </div>

                <div className="flex items-center gap-4 p-4 rounded-lg bg-card border hover-lift">
                  <div className="w-10 h-10 bg-accent/10 rounded-lg flex items-center justify-center">
                    <MapPin className="w-5 h-5 text-accent" />
                  </div>
                  <div>
                    <div className="font-semibold">Location</div>
                    <div className="text-muted-foreground">Kathamandu, Nepal</div>
                  </div>
                </div>

                <div className="flex items-center gap-4 p-4 rounded-lg bg-card border hover-lift">
                  <div className="w-10 h-10 bg-accent/10 rounded-lg flex items-center justify-center">
                    <Phone className="w-5 h-5 text-accent" />
                  </div>
                  <div>
                    <div className="font-semibold">Phone</div>
                    <div className="text-muted-foreground">+977 9864422447</div>
                  </div>
                </div>
              </div>

              {/* Social Links */}
            <div>
  <h4 className="font-semibold mb-4">Connect on Social</h4>
  <div className="flex gap-4">
    {/* LinkedIn */}
    <a
      href="https://www.linkedin.com/in/kapil-subedi-0230a8307"
      target="_blank"
      rel="noopener noreferrer"
    >
      <Button
        variant="outline"
        size="icon"
        className="hover:bg-accent hover:text-accent-foreground transition-colors"
      >
        {/* LinkedIn SVG */}
        <svg
          className="w-5 h-5"
          fill="currentColor"
          viewBox="0 0 24 24"
          aria-hidden="true"
        >
          <path d="M4.98 3.5C4.98 4.88 3.87 6 2.5 6S0 4.88 0 3.5 1.12 1 2.5 1 4.98 2.12 4.98 3.5zM0 8.25h5V24H0V8.25zm7.5 0h4.8v2.13h.07c.67-1.26 2.3-2.6 4.73-2.6 5.06 0 5.99 3.35 5.99 7.71V24h-5v-7.41c0-1.77-.03-4.05-2.47-4.05-2.47 0-2.85 1.93-2.85 3.93V24h-5V8.25z" />
        </svg>
      </Button>
    </a>

    {/* Facebook */}
    <a
      href="https://www.facebook.com/kapil.subedi.44063"
      target="_blank"
      rel="noopener noreferrer"
    >
      <Button
        variant="outline"
        size="icon"
        className="hover:bg-accent hover:text-accent-foreground transition-colors"
      >
        {/* Facebook SVG */}
        <svg
          className="w-5 h-5"
          fill="currentColor"
          viewBox="0 0 24 24"
          aria-hidden="true"
        >
          <path d="M22.675 0H1.325C.593 0 0 .593 0 1.326V22.67c0 .732.593 1.325 1.325 1.325h11.494v-9.843H9.691v-3.84h3.128V8.41c0-3.1 1.894-4.788 4.659-4.788 1.325 0 2.464.099 2.796.143v3.24l-1.918.001c-1.504 0-1.794.716-1.794 1.764v2.31h3.587l-.467 3.84h-3.12V24h6.116c.73 0 1.324-.593 1.324-1.325V1.325C24 .593 23.406 0 22.675 0z" />
        </svg>
      </Button>
    </a>

    {/* Instagram */}
    <a
      href="https://www.instagram.com/kaplisubedi1"
      target="_blank"
      rel="noopener noreferrer"
    >
      <Button
        variant="outline"
        size="icon"
        className="hover:bg-accent hover:text-accent-foreground transition-colors"
      >
        {/* Instagram SVG */}
        <svg
          className="w-5 h-5"
          fill="currentColor"
          viewBox="0 0 24 24"
          aria-hidden="true"
        >
          <path d="M12 2.163c3.204 0 3.584.012 4.85.07 1.366.062 2.633.35 3.608 1.325.975.975 1.263 2.242 1.325 3.608.058 1.266.07 1.646.07 4.85s-.012 3.584-.07 4.85c-.062 1.366-.35 2.633-1.325 3.608-.975.975-2.242 1.263-3.608 1.325-1.266.058-1.646.07-4.85.07s-3.584-.012-4.85-.07c-1.366-.062-2.633-.35-3.608-1.325-.975-.975-1.263-2.242-1.325-3.608C2.175 15.747 2.163 15.367 2.163 12s.012-3.584.07-4.85c.062-1.366.35-2.633 1.325-3.608.975-.975 2.242-1.263 3.608-1.325C8.416 2.175 8.796 2.163 12 2.163zm0-2.163C8.741 0 8.332.013 7.052.072 5.775.13 4.6.478 3.675 1.403 2.75 2.328 2.402 3.503 2.344 4.78 2.285 6.06 2.272 6.469 2.272 12s.013 5.94.072 7.22c.058 1.277.406 2.452 1.331 3.377.925.925 2.1 1.273 3.377 1.331 1.28.059 1.689.072 7.22.072s5.94-.013 7.22-.072c1.277-.058 2.452-.406 3.377-1.331.925-.925 1.273-2.1 1.331-3.377.059-1.28.072-1.689.072-7.22s-.013-5.94-.072-7.22c-.058-1.277-.406-2.452-1.331-3.377C20.548.478 19.373.13 18.096.072 16.816.013 16.407 0 12 0zm0 5.838A6.162 6.162 0 0 0 5.838 12 6.162 6.162 0 0 0 12 18.162 6.162 6.162 0 0 0 18.162 12 6.162 6.162 0 0 0 12 5.838zm0 10.162A4 4 0 1 1 16 12a4 4 0 0 1-4 4zm6.406-11.845a1.44 1.44 0 1 1-2.88 0 1.44 1.44 0 0 1 2.88 0z" />
        </svg>
      </Button>
    </a>
  </div>
</div>



              {/* Quote */}
              <div className="bg-gradient-tech rounded-xl p-6 text-white relative overflow-hidden">
                <div className="relative z-10">
                  <blockquote className="text-lg font-medium mb-4" style={{ color: 'black' }}>
                    "Built with love and crafted with curiosity."
                  </blockquote>
                  <cite className="text-sm opacity-80" style={{ color: 'black' }}>— Kapil Subedi</cite>
                </div>
                <div className="absolute top-4 right-4 w-16 h-16 border border-white/20 rounded-full gear-spin opacity-30"></div>
              </div>
            </div>

            {/* Contact Form */}
            <div className="bg-card rounded-xl p-8 border glow-tech">
              <h3 className="font-heading text-xl font-semibold mb-6">Send a Message</h3>
              
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="space-y-2">
                  <Label htmlFor="name">Name</Label>
                  <Input
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    placeholder="Your full name"
                    required
                    className="border-muted focus:border-accent"
                  />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="email">Email</Label>
                  <Input
                    id="email"
                    name="email"
                    type="email"
                    value={formData.email}
                    onChange={handleChange}
                    placeholder="your.email@example.com"
                    required
                    className="border-muted focus:border-accent"
                  />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="message">Message</Label>
                  <Textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    placeholder="Tell me about your project or how we can work together..."
                    rows={5}
                    required
                    className="border-muted focus:border-accent resize-none"
                  />
                </div>

                <Button 
                  type="submit" 
                  className="w-full bg-gradient-accent text-accent-foreground hover:shadow-lg transition-all duration-300 circuit-pulse"
                  size="lg"
                >
                  Send Message
                  <Send className="w-4 h-4 ml-2" />
                </Button>
              </form>

              {/* Animated Elements */}
              <div className="absolute top-2 right-2 w-2 h-2 bg-accent rounded-full animate-pulse"></div>
              <div className="absolute bottom-2 left-2 w-3 h-3 bg-accent/60 rounded-full animate-pulse" style={{ animationDelay: '1s' }}></div>
            </div>
          </div>
        </div>
      </div>

      {/* Background Elements */}
      <div className="absolute top-20 left-10 w-20 h-20 border border-accent/10 rounded-full gear-spin opacity-40"></div>
      <div className="absolute bottom-20 right-10 w-16 h-16 border border-accent/10 rounded-full gear-spin opacity-30" style={{ animationDirection: 'reverse' }}></div>
    </section>
  );
};
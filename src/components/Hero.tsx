import { Button } from "@/components/ui/button";
import { ArrowDown, Building, HardHat, Ruler } from "lucide-react";
import heroAvatar from "@/assets/kapil_hero.jpg";

export const Hero = () => {
  const scrollToAbout = () => {
    document.getElementById('about')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section className="min-h-screen flex items-center justify-center relative overflow-hidden blueprint-pattern">
      {/* Animated Background Elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-20 left-20 w-20 h-20 border-2 border-primary/20 rounded-full crane-rotate"></div>
        <div className="absolute bottom-40 right-32 w-16 h-16 border-2 border-accent/30 rounded-full crane-rotate" style={{ animationDirection: 'reverse' }}></div>
        <div className="absolute top-1/2 left-1/4 w-12 h-12 border-2 border-primary/20 rounded-full crane-rotate" style={{ animationDelay: '8s' }}></div>
      </div>

      <div className="container mx-auto px-6 text-center relative z-10">
        <div className="max-w-4xl mx-auto">
          {/* Avatar */}
          <div className="mb-8 relative">
            <div className="w-48 h-48 mx-auto rounded-full overflow-hidden bg-gradient-steel p-3 glow-steel">
              <img 
                src={heroAvatar} 
                alt="Kapil Subedi - Civil Engineer" 
                className="w-full h-full object-cover rounded-full"
              />
            </div>
            <div className="absolute inset-0 rounded-full bg-gradient-accent opacity-10 animate-pulse"></div>
          </div>

          {/* Main Heading */}
          <h1 className="font-heading text-5xl md:text-7xl font-bold mb-6 text-construction">
            <span className="bg-gradient-steel bg-clip-text text-transparent">
              Building Tomorrow's
            </span>
            <br />
            <span className="text-accent">Infrastructure Today</span>
          </h1>

          {/* Subtitle */}
          <p className="text-xl md:text-2xl text-muted-foreground mb-4 font-light">
            Hi, I'm <span className="text-accent font-semibold">Kapil Subedi</span>
          </p>
          <p className="text-lg md:text-xl text-muted-foreground mb-12 max-w-2xl mx-auto leading-relaxed">
            Civil Engineer from Tribhuwan University, passionate about designing sustainable infrastructure 
            and creating structures that shape communities
          </p>

          {/* Engineering Icons */}
          <div className="flex justify-center items-center gap-6 mb-12">
            <div className="flex items-center gap-2 text-accent">
              <Building className="w-6 h-6" />
              <span className="font-body">Design</span>
            </div>
            <div className="w-px h-8 bg-accent/30"></div>
            <div className="flex items-center gap-2 text-accent">
              <HardHat className="w-6 h-6" />
              <span className="font-body">Build</span>
            </div>
            <div className="w-px h-8 bg-accent/30"></div>
            <div className="flex items-center gap-2 text-accent">
              <Ruler className="w-6 h-6" />
              <span className="font-body">Measure</span>
            </div>
          </div>

          {/* CTA Button */}
          <Button 
            onClick={scrollToAbout}
            size="lg" 
            className="bg-gradient-accent text-accent-foreground hover:shadow-lg hover:scale-105 transition-all duration-300 font-semibold text-lg px-8 py-4 safety-stripe"
          >
            Explore My Projects
            <ArrowDown className="ml-2 w-5 h-5" />
          </Button>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <div className="w-6 h-10 border-2 border-accent rounded-full flex justify-center">
          <div className="w-1 h-3 bg-accent rounded-full mt-2 animate-pulse"></div>
        </div>
      </div>
    </section>
  );
};
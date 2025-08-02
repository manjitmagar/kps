import { Calculator, Compass, Building2, Users } from "lucide-react";

export const About = () => {
  return (
    <section id="about" className="py-20 relative">
      <div className="container mx-auto px-6">
        <div className="max-w-6xl mx-auto">
          {/* Section Header */}
          <div className="text-center mb-16">
            <h2 className="font-heading text-4xl md:text-5xl font-bold mb-4">
              <span className="text-accent">Who</span> Am I?
            </h2>
            <div className="w-24 h-1 bg-gradient-accent mx-auto"></div>
          </div>

          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Text Content */}
            <div className="space-y-6">
              <p className="text-lg leading-relaxed text-muted-foreground">
                I'm a <span className="text-accent font-semibold">Civil Engineer</span> from Tribhuwan University, 
                passionate about designing and building infrastructure that improves communities and shapes the 
                future of sustainable development.
              </p>

              <p className="text-lg leading-relaxed text-muted-foreground">
                My expertise spans from structural design and construction management to environmental 
                engineering and urban planning. I believe in creating solutions that are not just 
                structurally sound, but also environmentally responsible and economically viable.
              </p>

              <p className="text-lg leading-relaxed text-muted-foreground">
                Whether it's designing bridges that connect communities, planning sustainable housing 
                projects, or developing water management systems, I approach every project with precision, 
                innovation, and a commitment to safety and quality.
              </p>

              {/* Engineering Values */}
              <div className="grid grid-cols-2 gap-4 mt-8">
                <div className="flex items-center gap-3 p-4 rounded-lg bg-card border hover-build support-beam">
                  <Calculator className="w-6 h-6 text-accent" />
                  <span className="font-semibold">Precision</span>
                </div>
                <div className="flex items-center gap-3 p-4 rounded-lg bg-card border hover-build support-beam">
                  <Compass className="w-6 h-6 text-accent" />
                  <span className="font-semibold">Innovation</span>
                </div>
                <div className="flex items-center gap-3 p-4 rounded-lg bg-card border hover-build support-beam">
                  <Building2 className="w-6 h-6 text-accent" />
                  <span className="font-semibold">Sustainability</span>
                </div>
                <div className="flex items-center gap-3 p-4 rounded-lg bg-card border hover-build support-beam">
                  <Users className="w-6 h-6 text-accent" />
                  <span className="font-semibold">Community Focus</span>
                </div>
              </div>
            </div>

            {/* Visual Element */}
            <div className="relative">
              <div className="relative bg-card rounded-2xl p-8 border glow-steel blueprint-lines">
                {/* Blueprint Pattern Background */}
                <div className="absolute inset-0 opacity-5">
                  <svg viewBox="0 0 200 200" className="w-full h-full">
                    <defs>
                      <pattern id="blueprint" x="0" y="0" width="40" height="40" patternUnits="userSpaceOnUse">
                        <path d="M20,0 L20,20 M0,20 L40,20" stroke="currentColor" strokeWidth="1" fill="none"/>
                        <circle cx="20" cy="20" r="2" fill="currentColor"/>
                        <rect x="10" y="10" width="20" height="20" stroke="currentColor" strokeWidth="0.5" fill="none"/>
                      </pattern>
                    </defs>
                    <rect width="100%" height="100%" fill="url(#blueprint)" className="text-primary"/>
                  </svg>
                </div>

                {/* Professional Stats */}
                <div className="relative z-10 space-y-6">
                  <div className="text-center">
                    <div className="text-3xl font-heading font-bold text-accent mb-2">4+</div>
                    <div className="text-sm text-muted-foreground">Years of Study</div>
                  </div>
                  <div className="text-center">
                    <div className="text-3xl font-heading font-bold text-accent mb-2">15+</div>
                    <div className="text-sm text-muted-foreground">Projects Designed</div>
                  </div>
                  <div className="text-center">
                    <div className="text-3xl font-heading font-bold text-accent mb-2">10+</div>
                    <div className="text-sm text-muted-foreground">Construction Sites</div>
                  </div>
                </div>

                {/* Animated Construction Elements */}
                <div className="absolute top-4 right-4 w-4 h-4 bg-accent rounded-full animate-pulse"></div>
                <div className="absolute bottom-4 left-4 w-3 h-3 bg-primary/60 rounded-full animate-pulse" style={{ animationDelay: '1s' }}></div>
              </div>

              {/* Floating Construction Icons */}
              <div className="absolute -top-6 -right-6 w-12 h-12 border-2 border-accent rounded-full crane-rotate opacity-60">
                <Building2 className="w-6 h-6 text-accent m-3" />
              </div>
              <div className="absolute -bottom-6 -left-6 w-8 h-8 border-2 border-primary rounded-full crane-rotate opacity-40" style={{ animationDirection: 'reverse' }}>
                <Compass className="w-4 h-4 text-primary m-2" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
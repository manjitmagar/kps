import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { ExternalLink, Building, MapPin, Calendar } from "lucide-react";

const projects = [
  {
    title: "Sustainable Housing Complex",
    description: "Design and construction supervision of 50-unit eco-friendly residential complex with rainwater harvesting and solar energy systems.",
    image: "https://images.unsplash.com/photo-1487958449943-2429e8be8625?w=600&h=400&fit=crop",
    technologies: ["AutoCAD", "Revit", "ETABS", "Green Building"],
    location: "Pokhara, Nepal",
    year: "2023",
    featured: true
  },
  {
    title: "Highway Bridge Design",
    description: "Structural design of 150m steel truss bridge over Seti River with seismic considerations and environmental impact assessment.",
    image: "https://images.unsplash.com/photo-1433086966358-54859d0ed716?w=600&h=400&fit=crop",
    technologies: ["SAP2000", "AutoCAD", "Steel Design", "Seismic"],
    location: "Kaski District",
    year: "2024",
    featured: true
  },
  {
    title: "Water Treatment Plant",
    description: "Design of municipal water treatment facility serving 25,000 residents with advanced filtration and quality monitoring systems.",
    image: "https://images.unsplash.com/photo-1426604966848-d7adac402bff?w=600&h=400&fit=crop",
    technologies: ["Civil 3D", "HEC-RAS", "Environmental", "CAD"],
    location: "Gandaki Province",
    year: "2023",
    featured: false
  },
  {
    title: "Commercial Tower",
    description: "40-story mixed-use tower with retail, office, and residential units featuring modern structural systems and energy efficiency.",
    image: "https://images.unsplash.com/photo-1527576539890-dfa815648363?w=600&h=400&fit=crop",
    technologies: ["ETABS", "Revit", "BIM", "High-rise"],
    location: "Kathmandu",
    year: "2024",
    featured: false
  },
  {
    title: "School Infrastructure",
    description: "Earthquake-resistant design for rural school buildings with modern facilities and sustainable construction materials.",
    image: "https://images.unsplash.com/photo-1488972685288-c3fd157d7c7a?w=600&h=400&fit=crop",
    technologies: ["AutoCAD", "Seismic Design", "Masonry", "Steel"],
    location: "Gorkha District",
    year: "2023",
    featured: false
  },
  {
    title: "Urban Drainage System",
    description: "Storm water management system for growing urban area including retention ponds and flood control measures.",
    image: "https://images.unsplash.com/photo-1487958449943-2429e8be8625?w=600&h=400&fit=crop",
    technologies: ["HEC-RAS", "Civil 3D", "Hydrology", "GIS"],
    location: "Bharatpur",
    year: "2024",
    featured: false
  }
];

export const Projects = () => {
  const featuredProjects = projects.filter(p => p.featured);
  const otherProjects = projects.filter(p => !p.featured);

  return (
    <section className="py-20 relative">
      <div className="container mx-auto px-6">
        <div className="max-w-6xl mx-auto">
          {/* Section Header */}
          <div className="text-center mb-16">
            <h2 className="font-heading text-4xl md:text-5xl font-bold mb-4">
              Engineering <span className="text-accent">Projects</span>
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Infrastructure solutions that build stronger communities and sustainable futures
            </p>
            <div className="w-24 h-1 bg-gradient-accent mx-auto mt-6"></div>
          </div>

          {/* Featured Projects */}
          <div className="grid md:grid-cols-2 gap-8 mb-16">
            {featuredProjects.map((project, index) => (
              <div key={project.title} className="group bg-card rounded-xl overflow-hidden border hover-build glow-steel">
                <div className="relative overflow-hidden">
                  <img 
                    src={project.image} 
                    alt={project.title}
                    className="w-full h-48 object-cover transition-transform duration-300 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-steel opacity-0 group-hover:opacity-80 transition-opacity duration-300 flex items-center justify-center">
                    <div className="flex gap-4">
                      <Button size="sm" variant="secondary" className="glow-warm">
                        <Building className="w-4 h-4 mr-2" />
                        Blueprints
                      </Button>
                      <Button size="sm" className="bg-gradient-accent text-accent-foreground">
                        <ExternalLink className="w-4 h-4 mr-2" />
                        Case Study
                      </Button>
                    </div>
                  </div>
                  {/* Featured Badge */}
                  <div className="absolute top-4 right-4">
                    <Badge className="bg-accent text-accent-foreground">
                      <Building className="w-3 h-3 mr-1" />
                      Featured
                    </Badge>
                  </div>
                </div>

                <div className="p-6">
                  <div className="flex items-center gap-4 mb-3 text-sm text-muted-foreground">
                    <div className="flex items-center gap-1">
                      <MapPin className="w-3 h-3" />
                      {project.location}
                    </div>
                    <div className="flex items-center gap-1">
                      <Calendar className="w-3 h-3" />
                      {project.year}
                    </div>
                  </div>
                  
                  <h3 className="font-heading text-xl font-semibold mb-3 group-hover:text-accent transition-colors">
                    {project.title}
                  </h3>
                  <p className="text-muted-foreground mb-4 leading-relaxed">
                    {project.description}
                  </p>
                  
                  <div className="flex flex-wrap gap-2">
                    {project.technologies.map((tech) => (
                      <Badge key={tech} variant="outline" className="text-xs">
                        {tech}
                      </Badge>
                    ))}
                  </div>
                </div>

                {/* Construction Animation */}
                <div className="absolute bottom-0 left-0 w-full h-1 bg-gradient-accent opacity-0 group-hover:opacity-100 transition-opacity duration-300 safety-stripe"></div>
              </div>
            ))}
          </div>

          {/* Other Projects Grid */}
          <div className="mb-8">
            <h3 className="font-heading text-2xl font-semibold mb-8 text-center">
              More <span className="text-accent">Projects</span>
            </h3>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {otherProjects.map((project) => (
                <div key={project.title} className="group bg-card rounded-lg p-6 border hover-build transition-all duration-300">
                  <div className="flex items-center gap-2 mb-2 text-xs text-muted-foreground">
                    <MapPin className="w-3 h-3" />
                    {project.location}
                    <span>•</span>
                    <Calendar className="w-3 h-3" />
                    {project.year}
                  </div>
                  
                  <h4 className="font-heading text-lg font-semibold mb-2 group-hover:text-accent transition-colors">
                    {project.title}
                  </h4>
                  <p className="text-sm text-muted-foreground mb-4 leading-relaxed">
                    {project.description}
                  </p>
                  
                  <div className="flex flex-wrap gap-1 mb-4">
                    {project.technologies.slice(0, 3).map((tech) => (
                      <Badge key={tech} variant="secondary" className="text-xs">
                        {tech}
                      </Badge>
                    ))}
                    {project.technologies.length > 3 && (
                      <Badge variant="secondary" className="text-xs">
                        +{project.technologies.length - 3}
                      </Badge>
                    )}
                  </div>

                  <div className="flex gap-2">
                    <Button size="sm" variant="ghost" className="text-xs">
                      <Building className="w-3 h-3 mr-1" />
                      Plans
                    </Button>
                    <Button size="sm" variant="ghost" className="text-xs">
                      <ExternalLink className="w-3 h-3 mr-1" />
                      Details
                    </Button>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* CTA */}
          <div className="text-center">
            <Button variant="outline" className="border-accent text-accent hover:bg-accent hover:text-accent-foreground">
              View Complete Portfolio
              <Building className="w-4 h-4 ml-2" />
            </Button>
          </div>

          {/* Background Elements */}
          <div className="absolute top-1/4 right-10 w-16 h-16 border border-primary/20 rounded-full crane-rotate opacity-40"></div>
          <div className="absolute bottom-1/4 left-10 w-12 h-12 border border-accent/20 rounded-full crane-rotate opacity-30" style={{ animationDirection: 'reverse' }}></div>
        </div>
      </div>
    </section>
  );
};

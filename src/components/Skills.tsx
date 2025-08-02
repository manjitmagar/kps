import { Badge } from "@/components/ui/badge";
import { Progress } from "@/components/ui/progress";
import { Building, Calculator, Truck, Users, HardHat, TreePine, Hammer, Shield } from "lucide-react";

const skillCategories = [
  {
    title: "Structural Engineering",
    icon: Building,
    skills: [
      { name: "Steel Design", level: 90 },
      { name: "Concrete Design", level: 95 },
      { name: "Foundation Design", level: 85 },
      { name: "Seismic Analysis", level: 80 }
    ]
  },
  {
    title: "Construction Management", 
    icon: HardHat,
    skills: [
      { name: "Project Planning", level: 88 },
      { name: "Quality Control", level: 92 },
      { name: "Safety Management", level: 95 },
      { name: "Cost Estimation", level: 85 }
    ]
  },
  {
    title: "Design Software",
    icon: Calculator,
    skills: [
      { name: "AutoCAD", level: 95 },
      { name: "ETABS/SAP2000", level: 88 },
      { name: "Revit", level: 82 },
      { name: "SketchUp", level: 78 }
    ]
  },
  {
    title: "Environmental & Planning",
    icon: TreePine,
    skills: [
      { name: "Environmental Impact", level: 80 },
      { name: "Urban Planning", level: 75 },
      { name: "Water Management", level: 85 },
      { name: "Sustainability", level: 90 }
    ]
  }
];

const technologies = [
  "AutoCAD", "ETABS", "SAP2000", "Revit", "STAAD Pro", "SketchUp", 
  "Civil 3D", "MATLAB", "MS Project", "Primavera", "ArcGIS", "HEC-RAS"
];

export const Skills = () => {
  return (
    <section className="py-20 bg-muted/30 relative">
      <div className="container mx-auto px-6">
        <div className="max-w-6xl mx-auto">
          {/* Section Header */}
          <div className="text-center mb-16">
            <h2 className="font-heading text-4xl md:text-5xl font-bold mb-4">
              Engineering <span className="text-accent">Expertise</span>
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              A comprehensive skillset built through rigorous education and hands-on construction experience
            </p>
            <div className="w-24 h-1 bg-gradient-accent mx-auto mt-6"></div>
          </div>

          {/* Skills Grid */}
          <div className="grid md:grid-cols-2 gap-8 mb-16">
            {skillCategories.map((category, index) => (
              <div key={category.title} className="bg-card rounded-xl p-6 border hover-build glow-steel">
                <div className="flex items-center gap-3 mb-6">
                  <div className="p-2 rounded-lg bg-accent/10">
                    <category.icon className="w-6 h-6 text-accent" />
                  </div>
                  <h3 className="font-heading text-xl font-semibold">{category.title}</h3>
                </div>

                <div className="space-y-4">
                  {category.skills.map((skill) => (
                    <div key={skill.name} className="space-y-2">
                      <div className="flex justify-between items-center">
                        <span className="font-medium">{skill.name}</span>
                        <span className="text-sm text-muted-foreground">{skill.level}%</span>
                      </div>
                      <Progress 
                        value={skill.level} 
                        className="h-2 bg-muted"
                      />
                    </div>
                  ))}
                </div>

                {/* Animated Corner Element */}
                <div className="absolute top-2 right-2 w-2 h-2 bg-accent rounded-full animate-pulse opacity-60"></div>
              </div>
            ))}
          </div>

          {/* Technologies Badge Cloud */}
          <div className="text-center">
            <h3 className="font-heading text-2xl font-semibold mb-8">
              Software & <span className="text-accent">Tools</span>
            </h3>
            <div className="flex flex-wrap justify-center gap-3">
              {technologies.map((tech, index) => (
                <Badge 
                  key={tech} 
                  variant="secondary" 
                  className="px-4 py-2 text-sm font-medium hover:bg-accent hover:text-accent-foreground transition-colors duration-300 cursor-pointer"
                  style={{ animationDelay: `${index * 0.1}s` }}
                >
                  {tech}
                </Badge>
              ))}
            </div>
          </div>

          {/* Floating Elements */}
          <div className="absolute top-10 left-10 opacity-20">
            <Hammer className="w-8 h-8 text-accent crane-rotate" />
          </div>
          <div className="absolute bottom-10 right-10 opacity-20">
            <Shield className="w-6 h-6 text-accent crane-rotate" style={{ animationDirection: 'reverse' }} />
          </div>
        </div>
      </div>
    </section>
  );
};
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Award, Calendar, ExternalLink, Trophy, Star } from "lucide-react";

const achievements = [
  {
    title: "Professional Engineer (PE)",
    issuer: "Nepal Engineering Council",
    date: "2024",
    type: "Professional License",
    description: "Licensed Professional Engineer with authority to approve structural designs and construction plans.",
    badge: "/placeholder.svg",
    verified: true,
    featured: true
  },
  {
    title: "LEED Green Associate",
    issuer: "U.S. Green Building Council",
    date: "2023",
    type: "Green Building Certification",
    description: "Certified in sustainable building practices and environmental design strategies.",
    badge: "/placeholder.svg",
    verified: true,
    featured: true
  },
  {
    title: "AutoCAD Professional",
    issuer: "Autodesk",
    date: "2023",
    type: "Software Certification",
    description: "Advanced proficiency in computer-aided design for civil engineering applications.",
    badge: "/placeholder.svg",
    verified: true,
    featured: false
  },
  {
    title: "Construction Management",
    issuer: "Project Management Institute",
    date: "2022",
    type: "Specialization",
    description: "Project management principles specifically for construction and infrastructure projects.",
    badge: "/placeholder.svg",
    verified: true,
    featured: false
  },
  {
    title: "Outstanding Academic Achievement",
    issuer: "Pokhara University",
    date: "2021-2024",
    type: "Academic Honor",
    description: "Consistent excellence in civil engineering coursework and design projects.",
    badge: "/placeholder.svg",
    verified: true,
    featured: true
  },
  {
    title: "Structural Analysis Certification",
    issuer: "ETABS/SAP2000",
    date: "2023",
    type: "Technical Certification",
    description: "Advanced structural analysis and design using industry-standard software.",
    badge: "/placeholder.svg",
    verified: true,
    featured: false
  }
];

const stats = [
  { label: "Certifications Earned", value: "15+", icon: Award },
  { label: "Academic Honors", value: "5", icon: Trophy },
  { label: "Years of Study", value: "4", icon: Calendar },
  { label: "Skill Badges", value: "25+", icon: Star }
];

export const Achievements = () => {
  const featuredAchievements = achievements.filter(a => a.featured);
  const otherAchievements = achievements.filter(a => !a.featured);

  return (
    <section className="py-20 bg-muted/30 relative">
      <div className="container mx-auto px-6">
        <div className="max-w-6xl mx-auto">
          {/* Section Header */}
          <div className="text-center mb-16">
            <h2 className="font-heading text-4xl md:text-5xl font-bold mb-4">
              Achievements & <span className="text-accent">Certifications</span>
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Recognition of continuous learning and professional development
            </p>
            <div className="w-24 h-1 bg-gradient-accent mx-auto mt-6"></div>
          </div>

          {/* Stats */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-16">
            {stats.map((stat) => (
              <div key={stat.label} className="text-center bg-card rounded-xl p-6 border hover-lift glow-tech">
                <div className="inline-flex items-center justify-center w-12 h-12 bg-accent/10 rounded-lg mb-4">
                  <stat.icon className="w-6 h-6 text-accent" />
                </div>
                <div className="text-2xl font-heading font-bold text-accent mb-2">{stat.value}</div>
                <div className="text-sm text-muted-foreground">{stat.label}</div>
              </div>
            ))}
          </div>

          {/* Featured Achievements */}
          <div className="mb-12">
            <h3 className="font-heading text-2xl font-semibold mb-8 text-center">
              Featured <span className="text-accent">Certifications</span>
            </h3>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {featuredAchievements.map((achievement) => (
                <div key={achievement.title} className="group bg-card rounded-xl p-6 border hover-lift glow-tech relative overflow-hidden">
                  {/* Badge Image */}
                  <div className="flex justify-center mb-4">
                    <div className="w-16 h-16 bg-gradient-accent rounded-full flex items-center justify-center">
                      <Award className="w-8 h-8 text-accent-foreground" />
                    </div>
                  </div>

                  {/* Content */}
                  <div className="text-center">
                    <h4 className="font-heading text-lg font-semibold mb-2 group-hover:text-accent transition-colors">
                      {achievement.title}
                    </h4>
                    <p className="text-accent font-medium mb-2">{achievement.issuer}</p>
                    <p className="text-sm text-muted-foreground mb-3">{achievement.description}</p>
                    
                    <div className="flex items-center justify-center gap-2 mb-4">
                      <Badge variant="secondary" className="text-xs">
                        {achievement.type}
                      </Badge>
                      <Badge variant="outline" className="text-xs">
                        {achievement.date}
                      </Badge>
                      {achievement.verified && (
                        <Badge className="bg-green-500 text-white text-xs">
                          Verified
                        </Badge>
                      )}
                    </div>

                    <Button size="sm" variant="ghost" className="text-accent hover:bg-accent/10">
                      <ExternalLink className="w-3 h-3 mr-2" />
                      View Certificate
                    </Button>
                  </div>

                  {/* Decorative Elements */}
                  <div className="absolute top-2 right-2 w-2 h-2 bg-accent rounded-full animate-pulse"></div>
                  <div className="absolute -bottom-2 -left-2 w-8 h-8 border border-accent/20 rounded-full gear-spin opacity-30"></div>
                </div>
              ))}
            </div>
          </div>

          {/* Other Achievements */}
          <div className="mb-8">
            <h3 className="font-heading text-xl font-semibold mb-6 text-center">
              Additional <span className="text-accent">Qualifications</span>
            </h3>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
              {otherAchievements.map((achievement) => (
                <div key={achievement.title} className="bg-card rounded-lg p-4 border hover-lift transition-all duration-300">
                  <div className="flex items-start gap-3">
                    <div className="w-8 h-8 bg-accent/10 rounded-lg flex items-center justify-center flex-shrink-0">
                      <Award className="w-4 h-4 text-accent" />
                    </div>
                    <div className="flex-1 min-w-0">
                      <h4 className="font-semibold text-sm mb-1 truncate">{achievement.title}</h4>
                      <p className="text-xs text-accent mb-1">{achievement.issuer}</p>
                      <div className="flex gap-1">
                        <Badge variant="secondary" className="text-xs">{achievement.date}</Badge>
                        {achievement.verified && (
                          <Badge className="bg-green-500 text-white text-xs">✓</Badge>
                        )}
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* CTA */}
          <div className="text-center">
            <Button variant="outline" className="border-accent text-accent hover:bg-accent hover:text-accent-foreground">
              View All Certifications
              <ExternalLink className="w-4 h-4 ml-2" />
            </Button>
          </div>

          {/* Background Pattern */}
          <div className="absolute top-1/3 left-5 opacity-10">
            <Trophy className="w-12 h-12 text-accent gear-spin" />
          </div>
          <div className="absolute bottom-1/3 right-5 opacity-10">
            <Star className="w-10 h-10 text-accent gear-spin" style={{ animationDirection: 'reverse' }} />
          </div>
        </div>
      </div>
    </section>
  );
};

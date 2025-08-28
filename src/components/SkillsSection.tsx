import { Code, ShoppingCart, Database, Globe, Palette, Smartphone } from 'lucide-react';

const SkillsSection = () => {
  const skills = [
    {
      icon: <ShoppingCart className="w-8 h-8" />,
      name: "Shopify",
      description: "Custom themes, apps, headless stores and store optimization"
    },
    {
      icon: <ShoppingCart className="w-8 h-8" />,
      name: "BigCommerce", 
      description: "Enterprise e-commerce solutions and integrations"
    },
    {
      icon: <Database className="w-8 h-8" />,
      name: "MERN Stack",
      description: "MongoDB, Express, React, and Node.js development"
    },
    {
      icon: <Globe className="w-8 h-8" />,
      name: "Next.js",
      description: "Server-side rendering and modern React applications"
    },
    {
      icon: <Palette className="w-8 h-8" />,
      name: "UI/UX Design",
      description: "User-centered design and interface optimization"
    },
    {
      icon: <Smartphone className="w-8 h-8" />,
      name: "On Going Maintenance and Support",
      description: "Support services to ensure your website runs smoothly and is up-to-date."
    }
  ];

  return (
    <section id="skills" className="py-20 bg-gradient-subtle">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-4">
            Technical Expertise
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Delivering cutting-edge solutions with modern technologies and best practices
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {skills.map((skill, index) => (
            <div 
              key={skill.name}
              className="group bg-card border border-border rounded-lg p-8 hover:shadow-medium hover:border-primary/30 transition-all duration-300 hover:-translate-y-2 animate-slide-up"
              style={{
                animationDelay: `${index * 100}ms`
              }}
            >
              <div className="text-primary mb-4 group-hover:text-primary-glow transition-colors duration-300">
                {skill.icon}
              </div>
              <h3 className="text-xl font-semibold text-foreground mb-3">
                {skill.name}
              </h3>
              <p className="text-muted-foreground leading-relaxed">
                {skill.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default SkillsSection;
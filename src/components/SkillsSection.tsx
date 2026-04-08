import { Code, ShoppingCart, Database, Globe, Palette, Smartphone, User, Store } from 'lucide-react';

const SkillsSection = () => {
  const skills = [
    {
      icon: <ShoppingCart className="w-8 h-8" />,
      name: "Shopify Optimization & Development",
      description: "Conversion-focused Shopify solutions designed to increase revenue and improve user experience. Custom themes & sections, Conversion rate optimization (CRO), Performance & speed improvements, Shopify Plus enhancements"
    },
    {
      icon: <ShoppingCart className="w-8 h-8" />,
      name: "Shopify Integrations & Scalable Solutions", 
      description: "Advanced eCommerce setups for growing brands. Third-party app integrations, Custom functionality development, API integrations, Scalable store architecture"
    },
    {
      icon: <Database className="w-8 h-8" />,
      name: "Headless & Modern Frontend (Next.js / React)",
      description: "For brands that need flexibility beyond traditional Shopify themes. Headless Shopify storefronts, Next.js & React applications, Performance-focused frontend architecture"
    },
    {
      icon: <Globe className="w-8 h-8" />,
      name: "UI/UX Optimization for eCommerce",
      description: "Design improvements that directly impact conversions. Product page optimization, Checkout experience improvements, Mobile-first UX enhancements, User behavior analysis"
    },
    {
      icon: <Palette className="w-8 h-8" />,
      name: "Performance & Speed Engineering",
      description: "Speed is directly tied to revenue — I make stores fast. Core Web Vitals optimization, Asset & script optimization, App performance cleanup, Lazy loading & advanced techniques"
    },
    {
      icon: <Smartphone className="w-8 h-8" />,
      name: "Ongoing Growth & Support",
      description: "Long-term support to continuously improve store performance. Continuous optimization, Store maintenance, Feature enhancements, Technical support"
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
            Focused on building high-performing eCommerce experiences with Shopify at the core, supported by modern web technologies.
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
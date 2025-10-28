import { Button } from "@/components/ui/button";
import { Code2, Sparkles, Zap, ShoppingBag, Database, ArrowRight } from "lucide-react";

const HeroSection = () => {
  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const specializations = [
    { icon: <ShoppingBag className="w-5 h-5" />, text: "Shopify & BigCommerce" },
    { icon: <Database className="w-5 h-5" />, text: "MERN Stack" },
    { icon: <Code2 className="w-5 h-5" />, text: "Next.js & React" },
  ];

  const stats = [
    { number: "100+", label: "Projects Delivered" },
    { number: "7+", label: "Years Experience" },
    { number: "60+", label: "Happy Clients" },
  ];

  return (
    <section 
      id="home" 
      className="relative min-h-screen flex items-center justify-center overflow-hidden bg-background"
    >
      {/* Animated Background Elements */}
      <div className="absolute inset-0 overflow-hidden">
        {/* Grid Pattern */}
        <div className="absolute inset-0 opacity-[0.03]">
          <div className="absolute inset-0" style={{
            backgroundImage: `linear-gradient(to right, hsl(var(--primary)) 1px, transparent 1px),
                              linear-gradient(to bottom, hsl(var(--primary)) 1px, transparent 1px)`,
            backgroundSize: '4rem 4rem'
          }}></div>
        </div>

        {/* Gradient Orbs */}
        <div className="absolute top-1/4 -left-20 w-72 h-72 bg-primary/20 rounded-full blur-[120px] animate-pulse"></div>
        <div className="absolute bottom-1/4 -right-20 w-96 h-96 bg-primary/15 rounded-full blur-[120px] animate-pulse" style={{ animationDelay: '1s' }}></div>
        
        {/* Floating Geometric Shapes */}
        <div className="absolute top-20 left-[10%] w-20 h-20 border border-primary/20 rotate-45 animate-[spin_20s_linear_infinite]"></div>
        <div className="absolute bottom-32 right-[15%] w-16 h-16 border border-primary/30 rotate-12 animate-[spin_15s_linear_infinite_reverse]"></div>
        <div className="absolute top-1/2 right-[8%] w-12 h-12 bg-primary/10 rotate-45"></div>
      </div>

      <div className="container mx-auto px-6 z-10 relative">
        <div className="max-w-5xl mx-auto">
          {/* Badge */}
          <div className="flex justify-center mb-8 animate-fade-in">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 border border-primary/20 backdrop-blur-sm">
              <Sparkles className="w-4 h-4 text-primary animate-pulse" />
              <span className="text-sm text-primary font-medium">Available for New Projects</span>
              <div className="w-2 h-2 bg-primary rounded-full animate-glow-pulse"></div>
            </div>
          </div>

          {/* Main Heading */}
          <div className="text-center mb-8 animate-fade-in" style={{ animationDelay: '0.1s' }}>
            <h1 className="text-5xl md:text-7xl lg:text-8xl font-bold mb-6 leading-tight">
              <span className="text-foreground">Crafting Digital</span>
              <br />
              <span className="text-primary relative inline-block">
                Excellence
                <svg className="absolute -bottom-2 left-0 w-full" height="12" viewBox="0 0 300 12" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M2 10C50 5 100 2 150 3C200 4 250 7 298 10" stroke="hsl(var(--primary))" strokeWidth="3" strokeLinecap="round"/>
                </svg>
              </span>
            </h1>
            
            <p className="text-xl md:text-2xl text-muted-foreground mb-8 max-w-3xl mx-auto leading-relaxed">
              Full-Stack Developer specialized in building high-performance e-commerce solutions 
              and scalable web applications that drive business growth.
            </p>

            {/* Specializations */}
            <div className="flex flex-wrap items-center justify-center gap-4 mb-12">
              {specializations.map((spec, index) => (
                <div 
                  key={index}
                  className="flex items-center gap-2 px-4 py-2 bg-card border border-border rounded-lg hover:border-primary/50 transition-all duration-300 hover:scale-105"
                  style={{ animationDelay: `${0.2 + index * 0.1}s` }}
                >
                  <span className="text-primary">{spec.icon}</span>
                  <span className="text-sm text-foreground font-medium">{spec.text}</span>
                </div>
              ))}
            </div>
          </div>

          {/* CTAs */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-16 animate-fade-in" style={{ animationDelay: '0.3s' }}>
            <Button 
              size="lg"
              onClick={() => scrollToSection('portfolio')}
              className="group bg-primary hover:bg-primary/90 text-primary-foreground hover:shadow-glow transition-all duration-300 px-8 py-6 text-lg font-semibold"
            >
              View My Portfolio
              <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform duration-300" />
            </Button>
            <Button 
              variant="outline"
              size="lg"
              onClick={() => scrollToSection('contact')}
              className="border-2 border-primary/50 text-foreground hover:bg-primary/10 hover:border-primary transition-all duration-300 px-8 py-6 text-lg font-semibold backdrop-blur-sm"
            >
              <Zap className="mr-2 w-5 h-5 text-primary" />
              Let's Talk
            </Button>
          </div>

          {/* Stats */}
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-8 max-w-3xl mx-auto animate-fade-in" style={{ animationDelay: '0.4s' }}>
            {stats.map((stat, index) => (
              <div 
                key={index}
                className="text-center p-6 rounded-xl bg-card/50 border border-border/50 backdrop-blur-sm hover:border-primary/30 hover:bg-card transition-all duration-300 group"
              >
                <div className="text-4xl md:text-5xl font-bold text-primary mb-2 group-hover:scale-110 transition-transform duration-300">
                  {stat.number}
                </div>
                <div className="text-sm md:text-base text-muted-foreground font-medium">
                  {stat.label}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
      
      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <div className="flex flex-col items-center gap-2">
          <span className="text-xs text-muted-foreground uppercase tracking-wider">Scroll</span>
          <div className="w-6 h-10 border-2 border-primary/50 rounded-full flex justify-center">
            <div className="w-1 h-3 bg-primary rounded-full mt-2 animate-pulse"></div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
import { useState, useEffect } from 'react';
import { Button } from "@/components/ui/button";
import { Menu, X } from "lucide-react";
import { useIsMobile } from "@/hooks/use-mobile";

const Navigation = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isAnimating, setIsAnimating] = useState(false);
  const isMobile = useIsMobile();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
    // Close mobile menu after clicking a link
    if (isMobile) {
      closeMobileMenu();
    }
  };

  const toggleMobileMenu = () => {
    if (isMobileMenuOpen) {
      closeMobileMenu();
    } else {
      openMobileMenu();
    }
  };

  const openMobileMenu = () => {
    setIsMobileMenuOpen(true);
    setIsAnimating(true);
  };

  const closeMobileMenu = () => {
    setIsAnimating(true);
    // Delay the actual closing to allow animation to complete
    setTimeout(() => {
      setIsMobileMenuOpen(false);
      setIsAnimating(false);
    }, 200);
  };

  return (
    <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
      isScrolled 
        ? 'bg-background/90 backdrop-blur-xl shadow-medium border-b border-border' 
        : 'bg-background/90 backdrop-blur-xl'
    }`}>
      <div className="container mx-auto px-6 py-4">
        <div className="flex items-center justify-between">
          <div className="text-xl font-bold text-primary">
            Zunair Shahid
          </div>
          
          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            <button 
              onClick={() => scrollToSection('home')}
              className="text-foreground hover:text-primary transition-colors duration-300"
            >
              Home
            </button>
            <button 
              onClick={() => scrollToSection('skills')}
              className="text-foreground hover:text-primary transition-colors duration-300"
            >
              Skills
            </button>
            <button 
              onClick={() => scrollToSection('resume')}
              className="text-foreground hover:text-primary transition-colors duration-300"
            >
              Resume
            </button>
            <button 
              onClick={() => scrollToSection('portfolio')}
              className="text-foreground hover:text-primary transition-colors duration-300"
            >
              Portfolio
            </button>
            <button 
              onClick={() => scrollToSection('about')}
              className="text-foreground hover:text-primary transition-colors duration-300"
            >
              About
            </button>
            <Button 
              onClick={() => scrollToSection('contact')}
              className="bg-gradient-primary hover:shadow-glow transition-all duration-300"
            >
              Contact
            </Button>
          </div>

          {/* Mobile Hamburger Menu Button */}
          <button
            onClick={toggleMobileMenu}
            className="md:hidden p-2 text-foreground hover:text-primary transition-all duration-300 hover:scale-110"
            aria-label="Toggle mobile menu"
          >
            <div className={`transition-transform duration-300 ${isMobileMenuOpen ? 'rotate-90' : 'rotate-0'}`}>
              {isMobileMenuOpen ? (
                <X size={24} />
              ) : (
                <Menu size={24} />
              )}
            </div>
          </button>
        </div>

        {/* Mobile Navigation Menu */}
        <div className={`md:hidden overflow-hidden transition-all duration-300 ease-in-out ${
          isMobileMenuOpen 
            ? 'max-h-96 opacity-100 mt-4' 
            : 'max-h-0 opacity-0 mt-0'
        }`}>
          <div className={`border-t border-border pt-4 pb-4 transition-all duration-300 ${
            isMobileMenuOpen 
              ? 'translate-y-0 opacity-100' 
              : '-translate-y-4 opacity-0'
          }`}>
            <div className="flex flex-col space-y-4">
              <button 
                onClick={() => scrollToSection('home')}
                className="text-foreground hover:text-primary transition-all duration-300 text-left py-2 hover:translate-x-2 hover:bg-foreground/5 rounded-lg px-2"
              >
                Home
              </button>
              <button 
                onClick={() => scrollToSection('skills')}
                className="text-foreground hover:text-primary transition-all duration-300 text-left py-2 hover:translate-x-2 hover:bg-foreground/5 rounded-lg px-2"
              >
                Skills
              </button>
              <button 
                onClick={() => scrollToSection('portfolio')}
                className="text-foreground hover:text-primary transition-all duration-300 text-left py-2 hover:translate-x-2 hover:bg-foreground/5 rounded-lg px-2"
              >
                Portfolio
              </button>
              <button 
                onClick={() => scrollToSection('about')}
                className="text-foreground hover:text-primary transition-all duration-300 text-left py-2 hover:translate-x-2 hover:bg-foreground/5 rounded-lg px-2"
              >
                About
              </button>
              <Button 
                onClick={() => scrollToSection('contact')}
                className="bg-gradient-primary hover:shadow-glow transition-all duration-300 w-full justify-start hover:scale-105"
              >
                Contact
              </Button>
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navigation;
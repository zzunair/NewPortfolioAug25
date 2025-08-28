import { useEffect } from 'react';
import Navigation from "@/components/Navigation";
import HeroSection from "@/components/HeroSection";
import SkillsSection from "@/components/SkillsSection";
import ResumeSection from "@/components/ResumeSection";
import PortfolioSection from "@/components/PortfolioSection";
import AboutSection from "@/components/AboutSection";
import ContactSection from "@/components/ContactSection";

const Index = () => {
  useEffect(() => {
    // Update document title and meta description for SEO
    document.title = "Full-Stack Developer | Shopify, BigCommerce, MERN & Next.js Expert";
    
    // Add meta description if it doesn't exist
    let metaDescription = document.querySelector('meta[name="description"]');
    if (metaDescription) {
      metaDescription.setAttribute('content', 'Professional full-stack developer specializing in Shopify, BigCommerce, MERN stack, and Next.js. Creating high-performance e-commerce solutions and modern web applications.');
    }

    // Add structured data for SEO
    const structuredData = {
      "@context": "https://schema.org",
      "@type": "Person",
      "name": "Full-Stack Developer",
      "jobTitle": "Web Developer",
      "description": "Professional full-stack developer specializing in e-commerce solutions",
      "knowsAbout": ["Shopify", "BigCommerce", "MERN Stack", "Next.js", "React", "Node.js", "UI/UX Design"],
      "email": "zunair700@gmail.com",
      "telephone": "+92-322-4703700",
      "address": {
        "@type": "PostalAddress",
        "addressLocality": "Lahore",
        "addressRegion": "Pakistan"
      }
    };

    const script = document.createElement('script');
    script.type = 'application/ld+json';
    script.textContent = JSON.stringify(structuredData);
    document.head.appendChild(script);

    return () => {
      // Cleanup structured data script
      const existingScript = document.querySelector('script[type="application/ld+json"]');
      if (existingScript) {
        document.head.removeChild(existingScript);
      }
    };
  }, []);

  return (
    <div className="min-h-screen bg-background text-foreground">
      <Navigation />
      <main>
        <HeroSection />
        <SkillsSection />
        <ResumeSection />
        <PortfolioSection />
        <AboutSection />
        <ContactSection />
      </main>
      
      {/* Footer */}
      <footer className="bg-card border-t border-border py-8">
        <div className="container mx-auto px-6 text-center">
          <p className="text-muted-foreground">
            © 2025 Zunair Shahid. Built with React, Vite, and Tailwind CSS.
          </p>
        </div>
      </footer>
    </div>
  );
};

export default Index;
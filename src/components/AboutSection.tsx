import { Button } from "@/components/ui/button";
import { CheckCircle, Award, Users, Zap } from "lucide-react";
import developerPhoto from "../../public/images/others/dpp.png";

const AboutSection = () => {
  const stats = [
    {
      icon: <CheckCircle className="w-6 h-6" />,
      number: "100+",
      label: "Projects Completed",
    },
    {
      icon: <Award className="w-6 h-6" />,
      number: "7+",
      label: "Years Experience",
    },
    {
      icon: <Users className="w-6 h-6" />,
      number: "60+",
      label: "Happy Clients",
    },
    {
      icon: <Zap className="w-6 h-6" />,
      number: "24/7",
      label: "Support Available",
    },
  ];

  const scrollToContact = () => {
    const element = document.getElementById("contact");
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section id="about" className="py-20 bg-gradient-subtle">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          {/* Image Column */}
          <div className="relative animate-scale-in">
            <div className="relative">
              <img
                src={developerPhoto}
                alt="Web Developer"
                className="w-full max-w-md mx-auto rounded-2xl shadow-large object-cover"
              />
              <div className="absolute inset-0 bg-gradient-primary opacity-10 rounded-2xl"></div>
            </div>

            {/* Floating Stats */}
            <div className="absolute -bottom-8 -right-8 bg-card border border-border rounded-xl p-4 shadow-medium">
              <div className="text-2xl font-bold text-primary">99%</div>
              <div className="text-sm text-muted-foreground">
                Client Satisfaction
              </div>
            </div>
          </div>

          {/* Content Column */}
          <div className="animate-fade-in">
            <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
              About Me
            </h2>

            <div className="space-y-6 text-muted-foreground text-lg leading-relaxed">
              <p>
                I am a professional web developer with specialization in
                e-commerce. My passion lies in assisting individuals to launch
                their online businesses by developing their websites and
                providing them with guidance to create a positive impression on
                their customers. My core competencies include expertise in
                Shopify, WordPress, Bigcommerce, and website design. Although I
                have a considerable amount of experience in website design, I
                understand the importance of staying up-to-date with the
                constantly evolving technological landscape. I am committed to
                continuously learning and staying curious.
              </p>

              {/* <p>
                I specialize in building custom Shopify and BigCommerce stores, developing 
                robust MERN stack applications, and creating lightning-fast Next.js websites. 
                My approach combines technical excellence with user-centered design principles.
              </p>
              
              <p>
                Whether you need a complete e-commerce overhaul, a custom web application, 
                or UI/UX optimization, I deliver solutions that drive results and exceed expectations.
              </p> */}
            </div>

            {/* Stats Grid */}
            <div className="grid grid-cols-2 gap-6 my-10">
              {stats.map((stat, index) => (
                <div
                  key={index}
                  className="text-center p-4 bg-card border border-border rounded-lg hover:border-primary/30 transition-all duration-300 animate-slide-up"
                  style={{
                    animationDelay: `${index * 100}ms`,
                  }}
                >
                  <div className="text-primary mb-2 flex justify-center">
                    {stat.icon}
                  </div>
                  <div className="text-2xl font-bold text-foreground">
                    {stat.number}
                  </div>
                  <div className="text-sm text-muted-foreground">
                    {stat.label}
                  </div>
                </div>
              ))}
            </div>

            <Button
              size="lg"
              onClick={scrollToContact}
              className="bg-gradient-primary hover:shadow-glow hover:scale-105 transition-all duration-300 px-8 py-3"
            >
              Let's Work Together
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;

import { Calendar, MapPin, Phone, Mail, Award, GraduationCap, Briefcase, Focus, Download } from 'lucide-react';
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import resume from "../../public/images/others/resume.pdf";

const ResumeSection = () => {
  const certifications = [
    {
      name: "Liquid Storefronts for Theme Developers",
      issuer: "Shopify",
      year: "2024",
      link: "https://www.credly.com/badges/e9433e5b-83e8-4947-adbf-7e6cb8addc06"
    }
  ];

  const education = [
    {
      degree: "BACHELOR'S IN COMPUTER SCIENCE BSCS",
      institution: "Virtual University of Pakistan",
      period: "2013-2017"
    },
    {
      degree: "INTERMEDIATE OF COMPUTER SCIENCE ICS",
      institution: "Govt Islamia College, Lahore",
      period: "2011-2013"
    }
  ];

  const experience = [
    {
      title: "Team Lead | Senior Software Engineer",
      company: "Contour Software",
      period: "Sep 2025 - Present",
      location: "Lahore, Pakistan",
      description: [
        "Working as a Team Lead and Senior Software Engineer on Contour Software",
        "Responsible for leading a team of developers and ensuring the successful delivery of projects",
        "Hired as a Senior Software Engineer, leading Shopify and BigCommerce development initiatives and delivering scalable eCommerce solutions",
"Promoted to Team Lead & Mentor, overseeing project architecture, guiding developers, conducting code reviews, and driving technical excellence across the team"
      ]
    },
    {
      title: "SENIOR SHOPIFY DEVELOPER",
      company: "HoneyBalm",
      period: "Feb 2025 - Sep 2025",
      location: "Remote",
      description: [
        "Worked as a Senior Shopify developer on HoneyBalm",
        "Developed and maintained 10 different Shopify stores and themes for HoneyBalm",
        "Optimized storefront performance, reducing page load time and improving overall Lighthouse scores for better conversion rates",
        "Integrated third-party apps, payment gateways, and custom APIs to streamline operations and enhance user experience",
        "Collaborated with design and marketing teams to implement CRO strategies, A/B tests, and custom Shopify features that increased sales and customer engagement"
      ]
    },
    {
      title: "SHOPIFY | BIGCOMMERCE | FULLSTACK DEVELOPER",
      company: "UPWORK",
      period: "2024 - Present",
      location: "Remote",
      description: [
        "Working as a Shopify, BigCommerce, and Full-stack developer on UpWork",
        "Specialize in delivering customized e-commerce solutions",
        "Collaborate with clients to enhance online stores and create seamless user experiences",
        "Focus on technical precision, responsiveness, and client-focused outcomes",
        "Contribute to the success of projects for businesses across diverse industries"
      ]
    },
    {
      title: "SENIOR SHOPIFY & BIGCOMMERCE DEVELOPER",
      company: "NESTOSH LLC",
      period: "2021 - 2024",
      location: "Lahore, Pakistan",
              description: [
          "Worked with more than 25 clients and 40+ Shopify stores",
          "Experienced Shopify developer with a track record of successfully delivering projects for over 25 clients, which includes developing more than 40 Shopify stores from scratch",
          "Proven ability to lead projects and experience in developing B2B and B2C Shopify stores",
          "Managed teams of designers and developers for projects, ensuring that the end product aligns with the client's needs and specifications",
          "Expertise in Shopify development, leadership skills, and passion for creating effective eCommerce solutions",
          "Committed to delivering the highest quality work for clients",
          "Also providing services in BigCommerce and React JS projects"
        ]
    },
    {
      title: "SHOPIFY & MERN STACK DEVELOPER",
      company: "GIGALABS",
      period: "2019 - 2021",
      location: "Lahore, Pakistan",
      description: [
        "Developed numerous websites and worked on different stacks (Shopify, MERN Stack, WordPress)",
        "Managed up to 5 projects or tasks at a given time while under pressure",
        "Recommended and consulted with clients on the most appropriate website design",
        "Created 30+ Shopify stores and proposals for clients and account managers"
      ]
    },
    {
      title: "WORDPRESS & FRONTEND DEVELOPMENT",
      company: "FIVERR",
      period: "2017 - 2021",
      location: "Remote",
      description: [
        "Developed numerous real estate websites and worked on different projects",
        "Managed up to 5 projects at a given time while under pressure"
      ]
    }
  ];

  return (
    <section id="resume" className="py-20 bg-gradient-subtle">
      <div className="container mx-auto px-6">
        {/* Header */}
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-4">
            Resume
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Professional experience and qualifications in web development and e-commerce solutions
          </p>
        </div>

        {/* Two Column Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          
          {/* Left Column - Summary, Certifications, Education */}
          <div className="space-y-8 animate-slide-up">
            
            {/* Summary */}
            <div className="bg-card border border-border rounded-lg p-8 hover:shadow-medium hover:border-primary/30 transition-all duration-300">
              <h3 className="text-2xl font-bold text-foreground mb-4 flex items-center gap-3">
                <Briefcase className="w-6 h-6 text-primary" />
                Summary
              </h3>
              <p className="text-muted-foreground leading-relaxed mb-6">
                Skilled web developer with 7+ years of experience in designing and developing user-focused websites and web applications, proficient in front-end and back-end technologies.
              </p>
              
              {/* Contact Details */}
              <div className="space-y-3">
                <div className="flex items-center gap-3 text-muted-foreground">
                  <MapPin className="w-4 h-4 text-primary" />
                  <span>Lahore, Pakistan</span>
                </div>
                <div className="flex items-center gap-3 text-muted-foreground">
                  <Phone className="w-4 h-4 text-primary" />
                  <a href="tel:+923224703700" target="_blank" rel="noopener noreferrer"><span>+92 322 4703700</span></a>
                </div>
                <div className="flex items-center gap-3 text-muted-foreground">
                  <Mail className="w-4 h-4 text-primary" />
                  <a href="mailto:zunair700@gmail.com" target="_blank" rel="noopener noreferrer"><span>zunair700@gmail.com</span></a>
                </div>
              </div>
            </div>

            {/* Certifications */}
            <div className="bg-card border border-border rounded-lg p-8 hover:shadow-medium hover:border-primary/30 transition-all duration-300">
              <h3 className="text-2xl font-bold text-foreground mb-6 flex items-center gap-3">
                <Award className="w-6 h-6 text-primary" />
                Certifications
              </h3>
              <div className="space-y-4">
                {certifications.map((cert, index) => (
                  <div key={index} className="relative pl-6 border-l-2 border-primary/30">
                    <div className="absolute -left-2 top-0 w-4 h-4 bg-primary rounded-full border-2 border-background"></div>
                    <a href={cert.link} target="_blank" rel="noopener noreferrer">
                        <h4 className="font-semibold text-foreground mb-1">{cert.name}</h4>
                        <p className="text-primary font-medium">{cert.issuer}</p>
                        <p className="text-muted-foreground text-sm">{cert.year}</p>
                    </a>
                  </div>
                ))}
              </div>
            </div>

            {/* Education */}
            <div className="bg-card border border-border rounded-lg p-8 hover:shadow-medium hover:border-primary/30 transition-all duration-300">
              <h3 className="text-2xl font-bold text-foreground mb-6 flex items-center gap-3">
                <GraduationCap className="w-6 h-6 text-primary" />
                Education
              </h3>
              <div className="space-y-4">
                {education.map((edu, index) => (
                  <div key={index} className="relative pl-6 border-l-2 border-primary/30">
                    <div className="absolute -left-2 top-0 w-4 h-4 bg-primary rounded-full border-2 border-background"></div>
                    <h4 className="font-semibold text-foreground mb-1">{edu.degree}</h4>
                    <p className="text-primary font-medium">{edu.institution}</p>
                    <p className="text-muted-foreground text-sm">{edu.period}</p>
                  </div>
                ))}
              </div>
            </div>

            {/* Download Resume */}
            <div className="bg-card border border-border rounded-lg px-8 py-6 hover:shadow-medium hover:border-primary/30 transition-all duration-300">
              <a href={resume} target="_blank" rel="noopener noreferrer">
                <h3 className="text-2xl font-bold text-foreground mb-6 flex items-center gap-3">
                  <Download className="w-6 h-6 text-primary" />
                  Download Resume
                </h3>
              </a>
            </div>
          </div>

          {/* Right Column - Professional Experience */}
          <div className="animate-slide-up" style={{ animationDelay: '200ms' }}>
            <div className="bg-card border border-border rounded-lg p-8 hover:shadow-medium hover:border-primary/30 transition-all duration-300">
              <h3 className="text-2xl font-bold text-foreground mb-8 flex items-center gap-3">
                <Briefcase className="w-6 h-6 text-primary" />
                Professional Experience
              </h3>
              <Accordion type="single" collapsible className="w-full">
                {experience.map((exp, index) => (
                  <AccordionItem 
                    key={index} 
                    value={`item-${index}`}
                    className="border-b border-border last:border-b-0"
                  >
                    <AccordionTrigger className="hover:no-underline py-6 px-0">
                      <div className="flex flex-col gap-2 w-full text-left">
                        <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-2">
                          <div className="flex flex-col gap-1">
                            <div className="flex flex-wrap items-center gap-2">
                              <span className="font-bold text-foreground text-lg">
                                {exp.title}
                              </span>
                              <span className="text-muted-foreground hidden sm:inline">|</span>
                              <span className="text-primary font-semibold">
                                {exp.company}
                              </span>
                            </div>
                            <div className="flex flex-wrap items-center gap-3 text-sm text-muted-foreground mt-1">
                              <div className="flex items-center gap-1.5">
                                <MapPin className="w-4 h-4" />
                                <span>{exp.location}</span>
                              </div>
                              <span>•</span>
                              <div className="flex items-center gap-1.5">
                                <Calendar className="w-4 h-4" />
                                <span>{exp.period}</span>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </AccordionTrigger>
                    <AccordionContent className="pb-6 pt-0 px-0">
                      {Array.isArray(exp.description) ? (
                        <ul className="space-y-3">
                          {exp.description.map((item, bulletIndex) => (
                            <li key={bulletIndex} className="flex items-start gap-3">
                              <span className="text-primary mt-1.5 shrink-0">▸</span>
                              <span className="text-muted-foreground leading-relaxed flex-1">{item}</span>
                            </li>
                          ))}
                        </ul>
                      ) : (
                        <p className="text-muted-foreground leading-relaxed">{exp.description}</p>
                      )}
                    </AccordionContent>
                  </AccordionItem>
                ))}
              </Accordion>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ResumeSection;

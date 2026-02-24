import { useState } from 'react';
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { useToast } from "@/hooks/use-toast";
import { Mail, Phone, MapPin, Github, Linkedin, Twitter } from 'lucide-react';
import ReCAPTCHA from 'react-google-recaptcha';
import { useRef } from 'react';

const ContactSection = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const { toast } = useToast();
  const recaptchaRef = useRef<ReCAPTCHA>(null);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

  const recaptchaToken = recaptchaRef.current?.getValue();
  if (!recaptchaToken) {
    toast({ title: "Please complete the reCAPTCHA", variant: "destructive" });
    setIsSubmitting(false);
    return;
  }

  try {
    const response = await fetch(`${import.meta.env.VITE_API_URL}/api/contact`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ ...formData, recaptchaToken }),
    });

    const data = await response.json();
    if (data.success) {
      toast({ title: "Message Sent!", description: "I'll get back to you soon." });
      setFormData({ name: '', email: '', subject: '', message: '' });
      recaptchaRef.current?.reset();
    } else {
      toast({ title: "Error", description: data.message, variant: "destructive" });
    }
  } catch {
    toast({ title: "Error", description: "Failed to send. Try again.", variant: "destructive" });
  } finally {
    setIsSubmitting(false);
  }
  };

  const contactInfo = [
    {
      icon: <Mail className="w-5 h-5" />,
      label: "Email",
      value: "zunair700@gmail.com",
      href: "mailto:zunair700@gmail.com"
    },
    {
      icon: <Phone className="w-5 h-5" />,
      label: "Phone",
      value: "+92 322 4703700",
      href: "tel:+923224703700"
    },
    {
      icon: <MapPin className="w-5 h-5" />,
      label: "Location",
      value: "Lahore, Pakistan",
      href: "#"
    }
  ];

  const socialLinks = [
    { icon: <Github className="w-5 h-5" />, href: "https://github.com/zzunair", label: "GitHub" },
    { icon: <Linkedin className="w-5 h-5" />, href: "https://www.linkedin.com/in/zunair-shahid/", label: "LinkedIn" },
    { icon: <Twitter className="w-5 h-5" />, href: "https://x.com/zunairsays", label: "Twitter" },
    // { icon: <Upwork className="w-5 h-5" />, href: "https://www.upwork.com/freelancers/~0129309c6c512e86ea", label: "Upwork" }
  ];

  return (
    <section id="contact" className="py-20 bg-background">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-4">
            Let's Work Together
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Ready to bring your project to life? Get in touch and let's discuss how we can create something amazing together.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
          {/* Contact Information */}
          <div className="animate-slide-up">
            <h3 className="text-2xl font-semibold text-foreground mb-8">
              Get In Touch
            </h3>
            
            <div className="space-y-6 mb-10">
              {contactInfo.map((info, index) => (
                <a
                  key={index}
                  href={info.href}
                  className="flex items-center space-x-4 p-4 bg-card border border-border rounded-lg hover:border-primary/30 hover:shadow-medium transition-all duration-300 group"
                >
                  <div className="text-primary group-hover:text-primary-glow transition-colors duration-300">
                    {info.icon}
                  </div>
                  <div>
                    <div className="text-sm text-muted-foreground">
                      {info.label}
                    </div>
                    <div className="text-foreground font-medium">
                      {info.value}
                    </div>
                  </div>
                </a>
              ))}
            </div>

            {/* Social Links */}
            <div>
              <h4 className="text-lg font-semibold text-foreground mb-4">
                Follow Me
              </h4>
              <div className="flex space-x-4">
                {socialLinks.map((social, index) => (
                  <a
                    key={index}
                    href={social.href}
                    aria-label={social.label}
                    className="w-12 h-12 bg-card border border-border rounded-full flex items-center justify-center text-muted-foreground hover:text-primary hover:border-primary/50 hover:shadow-glow transition-all duration-300 hover:scale-110"
                  >
                    {social.icon}
                  </a>
                ))}
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <div className="animate-slide-up" style={{ animationDelay: '200ms' }}>
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-foreground mb-2">
                    Name *
                  </label>
                  <Input
                    id="name"
                    name="name"
                    type="text"
                    required
                    value={formData.name}
                    onChange={handleInputChange}
                    className="bg-card border-border focus:border-primary focus:ring-primary transition-colors duration-300"
                    placeholder="Your full name"
                  />
                </div>
                
                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-foreground mb-2">
                    Email *
                  </label>
                  <Input
                    id="email"
                    name="email"
                    type="email"
                    required
                    value={formData.email}
                    onChange={handleInputChange}
                    className="bg-card border-border focus:border-primary focus:ring-primary transition-colors duration-300"
                    placeholder="your.email@example.com"
                  />
                </div>
              </div>

              <div>
                <label htmlFor="subject" className="block text-sm font-medium text-foreground mb-2">
                  Subject *
                </label>
                <Input
                  id="subject"
                  name="subject"
                  type="text"
                  required
                  value={formData.subject}
                  onChange={handleInputChange}
                  className="bg-card border-border focus:border-primary focus:ring-primary transition-colors duration-300"
                  placeholder="Project inquiry, collaboration, etc."
                />
              </div>

              <div>
                <label htmlFor="message" className="block text-sm font-medium text-foreground mb-2">
                  Message *
                </label>
                <Textarea
                  id="message"
                  name="message"
                  required
                  rows={6}
                  value={formData.message}
                  onChange={handleInputChange}
                  className="bg-card border-border focus:border-primary focus:ring-primary transition-colors duration-300 resize-none"
                  placeholder="Tell me about your project, timeline, budget, and any specific requirements..."
                />
              </div>
              <div className="mb-4">
                <ReCAPTCHA
                  ref={recaptchaRef}
                  sitekey={import.meta.env.VITE_RECAPTCHA_SITE_KEY}
                  theme="dark"
                />
              </div>
              <Button
                type="submit"
                size="lg"
                disabled={isSubmitting}
                className="w-full bg-gradient-primary hover:shadow-glow hover:scale-105 transition-all duration-300 py-3"
              >
                {isSubmitting ? 'Sending...' : 'Send Message'}
              </Button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
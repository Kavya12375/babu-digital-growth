import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { Card } from "@/components/ui/card";
import { MapPin, Phone, Mail, Clock, Send } from "lucide-react";
import { toast } from "sonner";

const ContactSection = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: ""
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.name || !formData.email || !formData.message) {
      toast.error("Please fill in all fields");
      return;
    }
    
    toast.success("Message sent successfully! We'll get back to you soon.");
    setFormData({ name: "", email: "", message: "" });
  };

  const handleInputChange = (field: string, value: string) => {
    setFormData(prev => ({ ...prev, [field]: value }));
  };

  const contactInfo = [
    {
      icon: MapPin,
      title: "Visit Our Office",
      details: ["123 Digital Street", "Tech District, Mumbai 400001", "Maharashtra, India"]
    },
    {
      icon: Phone,
      title: "Call Us",
      details: ["+91 98765 43210", "+91 87654 32109", "Mon-Sat 9AM-7PM IST"]
    },
    {
      icon: Mail,
      title: "Email Us",
      details: ["hello@babudigitalmedia.com", "support@babudigitalmedia.com", "Quick response guaranteed"]
    },
    {
      icon: Clock,
      title: "Business Hours",
      details: ["Monday - Friday: 9AM - 7PM", "Saturday: 10AM - 5PM", "Sunday: Closed"]
    }
  ];

  return (
    <section id="contact" className="py-20 bg-muted/30">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-bold text-primary mb-4">
            Get In <span className="text-brand-orange">Touch</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Ready to transform your digital presence? Contact us today and let's discuss how we can help your business grow.
          </p>
        </div>

        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-12">
            {/* Contact Form */}
            <Card className="p-8 bg-background border-border shadow-elegant">
              <div className="mb-6">
                <h3 className="text-2xl font-bold text-primary mb-2">Send us a Message</h3>
                <p className="text-muted-foreground">Fill out the form below and we'll get back to you within 24 hours.</p>
              </div>

              <form onSubmit={handleSubmit} className="space-y-6">
                action="https://formspree.io/f/xovlllbv"
                method="POST"
                <div className="grid grid-cols-1 gap-6">
                  <div className="space-y-2">
                    <Label htmlFor="contact-name">Full Name *</Label>
                    <Input
                      id="contact-name"
                      type="text"
                      placeholder="Enter your full name"
                      value={formData.name}
                      onChange={(e) => handleInputChange("name", e.target.value)}
                      className="h-12"
                      required
                    />
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="contact-email">Email Address *</Label>
                    <Input
                      id="contact-email"
                      type="email"
                      placeholder="Enter your email address"
                      value={formData.email}
                      onChange={(e) => handleInputChange("email", e.target.value)}
                      className="h-12"
                      required
                    />
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="contact-message">Message *</Label>
                    <Textarea
                      id="contact-message"
                      placeholder="Tell us about your project and goals..."
                      value={formData.message}
                      onChange={(e) => handleInputChange("message", e.target.value)}
                      className="min-h-32"
                      required
                    />
                  </div>
                </div>

                <Button type="submit" variant="hero" size="lg" className="w-full">
                  <Send className="mr-2 h-5 w-5" />
                  Send Message
                </Button>
              </form>
            </Card>

            {/* Contact Information */}
            <div className="space-y-8">
              {/* Contact Info Cards */}
              <div className="grid grid-cols-1 gap-6">
                {contactInfo.map((info, index) => (
                  <Card key={index} className="p-6 bg-background border-border hover:shadow-card transition-all duration-300 group hover:scale-105">
                    <div className="flex items-start space-x-4">
                      <div className="w-12 h-12 bg-gradient-primary rounded-2xl flex items-center justify-center group-hover:animate-bounce-gentle">
                        <info.icon className="h-6 w-6 text-white" />
                      </div>
                      <div className="flex-1">
                        <h3 className="text-lg font-bold text-primary mb-2">{info.title}</h3>
                        {info.details.map((detail, detailIndex) => (
                          <p key={detailIndex} className="text-muted-foreground text-sm leading-relaxed">
                            {detail}
                          </p>
                        ))}
                      </div>
                    </div>
                  </Card>
                ))}
              </div>

              {/* Map Placeholder */}
              <Card className="p-6 bg-background border-border">
                <div className="aspect-video bg-gradient-primary rounded-xl flex items-center justify-center relative overflow-hidden">
                  <div className="absolute inset-0 opacity-20">
                    <div className="absolute top-4 left-4 w-12 h-12 bg-white rounded-full animate-float"></div>
                    <div className="absolute bottom-4 right-4 w-8 h-8 bg-white rounded-full animate-float animation-delay-1000"></div>
                  </div>
                  <div className="text-center text-white z-10">
                    <MapPin className="h-12 w-12 mx-auto mb-4 animate-bounce-gentle" />
                    <h3 className="text-xl font-bold mb-2">Find Us on Map</h3>
                    <p className="text-white/90">Located in the heart of Mumbai's tech district</p>
                  </div>
                </div>
              </Card>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;

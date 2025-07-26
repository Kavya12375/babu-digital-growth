import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Target, Eye, Award, Users } from "lucide-react";
import aboutImage from "@/assets/about-us.jpg";

const AboutSection = () => {
  const values = [
    {
      icon: Target,
      title: "Our Mission",
      description: "To empower businesses with innovative digital solutions that drive measurable growth and sustainable success."
    },
    {
      icon: Eye,
      title: "Our Vision",
      description: "To be the leading digital marketing agency that transforms businesses through cutting-edge strategies and exceptional results."
    },
    {
      icon: Award,
      title: "Our Values",
      description: "Integrity, innovation, and client success are at the core of everything we do. We believe in transparent partnerships."
    },
    {
      icon: Users,
      title: "Our Team",
      description: "A diverse group of digital experts, creatives, and strategists passionate about delivering exceptional results."
    }
  ];

  return (
    <section id="about" className="py-20 bg-muted/30">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-bold text-primary mb-4">
            About <span className="text-brand-orange">Babu Digital Media</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            We're a dynamic digital marketing agency dedicated to helping businesses thrive in the digital landscape.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-center mb-16">
          {/* Content */}
          <div className="space-y-6">
            <h3 className="text-2xl md:text-3xl font-bold text-primary">
              Transforming Businesses Through Digital Innovation
            </h3>
            <p className="text-lg text-muted-foreground leading-relaxed">
              Since our inception, Babu Digital Media has been at the forefront of digital transformation, 
              helping businesses of all sizes navigate the complex digital landscape and achieve unprecedented growth.
            </p>
            <p className="text-lg text-muted-foreground leading-relaxed">
              Our comprehensive approach combines data-driven strategies with creative excellence to deliver 
              results that matter. We don't just create campaigns; we build lasting partnerships that drive 
              sustainable business growth.
            </p>
            
            {/* Key Features */}
            <div className="grid grid-cols-2 gap-4 mt-8">
              <div className="flex items-center space-x-3">
                <div className="w-3 h-3 bg-brand-orange rounded-full"></div>
                <span className="text-sm font-medium">Data-Driven Approach</span>
              </div>
              <div className="flex items-center space-x-3">
                <div className="w-3 h-3 bg-brand-orange rounded-full"></div>
                <span className="text-sm font-medium">24/7 Support</span>
              </div>
              <div className="flex items-center space-x-3">
                <div className="w-3 h-3 bg-brand-orange rounded-full"></div>
                <span className="text-sm font-medium">Proven ROI</span>
              </div>
              <div className="flex items-center space-x-3">
                <div className="w-3 h-3 bg-brand-orange rounded-full"></div>
                <span className="text-sm font-medium">Expert Team</span>
              </div>
            </div>

            <Button variant="hero" size="lg" className="mt-6">
              Learn More About Us
            </Button>
          </div>

          {/* Image */}
          <div className="relative">
            <div className="relative rounded-2xl overflow-hidden shadow-elegant">
              <img 
                src={aboutImage} 
                alt="About Babu Digital Media" 
                className="w-full h-auto object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-tr from-primary/20 to-brand-orange/20"></div>
            </div>
            {/* Floating Badge */}
            <div className="absolute -bottom-6 -right-6 bg-brand-orange text-white p-6 rounded-2xl shadow-glow animate-bounce-gentle">
              <div className="text-center">
                <div className="text-2xl font-bold">5+</div>
                <div className="text-sm">Years Experience</div>
              </div>
            </div>
          </div>
        </div>

        {/* Values Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {values.map((value, index) => (
            <Card key={index} className="p-6 bg-background border-border hover:shadow-card transition-all duration-300 group hover:scale-105">
              <div className="text-center space-y-4">
                <div className="w-16 h-16 bg-gradient-primary rounded-full flex items-center justify-center mx-auto group-hover:animate-bounce-gentle">
                  <value.icon className="h-8 w-8 text-white" />
                </div>
                <h3 className="text-xl font-bold text-primary">{value.title}</h3>
                <p className="text-muted-foreground leading-relaxed">{value.description}</p>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
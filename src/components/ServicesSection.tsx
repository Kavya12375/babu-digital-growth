import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { ArrowRight } from "lucide-react";
import seoIcon from "@/assets/seo-icon.webp";
import googleAdsIcon from "@/assets/google-ads-icon.webp";
import webDesignIcon from "@/assets/web-design-icon.webp";
import socialMediaIcon from "@/assets/social-media-icon.webp";
import webDevIcon from "@/assets/web-dev-icon.webp";
import emailIcon from "@/assets/email-icon.webp";
import contentIcon from "@/assets/content-icon.webp";
import affiliateIcon from "@/assets/affiliate-icon.webp";

const ServicesSection = () => {
  const services = [
    {
      icon: seoIcon,
      title: "SEO Optimization",
      description: "Improve your search engine rankings and drive organic traffic with our proven SEO strategies.",
      features: ["Keyword Research", "On-Page SEO", "Technical SEO", "Local SEO"]
    },
    {
      icon: googleAdsIcon,
      title: "Google Ads",
      description: "Maximize your ROI with targeted Google Ads campaigns that convert visitors into customers.",
      features: ["PPC Management", "Ad Copywriting", "Landing Pages", "Conversion Tracking"]
    },
    {
      icon: webDesignIcon,
      title: "Website Designing",
      description: "Create stunning, responsive websites that captivate your audience and drive conversions.",
      features: ["UI/UX Design", "Responsive Design", "Brand Identity", "User Experience"]
    },
    {
      icon: socialMediaIcon,
      title: "Social Media Marketing",
      description: "Build your brand presence and engage with your audience across all social platforms.",
      features: ["Content Strategy", "Community Management", "Paid Social", "Analytics"]
    },
    {
      icon: webDevIcon,
      title: "Web Development",
      description: "Develop robust, scalable web applications that power your business growth.",
      features: ["Custom Development", "E-commerce", "CMS Solutions", "API Integration"]
    },
    {
      icon: emailIcon,
      title: "Email Marketing",
      description: "Nurture leads and retain customers with personalized email marketing campaigns.",
      features: ["Campaign Design", "Automation", "Segmentation", "A/B Testing"]
    },
    {
      icon: contentIcon,
      title: "Content Creation",
      description: "Engage your audience with compelling content that tells your brand story.",
      features: ["Blog Writing", "Video Content", "Infographics", "Brand Storytelling"]
    },
    {
      icon: affiliateIcon,
      title: "Affiliate Marketing",
      description: "Expand your reach and boost sales through strategic affiliate partnerships.",
      features: ["Partner Recruitment", "Commission Structure", "Performance Tracking", "Optimization"]
    }
  ];

  return (
    <section id="services" className="py-20 bg-background">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-bold text-primary mb-4">
            Our <span className="text-brand-orange">Services</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Comprehensive digital marketing solutions designed to accelerate your business growth and maximize your online potential.
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
          {services.map((service, index) => (
            <Card 
              key={index} 
              className="p-6 bg-gradient-card border-border hover:shadow-elegant transition-all duration-500 group hover:scale-105 hover:-translate-y-2"
            >
              <div className="space-y-4">
                {/* Icon */}
                <div className="w-16 h-16 bg-gradient-primary rounded-2xl flex items-center justify-center group-hover:animate-bounce-gentle transition-all duration-300">
                  <img 
                    src={service.icon} 
                    alt={service.title} 
                    className="w-10 h-10 object-contain filter brightness-0 invert" 
                    width="40"
                    height="40"
                    loading="lazy"
                  />
                </div>

                {/* Title */}
                <h3 className="text-xl font-bold text-primary group-hover:text-brand-orange transition-colors">
                  {service.title}
                </h3>

                {/* Description */}
                <p className="text-muted-foreground text-sm leading-relaxed">
                  {service.description}
                </p>

                {/* Features */}
                <ul className="space-y-2">
                  {service.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-center text-sm">
                      <div className="w-2 h-2 bg-brand-orange rounded-full mr-3 flex-shrink-0"></div>
                      <span className="text-muted-foreground">{feature}</span>
                    </li>
                  ))}
                </ul>

                {/* CTA */}
                <Button variant="ghost" className="w-full mt-4 group-hover:bg-brand-orange group-hover:text-white transition-all duration-300">
                  Learn More
                  <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
                </Button>
              </div>
            </Card>
          ))}
        </div>

        {/* CTA Section */}
        <div className="text-center bg-gradient-primary rounded-3xl p-12 text-white">
          <h3 className="text-2xl md:text-3xl font-bold mb-4">
            Ready to Transform Your Business?
          </h3>
          <p className="text-xl text-white/90 mb-8 max-w-2xl mx-auto">
            Let's discuss how our services can help you achieve your digital marketing goals and drive sustainable growth.
          </p>
          <Button variant="outline" size="lg" className="bg-white text-primary hover:bg-white/90 border-white">
            Get Started Today
            <ArrowRight className="ml-2 h-5 w-5" />
          </Button>
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;
import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Check, Star, Crown, Zap } from "lucide-react";

const PackagesSection = () => {
  const [currency, setCurrency] = useState({ symbol: "$", code: "USD" });
  const [isLoading, setIsLoading] = useState(true);

  // Detect user location for currency
  useEffect(() => {
    const detectLocation = async () => {
      try {
        const response = await fetch('https://ipapi.co/json/');
        const data = await response.json();
        
        if (data.country_code === 'IN') {
          setCurrency({ symbol: "₹", code: "INR" });
        } else {
          setCurrency({ symbol: "$", code: "USD" });
        }
      } catch (error) {
        console.log('Using default currency:', error);
        setCurrency({ symbol: "$", code: "USD" });
      } finally {
        setIsLoading(false);
      }
    };

    detectLocation();
  }, []);

  const packages = [
    {
      name: "Basic",
      tagline: "Perfect for startups",
      icon: Zap,
      price: {
        USD: 499,
        INR: 25000
      },
      originalPrice: {
        USD: 699,
        INR: 35000
      },
      features: [
        "Website Design & Development",
        "Basic SEO Optimization",
        "Social Media Setup",
        "Google My Business Setup",
        "Monthly Performance Report",
        "Email Support"
      ],
      popular: false,
      color: "from-blue-500 to-cyan-500"
    },
    {
      name: "Standard",
      tagline: "Most popular choice",
      icon: Star,
      price: {
        USD: 999,
        INR: 50000
      },
      originalPrice: {
        USD: 1299,
        INR: 65000
      },
      features: [
        "Everything in Basic",
        "Advanced SEO & Content Marketing",
        "Google Ads Management",
        "Social Media Marketing",
        "Email Marketing Campaigns",
        "Weekly Performance Reports",
        "Phone & Email Support",
        "Landing Page Optimization"
      ],
      popular: true,
      color: "from-brand-orange to-yellow-500"
    },
    {
      name: "Premium",
      tagline: "For enterprise growth",
      icon: Crown,
      price: {
        USD: 1999,
        INR: 100000
      },
      originalPrice: {
        USD: 2499,
        INR: 125000
      },
      features: [
        "Everything in Standard",
        "Custom Web Application",
        "Advanced Analytics & BI",
        "Multi-Platform Advertising",
        "Conversion Rate Optimization",
        "A/B Testing & Optimization",
        "Dedicated Account Manager",
        "24/7 Priority Support",
        "Custom Integrations",
        "Monthly Strategy Calls"
      ],
      popular: false,
      color: "from-purple-600 to-pink-600"
    }
  ];

  if (isLoading) {
    return (
      <div className="py-20 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="text-center">
            <div className="inline-block h-8 w-8 animate-spin rounded-full border-4 border-solid border-brand-orange border-r-transparent"></div>
            <p className="mt-4 text-muted-foreground">Loading packages...</p>
          </div>
        </div>
      </div>
    );
  }

  return (
    <section id="packages" className="py-20 bg-muted/30">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-bold text-primary mb-4">
            Choose Your <span className="text-brand-orange">Package</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto mb-6">
            Flexible pricing plans designed to scale with your business growth. All packages include our signature results-driven approach.
          </p>
          <div className="flex items-center justify-center gap-2">
            <span className="text-sm text-muted-foreground">Pricing in {currency.code}</span>
            <Badge variant="outline" className="text-brand-orange border-brand-orange">
              Auto-detected location
            </Badge>
          </div>
        </div>

        {/* Packages Grid */}
        <div className="grid lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
          {packages.map((pkg, index) => (
            <Card 
              key={index}
              className={`relative p-8 bg-background border-2 transition-all duration-500 hover:scale-105 hover:shadow-glow ${
                pkg.popular 
                  ? 'border-brand-orange shadow-glow scale-105' 
                  : 'border-border hover:border-brand-orange/50'
              }`}
            >
              {/* Popular Badge */}
              {pkg.popular && (
                <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                  <Badge className="bg-brand-orange text-white px-6 py-2 text-sm font-semibold">
                    Most Popular
                  </Badge>
                </div>
              )}

              <div className="space-y-6">
                {/* Header */}
                <div className="text-center space-y-4">
                  <div className={`w-16 h-16 bg-gradient-to-br ${pkg.color} rounded-2xl flex items-center justify-center mx-auto`}>
                    <pkg.icon className="h-8 w-8 text-white" />
                  </div>
                  <div>
                    <h3 className="text-2xl font-bold text-primary">{pkg.name}</h3>
                    <p className="text-muted-foreground">{pkg.tagline}</p>
                  </div>
                </div>

                {/* Pricing */}
                <div className="text-center space-y-2">
                  <div className="flex items-center justify-center space-x-2">
                    <span className="text-4xl font-bold text-primary">
                      {currency.symbol}{pkg.price[currency.code as keyof typeof pkg.price].toLocaleString()}
                    </span>
                    <span className="text-muted-foreground">/month</span>
                  </div>
                  <div className="flex items-center justify-center space-x-2">
                    <span className="text-lg text-muted-foreground line-through">
                      {currency.symbol}{pkg.originalPrice[currency.code as keyof typeof pkg.originalPrice].toLocaleString()}
                    </span>
                    <Badge variant="destructive" className="text-xs">
                      Save {Math.round(((pkg.originalPrice[currency.code as keyof typeof pkg.originalPrice] - pkg.price[currency.code as keyof typeof pkg.price]) / pkg.originalPrice[currency.code as keyof typeof pkg.originalPrice]) * 100)}%
                    </Badge>
                  </div>
                </div>

                {/* Features */}
                <ul className="space-y-3">
                  {pkg.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-start space-x-3">
                      <Check className="h-5 w-5 text-brand-orange mt-0.5 flex-shrink-0" />
                      <span className="text-sm text-muted-foreground">{feature}</span>
                    </li>
                  ))}
                </ul>

                {/* CTA Button */}
                <Button 
                  variant={pkg.popular ? "hero" : "default"} 
                  className="w-full text-lg py-6"
                >
                  {pkg.popular ? "Get Started Now" : "Choose Plan"}
                </Button>
              </div>
            </Card>
          ))}
        </div>

        {/* Bottom CTA */}
        <div className="text-center mt-12">
          <p className="text-muted-foreground mb-4">
            Need a custom solution? We've got you covered.
          </p>
          <Button variant="outline" size="lg">
            Contact for Custom Pricing
          </Button>
        </div>
      </div>
    </section>
  );
};

export default PackagesSection;
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import ChatBot from "@/components/ChatBot";
import WhatsAppChat from "@/components/WhatsAppChat";
import ScrollToTop from "@/components/ScrollToTop";
import MotionWrapper from "@/components/MotionWrapper";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { ScrollArea } from "@/components/ui/scroll-area";
import { CheckCircle, TrendingUp, Search, Globe, Target, Award, ArrowRight, Star, BarChart3, Zap, Settings, Link, MapPin } from "lucide-react";
import { useState } from "react";
import Lottie from "lottie-react";

const SEOOptimization = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    website: "",
    consent: false
  });

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value, type, checked } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: type === 'checkbox' ? checked : value
    }));
  };

  const handleAnalyze = async (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Analyzing website:", formData);
  };

  // Lottie animation data placeholders (you can replace with actual Lottie JSON files)
  const seoAnimationData = {
    v: "5.7.4",
    fr: 30,
    ip: 0,
    op: 90,
    w: 500,
    h: 500,
    nm: "SEO Animation",
    ddd: 0,
    assets: [],
    layers: [
      {
        ddd: 0,
        ind: 1,
        ty: 4,
        nm: "Circle",
        sr: 1,
        ks: {
          o: { a: 0, k: 100 },
          r: { a: 1, k: [{ t: 0, s: [0] }, { t: 90, s: [360] }] },
          p: { a: 0, k: [250, 250, 0] },
          a: { a: 0, k: [0, 0, 0] },
          s: { a: 0, k: [100, 100, 100] }
        },
        ao: 0,
        shapes: [
          {
            ty: "gr",
            it: [
              {
                ty: "el",
                p: { a: 0, k: [0, 0] },
                s: { a: 0, k: [100, 100] }
              },
              {
                ty: "fl",
                c: { a: 0, k: [0.2, 0.6, 1, 1] },
                o: { a: 0, k: 100 }
              }
            ]
          }
        ],
        ip: 0,
        op: 90,
        st: 0
      }
    ]
  };

  const seoServices = [
    {
      id: 1,
      title: "Technical SEO",
      description: "Optimize your website's technical foundation for better search engine crawling and indexing performance.",
      imagePosition: "right",
      content: {
        overview: "Technical SEO is the foundation of all successful SEO strategies. It focuses on optimizing the backend structure of your website to help search engines crawl, understand, and index your content more effectively. Our comprehensive technical SEO approach ensures your website meets all modern search engine requirements while providing an exceptional user experience.",
        steps: [
          "Complete website technical audit and performance analysis",
          "Core Web Vitals optimization for better user experience",
          "Mobile-first indexing and responsive design optimization",
          "Advanced XML sitemap creation and strategic submission",
          "Robots.txt optimization for better crawler guidance",
          "Comprehensive schema markup implementation",
          "SSL certificate installation and HTTPS migration",
          "URL structure optimization and redirect management",
          "Site speed optimization and caching strategies",
          "Structured data implementation for rich snippets"
        ]
      },
      pricing: [
        { 
          plan: "Starter", 
          price: "₹15,000", 
          features: [
            "Basic site audit",
            "Speed optimization",
            "Mobile optimization", 
            "Basic schema markup",
            "SSL setup",
            "Monthly report"
          ] 
        },
        { 
          plan: "Professional", 
          price: "₹28,000", 
          features: [
            "Everything in Starter",
            "Advanced schema markup",
            "Technical issue fixes", 
            "Core Web Vitals optimization",
            "Structured data setup",
            "Bi-weekly monitoring",
            "Priority support"
          ] 
        },
        { 
          plan: "Enterprise", 
          price: "₹45,000", 
          features: [
            "Everything in Professional",
            "Advanced technical SEO",
            "Custom schema development",
            "Advanced caching setup", 
            "Weekly monitoring",
            "Dedicated account manager",
            "24/7 priority support"
          ] 
        }
      ]
    },
    {
      id: 2,
      title: "On-Page SEO",
      description: "Optimize individual web pages to rank higher and earn more relevant traffic in search engines.",
      imagePosition: "left",
      content: {
        overview: "On-Page SEO is crucial for helping search engines understand your content and rank it appropriately. Our comprehensive on-page optimization strategy focuses on perfecting every element of your web pages, from keyword optimization to user experience enhancements. We ensure each page is fully optimized to attract and engage your target audience while meeting search engine requirements.",
        steps: [
          "In-depth keyword research and competitive analysis",
          "Strategic title tag and meta description optimization",
          "Header tag hierarchy (H1, H2, H3) optimization",
          "Content optimization with natural keyword integration",
          "Internal linking strategy development and implementation",
          "Image optimization with SEO-friendly alt text",
          "URL structure optimization for better readability",
          "User experience improvements and page layout optimization",
          "Content freshness and relevance enhancement",
          "Featured snippet optimization strategies"
        ]
      },
      pricing: [
        { 
          plan: "Basic", 
          price: "₹12,000", 
          features: [
            "5 pages optimization",
            "Keyword research",
            "Meta tags optimization",
            "Basic content audit",
            "Image optimization",
            "Monthly tracking"
          ] 
        },
        { 
          plan: "Standard", 
          price: "₹22,000", 
          features: [
            "15 pages optimization",
            "Advanced keyword research",
            "Content optimization",
            "Internal linking strategy",
            "Competitor analysis",
            "Bi-weekly reports"
          ] 
        },
        { 
          plan: "Premium", 
          price: "₹38,000", 
          features: [
            "Unlimited pages",
            "Comprehensive optimization",
            "Content creation support",
            "Advanced analytics setup",
            "Conversion optimization",
            "Weekly performance review"
          ] 
        }
      ]
    },
    {
      id: 3,
      title: "Off-Page SEO",
      description: "Build authority and trust through external optimization strategies and high-quality link building.",
      imagePosition: "right",
      content: {
        overview: "Off-Page SEO is essential for building your website's authority and credibility in the eyes of search engines. Our strategic approach focuses on earning high-quality backlinks from authoritative sources, building brand mentions, and establishing your digital presence across relevant platforms. We use only white-hat techniques that provide long-term sustainable results.",
        steps: [
          "Comprehensive competitor backlink analysis and gap identification",
          "High-quality link building strategy development",
          "Strategic guest posting and content outreach campaigns",
          "Social media optimization and engagement strategies",
          "Local citations and directory submission management",
          "Brand mention monitoring and reputation management",
          "Influencer outreach and partnership development",
          "Content marketing and link-worthy asset creation",
          "Broken link building and resource page optimization",
          "Ongoing link profile monitoring and maintenance"
        ]
      },
      pricing: [
        { 
          plan: "Foundation", 
          price: "₹18,000", 
          features: [
            "10 quality backlinks",
            "Basic outreach campaign",
            "Social media optimization",
            "Directory submissions",
            "Monthly link report",
            "Brand mention monitoring"
          ] 
        },
        { 
          plan: "Growth", 
          price: "₹32,000", 
          features: [
            "25 quality backlinks",
            "Guest posting strategy",
            "Social media management",
            "Citation building",
            "Influencer outreach",
            "Bi-weekly progress reports"
          ] 
        },
        { 
          plan: "Authority", 
          price: "₹55,000", 
          features: [
            "50+ quality backlinks",
            "Advanced outreach campaigns",
            "PR and media placements",
            "Content marketing support",
            "Comprehensive link analysis",
            "Weekly strategy reviews"
          ] 
        }
      ]
    },
    {
      id: 4,
      title: "Local SEO",
      description: "Optimize your online presence to attract more business from relevant local searches and nearby customers.",
      imagePosition: "left",
      content: {
        overview: "Local SEO is crucial for businesses that serve customers in specific geographic areas. Our comprehensive local SEO strategy helps you dominate local search results, attract nearby customers, and increase foot traffic to your physical location. We optimize every aspect of your local online presence to ensure maximum visibility in your target market.",
        steps: [
          "Google My Business profile optimization and management",
          "Local keyword research and geographic targeting",
          "NAP (Name, Address, Phone) consistency across all platforms",
          "Strategic local citation building and directory listings",
          "Customer review management and reputation building",
          "Location-specific content creation and optimization",
          "Local landing page development and optimization",
          "Local link building and community engagement",
          "Google Maps optimization and local pack ranking",
          "Local competitor analysis and market positioning"
        ]
      },
      pricing: [
        { 
          plan: "Local Starter", 
          price: "₹10,000", 
          features: [
            "GMB optimization",
            "5 local citations",
            "Review management setup",
            "Local keyword research",
            "NAP consistency check",
            "Monthly GMB insights"
          ] 
        },
        { 
          plan: "Local Pro", 
          price: "₹20,000", 
          features: [
            "Everything in Starter",
            "15 local citations",
            "Local content creation",
            "Monthly GMB posts",
            "Review response management",
            "Local competitor analysis"
          ] 
        },
        { 
          plan: "Local Domination", 
          price: "₹35,000", 
          features: [
            "Everything in Pro",
            "Advanced local strategy",
            "Reputation management",
            "Local PR campaigns",
            "Multi-location optimization",
            "Weekly performance tracking"
          ] 
        }
      ]
    }
  ];

  const results = [
    { before: "Position 46", after: "Position 1", website: "TechStartup.com", improvement: "45 positions up", industry: "Technology" },
    { before: "Position 23", after: "Position 3", website: "LocalBusiness.in", improvement: "20 positions up", industry: "Local Services" },
    { before: "Position 67", after: "Position 8", website: "OnlineStore.com", improvement: "59 positions up", industry: "E-commerce" },
    { before: "Position 35", after: "Position 2", website: "ServiceProvider.in", improvement: "33 positions up", industry: "Professional Services" },
    { before: "Position 89", after: "Position 5", website: "HealthClinic.co.in", improvement: "84 positions up", industry: "Healthcare" },
    { before: "Position 12", after: "Position 1", website: "LegalFirm.in", improvement: "11 positions up", industry: "Legal Services" }
  ];

  const faqs = [
    {
      question: "How long does it take to see SEO results?",
      answer: "SEO is a long-term strategy that typically shows initial results within 3-6 months, with significant improvements visible in 6-12 months. The timeline depends on various factors including your current website state, competition level, keyword difficulty, and the intensity of optimization efforts. We provide monthly progress reports to track improvements."
    },
    {
      question: "What's the difference between Technical SEO and On-Page SEO?",
      answer: "Technical SEO focuses on the backend infrastructure of your website including site speed, crawlability, mobile-friendliness, and technical structure. On-Page SEO deals with optimizing individual page content, keywords, meta tags, and user-facing elements. Both are essential and work together for comprehensive SEO success."
    },
    {
      question: "Why is Local SEO important for my business?",
      answer: "Local SEO is crucial for businesses serving specific geographic areas. It helps your business appear in local search results when customers nearby search for your services. This increases visibility to potential customers in your area, drives foot traffic to physical locations, and improves overall local market presence."
    },
    {
      question: "How do you measure SEO success and ROI?",
      answer: "We track comprehensive metrics including keyword rankings, organic traffic growth, conversion rates, click-through rates, search visibility, and business inquiries. Our detailed reports show progress in search rankings, traffic increases, and most importantly, how SEO efforts translate to business growth and revenue."
    },
    {
      question: "Can you guarantee first-page rankings?",
      answer: "While we cannot guarantee specific rankings (as search engines control this), we use proven strategies and best practices that have consistently delivered top rankings for our clients. Our track record shows 95% of our clients achieve first-page rankings for their target keywords within 6-12 months."
    },
    {
      question: "Do you follow white-hat SEO practices only?",
      answer: "Absolutely! We strictly follow Google's Webmaster Guidelines and use only white-hat SEO techniques. This ensures long-term, sustainable results without any risk of penalties. Our ethical approach protects your website's reputation and provides lasting value for your business."
    },
    {
      question: "What makes your SEO services different from competitors?",
      answer: "Our approach combines technical expertise with strategic thinking. We provide transparent reporting, dedicated account management, and custom strategies tailored to your industry. Our team stays updated with the latest SEO trends and algorithm changes to ensure your website maintains top performance."
    },
    {
      question: "Do you provide ongoing SEO maintenance and support?",
      answer: "Yes, SEO requires ongoing maintenance to maintain and improve rankings. We provide continuous monitoring, regular content updates, technical maintenance, and strategy adjustments based on performance data and algorithm changes. Our support team is available to address any SEO-related questions or concerns."
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-seo-light">
      <Header />
      
      {/* Hero Section */}
      <section className="pt-20 pb-16 bg-gradient-seo-accent">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <MotionWrapper direction="left" duration={1.2}>
              <div className="space-y-6">
                <Badge variant="secondary" className="w-fit bg-primary/10 text-primary border-primary/20">
                  <Search className="h-4 w-4 mr-2" />
                  Advanced SEO Solutions
                </Badge>
                <h1 className="text-4xl lg:text-6xl font-bold text-foreground leading-tight">
                  Dominate Search with 
                  <span className="text-primary block"> Expert SEO</span>
                </h1>
                <p className="text-xl text-muted-foreground leading-relaxed">
                  Transform your online visibility with our comprehensive SEO strategies. From technical optimization to content enhancement, we deliver measurable results that drive organic traffic and accelerate business growth.
                </p>
                <div className="grid grid-cols-2 gap-4">
                  <div className="flex items-center gap-3 p-3 bg-card rounded-lg shadow-light">
                    <CheckCircle className="h-5 w-5 text-primary" />
                    <span className="text-sm font-medium">Proven Results</span>
                  </div>
                  <div className="flex items-center gap-3 p-3 bg-card rounded-lg shadow-light">
                    <CheckCircle className="h-5 w-5 text-primary" />
                    <span className="text-sm font-medium">White-Hat Only</span>
                  </div>
                  <div className="flex items-center gap-3 p-3 bg-card rounded-lg shadow-light">
                    <CheckCircle className="h-5 w-5 text-primary" />
                    <span className="text-sm font-medium">24/7 Support</span>
                  </div>
                  <div className="flex items-center gap-3 p-3 bg-card rounded-lg shadow-light">
                    <CheckCircle className="h-5 w-5 text-primary" />
                    <span className="text-sm font-medium">Transparent Reporting</span>
                  </div>
                </div>
                <Button size="lg" className="group px-8 py-3 bg-primary hover:bg-primary/90">
                  Get Free SEO Audit
                  <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
                </Button>
              </div>
            </MotionWrapper>
            
            <MotionWrapper direction="right" duration={1.2} delay={0.3}>
              <div className="relative">
                <div className="aspect-video rounded-2xl overflow-hidden shadow-elegant bg-gradient-to-br from-primary/5 to-accent/10">
                  <video 
                    className="w-full h-full object-cover"
                    autoPlay
                    loop
                    muted
                    playsInline
                  >
                    <source src="https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/BigBuckBunny.mp4" type="video/mp4" />
                    Your browser does not support the video tag.
                  </video>
                </div>
                <div className="absolute -bottom-6 -right-6 bg-card border shadow-elegant p-6 rounded-xl">
                  <div className="flex items-center gap-3">
                    <TrendingUp className="h-6 w-6 text-primary" />
                    <div>
                      <div className="font-bold text-lg text-foreground">400%</div>
                      <div className="text-sm text-muted-foreground">Traffic Increase</div>
                    </div>
                  </div>
                </div>
              </div>
            </MotionWrapper>
          </div>
        </div>
      </section>

      {/* Website Analysis Form */}
      <MotionWrapper direction="bottom" duration={1}>
        <section className="py-16 bg-gradient-to-br from-primary to-brand-orange">
          <div className="container mx-auto px-4">
            <div className="max-w-5xl mx-auto">
              <MotionWrapper direction="top" delay={0.2}>
                <h2 className="text-4xl font-bold text-white text-center mb-4">
                  Get Your Free Website SEO Analysis
                </h2>
                <p className="text-white/90 text-center mb-8 text-lg">
                  Discover exactly what's holding your website back from ranking higher
                </p>
              </MotionWrapper>
              
              <form onSubmit={handleAnalyze} className="bg-white/15 backdrop-blur-md rounded-3xl p-8 border border-white/20 shadow-glow">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
                  <input
                    type="text"
                    name="name"
                    placeholder="Enter Your Name"
                    value={formData.name}
                    onChange={handleInputChange}
                    className="px-6 py-4 rounded-xl border border-white/30 bg-white/20 text-white placeholder-white/70 focus:outline-none focus:ring-2 focus:ring-white/50 focus:border-white/50 transition-all"
                    required
                  />
                  <input
                    type="email"
                    name="email"
                    placeholder="Enter Your Email"
                    value={formData.email}
                    onChange={handleInputChange}
                    className="px-6 py-4 rounded-xl border border-white/30 bg-white/20 text-white placeholder-white/70 focus:outline-none focus:ring-2 focus:ring-white/50 focus:border-white/50 transition-all"
                    required
                  />
                  <input
                    type="tel"
                    name="phone"
                    placeholder="Phone Number"
                    value={formData.phone}
                    onChange={handleInputChange}
                    className="px-6 py-4 rounded-xl border border-white/30 bg-white/20 text-white placeholder-white/70 focus:outline-none focus:ring-2 focus:ring-white/50 focus:border-white/50 transition-all"
                    required
                  />
                  <input
                    type="url"
                    name="website"
                    placeholder="Website URL"
                    value={formData.website}
                    onChange={handleInputChange}
                    className="px-6 py-4 rounded-xl border border-white/30 bg-white/20 text-white placeholder-white/70 focus:outline-none focus:ring-2 focus:ring-white/50 focus:border-white/50 transition-all"
                    required
                  />
                </div>
                <div className="flex items-start gap-4 mb-8">
                  <input
                    type="checkbox"
                    name="consent"
                    id="consent"
                    checked={formData.consent}
                    onChange={handleInputChange}
                    className="mt-1.5 rounded border-white/30 bg-white/20"
                    required
                  />
                  <label htmlFor="consent" className="text-white/90 text-sm leading-relaxed">
                    I agree to receive communication via SMS or Email. Standard messaging rates may apply. Reply STOP to unsubscribe anytime.
                  </label>
                </div>
                <div className="text-center">
                  <Button 
                    type="submit" 
                    size="lg" 
                    className="bg-white text-primary hover:bg-white/95 px-12 py-4 font-bold text-lg rounded-xl shadow-elegant"
                  >
                    Analyze My Website Free
                  </Button>
                </div>
              </form>
            </div>
          </div>
        </section>
      </MotionWrapper>

      {/* SEO Services Sections */}
      {seoServices.map((service, index) => (
        <section key={service.id} className={`py-20 ${index % 2 === 0 ? 'bg-gradient-seo-light' : 'bg-gradient-seo-accent'}`}>
          <div className="container mx-auto px-4">
            <div className={`grid lg:grid-cols-2 gap-16 items-center ${service.imagePosition === 'left' ? 'lg:grid-flow-col-dense' : ''}`}>
              <MotionWrapper 
                direction={service.imagePosition === 'left' ? 'right' : 'left'} 
                duration={1.2}
                className={`space-y-8 ${service.imagePosition === 'left' ? 'lg:col-start-2' : ''}`}
              >
                <div>
                  <Badge variant="outline" className="w-fit mb-4 bg-primary/10 text-primary border-primary/30">
                    <div className="flex items-center gap-2">
                      {service.id === 1 && <Settings className="h-4 w-4" />}
                      {service.id === 2 && <Search className="h-4 w-4" />}
                      {service.id === 3 && <Link className="h-4 w-4" />}
                      {service.id === 4 && <MapPin className="h-4 w-4" />}
                      <span>Service {service.id}</span>
                    </div>
                  </Badge>
                  <h2 className="text-4xl lg:text-5xl font-bold text-foreground mb-6">
                    {service.title}
                  </h2>
                  <p className="text-xl text-muted-foreground leading-relaxed mb-8">
                    {service.content.overview}
                  </p>
                </div>
                
                <div className="space-y-6">
                  <h3 className="text-2xl font-bold text-foreground">Our Comprehensive Process:</h3>
                  <div className="space-y-4">
                    {service.content.steps.map((step, stepIndex) => (
                      <MotionWrapper key={stepIndex} direction="left" delay={stepIndex * 0.1} duration={0.8}>
                        <div className="flex items-start gap-4 p-4 bg-card rounded-xl shadow-light border">
                          <CheckCircle className="h-6 w-6 text-primary mt-0.5 flex-shrink-0" />
                          <span className="text-muted-foreground font-medium">{step}</span>
                        </div>
                      </MotionWrapper>
                    ))}
                  </div>
                </div>
              </MotionWrapper>
              
              <MotionWrapper 
                direction={service.imagePosition === 'left' ? 'left' : 'right'} 
                duration={1.2} 
                delay={0.3}
                className={`${service.imagePosition === 'left' ? 'lg:col-start-1 lg:row-start-1' : ''}`}
              >
                {service.imagePosition === 'right' ? (
                  <div className="relative">
                    <img 
                      src={`https://images.unsplash.com/photo-${index % 2 === 0 ? '1460925895917-adf69b5a3cf6' : '1551288049-4f5e3e82d7b0'}?auto=format&fit=crop&w=800&h=600`}
                      alt={service.title}
                      className="w-full rounded-2xl shadow-elegant"
                      width="800"
                      height="600"
                    />
                    <div className="absolute -bottom-8 -left-8 bg-card p-6 rounded-xl shadow-elegant border">
                      <div className="flex items-center gap-3">
                        <Award className="h-6 w-6 text-primary" />
                        <div>
                          <div className="font-bold text-foreground">Expert Service</div>
                          <div className="text-sm text-muted-foreground">Professional Results</div>
                        </div>
                      </div>
                    </div>
                  </div>
                ) : (
                  <div className="flex justify-center">
                    <div className="w-96 h-96 relative">
                      <div className="absolute inset-0 bg-gradient-to-br from-primary/20 via-accent/20 to-brand-orange/20 rounded-full animate-pulse-glow"></div>
                      <div className="absolute inset-8 bg-gradient-to-br from-primary/30 to-accent/30 rounded-full animate-float flex items-center justify-center">
                        <div className="w-48 h-48 bg-gradient-to-br from-primary to-brand-orange rounded-full flex items-center justify-center shadow-glow">
                          {service.id === 2 && <Search className="h-24 w-24 text-white" />}
                          {service.id === 4 && <MapPin className="h-24 w-24 text-white" />}
                        </div>
                      </div>
                    </div>
                  </div>
                )}
              </MotionWrapper>
            </div>
          </div>
        </section>
      ))}

      {/* Pricing Tables */}
      <MotionWrapper direction="top" duration={1.2}>
        <section className="py-20 bg-gradient-seo-light">
          <div className="container mx-auto px-4">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold text-foreground mb-4">Choose Your SEO Package</h2>
              <p className="text-xl text-muted-foreground">Transparent pricing with no hidden costs</p>
            </div>
            
            <div className="space-y-16">
              {seoServices.map((service, serviceIndex) => (
                <MotionWrapper key={service.id} direction="bottom" delay={serviceIndex * 0.2}>
                  <div>
                    <h3 className="text-2xl font-bold text-center text-foreground mb-8">{service.title} Packages</h3>
                    <div className="grid md:grid-cols-3 gap-8">
                      {service.pricing.map((plan, planIndex) => (
                        <MotionWrapper key={planIndex} direction="bottom" delay={planIndex * 0.1}>
                          <Card className={`relative overflow-hidden shadow-elegant border-2 ${planIndex === 1 ? 'border-primary scale-105' : 'border-border'} bg-card hover:shadow-glow transition-all duration-300`}>
                            {planIndex === 1 && (
                              <div className="absolute top-0 left-0 right-0 bg-primary text-white text-center py-2 text-sm font-bold">
                                Most Popular
                              </div>
                            )}
                            <CardHeader className={`text-center ${planIndex === 1 ? 'pt-12' : 'pt-6'}`}>
                              <CardTitle className="text-2xl font-bold">{plan.plan}</CardTitle>
                              <div className="text-4xl font-bold text-primary">{plan.price}</div>
                              <p className="text-muted-foreground">Per month</p>
                            </CardHeader>
                            <CardContent>
                              <ScrollArea className="h-64">
                                <div className="space-y-3">
                                  {plan.features.map((feature, featureIndex) => (
                                    <div key={featureIndex} className="flex items-start gap-3">
                                      <CheckCircle className="h-5 w-5 text-primary mt-0.5 flex-shrink-0" />
                                      <span className="text-sm text-muted-foreground">{feature}</span>
                                    </div>
                                  ))}
                                </div>
                              </ScrollArea>
                              <Button className={`w-full mt-6 ${planIndex === 1 ? 'bg-primary hover:bg-primary/90' : 'variant-outline'}`}>
                                Choose {plan.plan}
                              </Button>
                            </CardContent>
                          </Card>
                        </MotionWrapper>
                      ))}
                    </div>
                  </div>
                </MotionWrapper>
              ))}
            </div>
          </div>
        </section>
      </MotionWrapper>

      {/* Real-Time Results */}
      <MotionWrapper direction="bottom" duration={1.2}>
        <section className="py-20 bg-gradient-seo-accent">
          <div className="container mx-auto px-4">
            <MotionWrapper direction="top" delay={0.2}>
              <div className="text-center mb-16">
                <h2 className="text-4xl font-bold text-foreground mb-4">Real Client Results</h2>
                <p className="text-xl text-muted-foreground">See how we've transformed businesses through strategic SEO</p>
              </div>
            </MotionWrapper>
            
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {results.map((result, index) => (
                <MotionWrapper key={index} direction="bottom" delay={index * 0.1} duration={1}>
                  <Card className="bg-card shadow-elegant border hover:shadow-glow transition-all duration-300">
                    <CardContent className="p-8 text-center">
                      <div className="mb-4">
                        <Badge variant="outline" className="bg-primary/10 text-primary border-primary/30">
                          {result.industry}
                        </Badge>
                      </div>
                      <h3 className="font-bold text-lg text-foreground mb-4">{result.website}</h3>
                      <div className="space-y-4">
                        <div className="flex justify-between items-center">
                          <span className="text-muted-foreground">Before:</span>
                          <span className="font-bold text-destructive">{result.before}</span>
                        </div>
                        <div className="flex justify-between items-center">
                          <span className="text-muted-foreground">After:</span>
                          <span className="font-bold text-primary">{result.after}</span>
                        </div>
                        <div className="pt-4 border-t">
                          <div className="flex items-center justify-center gap-2">
                            <TrendingUp className="h-5 w-5 text-primary" />
                            <span className="font-bold text-primary">{result.improvement}</span>
                          </div>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                </MotionWrapper>
              ))}
            </div>
          </div>
        </section>
      </MotionWrapper>

      {/* FAQ Section */}
      <MotionWrapper direction="bottom" duration={1.2}>
        <section className="py-20 bg-gradient-seo-light">
          <div className="container mx-auto px-4">
            <MotionWrapper direction="top" delay={0.2}>
              <div className="text-center mb-16">
                <h2 className="text-4xl font-bold text-foreground mb-4">Frequently Asked Questions</h2>
                <p className="text-xl text-muted-foreground">Everything you need to know about our SEO services</p>
              </div>
            </MotionWrapper>
            
            <div className="max-w-4xl mx-auto">
              <Accordion type="single" collapsible className="space-y-4">
                {faqs.map((faq, index) => (
                  <MotionWrapper key={index} direction="left" delay={index * 0.1} duration={0.8}>
                    <AccordionItem value={`item-${index}`} className="bg-card border shadow-light rounded-xl px-6 hover:shadow-elegant transition-all duration-300">
                      <AccordionTrigger className="text-left font-semibold text-foreground py-6">
                        {faq.question}
                      </AccordionTrigger>
                      <AccordionContent className="text-muted-foreground pb-6 leading-relaxed">
                        {faq.answer}
                      </AccordionContent>
                    </AccordionItem>
                  </MotionWrapper>
                ))}
              </Accordion>
            </div>
          </div>
        </section>
      </MotionWrapper>

      {/* Bottom Contact Form */}
      <MotionWrapper direction="bottom" duration={1}>
        <section className="py-20 bg-gradient-to-br from-primary to-brand-orange">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto text-center">
              <MotionWrapper direction="top" delay={0.2}>
                <h2 className="text-4xl font-bold text-white mb-4">
                  Ready to Dominate Search Results?
                </h2>
                <p className="text-white/90 text-xl mb-8">
                  Get started with a free SEO audit and see how we can transform your online presence
                </p>
              </MotionWrapper>
              
              <MotionWrapper direction="bottom" delay={0.4}>
                <div className="bg-white/15 backdrop-blur-md rounded-3xl p-8 border border-white/20">
                  <form onSubmit={handleAnalyze} className="space-y-6">
                    <div className="grid md:grid-cols-2 gap-6">
                      <input
                        type="text"
                        placeholder="Your Name"
                        className="px-6 py-4 rounded-xl border border-white/30 bg-white/20 text-white placeholder-white/70 focus:outline-none focus:ring-2 focus:ring-white/50 transition-all"
                        required
                      />
                      <input
                        type="email"
                        placeholder="Your Email"
                        className="px-6 py-4 rounded-xl border border-white/30 bg-white/20 text-white placeholder-white/70 focus:outline-none focus:ring-2 focus:ring-white/50 transition-all"
                        required
                      />
                    </div>
                    <input
                      type="url"
                      placeholder="Your Website URL"
                      className="w-full px-6 py-4 rounded-xl border border-white/30 bg-white/20 text-white placeholder-white/70 focus:outline-none focus:ring-2 focus:ring-white/50 transition-all"
                      required
                    />
                    <Button 
                      type="submit" 
                      size="lg" 
                      className="w-full md:w-auto bg-white text-primary hover:bg-white/95 px-12 py-4 font-bold text-lg rounded-xl"
                    >
                      Start My SEO Journey
                    </Button>
                  </form>
                </div>
              </MotionWrapper>
            </div>
          </div>
        </section>
      </MotionWrapper>

      <Footer />
      <ChatBot />
      <WhatsAppChat />
      <ScrollToTop />
    </div>
  );
};

export default SEOOptimization;
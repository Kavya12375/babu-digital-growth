import Header from "@/components/Header";
import Footer from "@/components/Footer";
import ChatBot from "@/components/ChatBot";
import WhatsAppChat from "@/components/WhatsAppChat";
import ScrollToTop from "@/components/ScrollToTop";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { ScrollArea } from "@/components/ui/scroll-area";
import { CheckCircle, TrendingUp, Search, Globe, Target, Award, ArrowRight, Star, BarChart3 } from "lucide-react";
import { useState } from "react";

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
    // Handle form submission
    console.log("Analyzing website:", formData);
  };

  const seoServices = [
    {
      id: 1,
      title: "Technical SEO",
      description: "Optimize your website's technical foundation for better search engine crawling and indexing.",
      imagePosition: "right",
      content: {
        overview: "Technical SEO focuses on improving the technical aspects of your website to enhance its visibility in search engines. It involves optimizing site speed, mobile responsiveness, crawlability, and site architecture.",
        steps: [
          "Website audit and technical analysis",
          "Site speed optimization and Core Web Vitals improvement",
          "Mobile-first indexing optimization",
          "XML sitemap creation and submission",
          "Robot.txt optimization",
          "Schema markup implementation",
          "SSL certificate installation",
          "URL structure optimization"
        ]
      },
      pricing: [
        { plan: "Basic", price: "₹15,000", features: ["Site audit", "Speed optimization", "Mobile optimization", "Basic schema markup"] },
        { plan: "Standard", price: "₹25,000", features: ["Everything in Basic", "Advanced schema markup", "Technical fixes", "Monthly reports"] },
        { plan: "Premium", price: "₹40,000", features: ["Everything in Standard", "Advanced technical SEO", "Priority support", "Weekly monitoring"] }
      ]
    },
    {
      id: 2,
      title: "On-Page SEO",
      description: "Optimize individual web pages to rank higher and earn more relevant traffic in search engines.",
      imagePosition: "left",
      content: {
        overview: "On-Page SEO involves optimizing individual web pages to improve their search engine rankings. This includes optimizing content, HTML source code, and site architecture.",
        steps: [
          "Keyword research and analysis",
          "Title tag and meta description optimization",
          "Header tag (H1, H2, H3) optimization",
          "Content optimization and keyword integration",
          "Internal linking strategy",
          "Image optimization and alt text",
          "URL optimization",
          "User experience improvements"
        ]
      },
      pricing: [
        { plan: "Basic", price: "₹12,000", features: ["5 pages optimization", "Keyword research", "Meta tags optimization", "Basic content audit"] },
        { plan: "Standard", price: "₹22,000", features: ["15 pages optimization", "Advanced keyword research", "Content optimization", "Internal linking"] },
        { plan: "Premium", price: "₹35,000", features: ["Unlimited pages", "Comprehensive optimization", "Content creation", "Advanced analytics"] }
      ]
    },
    {
      id: 3,
      title: "Off-Page SEO",
      description: "Build authority and trust through external optimization strategies and link building.",
      imagePosition: "right",
      content: {
        overview: "Off-Page SEO focuses on activities outside your website to improve its authority and relevance. This primarily involves link building, social media marketing, and brand mentions.",
        steps: [
          "Competitor backlink analysis",
          "High-quality link building strategy",
          "Guest posting and content outreach",
          "Social media optimization",
          "Local citations and directory submissions",
          "Brand mention monitoring",
          "Influencer outreach campaigns",
          "Online reputation management"
        ]
      },
      pricing: [
        { plan: "Basic", price: "₹18,000", features: ["10 quality backlinks", "Basic outreach", "Social media setup", "Monthly reporting"] },
        { plan: "Standard", price: "₹30,000", features: ["25 quality backlinks", "Guest posting", "Social media management", "Citation building"] },
        { plan: "Premium", price: "₹50,000", features: ["50+ quality backlinks", "Advanced outreach", "PR campaigns", "Comprehensive strategy"] }
      ]
    },
    {
      id: 4,
      title: "Local SEO",
      description: "Optimize your online presence to attract more business from relevant local searches.",
      imagePosition: "left",
      content: {
        overview: "Local SEO helps businesses promote their products and services to local customers. It's essential for businesses that serve customers in specific geographic areas.",
        steps: [
          "Google My Business optimization",
          "Local keyword research and optimization",
          "NAP (Name, Address, Phone) consistency",
          "Local citation building",
          "Customer review management",
          "Local content creation",
          "Location-based landing pages",
          "Local link building strategies"
        ]
      },
      pricing: [
        { plan: "Basic", price: "₹10,000", features: ["GMB optimization", "5 local citations", "Review management setup", "Local keyword research"] },
        { plan: "Standard", price: "₹20,000", features: ["Everything in Basic", "15 local citations", "Local content creation", "Monthly GMB posts"] },
        { plan: "Premium", price: "₹32,000", features: ["Everything in Standard", "Advanced local strategy", "Reputation management", "Local PR campaigns"] }
      ]
    }
  ];

  const results = [
    { before: "Position 46", after: "Position 1", website: "TechStartup.com", improvement: "45 positions up" },
    { before: "Position 23", after: "Position 3", website: "LocalBusiness.in", improvement: "20 positions up" },
    { before: "Position 67", after: "Position 8", website: "OnlineStore.com", improvement: "59 positions up" },
    { before: "Position 35", after: "Position 2", website: "ServiceProvider.in", improvement: "33 positions up" }
  ];

  const faqs = [
    {
      question: "How long does it take to see SEO results?",
      answer: "SEO results typically start showing within 3-6 months, with significant improvements visible in 6-12 months. The timeline depends on factors like competition, current website state, and the intensity of optimization efforts."
    },
    {
      question: "What's the difference between Technical SEO and On-Page SEO?",
      answer: "Technical SEO focuses on the backend structure of your website (speed, crawlability, indexing), while On-Page SEO deals with optimizing individual page content and HTML elements for specific keywords."
    },
    {
      question: "Why is Local SEO important for my business?",
      answer: "Local SEO helps your business appear in local search results when customers in your area search for your services. It's crucial for attracting nearby customers and increasing foot traffic to physical locations."
    },
    {
      question: "How do you measure SEO success?",
      answer: "We track various metrics including keyword rankings, organic traffic growth, conversion rates, click-through rates, and overall search visibility. Regular reports show progress and ROI."
    },
    {
      question: "Can you guarantee first-page rankings?",
      answer: "While we can't guarantee specific rankings (as search engines control this), we use proven strategies and best practices that have consistently delivered top rankings for our clients across various industries."
    },
    {
      question: "Do you follow white-hat SEO practices?",
      answer: "Absolutely! We strictly follow Google's guidelines and use only white-hat SEO techniques. This ensures long-term, sustainable results without risk of penalties."
    }
  ];

  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      {/* Hero Section */}
      <section className="pt-20 pb-16 bg-gradient-to-br from-primary/5 via-background to-accent/5">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
              <Badge variant="secondary" className="w-fit">
                <Search className="h-4 w-4 mr-2" />
                SEO Optimization Services
              </Badge>
              <h1 className="text-4xl lg:text-5xl font-bold text-foreground leading-tight">
                Dominate Search Results with 
                <span className="text-primary"> Expert SEO</span>
              </h1>
              <p className="text-lg text-muted-foreground leading-relaxed">
                Transform your online visibility with our comprehensive SEO strategies. From technical optimization to content enhancement, we deliver measurable results that drive organic traffic and boost your business growth.
              </p>
              <div className="flex flex-wrap gap-4">
                <div className="flex items-center gap-2">
                  <CheckCircle className="h-5 w-5 text-primary" />
                  <span className="text-sm">Proven Results</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle className="h-5 w-5 text-primary" />
                  <span className="text-sm">White-Hat Techniques</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle className="h-5 w-5 text-primary" />
                  <span className="text-sm">24/7 Support</span>
                </div>
              </div>
              <Button size="lg" className="group">
                Get Free SEO Audit
                <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
              </Button>
            </div>
            <div className="relative">
              <div className="aspect-video rounded-lg overflow-hidden shadow-2xl">
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
              <div className="absolute -bottom-6 -right-6 bg-primary text-primary-foreground p-4 rounded-lg shadow-lg">
                <div className="flex items-center gap-2">
                  <TrendingUp className="h-5 w-5" />
                  <span className="font-semibold">300% Traffic Increase</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Website Analysis Form */}
      <section className="py-16 bg-gradient-to-r from-blue-500 to-green-500">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold text-white text-center mb-8">
              Get Your Free Website SEO Analysis
            </h2>
            <form onSubmit={handleAnalyze} className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 border border-white/20">
              <div className="grid grid-cols-1 md:grid-cols-4 gap-4 mb-6">
                <input
                  type="text"
                  name="name"
                  placeholder="Enter Name Here"
                  value={formData.name}
                  onChange={handleInputChange}
                  className="px-4 py-3 rounded-lg border border-white/30 bg-white/20 text-white placeholder-white/70 focus:outline-none focus:ring-2 focus:ring-white/50"
                  required
                />
                <input
                  type="email"
                  name="email"
                  placeholder="Enter Email Here"
                  value={formData.email}
                  onChange={handleInputChange}
                  className="px-4 py-3 rounded-lg border border-white/30 bg-white/20 text-white placeholder-white/70 focus:outline-none focus:ring-2 focus:ring-white/50"
                  required
                />
                <input
                  type="tel"
                  name="phone"
                  placeholder="Enter Phone Number"
                  value={formData.phone}
                  onChange={handleInputChange}
                  className="px-4 py-3 rounded-lg border border-white/30 bg-white/20 text-white placeholder-white/70 focus:outline-none focus:ring-2 focus:ring-white/50"
                  required
                />
                <input
                  type="url"
                  name="website"
                  placeholder="Enter Website"
                  value={formData.website}
                  onChange={handleInputChange}
                  className="px-4 py-3 rounded-lg border border-white/30 bg-white/20 text-white placeholder-white/70 focus:outline-none focus:ring-2 focus:ring-white/50"
                  required
                />
              </div>
              <div className="flex items-start gap-3 mb-6">
                <input
                  type="checkbox"
                  name="consent"
                  id="consent"
                  checked={formData.consent}
                  onChange={handleInputChange}
                  className="mt-1 rounded border-white/30"
                  required
                />
                <label htmlFor="consent" className="text-white text-sm leading-relaxed">
                  Please check the box to communicate via SMS or Email (Terms & Conditions & Privacy Policy) - Carrier charges may apply for SMS. Reply STOP or UNSUBSCRIBE to STOP to unsubscribe anytime
                </label>
              </div>
              <div className="text-center">
                <Button 
                  type="submit" 
                  size="lg" 
                  className="bg-white text-blue-600 hover:bg-white/90 px-8 py-3 font-semibold"
                >
                  Analyze
                </Button>
              </div>
            </form>
          </div>
        </div>
      </section>

      {/* SEO Services Sections */}
      {seoServices.map((service, index) => (
        <section key={service.id} className={`py-16 ${index % 2 === 0 ? 'bg-background' : 'bg-muted/30'}`}>
          <div className="container mx-auto px-4">
            <div className={`grid lg:grid-cols-2 gap-12 items-center ${service.imagePosition === 'left' ? 'lg:grid-flow-col-dense' : ''}`}>
              <div className={`space-y-6 ${service.imagePosition === 'left' ? 'lg:col-start-2' : ''}`}>
                <Badge variant="outline" className="w-fit">
                  Service {service.id}
                </Badge>
                <h2 className="text-3xl lg:text-4xl font-bold text-foreground">
                  {service.title}
                </h2>
                <p className="text-lg text-muted-foreground">
                  {service.content.overview}
                </p>
                <div className="space-y-4">
                  <h3 className="text-xl font-semibold text-foreground">Our Process:</h3>
                  <div className="grid gap-3">
                    {service.content.steps.map((step, stepIndex) => (
                      <div key={stepIndex} className="flex items-start gap-3">
                        <CheckCircle className="h-5 w-5 text-primary mt-0.5 flex-shrink-0" />
                        <span className="text-muted-foreground">{step}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
              <div className={`${service.imagePosition === 'left' ? 'lg:col-start-1 lg:row-start-1' : ''}`}>
                {service.imagePosition === 'right' ? (
                  <div className="relative">
                    <img 
                      src={`https://images.unsplash.com/photo-${index % 2 === 0 ? '1461749280684-dccba630e2f6' : '1487058792275-0ad4aaf24ca7'}?auto=format&fit=crop&w=800&h=600`}
                      alt={service.title}
                      className="w-full rounded-lg shadow-2xl"
                      width="800"
                      height="600"
                    />
                    <div className="absolute -bottom-6 -left-6 bg-card p-4 rounded-lg shadow-lg border">
                      <div className="flex items-center gap-2">
                        <Award className="h-5 w-5 text-primary" />
                        <span className="font-semibold">Expert Service</span>
                      </div>
                    </div>
                  </div>
                ) : (
                  <div className="flex justify-center">
                    <div className="w-96 h-96 bg-gradient-to-br from-primary/20 to-accent/20 rounded-full flex items-center justify-center">
                      <div className="w-64 h-64 bg-gradient-to-br from-primary to-accent rounded-full flex items-center justify-center animate-pulse">
                        <Globe className="h-32 w-32 text-white" />
                      </div>
                    </div>
                  </div>
                )}
              </div>
            </div>
          </div>
        </section>
      ))}

      {/* Pricing Tables */}
      <section className="py-16 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl lg:text-4xl font-bold text-foreground mb-4">
              SEO Service Pricing
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Choose the perfect SEO package for your business needs. All prices are in Indian Rupees.
            </p>
          </div>
          
          <div className="grid lg:grid-cols-2 xl:grid-cols-4 gap-6">
            {seoServices.map((service) => (
              <Card key={service.id} className="overflow-hidden">
                <CardHeader className="pb-4">
                  <CardTitle className="text-xl">{service.title}</CardTitle>
                  <p className="text-sm text-muted-foreground">{service.description}</p>
                </CardHeader>
                <CardContent className="p-0">
                  <ScrollArea className="h-80 px-6">
                    <div className="space-y-4 pb-6">
                      {service.pricing.map((plan, index) => (
                        <div key={index} className="border rounded-lg p-4 hover:shadow-md transition-shadow">
                          <div className="flex justify-between items-center mb-3">
                            <h4 className="font-semibold">{plan.plan}</h4>
                            <span className="text-lg font-bold text-primary">{plan.price}</span>
                          </div>
                          <ul className="space-y-2">
                            {plan.features.map((feature, featureIndex) => (
                              <li key={featureIndex} className="text-sm flex items-start gap-2">
                                <CheckCircle className="h-4 w-4 text-primary mt-0.5 flex-shrink-0" />
                                {feature}
                              </li>
                            ))}
                          </ul>
                        </div>
                      ))}
                    </div>
                  </ScrollArea>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Real-time Results */}
      <section className="py-16 bg-background">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl lg:text-4xl font-bold text-foreground mb-4">
              Real Results from Real Clients
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              See how our SEO strategies have transformed our clients' search rankings and business growth.
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {results.map((result, index) => (
              <Card key={index} className="text-center p-6 hover:shadow-lg transition-shadow">
                <div className="space-y-4">
                  <div className="flex justify-center">
                    <BarChart3 className="h-12 w-12 text-primary" />
                  </div>
                  <h3 className="font-semibold text-lg">{result.website}</h3>
                  <div className="space-y-2">
                    <div className="text-sm text-muted-foreground">SERP Position</div>
                    <div className="flex items-center justify-center gap-4">
                      <div className="text-red-500 font-medium">{result.before}</div>
                      <ArrowRight className="h-4 w-4 text-muted-foreground" />
                      <div className="text-green-500 font-bold">{result.after}</div>
                    </div>
                    <Badge variant="secondary" className="text-primary">
                      {result.improvement}
                    </Badge>
                  </div>
                  <div className="flex justify-center">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} className="h-4 w-4 fill-yellow-400 text-yellow-400" />
                    ))}
                  </div>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-16 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl lg:text-4xl font-bold text-foreground mb-4">
                Frequently Asked Questions
              </h2>
              <p className="text-lg text-muted-foreground">
                Get answers to common questions about our SEO services.
              </p>
            </div>
            
            <Accordion type="single" collapsible className="w-full">
              {faqs.map((faq, index) => (
                <AccordionItem key={index} value={`item-${index}`}>
                  <AccordionTrigger className="text-left font-medium">
                    {faq.question}
                  </AccordionTrigger>
                  <AccordionContent className="text-muted-foreground">
                    {faq.answer}
                  </AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </div>
        </div>
      </section>

      {/* Bottom Form */}
      <section className="py-16 bg-primary">
        <div className="container mx-auto px-4">
          <div className="max-w-2xl mx-auto text-center">
            <h2 className="text-3xl font-bold text-primary-foreground mb-4">
              Ready to Boost Your Rankings?
            </h2>
            <p className="text-lg text-primary-foreground/80 mb-8">
              Get started with our expert SEO services today and see the difference.
            </p>
            <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 border border-white/20">
              <form onSubmit={handleAnalyze} className="space-y-4">
                <div className="grid md:grid-cols-2 gap-4">
                  <input
                    type="text"
                    placeholder="Your Name"
                    className="px-4 py-3 rounded-lg border border-white/30 bg-white/20 text-white placeholder-white/70 focus:outline-none focus:ring-2 focus:ring-white/50"
                    required
                  />
                  <input
                    type="email"
                    placeholder="Your Email"
                    className="px-4 py-3 rounded-lg border border-white/30 bg-white/20 text-white placeholder-white/70 focus:outline-none focus:ring-2 focus:ring-white/50"
                    required
                  />
                </div>
                <input
                  type="url"
                  placeholder="Your Website URL"
                  className="w-full px-4 py-3 rounded-lg border border-white/30 bg-white/20 text-white placeholder-white/70 focus:outline-none focus:ring-2 focus:ring-white/50"
                  required
                />
                <Button type="submit" variant="secondary" size="lg" className="w-full">
                  Get Free SEO Consultation
                </Button>
              </form>
            </div>
          </div>
        </div>
      </section>

      <Footer />
      <ChatBot />
      <WhatsAppChat />
      <ScrollToTop />
    </div>
  );
};

export default SEOOptimization;
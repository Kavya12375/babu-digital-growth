import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";

const FAQSection = () => {
  const faqs = [
    {
      question: "How long does it take to see results from digital marketing?",
      answer: "Results vary depending on the service and your industry. SEO typically shows initial improvements in 3-6 months, while paid advertising can generate immediate traffic. Social media growth usually takes 2-4 months to build momentum. We provide monthly reports to track progress and adjust strategies accordingly."
    },
    {
      question: "What makes Babu Digital Media different from other agencies?",
      answer: "Our data-driven approach, transparent reporting, and personalized strategies set us apart. We don't use one-size-fits-all solutions. Instead, we create custom strategies based on your specific business goals, target audience, and market conditions. Plus, you get dedicated account management and 24/7 support."
    },
    {
      question: "Do you work with businesses in all industries?",
      answer: "Yes, we work with businesses across various industries including e-commerce, healthcare, technology, finance, education, and more. Our team has experience adapting digital marketing strategies to meet the unique challenges and regulations of different sectors."
    },
    {
      question: "What's included in your monthly reports?",
      answer: "Our comprehensive monthly reports include website traffic analysis, conversion tracking, keyword rankings, social media performance, ad campaign metrics, ROI analysis, and actionable recommendations for the next month. We also provide quarterly strategy reviews and annual planning sessions."
    },
    {
      question: "Can I upgrade or downgrade my package anytime?",
      answer: "Absolutely! We understand that business needs change. You can upgrade your package at any time to access more services. For downgrades, we require 30 days notice to ensure a smooth transition and maintain service quality."
    },
    {
      question: "Do you provide training for our internal team?",
      answer: "Yes, we offer training sessions for your internal team as part of our Premium package, or as an add-on service for other packages. This includes training on analytics tools, content management systems, social media best practices, and basic SEO principles."
    },
    {
      question: "What if I'm not satisfied with the results?",
      answer: "We stand behind our work with a satisfaction guarantee. If you're not seeing the agreed-upon results within the first 90 days, we'll work with you to adjust the strategy at no additional cost. We're committed to your success and will go the extra mile to ensure you achieve your goals."
    },
    {
      question: "How do you ensure the security of our business data?",
      answer: "We take data security seriously. All client data is protected with enterprise-grade encryption, secure servers, and strict access controls. Our team signs NDAs, and we're compliant with GDPR and other data protection regulations. We also conduct regular security audits and backups."
    }
  ];

  return (
    <section id="faq" className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-12 items-start">
            {/* Left Side - Animation Placeholder */}
            <div className="space-y-6">
              <div className="text-center lg:text-left">
                <h2 className="text-3xl md:text-4xl font-bold text-primary mb-4">
                  Frequently Asked <span className="text-brand-orange">Questions</span>
                </h2>
                <p className="text-xl text-muted-foreground">
                  Get answers to the most common questions about our digital marketing services and processes.
                </p>
              </div>
              
              {/* Animated Support Illustration */}
              <div className="relative">
                <div className="w-full h-80 bg-gradient-primary rounded-3xl flex items-center justify-center relative overflow-hidden">
                  {/* Background Pattern */}
                  <div className="absolute inset-0 opacity-10">
                    <div className="absolute top-10 left-10 w-20 h-20 bg-white rounded-full animate-float"></div>
                    <div className="absolute bottom-10 right-10 w-16 h-16 bg-white rounded-full animate-float animation-delay-1000"></div>
                    <div className="absolute top-1/2 right-20 w-12 h-12 bg-white rounded-full animate-bounce-gentle"></div>
                  </div>
                  
                  {/* Central Content */}
                  <div className="text-center text-white z-10">
                    <div className="w-24 h-24 bg-white/20 rounded-full flex items-center justify-center mx-auto mb-4 animate-bounce-gentle">
                      <div className="w-12 h-12 bg-white rounded-full flex items-center justify-center">
                        <span className="text-2xl">?</span>
                      </div>
                    </div>
                    <h3 className="text-2xl font-bold mb-2">Need More Help?</h3>
                    <p className="text-white/90">Our support team is here 24/7</p>
                  </div>
                </div>
                
                {/* Floating Elements */}
                <div className="absolute -top-4 -right-4 w-16 h-16 bg-brand-orange rounded-full flex items-center justify-center animate-pulse-glow">
                  <span className="text-white font-bold">24/7</span>
                </div>
              </div>
            </div>

            {/* Right Side - FAQ Accordion */}
            <div className="space-y-4">
              <Accordion type="single" collapsible className="space-y-4">
                {faqs.map((faq, index) => (
                  <AccordionItem 
                    key={index} 
                    value={`item-${index}`}
                    className="bg-muted/30 rounded-lg border border-border px-6 py-2 hover:shadow-card transition-all duration-300"
                  >
                    <AccordionTrigger className="text-left font-semibold text-primary hover:text-brand-orange transition-colors">
                      {faq.question}
                    </AccordionTrigger>
                    <AccordionContent className="text-muted-foreground leading-relaxed">
                      {faq.answer}
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

export default FAQSection;
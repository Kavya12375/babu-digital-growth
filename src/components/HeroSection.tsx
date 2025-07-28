import { Button } from "@/components/ui/button";
import { Dialog, DialogContent, DialogTrigger } from "@/components/ui/dialog";
import { ArrowRight, TrendingUp } from "lucide-react";
import heroBackground from "@/assets/hero-bg.webp";
import { ScheduleModal } from "./ScheduleModal";

const HeroSection = () => {
  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Optimized Background Image */}
      <img 
        src={heroBackground}
        alt="Digital marketing background"
        className="absolute inset-0 w-full h-full object-cover"
        width="1920"
        height="1080"
        loading="eager"
      />
      <div className="absolute inset-0 bg-gradient-hero"></div>

      {/* Content */}
      <div className="relative z-10 container mx-auto px-4 py-20">
        <div className="max-w-4xl mx-auto text-center text-white">
          {/* Badge */}
          <div className="inline-flex items-center px-4 py-2 rounded-full bg-white/10 backdrop-blur-sm border border-white/20 mb-6 animate-fade-in">
            <TrendingUp className="h-4 w-4 mr-2 text-brand-orange" />
            <span className="text-sm font-medium">Trusted by 500+ Businesses</span>
          </div>

          {/* Main Headline */}
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold mb-6 animate-fade-in animation-delay-200">
            Grow Your Business with 
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-brand-orange to-yellow-400">
              {" "}Digital Excellence
            </span>
          </h1>

          {/* Subtext */}
          <p className="text-xl md:text-2xl text-white/90 mb-8 max-w-3xl mx-auto leading-relaxed animate-fade-in animation-delay-400">
            Transform your online presence with our cutting-edge digital marketing strategies. 
            Drive traffic, boost conversions, and dominate your market.
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center animate-fade-in animation-delay-600">
            <Dialog>
              <DialogTrigger asChild>
                <Button variant="hero" size="lg" className="text-lg px-8 py-6 group">
                  Get Started Today
                  <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
                </Button>
              </DialogTrigger>
              <DialogContent className="max-w-md">
                <ScheduleModal />
              </DialogContent>
            </Dialog>
          </div>

          {/* Stats */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-16 animate-fade-in animation-delay-800">
            <div className="text-center">
              <div className="text-3xl md:text-4xl font-bold text-brand-orange mb-2">500+</div>
              <div className="text-white/80">Happy Clients</div>
            </div>
            <div className="text-center">
              <div className="text-3xl md:text-4xl font-bold text-brand-orange mb-2">98%</div>
              <div className="text-white/80">Success Rate</div>
            </div>
            <div className="text-center">
              <div className="text-3xl md:text-4xl font-bold text-brand-orange mb-2">24/7</div>
              <div className="text-white/80">Support</div>
            </div>
          </div>
        </div>
      </div>

      {/* Floating Elements */}
      <div className="absolute top-20 left-10 w-20 h-20 bg-brand-orange/20 rounded-full animate-float"></div>
      <div className="absolute bottom-20 right-10 w-16 h-16 bg-white/10 rounded-full animate-float animation-delay-1000"></div>
      <div className="absolute top-1/2 left-20 w-12 h-12 bg-brand-orange/30 rounded-full animate-bounce-gentle"></div>
    </section>
  );
};

export default HeroSection;
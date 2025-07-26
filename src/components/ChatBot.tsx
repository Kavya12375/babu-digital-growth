import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { MessageCircle, X, Bot, Package, DollarSign, Info, ArrowRight } from "lucide-react";
import { Dialog, DialogContent, DialogTrigger } from "@/components/ui/dialog";
import { ScheduleModal } from "./ScheduleModal";

const ChatBot = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [currentView, setCurrentView] = useState<'main' | 'services' | 'pricing' | 'about'>('main');

  const chatOptions = {
    main: [
      { id: 'services', label: 'Our Services', icon: Package, action: () => setCurrentView('services') },
      { id: 'pricing', label: 'Pricing', icon: DollarSign, action: () => setCurrentView('pricing') },
      { id: 'about', label: 'About Babu Digital Media', icon: Info, action: () => setCurrentView('about') },
    ],
    services: [
      { id: 'seo', label: 'SEO Optimization', action: () => window.open('https://aesthetic-sherbet-152275.netlify.app/', '_blank') },
      { id: 'facebook', label: 'Facebook Growth Ads', action: () => window.open('https://earnest-sawine-814933.netlify.app/', '_blank') },
      { id: 'instagram', label: 'Instagram Growth Ads', action: () => window.open('https://earnest-sawine-814933.netlify.app/', '_blank') },
      { id: 'back', label: '← Back to Main Menu', action: () => setCurrentView('main') },
    ],
    pricing: [
      { id: 'basic', label: 'Basic Package - $499/month', action: () => document.getElementById('packages')?.scrollIntoView({ behavior: 'smooth' }) },
      { id: 'standard', label: 'Standard Package - $999/month', action: () => document.getElementById('packages')?.scrollIntoView({ behavior: 'smooth' }) },
      { id: 'premium', label: 'Premium Package - $1999/month', action: () => document.getElementById('packages')?.scrollIntoView({ behavior: 'smooth' }) },
      { id: 'back', label: '← Back to Main Menu', action: () => setCurrentView('main') },
    ],
    about: [
      { id: 'mission', label: 'Our Mission & Vision', action: () => document.getElementById('about')?.scrollIntoView({ behavior: 'smooth' }) },
      { id: 'team', label: 'Meet Our Team', action: () => document.getElementById('about')?.scrollIntoView({ behavior: 'smooth' }) },
      { id: 'contact', label: 'Contact Information', action: () => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' }) },
      { id: 'back', label: '← Back to Main Menu', action: () => setCurrentView('main') },
    ]
  };

  const getGreeting = () => {
    const hour = new Date().getHours();
    if (hour < 12) return "Good morning! 🌅";
    if (hour < 18) return "Good afternoon! ☀️";
    return "Good evening! 🌙";
  };

  return (
    <>
      {/* Chat Toggle Button */}
      <div className="fixed bottom-6 left-6 z-50">
        <Button
          onClick={() => setIsOpen(!isOpen)}
          className="w-14 h-14 rounded-full bg-gradient-primary shadow-glow hover:scale-110 transition-all duration-300 relative group"
          aria-label="Open chat"
        >
          {isOpen ? (
            <X className="h-6 w-6" />
          ) : (
            <>
              <MessageCircle className="h-6 w-6" />
              <div className="absolute -top-2 -right-2 w-6 h-6 bg-brand-orange rounded-full flex items-center justify-center animate-pulse">
                <Bot className="h-3 w-3 text-white" />
              </div>
            </>
          )}
        </Button>
      </div>

      {/* Chat Window */}
      {isOpen && (
        <Card className="fixed bottom-24 left-6 w-80 h-96 z-50 bg-background border-border shadow-elegant animate-scale-in">
          <div className="flex flex-col h-full">
            {/* Header */}
            <div className="bg-gradient-primary text-white p-4 rounded-t-lg">
              <div className="flex items-center space-x-3">
                <div className="w-10 h-10 bg-white/20 rounded-full flex items-center justify-center">
                  <Bot className="h-5 w-5" />
                </div>
                <div>
                  <h3 className="font-bold">Babu AI Assistant</h3>
                  <div className="flex items-center space-x-2">
                    <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse"></div>
                    <span className="text-xs text-white/80">Online</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Content */}
            <div className="flex-1 p-4 overflow-y-auto">
              <div className="space-y-4">
                {/* Greeting Message */}
                <div className="bg-muted rounded-lg p-3">
                  <p className="text-sm text-muted-foreground mb-2">{getGreeting()}</p>
                  <p className="text-sm font-medium">Welcome to Babu Digital Media! How can I help you today?</p>
                </div>

                {/* Current Options */}
                <div className="space-y-2">
                  {chatOptions[currentView].map((option) => (
                    <Button
                      key={option.id}
                      variant="outline"
                      className="w-full justify-start text-left h-auto p-3 hover:bg-brand-orange hover:text-white hover:border-brand-orange transition-all duration-300"
                      onClick={() => {
                        option.action();
                        if (option.id !== 'back') {
                          setIsOpen(false);
                        }
                      }}
                    >
                      <div className="flex items-center space-x-2 w-full">
                        {option.icon && <option.icon className="h-4 w-4 flex-shrink-0" />}
                        <span className="text-xs flex-1">{option.label}</span>
                        <ArrowRight className="h-3 w-3 flex-shrink-0" />
                      </div>
                    </Button>
                  ))}
                </div>

                {/* Quick Actions */}
                {currentView === 'main' && (
                  <div className="pt-4 border-t border-border space-y-2">
                    <p className="text-xs text-muted-foreground font-medium">Quick Actions:</p>
                    <Dialog>
                      <DialogTrigger asChild>
                        <Button variant="hero" size="sm" className="w-full">
                          Schedule a Demo
                        </Button>
                      </DialogTrigger>
                      <DialogContent className="max-w-md">
                        <ScheduleModal />
                      </DialogContent>
                    </Dialog>
                  </div>
                )}
              </div>
            </div>

            {/* Footer */}
            <div className="p-3 border-t border-border bg-muted/30">
              <div className="flex items-center justify-between">
                <span className="text-xs text-muted-foreground">Powered by Babu AI</span>
                <Badge variant="outline" className="text-xs">
                  24/7 Available
                </Badge>
              </div>
            </div>
          </div>
        </Card>
      )}
    </>
  );
};

export default ChatBot;
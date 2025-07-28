import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { MessageCircle, X, Package, DollarSign, Info } from "lucide-react";

const ChatBot = () => {
  const [isOpen, setIsOpen] = useState(false);

  const quickActions = [
    { 
      label: "Our Services", 
      icon: Package, 
      action: () => document.getElementById('services')?.scrollIntoView({ behavior: 'smooth' })
    },
    { 
      label: "View Packages", 
      icon: DollarSign, 
      action: () => document.getElementById('packages')?.scrollIntoView({ behavior: 'smooth' })
    },
    { 
      label: "About Us", 
      icon: Info, 
      action: () => document.getElementById('about')?.scrollIntoView({ behavior: 'smooth' })
    }
  ];

  return (
    <>
      {/* Chat Toggle Button */}
      <div className="fixed bottom-6 left-6 z-50">
        <Button
          onClick={() => setIsOpen(!isOpen)}
          className="w-14 h-14 rounded-full bg-gradient-primary transition-colors"
          aria-label="Open chat"
        >
          {isOpen ? <X className="h-6 w-6" /> : <MessageCircle className="h-6 w-6" />}
        </Button>
      </div>

      {/* Chat Window */}
      {isOpen && (
        <Card className="fixed bottom-24 left-6 w-80 z-50 bg-background border-border shadow-elegant">
          <div className="p-4">
            <h3 className="font-bold text-primary mb-3">How can we help?</h3>
            <div className="space-y-2">
              {quickActions.map((action, index) => (
                <Button
                  key={index}
                  variant="outline"
                  className="w-full justify-start"
                  onClick={() => {
                    action.action();
                    setIsOpen(false);
                  }}
                >
                  <action.icon className="h-4 w-4 mr-2" />
                  {action.label}
                </Button>
              ))}
            </div>
          </div>
        </Card>
      )}
    </>
  );
};

export default ChatBot;
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { MessageCircle } from "lucide-react";

const WhatsAppChat = () => {
  const [isHovered, setIsHovered] = useState(false);

  const whatsappMessage = encodeURIComponent(
    "Hi Babu Digital Media! 👋\n\nI'm interested in learning more about your digital marketing services. Could you please provide me with more information?\n\nThank you!"
  );

  const whatsappNumber = "+919876543210"; // Replace with actual WhatsApp number

  const handleWhatsAppClick = () => {
    window.open(`https://wa.me/${whatsappNumber}?text=${whatsappMessage}`, '_blank');
  };

  return (
    <div className="fixed bottom-24 right-6 z-50">
      <Button
        onClick={handleWhatsAppClick}
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
        className="w-14 h-14 rounded-full bg-green-500 hover:bg-green-600 shadow-glow hover:scale-110 transition-all duration-300 relative group animate-pulse-glow"
        aria-label="Chat on WhatsApp"
      >
        <MessageCircle className="h-7 w-7 text-white" />
        
        {/* Tooltip */}
        {isHovered && (
          <div className="absolute bottom-16 right-0 bg-foreground text-background px-3 py-2 rounded-lg text-sm whitespace-nowrap animate-fade-in">
            Chat on WhatsApp
            <div className="absolute top-full right-4 w-0 h-0 border-l-4 border-r-4 border-t-4 border-l-transparent border-r-transparent border-t-foreground"></div>
          </div>
        )}

        {/* Pulsing Ring Animation */}
        <div className="absolute inset-0 rounded-full bg-green-500 animate-ping opacity-30"></div>
        
        {/* Status Indicator */}
        <div className="absolute -top-1 -right-1 w-4 h-4 bg-green-400 rounded-full border-2 border-white flex items-center justify-center">
          <div className="w-2 h-2 bg-white rounded-full animate-pulse"></div>
        </div>
      </Button>
    </div>
  );
};

export default WhatsAppChat;
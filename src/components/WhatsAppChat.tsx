import { Button } from "@/components/ui/button";
import { MessageCircle } from "lucide-react";

const WhatsAppChat = () => {
  const whatsappMessage = encodeURIComponent(
    "Hi Babu Digital Media! 👋 I'm interested in your digital marketing services. Could you provide more information?"
  );

  const whatsappNumber = "+919876543210";

  const handleWhatsAppClick = () => {
    window.open(`https://wa.me/${whatsappNumber}?text=${whatsappMessage}`, '_blank');
  };

  return (
    <div className="fixed bottom-24 right-6 z-50">
      <Button
        onClick={handleWhatsAppClick}
        className="w-14 h-14 rounded-full bg-green-500 hover:bg-green-600 transition-colors"
        aria-label="Chat on WhatsApp"
      >
        <MessageCircle className="h-7 w-7 text-white" />
      </Button>
    </div>
  );
};

export default WhatsAppChat;
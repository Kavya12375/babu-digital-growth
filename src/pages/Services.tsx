import Header from "@/components/Header";
import ServicesSection from "@/components/ServicesSection";
import Footer from "@/components/Footer";
import ChatBot from "@/components/ChatBot";
import WhatsAppChat from "@/components/WhatsAppChat";
import ScrollToTop from "@/components/ScrollToTop";

const Services = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      <main>
        <ServicesSection />
      </main>
      
      <Footer />
      
      <ChatBot />
      <WhatsAppChat />
      <ScrollToTop />
    </div>
  );
};

export default Services;
import Header from "@/components/Header";
import FAQSection from "@/components/FAQSection";
import Footer from "@/components/Footer";
import ChatBot from "@/components/ChatBot";
import WhatsAppChat from "@/components/WhatsAppChat";
import ScrollToTop from "@/components/ScrollToTop";

const FAQ = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      <main>
        <FAQSection />
      </main>
      
      <Footer />
      
      <ChatBot />
      <WhatsAppChat />
      <ScrollToTop />
    </div>
  );
};

export default FAQ;
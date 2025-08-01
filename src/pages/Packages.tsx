import Header from "@/components/Header";
import PackagesSection from "@/components/PackagesSection";
import Footer from "@/components/Footer";
import ChatBot from "@/components/ChatBot";
import WhatsAppChat from "@/components/WhatsAppChat";
import ScrollToTop from "@/components/ScrollToTop";

const Packages = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      <main>
        <PackagesSection />
      </main>
      
      <Footer />
      
      <ChatBot />
      <WhatsAppChat />
      <ScrollToTop />
    </div>
  );
};

export default Packages;
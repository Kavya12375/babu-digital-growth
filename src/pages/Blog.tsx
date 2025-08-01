import Header from "@/components/Header";
import Footer from "@/components/Footer";
import ChatBot from "@/components/ChatBot";
import WhatsAppChat from "@/components/WhatsAppChat";
import ScrollToTop from "@/components/ScrollToTop";

const Blog = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      <main className="container mx-auto px-4 py-16">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold mb-4">Blog</h1>
          <p className="text-xl text-muted-foreground">
            Stay updated with the latest digital marketing trends and insights
          </p>
        </div>
        
        <div className="text-center py-20">
          <h2 className="text-2xl font-semibold mb-4">Coming Soon</h2>
          <p className="text-muted-foreground">
            We're working on bringing you valuable content. Check back soon!
          </p>
        </div>
      </main>
      
      <Footer />
      
      <ChatBot />
      <WhatsAppChat />
      <ScrollToTop />
    </div>
  );
};

export default Blog;
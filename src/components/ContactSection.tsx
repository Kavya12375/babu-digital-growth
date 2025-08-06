import React, { useEffect } from "react";

declare global {
  interface Window {
    emailjs: any;
    sendEmail: (e: React.FormEvent) => void;
  }
}

const ContactUs = () => {
  useEffect(() => {
    // Load EmailJS script
    const script = document.createElement('script');
    script.type = 'text/javascript';
    script.src = 'https://cdn.emailjs.com/dist/email.min.js';
    script.onload = () => {
      window.emailjs.init("SQnAvvmy3wLq0ymej");
    };
    document.head.appendChild(script);

    // Define sendEmail function globally
    window.sendEmail = function(e: React.FormEvent) {
      e.preventDefault();

      const firstName = (document.getElementById("first_name") as HTMLInputElement).value;
      const lastName = (document.getElementById("last_name") as HTMLInputElement).value;
      const email = (document.getElementById("email") as HTMLInputElement).value;
      const phone = (document.getElementById("phone") as HTMLInputElement).value;
      const message = (document.getElementById("message") as HTMLTextAreaElement).value;

      window.emailjs.send("service_6d28", "template_yv5pmyd", {
        first_name: firstName,
        last_name: lastName,
        user_email: email,
        phone: phone,
        message: message,
      }, "SQnAvvmy3wLq0ymej");

      window.emailjs.send("service_6d28", "template_6xh0c3p", {
        first_name: firstName,
        user_email: email,
      }, "SQnAvvmy3wLq0ymej");

      alert("Message sent successfully. Thank you for contacting us!");
      (document.getElementById("contact-form") as HTMLFormElement).reset();
    };

    return () => {
      document.head.removeChild(script);
      delete window.sendEmail;
    };
  }, []);

  return (
    <section id="contact" className="py-12 px-4 max-w-3xl mx-auto">
      <h2 className="text-3xl font-bold mb-6 text-center">Send us a Message</h2>
      <form id="contact-form" onSubmit={(e) => window.sendEmail?.(e)} className="space-y-4">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <input 
            type="text" 
            id="first_name" 
            placeholder="First Name" 
            required 
            className="p-3 border border-input rounded-md w-full bg-background text-foreground placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring"
          />
          <input 
            type="text" 
            id="last_name" 
            placeholder="Last Name" 
            required 
            className="p-3 border border-input rounded-md w-full bg-background text-foreground placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring"
          />
        </div>
        <input 
          type="email" 
          id="email" 
          placeholder="Your Email" 
          required 
          className="p-3 border border-input rounded-md w-full bg-background text-foreground placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring"
        />
        <input 
          type="tel" 
          id="phone" 
          placeholder="Phone Number" 
          required 
          className="p-3 border border-input rounded-md w-full bg-background text-foreground placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring"
        />
        <textarea 
          id="message" 
          rows={5}
          placeholder="Your Message" 
          required 
          className="p-3 border border-input rounded-md w-full bg-background text-foreground placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring"
        />
        <button 
          type="submit" 
          className="bg-primary hover:bg-primary/90 text-primary-foreground font-semibold px-6 py-3 rounded-md w-full transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring"
        >
          Send Message
        </button>
      </form>
    </section>
  );
};

export default ContactUs;

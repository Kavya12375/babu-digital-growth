import React, { useEffect } from "react";

declare global {
  interface Window {
    emailjs: any;
    sendEmail: (e: Event) => void;
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
    window.sendEmail = function(e: Event) {
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
      }).then(function(response: any) {
        console.log("Mail sent to admin", response);

        window.emailjs.send("service_6d28", "template_6xh0c3p", {
          first_name: firstName,
          last_name: lastName,
          user_email: email,
          phone: phone,
          message: message
        }).then(function(res: any) {
          alert("Thank you! Your message has been sent.");
          (document.getElementById("contact-form") as HTMLFormElement).reset();
        }, function(err: any) {
          alert("Thank you message failed.");
          console.error("User Email Error:", err);
        });

      }, function(error: any) {
        alert("Failed to send message. Try again.");
        console.error("Admin Email Error:", error);
      });
    };

    return () => {
      document.head.removeChild(script);
      delete window.sendEmail;
    };
  }, []);

  return (
    <div className="max-w-4xl mx-auto p-4">
      <div className="grid md:grid-cols-2 gap-8">
        {/* Contact Form */}
        <div>
          <h2 className="text-2xl font-bold mb-4">Send us a Message</h2>
          <form id="contact-form" onSubmit={(e) => window.sendEmail?.(e.nativeEvent)} className="space-y-4">
            <input 
              type="text" 
              id="first_name" 
              placeholder="First Name" 
              required 
              className="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-base ring-offset-background placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2"
            />
            <input 
              type="text" 
              id="last_name" 
              placeholder="Last Name" 
              required 
              className="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-base ring-offset-background placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2"
            />
            <input 
              type="email" 
              id="email" 
              placeholder="Your Email" 
              required 
              className="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-base ring-offset-background placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2"
            />
            <input 
              type="tel" 
              id="phone" 
              placeholder="Phone Number" 
              required 
              className="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-base ring-offset-background placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2"
            />
            <textarea 
              id="message" 
              placeholder="Your Message" 
              required 
              className="flex min-h-[80px] w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2"
            />
            <button 
              type="submit" 
              className="inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 bg-primary text-primary-foreground hover:bg-primary/90 h-10 px-4 py-2 w-full"
            >
              Send Message
            </button>
          </form>
        </div>

        {/* Contact Information */}
        <div>
          <h2 className="text-2xl font-bold mb-4">Contact Information</h2>
          <div className="space-y-6">
            <div className="space-y-2">
              <p className="text-lg font-semibold">Get in Touch</p>
              <p className="text-muted-foreground">
                We'd love to hear from you. Here's how you can reach us.
              </p>
            </div>

            <div className="space-y-4">
              <div>
                <h3 className="font-medium">Email</h3>
                <p className="text-muted-foreground">info@company.com</p>
              </div>

              <div>
                <h3 className="font-medium">Phone</h3>
                <p className="text-muted-foreground">+1 (555) 123-4567</p>
              </div>

              <div>
                <h3 className="font-medium">Address</h3>
                <p className="text-muted-foreground">
                  123 Business Street<br />
                  City, State 12345<br />
                  Country
                </p>
              </div>

              <div>
                <h3 className="font-medium">Business Hours</h3>
                <p className="text-muted-foreground">
                  Monday - Friday: 9:00 AM - 6:00 PM<br />
                  Saturday: 10:00 AM - 4:00 PM<br />
                  Sunday: Closed
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactUs;

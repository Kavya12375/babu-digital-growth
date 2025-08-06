import React, { useEffect, useRef } from "react";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";

declare global {
  interface Window {
    emailjs: any;
  }
}

const ContactUs = () => {
  const formRef = useRef<HTMLFormElement>(null);

  useEffect(() => {
    // Load EmailJS script
    const script = document.createElement('script');
    script.type = 'text/javascript';
    script.src = 'https://cdn.emailjs.com/dist/email.min.js';
    script.onload = () => {
      window.emailjs.init("SQnAvvmy3wLq0ymej");
    };
    document.head.appendChild(script);

    return () => {
      document.head.removeChild(script);
    };
  }, []);

  const sendEmail = (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!window.emailjs) {
      alert("EmailJS not loaded yet. Please try again.");
      return;
    }

    const formData = new FormData(e.target as HTMLFormElement);
    const firstName = formData.get("first_name") as string;
    const lastName = formData.get("last_name") as string;
    const email = formData.get("email") as string;
    const phone = formData.get("phone") as string;
    const message = formData.get("message") as string;

    // Send form data to you
    window.emailjs.send("service_6d28", "template_yv5pmyd", {
      first_name: firstName,
      last_name: lastName,
      user_email: email,
      phone: phone,
      message: message,
    }).then(function(response: any) {
      console.log("Mail sent to you!", response.status, response.text);

      // Send thank you email to user
      window.emailjs.send("service_6d28", "template_6xh0c3p", {
        first_name: firstName,
        user_email: email
      }).then(function(res: any) {
        alert("Thank you! Your message has been sent.");
        formRef.current?.reset();
      }, function(err: any) {
        alert("Thank you message failed.");
      });

    }, function(error: any) {
      alert("Failed to send message. Try again.");
    });
  };

  return (
    <div className="max-w-4xl mx-auto p-4">
      <div className="grid md:grid-cols-2 gap-8">
        {/* Contact Form */}
        <div>
          <h2 className="text-2xl font-bold mb-4">Send us a Message</h2>
          <form ref={formRef} id="contact-form" onSubmit={sendEmail} className="space-y-4">
            <Input
              type="text"
              name="first_name"
              placeholder="First Name"
              required
            />
            <Input
              type="text"
              name="last_name"
              placeholder="Last Name"
              required
            />
            <Input
              type="email"
              name="email"
              placeholder="Your Email"
              required
            />
            <Input
              type="tel"
              name="phone"
              placeholder="Phone Number"
              required
            />
            <Textarea
              name="message"
              placeholder="Your Message"
              required
              className="min-h-[100px]"
            />
            <Button type="submit" className="w-full">
              Send Message
            </Button>
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

import React from "react";

const ContactUs = () => {
  return (
    <div className="max-w-4xl mx-auto p-4">
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
  );
};

export default ContactUs;

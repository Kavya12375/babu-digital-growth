import React from "react";

const ContactUs = () => {
  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    // Collect form data using IDs
    const formData = {
      first_name: (document.getElementById("firstName") as HTMLInputElement).value,
      last_name: (document.getElementById("lastName") as HTMLInputElement).value,
      email: (document.getElementById("email") as HTMLInputElement).value,
      message: (document.getElementById("message") as HTMLTextAreaElement).value,
    };

    // Send the form data to Formspree
    try {
      const response = await fetch("https://formspree.io/f/mnqldvpe", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        alert("✅ Message sent successfully!");
      } else {
        alert("❌ Failed to send message. Please try again.");
      }
    } catch (error) {
      alert("⚠ There was an error sending the message.");
    }
  };

  return (
    <div className="max-w-4xl mx-auto p-4">
      <h2 className="text-2xl font-bold mb-4">Send us a Message</h2>
      <form onSubmit={handleSubmit} className="space-y-6">
        <div className="space-y-2">
          <label htmlFor="firstName">First Name *</label>
          <input
            id="firstName"
            name="first_name"
            type="text"
            placeholder="Enter your first name"
            className="h-12 w-full border rounded px-3"
            required
          />
        </div>

        <div className="space-y-2">
          <label htmlFor="lastName">Last Name *</label>
          <input
            id="lastName"
            name="last_name"
            type="text"
            placeholder="Enter your last name"
            className="h-12 w-full border rounded px-3"
            required
          />
        </div>

        <div className="space-y-2">
          <label htmlFor="email">Email Address *</label>
          <input
            id="email"
            name="email"
            type="email"
            placeholder="Enter your email"
            className="h-12 w-full border rounded px-3"
            required
          />
        </div>

        <div className="space-y-2">
          <label htmlFor="message">Description *</label>
          <textarea
            id="message"
            name="message"
            rows={4}
            placeholder="Write your message"
            className="w-full border rounded px-3 py-2"
            required
          ></textarea>
        </div>

        <button
          type="submit"
          className="bg-blue-600 text-white py-2 px-4 rounded hover:bg-blue-700"
        >
          Send Message
        </button>
      </form>
    </div>
  );
};

export default ContactUs;

import { Mail } from "lucide-react";
import React from "react";

function Contact() {
  const onSubmit = async (event) => {
    event.preventDefault();
    const formData = new FormData(event.target);

    formData.append("access_key", "9a77c835-1fed-4417-b997-88ff43ae3729");

    const object = Object.fromEntries(formData);
    const json = JSON.stringify(object);

    try {
      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
        body: json,
      });

      const result = await response.json();
      if (result.success) {
        console.log("Form submitted successfully:", result);
        event.target.reset(); // Clear the form
      } else {
        console.error("Form submission error:", result);
      }
    } catch (error) {
      console.error("Submission failed:", error);
    }
  };

  return (
    <section
      id="getInTouch"
      className="py-24 px-4 bg-secondary/30 relative font-bold roboto"
    >
      <h2 className="text-3xl md:text-4xl text-white text-center mb-14">
        Get In Touch With Me
      </h2>

      <div className="flex justify-center">
        <div className="w-full max-w-2xl space-y-6">
          <form onSubmit={onSubmit} className="space-y-4 w-full">
            <input
              type="text"
              name="name"
              placeholder="Enter Your Name"
              required
              className="w-full px-4 py-2 rounded-md bg-white/10 text-white placeholder:text-muted-foreground focus:outline-none"
            />
            <input
              type="email"
              name="email"
              placeholder="Your Email Address"
              required
              className="w-full px-4 py-2 rounded-md bg-white/10 text-white placeholder:text-muted-foreground focus:outline-none"
            />
            <input
              type="text"
              name="subject"
              placeholder="Enter Your Subject"
              className="w-full px-4 py-2 rounded-md bg-white/10 text-white placeholder:text-muted-foreground focus:outline-none"
            />
            <textarea
              name="message"
              placeholder="Enter Your Message"
              rows="5"
              required
              className="w-full px-4 py-2 rounded-md bg-white/10 text-white placeholder:text-muted-foreground focus:outline-none"
            ></textarea>
            <div className="flex justify-center">
              <button
                type="submit"
                className="bg-black border px-6 py-3 rounded-full font-semibold hover:brightness-110 hover:scale-105 transition-all duration-300"
              >
                <span className="flex gap-3 items-center text-white">
                  <Mail size={18} /> Submit
                </span>
              </button>
            </div>
          </form>
        </div>
      </div>
    </section>
  );
}

export default Contact;

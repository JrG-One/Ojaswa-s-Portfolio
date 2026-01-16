import React, { useState } from "react";
import { Mail, MapPin, Send, CheckCircle, AlertCircle } from "lucide-react";
import { personalInfo } from "../mock";
import { sendEmail } from "../utils/emailService";

const ContactSection = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

  const [status, setStatus] = useState({ type: "", message: "" });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    setStatus({ type: "", message: "" });

    // Simulate form submission
    const { success, error } = await sendEmail(formData);

    if (success) {
      setStatus({
        type: "success",
        message: "Message sent successfully! I'll get back to you soon.",
      });
      setFormData({ name: "", email: "", subject: "", message: "" });

      // Clear success message after 5 seconds
      setTimeout(() => {
        setStatus({ type: "", message: "" });
      }, 5000);
    } else {
      setStatus({
        type: "error",
        message: "Failed to send message. Please try again later.",
      });
      console.error(error);
    }

    setIsSubmitting(false);
  };

  return (
    <section
      id="contact"
      className="relative py-20 bg-gradient-to-b from-[#0f0f15] to-[#0a0a0f] overflow-hidden"
    >
      <div className="container mx-auto px-6">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-[#e0e0e0] mb-4">
            <span className="text-[#00d9ff]">&lt;</span>Get In Touch
            <span className="text-[#00d9ff]">/&gt;</span>
          </h2>
          <div className="w-24 h-1 bg-[#00d9ff] mx-auto mb-6"></div>
          <p className="text-[#808080] text-lg max-w-2xl mx-auto">
            Have a project in mind or want to collaborate? Let's connect!
          </p>
        </div>

        <div className="max-w-5xl mx-auto grid md:grid-cols-2 gap-12">
          {/* Contact Info */}
          <div className="space-y-6">
            <div className="slide-in-left stagger-1">
              <h3 className="text-2xl font-bold text-[#00d9ff] mb-6">
                Let's Connect
              </h3>
              <p className="text-[#e0e0e0] leading-relaxed mb-8">
                I'm always open to discussing new projects, creative ideas, or
                opportunities to be part of your vision. Whether you need help
                with AI/ML solutions, web development, or competitive
                programming guidance, feel free to reach out!
              </p>
            </div>

            {/* Contact Cards */}
            <div className="space-y-4">
              <div className="p-6 bg-[#0f0f15]/50 border border-[#00d9ff]/30 rounded-lg backdrop-blur-sm hover:border-[#00d9ff] transition-all duration-300 slide-in-left stagger-2">
                <div className="flex items-start">
                  <div className="p-3 bg-[#00d9ff]/20 rounded-lg mr-4">
                    <Mail className="text-[#00d9ff]" size={24} />
                  </div>
                  <div>
                    <h4 className="text-[#e0e0e0] font-semibold mb-1">
                      Email
                    </h4>
                    <a
                      href={`mailto:${personalInfo.email}`}
                      className="text-[#00d9ff] hover:text-[#00ff88] transition-colors duration-300"
                    >
                      {personalInfo.email}
                    </a>
                  </div>
                </div>
              </div>

              <div className="p-6 bg-[#0f0f15]/50 border border-[#00d9ff]/30 rounded-lg backdrop-blur-sm hover:border-[#00d9ff] transition-all duration-300 slide-in-left stagger-3">
                <div className="flex items-start">
                  <div className="p-3 bg-[#00ff88]/20 rounded-lg mr-4">
                    <MapPin className="text-[#00ff88]" size={24} />
                  </div>
                  <div>
                    <h4 className="text-[#e0e0e0] font-semibold mb-1">
                      Location
                    </h4>
                    <p className="text-[#808080]">{personalInfo.location}</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Terminal-style Quote */}
            <div className="p-6 bg-[#0a0a0f] border border-[#00ff88]/30 rounded-lg font-mono text-sm slide-in-left stagger-4">
              <div className="text-[#00ff88] mb-2">
                <span className="text-[#808080]">$</span> cat motivation.txt
              </div>
              <p className="text-[#e0e0e0] leading-relaxed">
                "The best way to predict the future is to build it."
              </p>
              <p className="text-[#808080] mt-2 text-xs">
                - Let's build something amazing together!
              </p>
            </div>
          </div>

          {/* Contact Form */}
          <div className="slide-in-right stagger-1">
            <form onSubmit={handleSubmit} className="space-y-6">
              {/* Name */}
              <div>
                <label
                  htmlFor="name"
                  className="block text-[#e0e0e0] font-medium mb-2"
                >
                  Name
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 bg-[#0f0f15] border border-[#00d9ff]/30 rounded-lg text-[#e0e0e0] focus:border-[#00d9ff] focus:outline-none focus:ring-2 focus:ring-[#00d9ff]/20 transition-all duration-300"
                  placeholder="Your Name"
                />
              </div>

              {/* Email */}
              <div>
                <label
                  htmlFor="email"
                  className="block text-[#e0e0e0] font-medium mb-2"
                >
                  Email
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 bg-[#0f0f15] border border-[#00d9ff]/30 rounded-lg text-[#e0e0e0] focus:border-[#00d9ff] focus:outline-none focus:ring-2 focus:ring-[#00d9ff]/20 transition-all duration-300"
                  placeholder="your.email@example.com"
                />
              </div>

              {/* Subject */}
              <div>
                <label
                  htmlFor="subject"
                  className="block text-[#e0e0e0] font-medium mb-2"
                >
                  Subject
                </label>
                <input
                  type="text"
                  id="subject"
                  name="subject"
                  value={formData.subject}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 bg-[#0f0f15] border border-[#00d9ff]/30 rounded-lg text-[#e0e0e0] focus:border-[#00d9ff] focus:outline-none focus:ring-2 focus:ring-[#00d9ff]/20 transition-all duration-300"
                  placeholder="What's this about?"
                />
              </div>

              {/* Message */}
              <div>
                <label
                  htmlFor="message"
                  className="block text-[#e0e0e0] font-medium mb-2"
                >
                  Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  rows="5"
                  className="w-full px-4 py-3 bg-[#0f0f15] border border-[#00d9ff]/30 rounded-lg text-[#e0e0e0] focus:border-[#00d9ff] focus:outline-none focus:ring-2 focus:ring-[#00d9ff]/20 transition-all duration-300 resize-none"
                  placeholder="Your message here..."
                ></textarea>
              </div>

              {/* Status Message */}
              {status.message && (
                <div
                  className={`p-4 rounded-lg flex items-center ${status.type === "success"
                    ? "bg-[#00ff88]/10 border border-[#00ff88]/30"
                    : "bg-[#ff0055]/10 border border-[#ff0055]/30"
                    }`}
                >
                  {status.type === "success" ? (
                    <CheckCircle className="text-[#00ff88] mr-3" size={20} />
                  ) : (
                    <AlertCircle className="text-[#ff0055] mr-3" size={20} />
                  )}
                  <span
                    className={`text-sm ${status.type === "success"
                      ? "text-[#00ff88]"
                      : "text-[#ff0055]"
                      }`}
                  >
                    {status.message}
                  </span>
                </div>
              )}

              {/* Submit Button */}
              <button
                type="submit"
                disabled={isSubmitting}
                className="w-full px-8 py-4 bg-[#00d9ff] text-[#0a0a0f] rounded-lg hover:bg-[#00ff88] transition-all duration-300 font-medium text-lg flex items-center justify-center hover:shadow-[0_0_30px_rgba(0,217,255,0.5)] disabled:opacity-50 disabled:cursor-not-allowed transform hover:scale-105 disabled:transform-none"
              >
                {isSubmitting ? (
                  <>
                    <div className="animate-spin rounded-full h-5 w-5 border-b-2 border-[#0a0a0f] mr-3"></div>
                    Sending...
                  </>
                ) : (
                  <>
                    <Send size={20} className="mr-2" />
                    Send Message
                  </>
                )}
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;

import React, { useState } from "react";
import { Mail, MapPin, Send, CheckCircle, AlertCircle } from "lucide-react";
import { personalInfo } from "../mock";
import { sendEmail } from "../utils/emailService";
import { motion } from "framer-motion";

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
        message: "Message dispatched successfully. Awaiting acknowledgment.",
      });
      setFormData({ name: "", email: "", subject: "", message: "" });

      // Clear success message after 5 seconds
      setTimeout(() => {
        setStatus({ type: "", message: "" });
      }, 5000);
    } else {
      setStatus({
        type: "error",
        message: "ERR: Transmission failed. Please try again.",
      });
      console.error(error);
    }

    setIsSubmitting(false);
  };

  return (
    <section id="contact" className="relative py-32 border-b border-border">
      <div className="container mx-auto px-6 relative z-10">
        
        {/* Section Header */}
        <div className="mb-16 flex items-baseline gap-4">
          <h2 className="text-3xl md:text-5xl font-black text-foreground tracking-tight uppercase">
            Net.<span className="text-accent">Connect</span>
          </h2>
          <div className="h-px bg-border flex-grow mt-6"></div>
        </div>

        <div className="max-w-6xl mx-auto grid lg:grid-cols-2 gap-12 lg:gap-20">
          {/* Contact Info */}
          <div className="space-y-8">
            <motion.div 
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
            >
              <h3 className="text-3xl font-black text-foreground uppercase tracking-tight mb-6">
                Establish_Link
              </h3>
              <p className="text-muted-foreground font-mono leading-relaxed mb-8 text-sm md:text-base">
                System ready for new inputs. Whether you require AI/ML integrations, 
                high-performance web architecture, or algorithmic consultation, 
                initialize connection protocols below.
              </p>
            </motion.div>

            {/* Contact Cards */}
            <div className="space-y-4">
              <motion.div 
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.1 }}
                className="p-6 bg-card border border-border hover:border-accent transition-colors duration-300 group"
              >
                <div className="flex items-center">
                  <div className="p-3 bg-muted border border-border mr-6 text-foreground group-hover:bg-accent/10 group-hover:text-accent transition-colors">
                    <Mail size={24} />
                  </div>
                  <div>
                    <h4 className="text-xs font-mono font-bold text-muted-foreground uppercase mb-1">
                      Protocol: Email
                    </h4>
                    <a
                      href={`mailto:${personalInfo.email}`}
                      className="text-lg font-black text-foreground hover:text-accent transition-colors duration-300"
                    >
                      {personalInfo.email}
                    </a>
                  </div>
                </div>
              </motion.div>

              <motion.div 
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.2 }}
                className="p-6 bg-card border border-border hover:border-accent transition-colors duration-300 group"
              >
                <div className="flex items-center">
                  <div className="p-3 bg-muted border border-border mr-6 text-foreground group-hover:bg-accent/10 group-hover:text-accent transition-colors">
                    <MapPin size={24} />
                  </div>
                  <div>
                    <h4 className="text-xs font-mono font-bold text-muted-foreground uppercase mb-1">
                      Coordinates
                    </h4>
                    <p className="text-lg font-black text-foreground">{personalInfo.location}</p>
                  </div>
                </div>
              </motion.div>
            </div>
          </div>

          {/* Contact Form */}
          <motion.div 
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="p-6 md:p-10 bg-card border border-border relative overflow-hidden"
          >
            {/* Form Header */}
            <div className="border-b border-border pb-4 mb-6">
              <span className="text-xs font-mono font-bold text-accent uppercase tracking-widest">
                // Input_Terminal
              </span>
            </div>

            <form onSubmit={handleSubmit} className="space-y-6 relative z-10">
              <div className="grid md:grid-cols-2 gap-6">
                {/* Name */}
                <div>
                  <label
                    htmlFor="name"
                    className="block font-mono text-xs font-bold text-muted-foreground uppercase mb-2"
                  >
                    Identifier [Name]
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 bg-background border border-border text-foreground font-mono placeholder:text-muted-foreground focus:border-accent focus:outline-none focus:ring-1 focus:ring-accent transition-colors rounded-none"
                    placeholder="Guest_User"
                  />
                </div>

                {/* Email */}
                <div>
                  <label
                    htmlFor="email"
                    className="block font-mono text-xs font-bold text-muted-foreground uppercase mb-2"
                  >
                    Return_Address [Email]
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 bg-background border border-border text-foreground font-mono placeholder:text-muted-foreground focus:border-accent focus:outline-none focus:ring-1 focus:ring-accent transition-colors rounded-none"
                    placeholder="user@domain.com"
                  />
                </div>
              </div>

              {/* Subject */}
              <div>
                <label
                  htmlFor="subject"
                  className="block font-mono text-xs font-bold text-muted-foreground uppercase mb-2"
                >
                  Topic_Header [Subject]
                </label>
                <input
                  type="text"
                  id="subject"
                  name="subject"
                  value={formData.subject}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 bg-background border border-border text-foreground font-mono placeholder:text-muted-foreground focus:border-accent focus:outline-none focus:ring-1 focus:ring-accent transition-colors rounded-none"
                  placeholder="Inquiry Topic"
                />
              </div>

              {/* Message */}
              <div>
                <label
                  htmlFor="message"
                  className="block font-mono text-xs font-bold text-muted-foreground uppercase mb-2"
                >
                  Payload [Message]
                </label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  rows="5"
                  className="w-full px-4 py-3 bg-background border border-border text-foreground font-mono placeholder:text-muted-foreground focus:border-accent focus:outline-none focus:ring-1 focus:ring-accent transition-colors rounded-none resize-none"
                  placeholder="Enter transmission data..."
                />
              </div>

              {/* Status Message */}
              {status.message && (
                <motion.div
                  initial={{ opacity: 0, y: -10 }}
                  animate={{ opacity: 1, y: 0 }}
                  className={`p-4 font-mono text-sm border flex items-start ${
                    status.type === "success"
                      ? "bg-emerald-500/10 border-emerald-500/50 text-emerald-400"
                      : "bg-red-500/10 border-red-500/50 text-red-400"
                  }`}
                >
                  {status.type === "success" ? (
                    <CheckCircle className="mr-3 shrink-0 mt-0.5" size={16} />
                  ) : (
                    <AlertCircle className="mr-3 shrink-0 mt-0.5" size={16} />
                  )}
                  <span>{status.message}</span>
                </motion.div>
              )}

              {/* Submit Button */}
              <button
                type="submit"
                disabled={isSubmitting}
                className="w-full px-8 py-4 bg-foreground text-background font-black uppercase tracking-widest hover:bg-accent hover:text-background transition-colors duration-300 flex items-center justify-center focus:outline-none disabled:opacity-50 disabled:cursor-not-allowed group border border-transparent"
              >
                {isSubmitting ? (
                  <span className="font-mono">Processing...</span>
                ) : (
                  <>
                    <span className="mr-3">Execute_Send</span>
                    <Send size={18} className="group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
                  </>
                )}
              </button>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;

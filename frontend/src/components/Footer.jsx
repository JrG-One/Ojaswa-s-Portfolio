import React from "react";
import { Github, Linkedin, Mail, ArrowUp } from "lucide-react";
import { personalInfo } from "../mock";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer className="w-full border-t border-border bg-background pt-16 pb-8">
      <div className="container mx-auto px-6">
        
        {/* Main Footer Content */}
        <div className="grid md:grid-cols-12 gap-12 mb-16">
          
          {/* Brand Section */}
          <div className="md:col-span-5">
            <h3 className="text-2xl font-black text-foreground mb-4 uppercase tracking-tighter">
              OJASWA <span className="text-accent">VARSHNEY</span>
            </h3>
            <p className="text-muted-foreground font-mono text-sm leading-relaxed max-w-sm mb-6">
              Building intelligent solutions that automate the impossible. 
              Bridging the gap between AI research and production systems.
            </p>
            
            {/* Social Links */}
            <div className="flex gap-4">
              <a
                href={personalInfo.social.github}
                target="_blank"
                rel="noopener noreferrer"
                className="p-3 border border-border text-foreground hover:bg-foreground hover:text-background transition-colors"
                aria-label="GitHub"
              >
                <Github size={20} />
              </a>
              <a
                href={personalInfo.social.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="p-3 border border-border text-foreground hover:bg-foreground hover:text-background transition-colors"
                aria-label="LinkedIn"
              >
                <Linkedin size={20} />
              </a>
              <a
                href={`mailto:${personalInfo.email}`}
                className="p-3 border border-border text-foreground hover:bg-foreground hover:text-background transition-colors"
                aria-label="Email"
              >
                <Mail size={20} />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div className="md:col-span-3">
            <h4 className="text-foreground font-black mb-6 tracking-widest uppercase border-b border-border pb-2 inline-block">
              Navigation
            </h4>
            <ul className="space-y-2 font-mono text-sm">
              {[
                { name: "About", href: "#about" },
                { name: "Projects", href: "#projects" },
                { name: "Skills", href: "#skills" },
                { name: "Achievements", href: "#achievements" },
                { name: "Research", href: "#research" },
                { name: "Contact", href: "#contact" },
              ].map((link) => (
                <li key={link.name}>
                  <a
                    href={link.href}
                    onClick={(e) => {
                      e.preventDefault();
                      document
                        .querySelector(link.href)
                        .scrollIntoView({ behavior: "smooth" });
                    }}
                    className="text-muted-foreground hover:text-accent transition-colors uppercase flex items-center group"
                  >
                    <span className="text-accent mr-2 opacity-0 group-hover:opacity-100 transition-opacity">&gt;</span>
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Stats */}
          <div className="md:col-span-4">
            <h4 className="text-foreground font-black mb-6 tracking-widest uppercase border-b border-border pb-2 inline-block">
              Telemetry
            </h4>
            <div className="space-y-3 font-mono text-sm">
              <div className="flex justify-between items-center border-b border-border pb-2">
                <span className="text-muted-foreground uppercase">Projects_Completed</span>
                <span className="text-foreground font-bold">9+</span>
              </div>
              <div className="flex justify-between items-center border-b border-border pb-2">
                <span className="text-muted-foreground uppercase">Problems_Solved</span>
                <span className="text-foreground font-bold">600+</span>
              </div>
              <div className="flex justify-between items-center border-b border-border pb-2">
                <span className="text-muted-foreground uppercase">Publications</span>
                <span className="text-foreground font-bold">3</span>
              </div>
              <div className="flex justify-between items-center pb-2">
                <span className="text-muted-foreground uppercase">LeetCode_Rating</span>
                <span className="text-foreground font-bold">2134</span>
              </div>
            </div>
          </div>
        </div>

        {/* Divider */}
        <div className="h-px w-full bg-border mb-8"></div>

        {/* Bottom Footer */}
        <div className="flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-muted-foreground font-mono text-xs uppercase flex items-center">
            &copy; {currentYear} {personalInfo.name} // All rights reserved.
          </p>

          {/* Terminal Command */}
          <div className="px-4 py-2 bg-muted border border-border inline-block">
            <pre className="text-accent text-xs font-mono">
              <span className="text-muted-foreground">visitor@system:~$</span> exit 0
            </pre>
          </div>

          {/* Scroll to Top Button */}
          <button
            onClick={scrollToTop}
            className="p-3 border border-border bg-card text-foreground hover:bg-foreground hover:text-background transition-colors focus:outline-none flex items-center gap-2 font-mono text-xs font-bold uppercase"
            aria-label="Scroll to top"
          >
            <ArrowUp size={16} />
            Top
          </button>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

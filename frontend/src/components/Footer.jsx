import React from "react";
import { Github, Linkedin, Mail, Heart, ArrowUp } from "lucide-react";
import { personalInfo } from "../mock";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer className="relative bg-[#0a0a0f] border-t border-[#00d9ff]/20 pt-12 pb-6 overflow-hidden">
      <div className="container mx-auto px-6">
        {/* Main Footer Content */}
        <div className="grid md:grid-cols-3 gap-8 mb-8">
          {/* Brand Section */}
          <div>
            <h3 className="text-2xl font-bold text-[#00d9ff] mb-4 font-mono">
              &lt;Ojaswa /&gt;
            </h3>
            <p className="text-[#808080] mb-4">
              Building intelligent solutions that automate the impossible.
            </p>
            <div className="flex space-x-4">
              <a
                href={personalInfo.social.github}
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 bg-[#0f0f15] border border-[#00d9ff]/30 rounded-lg text-[#808080] hover:text-[#00d9ff] hover:border-[#00d9ff] transition-all duration-300"
                aria-label="GitHub"
              >
                <Github size={20} />
              </a>
              <a
                href={personalInfo.social.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 bg-[#0f0f15] border border-[#00d9ff]/30 rounded-lg text-[#808080] hover:text-[#00d9ff] hover:border-[#00d9ff] transition-all duration-300"
                aria-label="LinkedIn"
              >
                <Linkedin size={20} />
              </a>
              <a
                href={`mailto:${personalInfo.email}`}
                className="p-2 bg-[#0f0f15] border border-[#00d9ff]/30 rounded-lg text-[#808080] hover:text-[#00d9ff] hover:border-[#00d9ff] transition-all duration-300"
                aria-label="Email"
              >
                <Mail size={20} />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-[#e0e0e0] font-bold mb-4">Quick Links</h4>
            <ul className="space-y-2">
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
                    className="text-[#808080] hover:text-[#00d9ff] transition-colors duration-300 text-sm"
                  >
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Stats */}
          <div>
            <h4 className="text-[#e0e0e0] font-bold mb-4">Quick Stats</h4>
            <div className="space-y-2 text-sm">
              <div className="flex justify-between text-[#808080]">
                <span>Projects Completed</span>
                <span className="text-[#00d9ff] font-bold">5+</span>
              </div>
              <div className="flex justify-between text-[#808080]">
                <span>Problems Solved</span>
                <span className="text-[#00ff88] font-bold">600+</span>
              </div>
              <div className="flex justify-between text-[#808080]">
                <span>Publications</span>
                <span className="text-[#00d9ff] font-bold">3</span>
              </div>
              <div className="flex justify-between text-[#808080]">
                <span>LeetCode Rating</span>
                <span className="text-[#00ff88] font-bold">2134</span>
              </div>
            </div>
          </div>
        </div>

        {/* Divider */}
        <div className="border-t border-[#00d9ff]/20 my-6"></div>

        {/* Bottom Footer */}
        <div className="flex flex-col md:flex-row justify-between items-center">
          <p className="text-[#808080] text-sm mb-4 md:mb-0 flex items-center">
            © {currentYear} {personalInfo.name}. Built with{" "}
            <Heart
              className="mx-1 text-[#ff0055]"
              size={14}
              fill="#ff0055"
            />
          </p>

          {/* Scroll to Top Button */}
          <button
            onClick={scrollToTop}
            className="p-2 bg-[#00d9ff] text-[#0a0a0f] rounded-lg hover:bg-[#00ff88] transition-all duration-300 hover:shadow-[0_0_20px_rgba(0,217,255,0.5)] transform hover:scale-110"
            aria-label="Scroll to top"
          >
            <ArrowUp size={20} />
          </button>
        </div>

        {/* Terminal Command */}
        <div className="mt-6 text-center">
          <pre className="text-[#00ff88] text-xs font-mono inline-block">
            <span className="text-[#808080]">root@portfolio:~$</span> echo
            "Thanks for visiting!"
          </pre>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

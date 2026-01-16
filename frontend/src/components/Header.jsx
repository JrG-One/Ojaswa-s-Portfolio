import React, { useState, useEffect } from "react";
import { Menu, X, Github, Linkedin, Mail, FileText } from "lucide-react";
import { personalInfo } from "../mock";

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navItems = [
    { name: "Home", href: "#home" },
    { name: "About", href: "#about" },
    { name: "Projects", href: "#projects" },
    { name: "Skills", href: "#skills" },
    { name: "Achievements", href: "#achievements" },
    { name: "Research", href: "#research" },
    { name: "Contact", href: "#contact" },
  ];

  const scrollToSection = (e, href) => {
    e.preventDefault();
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
      setIsMobileMenuOpen(false);
    }
  };

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${isScrolled
        ? "bg-[#0a0a0f]/95 backdrop-blur-md border-b border-[#00d9ff]/20"
        : "bg-transparent"
        }`}
    >
      <nav className="container mx-auto px-6 py-4">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <a
            href="#home"
            onClick={(e) => scrollToSection(e, "#home")}
            className="text-2xl font-bold text-[#00d9ff] hover:text-[#00ff88] transition-colors duration-300 font-mono"
          >
            &lt;Ojaswa /&gt;
          </a>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            {navItems.map((item) => (
              <a
                key={item.name}
                href={item.href}
                onClick={(e) => scrollToSection(e, item.href)}
                className="text-[#e0e0e0] hover:text-[#00d9ff] transition-colors duration-300 text-sm font-medium relative group"
              >
                {item.name}
                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-[#00d9ff] transition-all duration-300 group-hover:w-full"></span>
              </a>
            ))}
          </div>

          {/* Social Links - Desktop */}
          <div className="hidden md:flex items-center space-x-4">
            <a
              href={personalInfo.social.github}
              target="_blank"
              rel="noopener noreferrer"
              className="text-[#808080] hover:text-[#00d9ff] transition-colors duration-300"
              aria-label="GitHub"
            >
              <Github size={20} />
            </a>
            <a
              href={personalInfo.social.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="text-[#808080] hover:text-[#00d9ff] transition-colors duration-300"
              aria-label="LinkedIn"
            >
              <Linkedin size={20} />
            </a>
            <a
              href={`mailto:${personalInfo.email}`}
              className="text-[#808080] hover:text-[#00d9ff] transition-colors duration-300"
              aria-label="Email"
            >
              <Mail size={20} />
            </a>
            <a
              href={personalInfo.resumeUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="ml-4 px-4 py-2 bg-transparent border border-[#00d9ff] text-[#00d9ff] rounded-md hover:bg-[#00d9ff] hover:text-[#0a0a0f] transition-all duration-300 text-sm font-medium"
            >
              Resume
            </a>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="md:hidden text-[#00d9ff] hover:text-[#00ff88] transition-colors duration-300"
            aria-label="Toggle menu"
          >
            {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isMobileMenuOpen && (
          <div className="md:hidden absolute top-full left-0 right-0 bg-[#0a0a0f] border-b border-[#00d9ff]/20 shadow-2xl p-6 animate-in slide-in-from-top-5">
            <div className="flex flex-col space-y-4">
              {navItems.map((item) => (
                <a
                  key={item.name}
                  href={item.href}
                  onClick={(e) => scrollToSection(e, item.href)}
                  className="text-[#e0e0e0] hover:text-[#00d9ff] transition-colors duration-300 text-lg font-medium p-2 block border-b border-[#ffffff]/5"
                >
                  {item.name}
                </a>
              ))}
              <div className="flex items-center space-x-6 pt-4 mt-2">
                <a
                  href={personalInfo.social.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-[#808080] hover:text-[#00d9ff] transition-colors duration-300 transform hover:scale-110"
                  aria-label="GitHub"
                >
                  <Github size={24} />
                </a>
                <a
                  href={personalInfo.social.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-[#808080] hover:text-[#00d9ff] transition-colors duration-300 transform hover:scale-110"
                  aria-label="LinkedIn"
                >
                  <Linkedin size={24} />
                </a>
                <a
                  href={`mailto:${personalInfo.email}`}
                  className="text-[#808080] hover:text-[#00d9ff] transition-colors duration-300 transform hover:scale-110"
                  aria-label="Email"
                >
                  <Mail size={24} />
                </a>
                <a
                  href={personalInfo.resumeUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-6 py-2 bg-transparent border border-[#00d9ff] text-[#00d9ff] rounded-md hover:bg-[#00d9ff] hover:text-[#0a0a0f] transition-all duration-300 text-sm font-medium w-full text-center"
                >
                  Resume
                </a>
              </div>
            </div>
          </div>
        )}
      </nav>
    </header>
  );
};

export default Header;

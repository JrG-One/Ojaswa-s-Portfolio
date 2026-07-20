import React, { useState, useEffect } from "react";
import { Menu, X, Github, Linkedin, Mail, FileText, Download } from "lucide-react";
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
        ? "bg-background/80 backdrop-blur-xl border-b border-border shadow-sm"
        : "bg-transparent py-4"
        }`}
    >
      <nav className="container mx-auto px-6 py-4">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <a
            href="#home"
            onClick={(e) => scrollToSection(e, "#home")}
            className="flex items-center gap-3 group"
          >
            <div className="relative w-10 h-10 overflow-hidden border border-border bg-muted flex-shrink-0">
              <img 
                src={process.env.PUBLIC_URL + "/portfolio.png"} 
                alt="Ojaswa Varshney" 
                className="w-full h-full object-cover grayscale contrast-125 group-hover:grayscale-0 transition-all duration-300"
              />
              <div className="absolute inset-0 bg-accent mix-blend-overlay opacity-0 group-hover:opacity-30 transition-opacity duration-300"></div>
            </div>
          </a>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-6 lg:space-x-8">
            {navItems.map((item) => (
              <a
                key={item.name}
                href={item.href}
                onClick={(e) => scrollToSection(e, item.href)}
                className="text-muted-foreground hover:text-foreground transition-colors duration-300 text-sm font-medium relative group tracking-wide font-mono uppercase"
              >
                {item.name}
                <span className="absolute -bottom-1.5 left-0 w-0 h-[2px] bg-accent transition-all duration-300 group-hover:w-full"></span>
              </a>
            ))}
          </div>

          {/* Social Links - Desktop */}
          <div className="hidden md:flex items-center space-x-4">
            <a
              href={personalInfo.social.github}
              target="_blank"
              rel="noopener noreferrer"
              className="text-muted-foreground hover:text-foreground transition-colors duration-300"
              aria-label="GitHub"
            >
              <Github size={20} />
            </a>
            <a
              href={personalInfo.social.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="text-muted-foreground hover:text-foreground transition-colors duration-300"
              aria-label="LinkedIn"
            >
              <Linkedin size={20} />
            </a>
            <a
              href={personalInfo.resumeUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="ml-4 px-4 py-2 bg-foreground text-background hover:bg-accent hover:text-foreground transition-all duration-300 text-sm font-bold uppercase tracking-wider flex items-center gap-2"
            >
              <Download size={16} /> Resume
            </a>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="md:hidden text-foreground hover:text-accent transition-colors duration-300 focus:outline-none"
            aria-label="Toggle menu"
          >
            {isMobileMenuOpen ? <X size={26} /> : <Menu size={26} />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isMobileMenuOpen && (
          <div className="md:hidden absolute top-full left-0 right-0 bg-background/95 backdrop-blur-xl border-b border-border shadow-2xl p-6 animate-in slide-in-from-top-2 duration-300">
            <div className="flex flex-col space-y-2">
              {navItems.map((item) => (
                <a
                  key={item.name}
                  href={item.href}
                  onClick={(e) => scrollToSection(e, item.href)}
                  className="text-muted-foreground hover:text-accent hover:bg-muted/50 transition-all duration-300 text-base font-mono uppercase font-bold px-4 py-3 block"
                >
                  {item.name}
                </a>
              ))}
              <div className="flex items-center justify-around pt-6 pb-2 border-t border-border mt-4">
                <a
                  href={personalInfo.social.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-3 bg-muted/30 text-foreground hover:text-accent hover:bg-muted transition-all duration-300"
                  aria-label="GitHub"
                >
                  <Github size={22} />
                </a>
                <a
                  href={personalInfo.social.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-3 bg-muted/30 text-foreground hover:text-accent hover:bg-muted transition-all duration-300"
                  aria-label="LinkedIn"
                >
                  <Linkedin size={22} />
                </a>
                <a
                  href={`mailto:${personalInfo.email}`}
                  className="p-3 bg-muted/30 text-foreground hover:text-accent hover:bg-muted transition-all duration-300"
                  aria-label="Email"
                >
                  <Mail size={22} />
                </a>
              </div>
              <a
                href={personalInfo.resumeUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="mt-4 flex items-center justify-center gap-2 px-6 py-3 bg-foreground text-background hover:bg-accent hover:text-foreground transition-all duration-300 text-sm font-bold uppercase tracking-wider w-full"
              >
                <Download size={18} /> Resume
              </a>
            </div>
          </div>
        )}
      </nav>
    </header>
  );
};

export default Header;

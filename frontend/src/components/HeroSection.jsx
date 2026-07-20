import React, { useState, useEffect } from "react";
import { ChevronDown, Download, Briefcase, Mail, Code, BookOpen } from "lucide-react";
import { personalInfo } from "../mock";
import { motion } from "framer-motion";

const HeroSection = () => {
  const [displayedText, setDisplayedText] = useState("");
  const [currentIndex, setCurrentIndex] = useState(0);
  const fullText = personalInfo.title;

  useEffect(() => {
    if (currentIndex < fullText.length) {
      const timeout = setTimeout(() => {
        setDisplayedText((prev) => prev + fullText[currentIndex]);
        setCurrentIndex((prev) => prev + 1);
      }, 50);
      return () => clearTimeout(timeout);
    }
  }, [currentIndex, fullText]);

  const scrollToNext = () => {
    const aboutSection = document.querySelector("#about");
    if (aboutSection) {
      aboutSection.scrollIntoView({ behavior: "smooth" });
    }
  };

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: "easeOut" } },
  };

  return (
    <section id="hero" className="relative min-h-[100svh] pt-32 pb-16 flex flex-col justify-center border-b border-border">
      
      <motion.div 
        className="container mx-auto px-6 relative z-10"
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          
          {/* Left Column - Image */}
          <div className="lg:col-span-5 w-full order-1">
            <motion.div
              variants={itemVariants}
              className="w-full aspect-[4/5] sm:aspect-square overflow-hidden border border-border group bg-muted relative max-w-md mx-auto lg:max-w-none"
            >
              <img 
                src={process.env.PUBLIC_URL + "/portfolio.png"} 
                alt="Ojaswa" 
                className="w-full h-full object-cover object-top grayscale contrast-125 group-hover:grayscale-0 transition-all duration-500" 
              />
              <div className="absolute inset-0 bg-accent mix-blend-overlay opacity-0 group-hover:opacity-20 transition-opacity duration-500"></div>
              <div className="absolute top-0 left-0 w-full h-1 bg-accent/50 opacity-0 group-hover:opacity-100 group-hover:animate-scan transition-opacity duration-500"></div>
            </motion.div>
          </div>

          {/* Right Column - Text & Metrics */}
          <div className="lg:col-span-7 flex flex-col items-start text-left order-2">
            
            <motion.div variants={itemVariants} className="mb-4 inline-flex items-center gap-3">
              <span className="w-8 h-px bg-accent"></span>
              <span className="font-mono text-sm tracking-widest text-accent uppercase font-bold">System Online</span>
            </motion.div>
            
            <motion.h1 
              variants={itemVariants}
              className="text-fluid-4xl sm:text-fluid-5xl font-black tracking-tighter text-foreground mb-4 uppercase leading-[0.9]"
            >
              {personalInfo.name.split(' ').map((word, idx) => (
                <span key={idx} className="block">{word}</span>
              ))}
            </motion.h1>

            <motion.div variants={itemVariants} className="mb-6 h-[40px] flex items-center">
              <h2 className="text-fluid-lg font-mono text-muted-foreground tracking-tight flex items-center">
                <span className="text-accent mr-2">➜</span>
                {displayedText}
                <span className="inline-block w-[10px] h-[1em] bg-accent ml-2 animate-pulse" />
              </h2>
            </motion.div>

            <motion.p 
              variants={itemVariants}
              className="text-fluid-base text-muted-foreground max-w-xl mb-10 leading-relaxed"
            >
              {personalInfo.tagline}
            </motion.p>

            {/* Buttons */}
            <motion.div variants={itemVariants} className="flex flex-col sm:flex-row gap-4 w-full sm:w-auto mb-12">
              <a
                href="#projects"
                onClick={(e) => {
                  e.preventDefault();
                  document.querySelector("#projects").scrollIntoView({ behavior: "smooth" });
                }}
                className="group relative inline-flex items-center justify-center gap-2 px-8 py-4 bg-foreground text-background font-mono font-bold uppercase tracking-wider overflow-hidden"
              >
                <div className="absolute inset-0 bg-accent translate-y-[100%] group-hover:translate-y-0 transition-transform duration-300 ease-out z-0"></div>
                <span className="relative z-10 group-hover:text-foreground transition-colors duration-300">View Work</span>
                <ChevronDown size={18} className="relative z-10 group-hover:text-foreground -rotate-90" />
              </a>
              <a
                href={personalInfo.resumeUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="group inline-flex items-center justify-center gap-2 px-8 py-4 border-2 border-border text-foreground hover:border-accent hover:text-accent font-mono font-bold uppercase tracking-wider transition-colors duration-300"
              >
                <Download size={18} />
                <span>Resume</span>
              </a>
            </motion.div>

            {/* Metrics */}
            <motion.div variants={itemVariants} className="grid grid-cols-1 sm:grid-cols-3 gap-6 sm:gap-0 w-full pt-6 border-t border-border">
              {[
                { icon: <Code size={20} />, metric: "1.3%", title: "Top Globally", desc: "LeetCode" },
                { icon: <BookOpen size={20} />, metric: "3", title: "Publications", desc: "IEEE, ACL" },
                { icon: <span className="font-bold text-lg">&lt;/&gt;</span>, metric: "9+", title: "Projects", desc: "Enterprise" }
              ].map((item, idx) => (
                <div 
                  key={idx}
                  className={`group flex flex-col justify-start sm:px-6 hover:border-accent transition-colors duration-300 ${idx !== 0 ? 'sm:border-l sm:border-border' : ''}`}
                >
                  <div className="text-muted-foreground group-hover:text-accent transition-colors mb-3">
                    {item.icon}
                  </div>
                  <h3 className="text-4xl sm:text-5xl lg:text-5xl font-black tracking-tighter text-foreground group-hover:text-accent transition-colors mb-1 leading-none">
                    {item.metric}
                  </h3>
                  <h4 className="text-xs font-mono font-bold text-muted-foreground uppercase tracking-wider mb-1 mt-2 leading-tight">{item.title}</h4>
                </div>
              ))}
            </motion.div>

          </div>
        </div>
      </motion.div>
    </section>
  );
};

export default HeroSection;

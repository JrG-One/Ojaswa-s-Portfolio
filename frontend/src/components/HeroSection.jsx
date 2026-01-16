import React, { useState, useEffect } from "react";
import { ChevronDown } from "lucide-react";
import { personalInfo } from "../mock";
import MatrixBackground from "./MatrixBackground";

const HeroSection = () => {
  const [displayedText, setDisplayedText] = useState("");
  const [currentIndex, setCurrentIndex] = useState(0);
  const fullText = personalInfo.title;

  useEffect(() => {
    if (currentIndex < fullText.length) {
      const timeout = setTimeout(() => {
        setDisplayedText((prev) => prev + fullText[currentIndex]);
        setCurrentIndex((prev) => prev + 1);
      }, 100);
      return () => clearTimeout(timeout);
    }
  }, [currentIndex, fullText]);

  const scrollToNext = () => {
    const aboutSection = document.querySelector("#about");
    if (aboutSection) {
      aboutSection.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center justify-center overflow-hidden bg-[#0a0a0f]"
    >
      {/* Matrix Background */}
      <MatrixBackground />

      {/* Scan Line Effect */}
      <div className="scan-line"></div>

      {/* Content */}
      <div className="relative z-10 container mx-auto px-6 text-center">
        {/* Terminal-style greeting */}
        <div className="mb-8 text-left inline-block">
          <pre className="text-[#00ff88] text-sm md:text-base font-mono">
            <span className="text-[#808080]">root@portfolio:~$</span> echo
            "Hello, World!"
          </pre>
        </div>

        {/* Name with Glitch Effect */}
        <h1 className="text-4xl md:text-7xl lg:text-8xl font-bold text-[#e0e0e0] mb-6 glitch">
          <span className="inline-block">{personalInfo.name}</span>
        </h1>

        {/* Typing Effect for Title */}
        <div className="mb-8 min-h-[60px] md:min-h-[80px]">
          <h2 className="text-2xl md:text-4xl lg:text-5xl font-bold text-[#00d9ff] font-mono">
            {displayedText}
            <span className="inline-block w-1 h-8 md:h-12 bg-[#00d9ff] ml-1 animate-pulse"></span>
          </h2>
        </div>

        {/* Tagline */}
        <p className="text-lg md:text-xl text-[#808080] max-w-3xl mx-auto mb-12 slide-in-up">
          {personalInfo.tagline}
        </p>

        {/* CTA Buttons */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-16 slide-in-up stagger-2">
          <a
            href="#projects"
            onClick={(e) => {
              e.preventDefault();
              document
                .querySelector("#projects")
                .scrollIntoView({ behavior: "smooth" });
            }}
            className="px-8 py-4 bg-[#00d9ff] text-[#0a0a0f] rounded-md hover:bg-[#00ff88] transition-all duration-300 font-medium text-lg hover:shadow-[0_0_20px_rgba(0,217,255,0.5)] transform hover:scale-105"
          >
            View My Work
          </a>
          <a
            href="#contact"
            onClick={(e) => {
              e.preventDefault();
              document
                .querySelector("#contact")
                .scrollIntoView({ behavior: "smooth" });
            }}
            className="px-8 py-4 bg-transparent border-2 border-[#00d9ff] text-[#00d9ff] rounded-md hover:bg-[#00d9ff] hover:text-[#0a0a0f] transition-all duration-300 font-medium text-lg transform hover:scale-105"
          >
            Get In Touch
          </a>
        </div>

        {/* Stats */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 max-w-4xl mx-auto slide-in-up stagger-3">
          <div className="p-6 bg-[#0f0f15]/80 backdrop-blur-sm border border-[#00d9ff]/30 rounded-lg hover:border-[#00d9ff] transition-all duration-300">
            <div className="text-3xl md:text-4xl font-bold text-[#00d9ff] mb-2">
              600+
            </div>
            <div className="text-sm text-[#808080]">Problems Solved</div>
          </div>
          <div className="p-6 bg-[#0f0f15]/80 backdrop-blur-sm border border-[#00d9ff]/30 rounded-lg hover:border-[#00d9ff] transition-all duration-300">
            <div className="text-3xl md:text-4xl font-bold text-[#00ff88] mb-2">
              2134
            </div>
            <div className="text-sm text-[#808080]">LeetCode Rating</div>
          </div>
          <div className="p-6 bg-[#0f0f15]/80 backdrop-blur-sm border border-[#00d9ff]/30 rounded-lg hover:border-[#00d9ff] transition-all duration-300">
            <div className="text-3xl md:text-4xl font-bold text-[#00d9ff] mb-2">
              5+
            </div>
            <div className="text-sm text-[#808080]">Major Projects</div>
          </div>
          <div className="p-6 bg-[#0f0f15]/80 backdrop-blur-sm border border-[#00d9ff]/30 rounded-lg hover:border-[#00d9ff] transition-all duration-300">
            <div className="text-3xl md:text-4xl font-bold text-[#00ff88] mb-2">
              3
            </div>
            <div className="text-sm text-[#808080]">Publications</div>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <button
        onClick={scrollToNext}
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2 text-[#00d9ff] animate-bounce cursor-pointer hover:text-[#00ff88] transition-colors duration-300"
        aria-label="Scroll to next section"
      >
        <ChevronDown size={32} />
      </button>
    </section>
  );
};

export default HeroSection;

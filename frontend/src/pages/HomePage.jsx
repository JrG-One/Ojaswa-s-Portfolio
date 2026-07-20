import React from "react";
import Header from "../components/Header";
import HeroSection from "../components/HeroSection";
import AboutSection from "../components/AboutSection";
import ProjectsSection from "../components/ProjectsSection";
import SkillsSection from "../components/SkillsSection";
import AchievementsSection from "../components/AchievementsSection";
import ResearchSection from "../components/ResearchSection";
import CodingProfilesSection from "../components/CodingProfilesSection";
import ContactSection from "../components/ContactSection";
import Footer from "../components/Footer";

const HomePage = () => {
  return (
    <div className="relative min-h-screen bg-background text-foreground selection:bg-accent/30 font-sans overflow-x-hidden">
      {/* Background Noise & Grid */}
      <div className="fixed inset-0 pointer-events-none z-0">
        <div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-20 mix-blend-overlay"></div>
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:24px_24px]"></div>
        <div className="absolute left-0 right-0 top-0 -z-10 m-auto h-[310px] w-[310px] rounded-full bg-accent opacity-20 blur-[100px]"></div>
      </div>

      <div className="relative z-10">
        <Header />
        
        <main className="flex flex-col">
          <HeroSection />
          
          <AboutSection />
          <ProjectsSection />
          <ResearchSection />
          <SkillsSection />
          <AchievementsSection />
          <CodingProfilesSection />
          <ContactSection />
        </main>
        
        <Footer />
      </div>
    </div>
  );
};

export default HomePage;

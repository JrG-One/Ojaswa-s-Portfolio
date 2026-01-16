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
    <div className="min-h-screen bg-[#0a0a0f] text-[#e0e0e0]">
      <Header />
      <main>
        <HeroSection />
        <AboutSection />
        <ProjectsSection />
        <SkillsSection />
        <AchievementsSection />
        <ResearchSection />
        <CodingProfilesSection />
        <ContactSection />
      </main>
      <Footer />
    </div>
  );
};

export default HomePage;

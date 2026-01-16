import React from "react";
import { MapPin, Briefcase, GraduationCap, Mail, Phone } from "lucide-react";
import { personalInfo, education, experience } from "../mock";

const AboutSection = () => {
  return (
    <section
      id="about"
      className="relative py-20 bg-gradient-to-b from-[#0a0a0f] to-[#0f0f15] overflow-hidden"
    >
      <div className="container mx-auto px-6">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-[#e0e0e0] mb-4">
            <span className="text-[#00d9ff]">&lt;</span>About Me
            <span className="text-[#00d9ff]">/&gt;</span>
          </h2>
          <div className="w-24 h-1 bg-[#00d9ff] mx-auto"></div>
        </div>

        <div className="grid md:grid-cols-2 gap-12 items-start">
          {/* Left Column - Bio */}
          <div className="space-y-6">
            <div className="p-8 bg-[#0f0f15]/50 border border-[#00d9ff]/30 rounded-lg backdrop-blur-sm hover:border-[#00d9ff] transition-all duration-300">
              <h3 className="text-2xl font-bold text-[#00d9ff] mb-4">
                Who Am I?
              </h3>
              <p className="text-[#e0e0e0] leading-relaxed mb-4">
                {personalInfo.bio}
              </p>

              {/* Quick Info */}
              <div className="space-y-3 mt-6 pt-6 border-t border-[#00d9ff]/20">
                <div className="flex items-center text-[#808080]">
                  <Mail className="mr-3 text-[#00d9ff]" size={18} />
                  <a
                    href={`mailto:${personalInfo.email}`}
                    className="hover:text-[#00d9ff] transition-colors duration-300"
                  >
                    {personalInfo.email}
                  </a>
                </div>
                <div className="flex items-center text-[#808080]">
                  <Phone className="mr-3 text-[#00d9ff]" size={18} />
                  <span>{personalInfo.phone}</span>
                </div>
                <div className="flex items-center text-[#808080]">
                  <MapPin className="mr-3 text-[#00d9ff]" size={18} />
                  <span>{personalInfo.location}</span>
                </div>
              </div>
            </div>

            {/* Education */}
            <div className="p-8 bg-[#0f0f15]/50 border border-[#00d9ff]/30 rounded-lg backdrop-blur-sm hover:border-[#00d9ff] transition-all duration-300">
              <div className="flex items-center mb-4">
                <GraduationCap className="text-[#00d9ff] mr-3" size={24} />
                <h3 className="text-xl font-bold text-[#00d9ff]">
                  Education
                </h3>
              </div>
              <h4 className="text-lg font-semibold text-[#e0e0e0] mb-2">
                {education.degree}
              </h4>
              <p className="text-[#808080] mb-2">{education.institution}</p>
              <div className="flex justify-between items-center text-sm">
                <span className="text-[#808080]">{education.duration}</span>
                <span className="text-[#00ff88] font-bold">
                  CGPA: {education.cgpa}
                </span>
              </div>
            </div>
          </div>

          {/* Right Column - Experience */}
          <div className="space-y-6">
            <div className="flex items-center mb-6">
              <Briefcase className="text-[#00d9ff] mr-3" size={24} />
              <h3 className="text-2xl font-bold text-[#00d9ff]">
                Experience
              </h3>
            </div>

            {experience.map((exp, index) => (
              <div
                key={exp.id}
                className={`p-4 md:p-6 bg-[#0f0f15]/50 border border-[#00d9ff]/30 rounded-lg backdrop-blur-sm hover:border-[#00d9ff] transition-all duration-300 slide-in-right stagger-${index + 1}`}
              >
                {/* Header */}
                <div className="flex justify-between items-start mb-4">
                  <div>
                    <h4 className="text-xl font-bold text-[#e0e0e0] mb-1">
                      {exp.role}
                    </h4>
                    <p className="text-[#00d9ff] font-medium">
                      {exp.company}
                    </p>
                    <p className="text-sm text-[#808080] mt-1">
                      {exp.location} | {exp.type}
                    </p>
                  </div>
                  {exp.current && (
                    <span className="px-3 py-1 bg-[#00ff88]/20 text-[#00ff88] text-xs font-bold rounded-full border border-[#00ff88]">
                      Current
                    </span>
                  )}
                </div>

                {/* Duration */}
                <div className="mb-4 text-sm text-[#808080]">
                  {exp.duration}
                </div>

                {/* Responsibilities */}
                <ul className="space-y-2">
                  {exp.responsibilities.map((resp, idx) => (
                    <li
                      key={idx}
                      className="text-[#808080] text-sm flex items-start"
                    >
                      <span className="text-[#00d9ff] mr-2 mt-1">▹</span>
                      <span>{resp}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;

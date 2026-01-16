import React from "react";
import { skills } from "../mock";
import {
  Code2,
  Layers,
  Server,
  Cloud,
  Sparkles,
} from "lucide-react";

const SkillsSection = () => {
  const skillCategories = [
    { name: "Languages", data: skills.languages, icon: Code2, color: "#00d9ff" },
    { name: "Frontend", data: skills.frontend, icon: Layers, color: "#00ff88" },
    { name: "Backend", data: skills.backend, icon: Server, color: "#ff0055" },
    { name: "Cloud & DB", data: skills.cloud, icon: Cloud, color: "#ffe03d" },
    { name: "AI/ML", data: skills.ai, icon: Sparkles, color: "#d987ff" },
  ];

  return (
    <section
      id="skills"
      className="relative py-20 bg-gradient-to-b from-[#0f0f15] to-[#0a0a0f] overflow-hidden"
    >
      <div className="container mx-auto px-6">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-[#e0e0e0] mb-4">
            <span className="text-[#00d9ff]">&lt;</span>Tech Stack
            <span className="text-[#00d9ff]">/&gt;</span>
          </h2>
          <div className="w-24 h-1 bg-[#00d9ff] mx-auto mb-6"></div>
          <p className="text-[#808080] text-lg max-w-2xl mx-auto">
            Technologies and tools I use to bring ideas to life
          </p>
        </div>

        {/* Skills Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {skillCategories.map((category, catIndex) => {
            const Icon = category.icon;
            return (
              <div
                key={category.name}
                className={`p-6 bg-[#0f0f15]/50 border border-[#00d9ff]/30 rounded-lg backdrop-blur-sm hover:border-[#00d9ff] transition-all duration-300 hover:shadow-[0_0_30px_rgba(0,217,255,0.2)] slide-in-up stagger-${(catIndex % 3) + 1}`}
              >
                {/* Category Header */}
                <div className="flex items-center mb-6">
                  <div
                    className="p-2 rounded-lg mr-3"
                    style={{ backgroundColor: `${category.color}20` }}
                  >
                    <Icon size={24} style={{ color: category.color }} />
                  </div>
                  <h3
                    className="text-xl font-bold"
                    style={{ color: category.color }}
                  >
                    {category.name}
                  </h3>
                </div>

                {/* Skills List */}
                <div className="space-y-4">
                  {category.data.map((skill, skillIndex) => (
                    <div key={skillIndex}>
                      <div className="flex justify-between items-center mb-2">
                        <span className="text-[#e0e0e0] text-sm font-medium">
                          {skill.name}
                        </span>
                        <span
                          className="text-xs font-bold"
                          style={{ color: category.color }}
                        >
                          {skill.level}%
                        </span>
                      </div>
                      <div className="h-2 bg-[#0a0a0f] rounded-full overflow-hidden">
                        <div
                          className="h-full rounded-full transition-all duration-1000 ease-out"
                          style={{
                            width: `${skill.level}%`,
                            backgroundColor: category.color,
                            boxShadow: `0 0 10px ${category.color}`,
                          }}
                        ></div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            );
          })}
        </div>

        {/* Fun Fact */}
        <div className="mt-12 p-8 bg-[#0f0f15]/50 border border-[#00d9ff]/30 rounded-lg backdrop-blur-sm text-center max-w-3xl mx-auto">
          <p className="text-[#e0e0e0] text-lg">
            <span className="text-[#00d9ff] font-bold">Fun Fact:</span> I've
            solved{" "}
            <span className="text-[#00ff88] font-bold">600+</span> DSA problems
            across multiple platforms and achieved{" "}
            <span className="text-[#00ff88] font-bold">Knight Badge</span> on
            LeetCode with a max rating of{" "}
            <span className="text-[#00ff88] font-bold">2134</span>!
          </p>
        </div>
      </div>
    </section>
  );
};

export default SkillsSection;

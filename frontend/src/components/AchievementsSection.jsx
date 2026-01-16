import React from "react";
import { Trophy, Crown, Medal, Award, Star, Zap } from "lucide-react";
import { achievements } from "../mock";

const AchievementsSection = () => {
  const getIcon = (iconName) => {
    const icons = {
      trophy: Trophy,
      crown: Crown,
      medal: Medal,
      award: Award,
      star: Star,
      zap: Zap,
    };
    const IconComponent = icons[iconName] || Trophy;
    return <IconComponent size={32} />;
  };

  const getCategoryColor = (category) => {
    const colors = {
      Grant: "#00ff88",
      "Competitive Programming": "#00d9ff",
      Hackathon: "#ff0055",
    };
    return colors[category] || "#00d9ff";
  };

  return (
    <section
      id="achievements"
      className="relative py-20 bg-[#0a0a0f] overflow-hidden"
    >
      <div className="container mx-auto px-6">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-[#e0e0e0] mb-4">
            <span className="text-[#00d9ff]">&lt;</span>Achievements
            <span className="text-[#00d9ff]">/&gt;</span>
          </h2>
          <div className="w-24 h-1 bg-[#00d9ff] mx-auto mb-6"></div>
          <p className="text-[#808080] text-lg max-w-2xl mx-auto">
            Milestones and recognition earned along my journey
          </p>
        </div>

        {/* Timeline */}
        <div className="max-w-4xl mx-auto relative">
          {/* Vertical Line */}
          <div className="absolute left-8 md:left-1/2 transform md:-translate-x-1/2 h-full w-0.5 bg-[#00d9ff]/30"></div>

          {achievements.map((achievement, index) => (
            <div
              key={achievement.id}
              className={`relative mb-12 slide-in-up stagger-${(index % 3) + 1}`}
            >
              {/* Timeline Node */}
              <div
                className="absolute left-8 md:left-1/2 transform -translate-x-1/2 w-4 h-4 rounded-full border-4 border-[#0a0a0f] z-10"
                style={{ backgroundColor: getCategoryColor(achievement.category) }}
              ></div>

              {/* Content Card */}
              <div
                className={`ml-20 md:ml-0 md:w-5/12 ${
                  index % 2 === 0 ? "md:mr-auto md:pr-12" : "md:ml-auto md:pl-12"
                }`}
              >
                <div className="p-6 bg-[#0f0f15]/80 border border-[#00d9ff]/30 rounded-lg backdrop-blur-sm hover:border-[#00d9ff] transition-all duration-300 hover:shadow-[0_0_30px_rgba(0,217,255,0.2)]">
                  {/* Icon */}
                  <div
                    className="inline-block p-3 rounded-lg mb-4"
                    style={{
                      backgroundColor: `${getCategoryColor(achievement.category)}20`,
                      color: getCategoryColor(achievement.category),
                    }}
                  >
                    {getIcon(achievement.icon)}
                  </div>

                  {/* Category & Date */}
                  <div className="flex justify-between items-center mb-3">
                    <span
                      className="text-xs font-bold px-3 py-1 rounded-full"
                      style={{
                        backgroundColor: `${getCategoryColor(achievement.category)}20`,
                        color: getCategoryColor(achievement.category),
                      }}
                    >
                      {achievement.category}
                    </span>
                    <span className="text-sm text-[#808080]">
                      {achievement.date}
                    </span>
                  </div>

                  {/* Title & Description */}
                  <h3
                    className="text-xl font-bold mb-2"
                    style={{ color: getCategoryColor(achievement.category) }}
                  >
                    {achievement.title}
                  </h3>
                  <p className="text-[#e0e0e0] text-sm">
                    {achievement.description}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default AchievementsSection;

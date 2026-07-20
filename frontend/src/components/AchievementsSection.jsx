import React from "react";
import { Trophy, Crown, Medal, Award, Star, Zap } from "lucide-react";
import { achievements } from "../mock";
import { motion } from "framer-motion";

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
    return <IconComponent size={20} />;
  };

  return (
    <section id="achievements" className="relative py-24 border-b border-border">
      <div className="container mx-auto px-6 relative z-10">
        {/* Section Header */}
        <div className="mb-16 flex items-baseline gap-4">
          <h2 className="text-3xl md:text-5xl font-black text-foreground tracking-tight uppercase">
            Logs.<span className="text-accent">Achievements</span>
          </h2>
          <div className="h-px bg-border flex-grow mt-6"></div>
        </div>

        {/* Timeline (Linear, tabular style) */}
        <div className="max-w-5xl mx-auto space-y-4">
          {achievements.map((achievement, index) => (
            <motion.div
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.4, delay: index * 0.1 }}
              key={achievement.id}
              className="group p-6 bg-card border border-border hover:border-accent transition-all duration-300 relative flex flex-col md:flex-row gap-6 md:items-center"
            >
              {/* Category / Icon / Date (Left Column) */}
              <div className="md:w-1/4 flex-shrink-0 flex flex-col gap-2 border-b md:border-b-0 md:border-r border-border pb-4 md:pb-0 md:pr-6">
                <div className="flex justify-between items-start md:flex-col md:items-start gap-2">
                  <div className="flex items-center text-accent">
                    {getIcon(achievement.icon)}
                    <span className="ml-2 font-mono text-xs font-bold uppercase tracking-wider">{achievement.category}</span>
                  </div>
                  <span className="font-mono text-xs text-muted-foreground bg-muted px-2 py-1 border border-border">
                    {achievement.date}
                  </span>
                </div>
              </div>

              {/* Title & Desc (Right Column) */}
              <div className="md:w-3/4 flex-grow">
                <h3 className="text-xl font-black text-foreground uppercase tracking-tight mb-2">
                  {achievement.title}
                </h3>
                <p className="text-sm text-muted-foreground font-mono leading-relaxed">
                  {achievement.description}
                </p>
              </div>
              
              {/* Decorative Accent on Hover */}
              <div className="absolute left-0 top-0 w-1 h-full bg-accent opacity-0 group-hover:opacity-100 transition-opacity" />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default AchievementsSection;

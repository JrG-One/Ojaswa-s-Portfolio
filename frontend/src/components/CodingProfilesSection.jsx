import React from "react";
import { ExternalLink, Trophy, TrendingUp } from "lucide-react";
import { codingProfiles } from "../mock";
import { motion } from "framer-motion";

const CodingProfilesSection = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.1 },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 15 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.4, ease: "easeOut" } },
  };

  return (
    <section id="codingprofiles" className="relative py-24 border-b border-border">
      <div className="container mx-auto px-6 relative z-10">
        {/* Section Header */}
        <div className="mb-16 flex items-baseline gap-4">
          <h2 className="text-3xl md:text-5xl font-black text-foreground tracking-tight uppercase">
            Data.<span className="text-accent">Profiles</span>
          </h2>
          <div className="h-px bg-border flex-grow mt-6"></div>
        </div>

        {/* Profiles Grid */}
        <motion.div 
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-50px" }}
          className="grid md:grid-cols-2 lg:grid-cols-3 gap-6"
        >
          {codingProfiles.map((profile, index) => (
            <motion.a
              variants={itemVariants}
              key={profile.platform}
              href={profile.url}
              target="_blank"
              rel="noopener noreferrer"
              className="group p-6 bg-card border border-border hover:border-accent transition-colors duration-300 flex flex-col h-full relative"
            >
              {/* Accent Line */}
              <div className="absolute left-0 top-0 w-1 h-full bg-accent opacity-0 group-hover:opacity-100 transition-opacity"></div>
              
              {/* Platform Header */}
              <div className="flex justify-between items-start mb-8">
                <div>
                  <h3 className="text-2xl font-black text-foreground uppercase tracking-tight mb-1 flex items-center group-hover:text-accent transition-colors">
                    {profile.platform}
                    <ExternalLink
                      size={18}
                      className="ml-2 text-muted-foreground opacity-0 -translate-x-2 group-hover:translate-x-0 group-hover:opacity-100 transition-all duration-300"
                    />
                  </h3>
                  <p className="text-xs font-mono font-bold text-muted-foreground bg-muted inline-block px-2 py-1 border border-border">
                    @{profile.username}
                  </p>
                </div>
                <div
                  className="p-2 border border-border bg-muted transition-colors group-hover:bg-accent/10"
                >
                  <Trophy size={20} className="text-accent" />
                </div>
              </div>

              {/* Stats */}
              <div className="space-y-3 flex-grow font-mono text-sm">
                {/* Max Rating */}
                <div className="flex items-center justify-between border-b border-border pb-3">
                  <span className="text-muted-foreground uppercase">Max_Rating</span>
                  <span className="font-bold text-foreground">
                    {profile.maxRating}
                  </span>
                </div>

                {/* Badge */}
                {profile.badge && (
                  <div className="flex items-center justify-between border-b border-border pb-3">
                    <span className="text-muted-foreground uppercase">Badge</span>
                    <span
                      className="font-bold uppercase tracking-wider text-accent"
                    >
                      {profile.badge}
                    </span>
                  </div>
                )}

                {/* Rank */}
                {profile.rank && (
                  <div className="flex items-center justify-between border-b border-border pb-3">
                    <span className="text-muted-foreground uppercase">Rank</span>
                    <span className="font-bold text-foreground">
                      {profile.rank}
                    </span>
                  </div>
                )}
              </div>

              {/* Problems Solved */}
              <div className="mt-6 pt-4 flex items-center justify-between">
                <span className="text-xs font-mono font-bold text-muted-foreground uppercase flex items-center">
                  <TrendingUp size={14} className="mr-2 text-accent" />
                  Problems_Solved
                </span>
                <span className="text-xl font-black text-foreground group-hover:text-accent transition-colors">
                  {profile.problemsSolved}+
                </span>
              </div>
            </motion.a>
          ))}
        </motion.div>

        {/* Summary Block */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="mt-12 max-w-5xl mx-auto p-6 md:p-10 bg-muted border border-border font-mono relative overflow-hidden"
        >
          <div className="flex flex-col md:flex-row justify-between items-center gap-8 text-center md:text-left">
            <div className="md:w-1/3">
              <h3 className="text-lg font-black text-foreground uppercase tracking-tight mb-2">
                &gt; Aggregate_Stats
              </h3>
              <p className="text-xs text-muted-foreground uppercase">
                Cross-platform competitive programming metrics.
              </p>
            </div>
            
            <div className="flex flex-wrap justify-center md:justify-end gap-6 md:gap-12 md:w-2/3">
              <div className="flex flex-col">
                <span className="text-3xl md:text-5xl font-black text-foreground mb-1 tracking-tighter">600+</span>
                <span className="text-xs font-bold text-accent uppercase tracking-widest border-t border-border pt-2">Problems</span>
              </div>
              <div className="flex flex-col">
                <span className="text-3xl md:text-5xl font-black text-foreground mb-1 tracking-tighter">2134</span>
                <span className="text-xs font-bold text-accent uppercase tracking-widest border-t border-border pt-2">Peak Rating</span>
              </div>
              <div className="flex flex-col">
                <span className="text-3xl md:text-5xl font-black text-foreground mb-1 tracking-tighter">1.3%</span>
                <span className="text-xs font-bold text-accent uppercase tracking-widest border-t border-border pt-2">Global Top</span>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default CodingProfilesSection;

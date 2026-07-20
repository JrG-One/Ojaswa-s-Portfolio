import React from "react";
import { skills } from "../mock";
import {
  Code2,
  Layers,
  Server,
  Cloud,
  Sparkles,
} from "lucide-react";
import { motion } from "framer-motion";

const SkillsSection = () => {
  const skillCategories = [
    { name: "Languages", data: skills.languages, icon: Code2, color: "text-accent" },
    { name: "Frontend", data: skills.frontend, icon: Layers, color: "text-accent" },
    { name: "Backend", data: skills.backend, icon: Server, color: "text-accent" },
    { name: "Cloud & DB", data: skills.cloud, icon: Cloud, color: "text-accent" },
    { name: "AI/ML", data: skills.ai, icon: Sparkles, color: "text-accent" },
  ];

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
    <section id="skills" className="relative py-24 border-b border-border">
      <div className="container mx-auto px-6 relative z-10">
        
        {/* Section Header */}
        <div className="mb-16 flex items-baseline gap-4">
          <h2 className="text-3xl md:text-5xl font-black text-foreground tracking-tight uppercase">
            Tech.<span className="text-accent">Stack</span>
          </h2>
          <div className="h-px bg-border flex-grow mt-6"></div>
        </div>

        {/* Skills Grid */}
        <motion.div 
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-50px" }}
          className="grid md:grid-cols-2 lg:grid-cols-3 gap-6"
        >
          {skillCategories.map((category) => {
            const Icon = category.icon;
            return (
              <motion.div
                variants={itemVariants}
                key={category.name}
                className="p-6 bg-card border border-border hover:border-accent transition-colors duration-300 relative group"
              >
                {/* Category Header */}
                <div className="flex items-center mb-8 border-b border-border pb-4">
                  <div className={`p-2 bg-muted border border-border mr-4 group-hover:bg-accent/10 transition-colors`}>
                    <Icon size={20} className={category.color} />
                  </div>
                  <h3 className={`text-xl font-black text-foreground uppercase tracking-tight`}>
                    {category.name}
                  </h3>
                </div>

                {/* Skills List */}
                <div className="space-y-4">
                  {category.data.map((skill, skillIndex) => (
                    <div key={skillIndex} className="group/skill">
                      <div className="flex justify-between items-end mb-1">
                        <span className="text-foreground font-mono text-sm tracking-wide uppercase flex items-center">
                          {skill.devicon && <i className={`${skill.devicon} text-lg mr-2`} />}
                          {skill.name}
                        </span>
                        <span className={`text-xs font-mono font-bold ${category.color}`}>
                          {skill.level}%
                        </span>
                      </div>
                      <div className="h-1 bg-muted w-full overflow-hidden">
                        <motion.div
                          initial={{ width: 0 }}
                          whileInView={{ width: `${skill.level}%` }}
                          viewport={{ once: true }}
                          transition={{ duration: 1, ease: "easeOut", delay: 0.2 }}
                          className={`h-full bg-accent relative`}
                        />
                      </div>
                    </div>
                  ))}
                </div>
              </motion.div>
            );
          })}
        </motion.div>

        {/* Fun Fact */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="mt-12 p-6 bg-muted border border-border font-mono text-sm text-muted-foreground leading-relaxed"
        >
          <span className="text-accent font-bold tracking-wide uppercase mr-2">&gt; Fun_Fact:</span>
          Solved <span className="text-foreground font-bold">600+</span> DSA problems
          across multiple platforms. Achieved <span className="text-foreground font-bold">Knight Badge</span> on
          LeetCode with a max rating of <span className="text-foreground font-bold">2134</span>.
        </motion.div>
      </div>
    </section>
  );
};

export default SkillsSection;

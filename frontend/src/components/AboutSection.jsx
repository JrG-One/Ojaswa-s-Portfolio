import React from "react";
import { MapPin, Briefcase, GraduationCap, Mail, Phone, ExternalLink, ArrowRight } from "lucide-react";
import { personalInfo, education, experience } from "../mock";
import { motion } from "framer-motion";

const AboutSection = () => {
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
    <section id="about" className="relative py-24 border-b border-border">
      <div className="container mx-auto px-6 relative z-10">
        
        {/* Section Header */}
        <div className="mb-16 flex items-baseline gap-4">
          <h2 className="text-3xl md:text-5xl font-black text-foreground tracking-tight uppercase">
            System.<span className="text-accent">Profile</span>
          </h2>
          <div className="h-px bg-border flex-grow mt-6"></div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
          
          {/* Bio & Details */}
          <motion.div 
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-50px" }}
            className="lg:col-span-5 space-y-8"
          >
            <motion.div variants={itemVariants}>
              <h3 className="text-xl font-bold font-mono text-foreground mb-4 uppercase tracking-widest flex items-center">
                <span className="w-4 h-4 bg-accent mr-3"></span> About_Me
              </h3>
              <p className="text-fluid-base text-muted-foreground leading-relaxed whitespace-pre-line">
                {personalInfo.bio}
              </p>
            </motion.div>

            {/* Terminal-like quick info */}
            <motion.div variants={itemVariants} className="bg-card border border-border p-6 font-mono text-sm">
              <div className="flex flex-col gap-3">
                <div className="flex items-center gap-4 border-b border-border pb-3">
                  <span className="text-muted-foreground w-20">EMAIL</span>
                  <a href={`mailto:${personalInfo.email}`} className="text-foreground hover:text-accent transition-colors truncate">
                    {personalInfo.email}
                  </a>
                </div>
                <div className="flex items-center gap-4 border-b border-border pb-3">
                  <span className="text-muted-foreground w-20">PHONE</span>
                  <span className="text-foreground">{personalInfo.phone}</span>
                </div>
                <div className="flex items-center gap-4 border-b border-border pb-3">
                  <span className="text-muted-foreground w-20">LOC</span>
                  <span className="text-foreground">{personalInfo.location}</span>
                </div>
                <div className="flex items-center gap-4 pt-1">
                  <span className="text-muted-foreground w-20">EDU</span>
                  <span className="text-foreground leading-tight">
                    {education.degree} <br/>
                    <span className="text-accent">{education.institution}</span> ({education.cgpa})
                  </span>
                </div>
              </div>
            </motion.div>
          </motion.div>

          {/* Experience Feed */}
          <motion.div 
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-50px" }}
            className="lg:col-span-7"
          >
            <motion.h3 variants={itemVariants} className="text-xl font-bold font-mono text-foreground mb-8 uppercase tracking-widest flex items-center">
              <span className="w-4 h-4 bg-accent mr-3"></span> Execution_Log
            </motion.h3>

            <div className="space-y-6">
              {experience.map((exp) => (
                <motion.div
                  variants={itemVariants}
                  key={exp.id}
                  className="group relative pl-6 md:pl-8 border-l border-border hover:border-accent transition-colors duration-300 pb-2"
                >
                  <div className="absolute left-[-5px] top-1.5 w-2.5 h-2.5 bg-background border-2 border-border group-hover:border-accent group-hover:bg-accent transition-all duration-300"></div>
                  
                  <div className="flex flex-col sm:flex-row justify-between items-start mb-2 gap-2">
                    <div>
                      <h4 className="text-xl font-black text-foreground uppercase tracking-tight">
                        {exp.role}
                      </h4>
                      <p className="text-accent font-mono text-sm font-bold uppercase tracking-wider">
                        {exp.company}
                      </p>
                    </div>
                    <div className="shrink-0 text-right">
                      <span className={`inline-block px-2 py-1 text-xs font-mono font-bold uppercase tracking-wider border ${exp.current ? 'bg-accent/10 text-accent border-accent/50' : 'bg-muted text-muted-foreground border-border'}`}>
                        {exp.current ? 'Active' : exp.duration}
                      </span>
                    </div>
                  </div>

                  <ul className="mt-4 space-y-2">
                    {exp.responsibilities.map((resp, idx) => (
                      <li key={idx} className="text-muted-foreground text-sm flex items-start group/li">
                        <ArrowRight size={14} className="mr-2 mt-1 shrink-0 text-border group-hover/li:text-accent transition-colors" />
                        <span className="leading-relaxed">{resp}</span>
                      </li>
                    ))}
                  </ul>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;

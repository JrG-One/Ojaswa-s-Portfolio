import React from "react";
import { FileText, ExternalLink, Calendar, User, BookOpen } from "lucide-react";
import { publications, conferencRoles } from "../mock";
import { motion } from "framer-motion";

const ResearchSection = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.15 },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, x: -15 },
    visible: { opacity: 1, x: 0, transition: { duration: 0.4, ease: "easeOut" } },
  };

  const roleVariants = {
    hidden: { opacity: 0, x: 15 },
    visible: { opacity: 1, x: 0, transition: { duration: 0.4, ease: "easeOut" } },
  };

  return (
    <section id="research" className="relative py-24 border-b border-border">
      <div className="container mx-auto px-6 relative z-10">
        
        {/* Section Header */}
        <div className="mb-16 flex flex-col md:flex-row md:items-baseline gap-4 md:gap-8 justify-between">
          <div className="flex items-baseline gap-4 flex-grow">
            <h2 className="text-3xl md:text-5xl font-black text-foreground tracking-tight uppercase whitespace-nowrap">
              Research.<span className="text-accent">Output</span>
            </h2>
            <div className="h-px bg-border flex-grow mt-6 hidden md:block"></div>
          </div>
          
          <motion.a
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            href="https://scholar.google.com/citations?user=VOWIVtAAAAAJ&hl=en"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-6 py-2.5 bg-card border border-border text-foreground font-mono font-bold text-sm uppercase tracking-wider hover:border-accent hover:text-accent transition-all duration-300"
          >
            <BookOpen size={16} />
            Google Scholar
            <ExternalLink size={14} className="ml-1" />
          </motion.a>
        </div>

        <div className="grid md:grid-cols-2 gap-12">
          {/* Publications */}
          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-50px" }}
          >
            <h3 className="text-xl font-bold font-mono text-foreground mb-8 uppercase tracking-widest flex items-center">
              <span className="w-4 h-4 bg-accent mr-3"></span> Publications
            </h3>

            <div className="space-y-6">
              {publications.map((pub) => (
                <motion.div
                  variants={itemVariants}
                  key={pub.id}
                  className="group p-6 bg-card border border-border hover:border-accent transition-colors duration-300 relative"
                >
                  {/* Accent Line */}
                  <div className="absolute left-0 top-0 w-1 h-full bg-accent opacity-0 group-hover:opacity-100 transition-opacity"></div>
                  
                  {/* Status Badge */}
                  <div className="flex justify-between items-start mb-4">
                    <span
                      className={`text-xs font-mono font-bold tracking-wider uppercase px-2 py-1 border ${
                        pub.status.includes("Published")
                          ? "bg-accent/10 text-accent border-accent/30"
                          : "bg-muted text-muted-foreground border-border"
                      }`}
                    >
                      {pub.status}
                    </span>
                    <span className="text-xs font-mono text-muted-foreground">{pub.date}</span>
                  </div>

                  {/* Title */}
                  <h4 className="text-lg font-black text-foreground mb-3 uppercase tracking-tight">
                    {pub.title}
                  </h4>

                  {/* Authors */}
                  <p className="text-sm text-muted-foreground mb-6 font-mono leading-relaxed">
                    <span className="text-accent">AUTHORS:</span> {pub.authors}
                  </p>

                  {/* Conference */}
                  <div className="flex flex-col sm:flex-row sm:items-center justify-between pt-4 border-t border-border gap-2">
                    <div className="flex items-center text-sm">
                      <span className="text-foreground font-mono font-bold">
                        {pub.conference}
                      </span>
                    </div>
                    <span className="text-xs text-muted-foreground font-mono bg-muted px-2 py-1 border border-border self-start sm:self-auto">
                      {pub.publisher}
                    </span>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Conference Roles */}
          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-50px" }}
          >
            <h3 className="text-xl font-bold font-mono text-foreground mb-8 uppercase tracking-widest flex items-center">
              <span className="w-4 h-4 bg-accent mr-3"></span> Leadership
            </h3>

            <div className="space-y-4">
              {conferencRoles.map((role, index) => (
                <motion.div
                  variants={roleVariants}
                  key={index}
                  className="group p-5 bg-card border border-border hover:border-accent transition-colors duration-300 flex flex-col sm:flex-row sm:items-center justify-between gap-2"
                >
                  <div>
                    <h4 className="text-base font-black text-foreground uppercase tracking-tight">
                      {role.role}
                    </h4>
                    <p className="text-sm text-muted-foreground font-mono mt-1">
                      {role.conference}
                    </p>
                  </div>
                  <span className="text-xs font-mono font-bold text-accent bg-accent/10 px-2 py-1 border border-accent/20 self-start sm:self-auto shrink-0">
                    {role.year}
                  </span>
                </motion.div>
              ))}
            </div>

            {/* Additional Info */}
            <motion.div 
              variants={roleVariants}
              className="mt-8 p-6 bg-muted border border-border text-sm font-mono text-muted-foreground leading-relaxed"
            >
              <span className="text-accent font-bold block mb-2 text-base tracking-tight uppercase">
                &gt; Impact_Summary
              </span>
              Serving in multiple chair positions across prestigious
              conferences like COMSNETS and AIMLSystems, contributing to the
              academic community through app development, web management, and
              undergraduate forum coordination.
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default ResearchSection;

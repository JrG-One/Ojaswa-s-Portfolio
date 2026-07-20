import React, { useState, useRef } from "react";
import {
  ExternalLink,
  Github,
  Code2,
  Sparkles,
  Award,
  FileText,
} from "lucide-react";
import { projects } from "../mock";
import { motion, AnimatePresence } from "framer-motion";

const itemVariants = {
  hidden: { opacity: 0, y: 15 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.4, ease: "easeOut" } },
  exit: { opacity: 0, scale: 0.95, transition: { duration: 0.2 } },
};

const SpotlightCard = ({ children, className, isWide }) => {
  return (
    <motion.div
      layout
      variants={itemVariants}
      initial="hidden"
      animate="visible"
      exit="exit"
      className={`group flex flex-col bg-card border border-border overflow-hidden hover:border-accent transition-colors duration-300 z-10 ${className}`}
    >
      <div className={`flex w-full h-full ${isWide ? 'flex-col md:flex-row' : 'flex-col'}`}>
        {children}
      </div>
    </motion.div>
  );
};

const ProjectsSection = () => {
  const [filter, setFilter] = useState("all");

  const categories = [
    "all",
    ...new Set(projects.map((project) => project.category)),
  ];

  const filteredProjects =
    filter === "all"
      ? projects
      : projects.filter((project) => project.category === filter);

  const getCategoryIcon = (category) => {
    switch (category) {
      case "AI/ML":
        return <Sparkles size={14} />;
      case "Research":
        return <Award size={14} />;
      default:
        return <Code2 size={14} />;
    }
  };

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  };

  return (
    <section id="projects" className="relative py-24 border-b border-border">
      <div className="container mx-auto px-6 relative z-10">
        
        {/* Section Header */}
        <div className="mb-16 flex items-baseline gap-4">
          <h2 className="text-3xl md:text-5xl font-black text-foreground tracking-tight uppercase">
            Deploy.<span className="text-accent">Archive</span>
          </h2>
          <div className="h-px bg-border flex-grow mt-6"></div>
        </div>

        {/* Filter Buttons */}
        <div className="flex flex-wrap gap-2 mb-12">
          {categories.map((category) => (
            <button
              key={category}
              onClick={() => setFilter(category)}
              className={`px-4 py-1.5 font-mono text-sm uppercase tracking-wider transition-all duration-300 border ${
                filter === category
                  ? "bg-accent text-accent-foreground border-accent"
                  : "bg-muted text-muted-foreground border-border hover:border-accent hover:text-foreground"
              }`}
            >
              {category}
            </button>
          ))}
        </div>

        {/* Projects Grid */}
        <motion.div 
          layout
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6"
        >
          <AnimatePresence mode="popLayout">
            {filteredProjects.map((project, idx) => {
              // Asymmetric editorial grid logic
              const isWide = idx % 4 === 0 || idx % 4 === 3;
              const gridSpan = isWide ? "md:col-span-2 xl:col-span-2" : "col-span-1";
              
              const imgWrapperClasses = isWide 
                ? "relative w-full md:w-5/12 h-64 md:h-auto overflow-hidden bg-muted border-b md:border-b-0 md:border-r border-border flex-shrink-0"
                : "relative w-full h-56 overflow-hidden bg-muted border-b border-border flex-shrink-0";

              return (
                <SpotlightCard key={project.id} className={gridSpan} isWide={isWide}>
                  {/* Project Image Area */}
                  <div className={imgWrapperClasses}>
                    <img
                      src={project.image}
                      alt={project.title}
                      className="w-full h-full object-cover object-center transition-all duration-700 opacity-90 group-hover:opacity-100 group-hover:scale-[1.02]"
                      onError={(e) => {
                        e.target.onerror = null; 
                        e.target.src = 'https://images.unsplash.com/photo-1555066931-4365d14bab8c?q=80&w=800&auto=format&fit=crop';
                      }}
                    />
                    
                    {project.featured && (
                      <div className="absolute top-4 right-4 px-2 py-1 bg-background/80 text-foreground text-xs font-mono font-bold tracking-wider uppercase border border-accent flex items-center backdrop-blur-sm z-20">
                        <Sparkles size={12} className="mr-1.5 text-accent" />
                        Featured
                      </div>
                    )}
                    
                    <div className="absolute top-4 left-4 px-2 py-1 bg-background/80 text-foreground text-xs font-mono font-bold tracking-wider uppercase border border-border flex items-center backdrop-blur-sm z-20">
                      <span className="text-accent mr-1.5">{getCategoryIcon(project.category)}</span>
                      {project.category}
                    </div>
                  </div>

                  {/* Project Content */}
                  <div className={`p-6 md:p-8 flex flex-col flex-grow bg-card relative overflow-hidden`}>
                    <div className="absolute -right-10 -bottom-10 text-[8rem] font-black text-muted/20 pointer-events-none select-none z-0">
                      {(idx + 1).toString().padStart(2, '0')}
                    </div>
                    
                    <div className="relative z-10 flex flex-col h-full">
                      <h3 className={`font-black text-foreground mb-4 uppercase tracking-tight ${isWide ? 'text-3xl' : 'text-2xl'}`}>
                        {project.title}
                      </h3>
                      <p className={`text-muted-foreground mb-6 flex-grow leading-relaxed ${isWide ? 'text-base md:text-lg line-clamp-4' : 'text-sm line-clamp-3'}`}>
                        {isWide && project.longDescription ? project.longDescription : project.description}
                      </p>

                      {/* Status Badge */}
                      {project.status && (
                        <div className="mb-6">
                          <span className="px-2 py-1 bg-accent/10 border border-accent/50 text-xs font-mono tracking-wide text-accent inline-flex items-center">
                            <div className="w-1.5 h-1.5 bg-accent mr-2" />
                            {project.status}
                          </span>
                        </div>
                      )}

                      {/* Tech Stack */}
                      <div className="flex flex-wrap gap-2 mb-8">
                        {project.techStack.slice(0, isWide ? 6 : 4).map((tech, i) => (
                          <span
                            key={i}
                            className="text-xs text-muted-foreground font-mono before:content-['#'] before:text-accent"
                          >
                            {tech}
                          </span>
                        ))}
                        {project.techStack.length > (isWide ? 6 : 4) && (
                          <span className="text-xs text-muted-foreground font-mono">
                            +{project.techStack.length - (isWide ? 6 : 4)}
                          </span>
                        )}
                      </div>

                      {/* Links */}
                      <div className="flex flex-wrap gap-4 mt-auto pt-6 border-t border-border">
                        {project.githubUrl && (
                          <a
                            href={project.githubUrl}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="flex items-center text-xs font-mono font-bold uppercase tracking-wider text-muted-foreground hover:text-accent transition-colors"
                          >
                            <Github size={14} className="mr-1.5" />
                            Src
                          </a>
                        )}
                        {project.liveUrl && (
                          <a
                            href={project.liveUrl}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="flex items-center text-xs font-mono font-bold uppercase tracking-wider text-muted-foreground hover:text-accent transition-colors"
                          >
                            <ExternalLink size={14} className="mr-1.5" />
                            Live
                          </a>
                        )}
                        {project.posterUrl && (
                          <a
                            href={project.posterUrl}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="flex items-center text-xs font-mono font-bold uppercase tracking-wider text-muted-foreground hover:text-accent transition-colors"
                          >
                            <FileText size={14} className="mr-1.5" />
                            Poster
                          </a>
                        )}
                      </div>
                    </div>
                  </div>
                </SpotlightCard>
              );
            })}
          </AnimatePresence>
        </motion.div>
      </div>
    </section>
  );
};

export default ProjectsSection;

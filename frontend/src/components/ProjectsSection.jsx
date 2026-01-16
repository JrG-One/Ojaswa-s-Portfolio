import React, { useState } from "react";
import {
  ExternalLink,
  Github,
  Code2,
  Sparkles,
  Award,
  FileText,
} from "lucide-react";
import { projects } from "../mock";

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
        return <Sparkles size={16} />;
      case "Research":
        return <Award size={16} />;
      default:
        return <Code2 size={16} />;
    }
  };

  return (
    <section
      id="projects"
      className="relative py-20 bg-[#0f0f15] overflow-hidden"
    >
      <div className="container mx-auto px-6">
        {/* Section Header */}
        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-5xl font-bold text-[#e0e0e0] mb-4">
            <span className="text-[#00d9ff]">&lt;</span>Featured Projects
            <span className="text-[#00d9ff]">/&gt;</span>
          </h2>
          <div className="w-24 h-1 bg-[#00d9ff] mx-auto mb-8"></div>
          <p className="text-[#808080] text-lg max-w-2xl mx-auto">
            From AI-driven platforms to mobile apps, here are some of my
            impactful projects
          </p>
        </div>

        {/* Filter Buttons */}
        <div className="flex flex-wrap justify-center gap-4 mb-12">
          {categories.map((category) => (
            <button
              key={category}
              onClick={() => setFilter(category)}
              className={`px-6 py-2 rounded-full font-medium text-sm transition-all duration-300 ${filter === category
                ? "bg-[#00d9ff] text-[#0a0a0f] shadow-[0_0_20px_rgba(0,217,255,0.5)]"
                : "bg-[#0f0f15] text-[#808080] border border-[#00d9ff]/30 hover:border-[#00d9ff] hover:text-[#00d9ff]"
                }`}
            >
              {category.toUpperCase()}
            </button>
          ))}
        </div>

        {/* Projects Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredProjects.map((project, index) => (
            <div
              key={project.id}
              className={`group bg-[#0a0a0f] border border-[#00d9ff]/30 rounded-lg overflow-hidden hover:border-[#00d9ff] transition-all duration-300 hover:shadow-[0_0_30px_rgba(0,217,255,0.2)] hover:-translate-y-2 slide-in-up stagger-${(index % 3) + 1}`}
            >
              {/* Project Image */}
              <div className="relative h-48 overflow-hidden">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#0a0a0f] to-transparent opacity-60"></div>
                {project.featured && (
                  <div className="absolute top-4 right-4 px-3 py-1 bg-[#00ff88] text-[#0a0a0f] text-xs font-bold rounded-full flex items-center">
                    <Sparkles size={12} className="mr-1" />
                    Featured
                  </div>
                )}
                <div className="absolute top-4 left-4 px-3 py-1 bg-[#00d9ff]/90 backdrop-blur-sm text-[#0a0a0f] text-xs font-bold rounded-full flex items-center">
                  {getCategoryIcon(project.category)}
                  <span className="ml-1">{project.category}</span>
                </div>
              </div>

              {/* Project Content */}
              <div className="p-6">
                <h3 className="text-xl font-bold text-[#e0e0e0] mb-2 group-hover:text-[#00d9ff] transition-colors duration-300">
                  {project.title}
                </h3>
                <p className="text-[#808080] text-sm mb-4 line-clamp-3">
                  {project.description}
                </p>

                {/* Status Badge */}
                {project.status && (
                  <div className="mb-4 px-3 py-1 bg-[#00ff88]/10 border border-[#00ff88]/30 rounded text-xs text-[#00ff88] inline-block">
                    {project.status}
                  </div>
                )}

                {/* Tech Stack */}
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.techStack.slice(0, 4).map((tech, idx) => (
                    <span
                      key={idx}
                      className="px-2 py-1 bg-[#0f0f15] text-[#00d9ff] text-xs rounded border border-[#00d9ff]/30 font-mono"
                    >
                      {tech}
                    </span>
                  ))}
                  {project.techStack.length > 4 && (
                    <span className="px-2 py-1 bg-[#0f0f15] text-[#808080] text-xs rounded border border-[#808080]/30">
                      +{project.techStack.length - 4}
                    </span>
                  )}
                </div>

                {/* Links */}
                <div className="flex gap-3">
                  {project.githubUrl && (
                    <a
                      href={project.githubUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center text-[#808080] hover:text-[#00d9ff] transition-colors duration-300 text-sm"
                    >
                      <Github size={16} className="mr-1" />
                      Code
                    </a>
                  )}
                  {project.liveUrl && (
                    <a
                      href={project.liveUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center text-[#808080] hover:text-[#00d9ff] transition-colors duration-300 text-sm"
                    >
                      <ExternalLink size={16} className="mr-1" />
                      Live Demo
                    </a>
                  )}
                  {project.posterUrl && (
                    <a
                      href={project.posterUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center text-[#808080] hover:text-[#00ff88] transition-colors duration-300 text-sm"
                    >
                      <FileText size={16} className="mr-1" />
                      Poster
                    </a>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProjectsSection;

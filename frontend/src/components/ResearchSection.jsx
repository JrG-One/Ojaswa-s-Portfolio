import React from "react";
import { FileText, ExternalLink, Calendar, User } from "lucide-react";
import { publications, conferencRoles } from "../mock";

const ResearchSection = () => {
  return (
    <section
      id="research"
      className="relative py-20 bg-gradient-to-b from-[#0a0a0f] to-[#0f0f15] overflow-hidden"
    >
      <div className="container mx-auto px-6">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-[#e0e0e0] mb-4">
            <span className="text-[#00d9ff]">&lt;</span>Research & Publications
            <span className="text-[#00d9ff]">/&gt;</span>
          </h2>
          <div className="w-24 h-1 bg-[#00d9ff] mx-auto mb-6"></div>
          <p className="text-[#808080] text-lg max-w-2xl mx-auto">
            Academic contributions and conference leadership roles
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8 mb-12">
          {/* Publications */}
          <div>
            <div className="flex items-center mb-6">
              <FileText className="text-[#00d9ff] mr-3" size={24} />
              <h3 className="text-2xl font-bold text-[#00d9ff]">
                Publications
              </h3>
            </div>

            <div className="space-y-6">
              {publications.map((pub, index) => (
                <div
                  key={pub.id}
                  className={`p-6 bg-[#0f0f15]/50 border border-[#00d9ff]/30 rounded-lg backdrop-blur-sm hover:border-[#00d9ff] transition-all duration-300 hover:shadow-[0_0_30px_rgba(0,217,255,0.2)] slide-in-left stagger-${index + 1}`}
                >
                  {/* Status Badge */}
                  <div className="flex justify-between items-start mb-3">
                    <span
                      className={`text-xs font-bold px-3 py-1 rounded-full ${
                        pub.status.includes("Published")
                          ? "bg-[#00ff88]/20 text-[#00ff88] border border-[#00ff88]/30"
                          : "bg-[#00d9ff]/20 text-[#00d9ff] border border-[#00d9ff]/30"
                      }`}
                    >
                      {pub.status}
                    </span>
                    <span className="text-xs text-[#808080]">{pub.date}</span>
                  </div>

                  {/* Title */}
                  <h4 className="text-lg font-bold text-[#e0e0e0] mb-2 hover:text-[#00d9ff] transition-colors duration-300">
                    {pub.title}
                  </h4>

                  {/* Authors */}
                  <p className="text-sm text-[#808080] mb-2 flex items-start">
                    <User size={14} className="mr-2 mt-0.5 flex-shrink-0" />
                    <span>{pub.authors}</span>
                  </p>

                  {/* Conference */}
                  <div className="flex items-center justify-between mt-4 pt-4 border-t border-[#00d9ff]/20">
                    <div className="flex items-center text-sm">
                      <Calendar size={14} className="mr-2 text-[#00d9ff]" />
                      <span className="text-[#00d9ff] font-medium">
                        {pub.conference}
                      </span>
                    </div>
                    <span className="text-xs text-[#808080]">
                      {pub.publisher}
                    </span>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Conference Roles */}
          <div>
            <div className="flex items-center mb-6">
              <User className="text-[#00ff88] mr-3" size={24} />
              <h3 className="text-2xl font-bold text-[#00ff88]">
                Conference Leadership
              </h3>
            </div>

            <div className="space-y-4">
              {conferencRoles.map((role, index) => (
                <div
                  key={index}
                  className={`p-6 bg-[#0f0f15]/50 border border-[#00ff88]/30 rounded-lg backdrop-blur-sm hover:border-[#00ff88] transition-all duration-300 hover:shadow-[0_0_30px_rgba(0,255,136,0.2)] slide-in-right stagger-${index + 1}`}
                >
                  <div className="flex justify-between items-start mb-2">
                    <h4 className="text-lg font-bold text-[#e0e0e0]">
                      {role.role}
                    </h4>
                    <span className="text-xs text-[#808080]">{role.year}</span>
                  </div>
                  <p className="text-sm text-[#00ff88] font-medium">
                    {role.conference}
                  </p>
                </div>
              ))}
            </div>

            {/* Additional Info */}
            <div className="mt-6 p-6 bg-[#00ff88]/10 border border-[#00ff88]/30 rounded-lg">
              <p className="text-[#e0e0e0] text-sm leading-relaxed">
                <span className="text-[#00ff88] font-bold">
                  Leadership Impact:
                </span>{" "}
                Serving in multiple chair positions across prestigious
                conferences like COMSNETS and AIMLSystems, contributing to the
                academic community through app development, web management, and
                undergraduate forum coordination.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ResearchSection;

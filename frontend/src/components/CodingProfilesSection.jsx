import React from "react";
import { ExternalLink, Trophy, TrendingUp } from "lucide-react";
import { codingProfiles } from "../mock";

const CodingProfilesSection = () => {
  return (
    <section
      id="coding-profiles"
      className="relative py-20 bg-[#0f0f15] overflow-hidden"
    >
      <div className="container mx-auto px-6">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-[#e0e0e0] mb-4">
            <span className="text-[#00d9ff]">&lt;</span>Coding Profiles
            <span className="text-[#00d9ff]">/&gt;</span>
          </h2>
          <div className="w-24 h-1 bg-[#00d9ff] mx-auto mb-6"></div>
          <p className="text-[#808080] text-lg max-w-2xl mx-auto">
            Competitive programming stats and achievements across platforms
          </p>
        </div>

        {/* Profiles Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {codingProfiles.map((profile, index) => (
            <a
              key={profile.platform}
              href={profile.url}
              target="_blank"
              rel="noopener noreferrer"
              className={`group p-6 bg-[#0a0a0f] border border-[#00d9ff]/30 rounded-lg hover:border-[#00d9ff] transition-all duration-300 hover:shadow-[0_0_30px_rgba(0,217,255,0.2)] hover:-translate-y-2 slide-in-up stagger-${(index % 4) + 1}`}
            >
              {/* Platform Header */}
              <div className="flex justify-between items-start mb-4">
                <div>
                  <h3 className="text-xl font-bold text-[#e0e0e0] group-hover:text-[#00d9ff] transition-colors duration-300 flex items-center">
                    {profile.platform}
                    <ExternalLink
                      size={16}
                      className="ml-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                    />
                  </h3>
                  <p className="text-xs text-[#808080] mt-1">
                    @{profile.username}
                  </p>
                </div>
                <div
                  className="p-2 rounded-lg"
                  style={{ backgroundColor: `${profile.color}20` }}
                >
                  <Trophy size={20} style={{ color: profile.color }} />
                </div>
              </div>

              {/* Stats */}
              <div className="space-y-3">
                {/* Max Rating */}
                <div className="flex items-center justify-between">
                  <span className="text-sm text-[#808080]">Max Rating</span>
                  <span
                    className="text-lg font-bold"
                    style={{ color: profile.color }}
                  >
                    {profile.maxRating}
                  </span>
                </div>

                {/* Badge */}
                {profile.badge && (
                  <div className="flex items-center justify-between">
                    <span className="text-sm text-[#808080]">Badge</span>
                    <span
                      className="text-sm font-bold px-2 py-1 rounded"
                      style={{
                        backgroundColor: `${profile.color}20`,
                        color: profile.color,
                      }}
                    >
                      {profile.badge}
                    </span>
                  </div>
                )}

                {/* Rank */}
                {profile.rank && (
                  <div className="flex items-center justify-between">
                    <span className="text-sm text-[#808080]">Rank</span>
                    <span className="text-sm font-bold text-[#00ff88]">
                      {profile.rank}
                    </span>
                  </div>
                )}

                {/* Problems Solved */}
                <div className="flex items-center justify-between pt-3 border-t border-[#00d9ff]/20">
                  <span className="text-sm text-[#808080] flex items-center">
                    <TrendingUp size={14} className="mr-1" />
                    Solved
                  </span>
                  <span className="text-lg font-bold text-[#00d9ff]">
                    {profile.problemsSolved}+
                  </span>
                </div>
              </div>
            </a>
          ))}
        </div>

        {/* Summary Card */}
        <div className="mt-12 max-w-3xl mx-auto p-8 bg-[#0a0a0f] border border-[#00d9ff]/30 rounded-lg backdrop-blur-sm">
          <div className="text-center">
            <h3 className="text-2xl font-bold text-[#00d9ff] mb-4">
              Total Impact
            </h3>
            <div className="grid grid-cols-2 md:grid-cols-3 gap-6">
              <div>
                <div className="text-3xl font-bold text-[#00ff88] mb-1">
                  600+
                </div>
                <div className="text-sm text-[#808080]">
                  Total Problems Solved
                </div>
              </div>
              <div>
                <div className="text-3xl font-bold text-[#00d9ff] mb-1">
                  2134
                </div>
                <div className="text-sm text-[#808080]">
                  Peak LeetCode Rating
                </div>
              </div>
              <div className="col-span-2 md:col-span-1">
                <div className="text-3xl font-bold text-[#ff0055] mb-1">
                  Top 1.3%
                </div>
                <div className="text-sm text-[#808080]">
                  Global Ranking
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CodingProfilesSection;

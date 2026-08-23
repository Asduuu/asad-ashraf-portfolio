import React, { useState } from 'react';
import { skillCategories } from '../data/portfolioData';
import { Cpu, Database, Layout, Code, Search, Sparkles, CheckCircle2 } from 'lucide-react';

export default function SkillsSection() {
  const [activeTabIdx, setActiveTabIdx] = useState(0);
  const [searchQuery, setSearchQuery] = useState("");

  const currentCategory = skillCategories[activeTabIdx];

  // Helper icon selector
  const getCategoryIcon = (iconName) => {
    switch (iconName) {
      case 'brain-circuit': return <Cpu className="w-4 h-4 text-[#c8f332]" />;
      case 'database': return <Database className="w-4 h-4 text-cyan-400" />;
      case 'layout': return <Layout className="w-4 h-4 text-purple-400" />;
      case 'code': return <Code className="w-4 h-4 text-emerald-400" />;
      default: return <Sparkles className="w-4 h-4 text-[#c8f332]" />;
    }
  };

  const filteredSkills = currentCategory.skills.filter((s) =>
    s.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
    s.tag.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <section id="skills" className="py-24 relative bg-[#090b0e] border-t border-white/5">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-6">
          <div>
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#c8f332]/10 border border-[#c8f332]/30 text-[#c8f332] text-xs font-mono mb-3">
              <Cpu className="w-3.5 h-3.5" />
              <span>TECHNICAL STACK & COMPETENCY</span>
            </div>
            <h2 className="font-syne text-3xl sm:text-5xl font-extrabold text-white">
              Skills, AI Frameworks & Tools
            </h2>
            <p className="text-slate-400 text-sm sm:text-base mt-2 max-w-xl font-light">
              Comprehensive range across Machine Learning, Generative AI, backend microservices, and high-performance algorithms.
            </p>
          </div>

          {/* Search Bar */}
          <div className="relative w-full md:w-72">
            <Search className="w-4 h-4 text-slate-400 absolute left-3.5 top-1/2 -translate-y-1/2" />
            <input
              type="text"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder="Search skill (e.g. FastAPI, RAG, PyTorch)..."
              className="w-full pl-10 pr-4 py-2.5 rounded-2xl bg-white/5 border border-white/10 text-xs font-mono text-slate-100 placeholder-slate-500 focus:outline-none focus:border-[#c8f332]"
            />
          </div>
        </div>

        {/* Tab Navigation */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-3 mb-10">
          {skillCategories.map((cat, idx) => (
            <button
              key={cat.id}
              onClick={() => setActiveTabIdx(idx)}
              className={`p-4 rounded-2xl border text-left transition-all cursor-pointer flex items-center gap-3 ${
                activeTabIdx === idx
                  ? 'glass-card border-[#c8f332] bg-[#12151e] shadow-lg shadow-[#c8f332]/10'
                  : 'bg-white/5 border-white/10 hover:border-white/20 hover:bg-white/10'
              }`}
            >
              <div className="p-2.5 rounded-xl bg-white/5 border border-white/10">
                {getCategoryIcon(cat.icon)}
              </div>
              <div>
                <div className="text-xs font-syne font-bold text-white leading-snug">
                  {cat.title}
                </div>
                <div className="text-[10px] font-mono text-slate-400 mt-0.5">
                  {cat.skills.length} core tools
                </div>
              </div>
            </button>
          ))}
        </div>

        {/* Active Skill Category Grid */}
        <div className="p-8 rounded-3xl glass-card border border-white/10 bg-[#0d1017]">
          <div className="flex items-center justify-between border-b border-white/10 pb-4 mb-8">
            <div className="flex items-center gap-2">
              {getCategoryIcon(currentCategory.icon)}
              <h3 className="font-syne text-xl font-bold text-white">{currentCategory.title}</h3>
            </div>
            <span className="text-xs font-mono text-slate-400 font-light">
              {currentCategory.description}
            </span>
          </div>

          {/* Skill Bars */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-x-8 gap-y-6">
            {filteredSkills.map((skill) => (
              <div key={skill.name} className="space-y-2 group">
                <div className="flex items-center justify-between">
                  <span className="text-sm font-semibold text-white group-hover:text-[#c8f332] transition-colors flex items-center gap-2">
                    <CheckCircle2 className="w-3.5 h-3.5 text-[#c8f332]" />
                    {skill.name}
                  </span>
                  <span className="text-xs font-mono text-[#c8f332] font-bold">
                    {skill.level}%
                  </span>
                </div>

                <div className="h-2 w-full rounded-full bg-white/5 overflow-hidden p-0.5 border border-white/5">
                  <div
                    className="h-full rounded-full bg-gradient-to-r from-[#c8f332] to-[#00f2fe] transition-all duration-1000 ease-out"
                    style={{ width: `${skill.level}%` }}
                  />
                </div>

                <div className="text-[11px] font-mono text-slate-400 pl-5">
                  {skill.tag}
                </div>
              </div>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
}

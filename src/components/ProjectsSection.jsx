import React, { useState } from 'react';
import { projects } from '../data/portfolioData';
import { ExternalLink, Sparkles, Layers, Cpu, ShieldCheck, CheckCircle, X, Code2, ArrowUpRight } from 'lucide-react';
import { Github } from './Icons';

export default function ProjectsSection() {
  const [activeCategory, setActiveCategory] = useState("All");
  const [selectedProject, setSelectedProject] = useState(null);

  const categories = ["All", "GenAI & LLMs", "Healthcare AI", "Security & ML", "Full-Stack ERP"];

  const filteredProjects = activeCategory === "All"
    ? projects
    : projects.filter((p) => p.category === activeCategory);

  return (
    <section id="projects" className="py-24 relative bg-[#08090b]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-6">
          <div>
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#c8f332]/10 border border-[#c8f332]/30 text-[#c8f332] text-xs font-mono mb-3">
              <Layers className="w-3.5 h-3.5" />
              <span>FEATURED PRODUCTION ARCHITECTURES</span>
            </div>
            <h2 className="font-syne text-3xl sm:text-5xl font-extrabold text-white">
              Featured Systems & AI Workflows
            </h2>
            <p className="text-slate-400 text-sm sm:text-base mt-2 max-w-xl font-light">
              Hands-on enterprise applications, stateful RAG agents, NLP security firewalls, and full-stack software.
            </p>
          </div>

          {/* Category Filter Pills */}
          <div className="flex flex-wrap items-center gap-2 p-1.5 rounded-2xl bg-white/5 border border-white/10 backdrop-blur-md">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setActiveCategory(cat)}
                className={`px-3.5 py-1.5 rounded-xl text-xs font-mono transition-all cursor-pointer ${
                  activeCategory === cat
                    ? 'bg-[#c8f332] text-black font-bold shadow-lg shadow-[#c8f332]/20'
                    : 'text-slate-400 hover:text-white hover:bg-white/5'
                }`}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>

        {/* Projects Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {filteredProjects.map((project) => (
            <div
              key={project.id}
              className="group relative rounded-3xl glass-card border border-white/10 p-8 glass-card-hover flex flex-col justify-between overflow-hidden bg-gradient-to-b from-[#0f121a] to-[#0a0c10]"
            >
              {/* Top Bar */}
              <div>
                <div className="flex items-center justify-between gap-4 mb-4">
                  <span className="px-3 py-1 rounded-full text-[11px] font-mono font-semibold bg-[#c8f332]/10 text-[#c8f332] border border-[#c8f332]/30">
                    {project.badge}
                  </span>
                  <span className="text-xs font-mono text-slate-500">
                    {project.period}
                  </span>
                </div>

                <h3 className="font-syne text-2xl font-bold text-white group-hover:text-[#c8f332] transition-colors mb-2">
                  {project.title}
                </h3>

                <p className="text-xs font-mono text-cyan-400 mb-4">
                  {project.tagline}
                </p>

                <p className="text-sm text-slate-300 leading-relaxed font-light mb-6">
                  {project.description}
                </p>

                {/* Technical Highlights */}
                <div className="space-y-2 mb-6 bg-[#08090b]/80 p-4 rounded-2xl border border-white/5">
                  <div className="text-[11px] font-mono text-slate-400 uppercase tracking-wider mb-2 flex items-center gap-1.5">
                    <Sparkles className="w-3 h-3 text-[#c8f332]" />
                    Key Architecture Specs:
                  </div>
                  {project.highlights.slice(0, 3).map((hl, i) => (
                    <div key={i} className="flex items-start gap-2 text-xs text-slate-300 font-light">
                      <CheckCircle className="w-3.5 h-3.5 text-[#c8f332] shrink-0 mt-0.5" />
                      <span>{hl}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Bottom Tech Tags & Modal Trigger */}
              <div>
                <div className="flex flex-wrap gap-1.5 mb-6">
                  {project.tags.map((tag) => (
                    <span key={tag} className="px-2.5 py-1 rounded-lg text-[11px] font-mono bg-white/5 text-slate-300 border border-white/5">
                      {tag}
                    </span>
                  ))}
                </div>

                <div className="flex items-center justify-between pt-4 border-t border-white/10">
                  <button
                    onClick={() => setSelectedProject(project)}
                    className="text-xs font-mono text-[#c8f332] hover:underline flex items-center gap-1 font-semibold cursor-pointer"
                  >
                    <span>View Architecture Details</span>
                    <ArrowUpRight className="w-3.5 h-3.5" />
                  </button>

                  <div className="flex items-center gap-3">
                    <a
                      href={project.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="p-2 rounded-xl bg-white/5 border border-white/10 hover:border-[#c8f332] text-slate-300 hover:text-white transition-all"
                      title="View GitHub Code"
                    >
                      <Github className="w-4 h-4" />
                    </a>
                  </div>
                </div>
              </div>

            </div>
          ))}
        </div>

      </div>

      {/* Project Architecture Modal */}
      {selectedProject && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-md animate-fadeIn">
          <div className="relative w-full max-w-3xl max-h-[90vh] overflow-y-auto rounded-3xl glass-card border border-white/20 p-6 sm:p-8 bg-[#0c0f17] text-slate-100 shadow-2xl space-y-6">
            
            {/* Modal Close */}
            <button
              onClick={() => setSelectedProject(null)}
              className="absolute top-6 right-6 p-2 rounded-full bg-white/10 hover:bg-white/20 text-slate-300 hover:text-white transition-colors"
            >
              <X className="w-5 h-5" />
            </button>

            {/* Modal Title */}
            <div>
              <span className="px-3 py-1 rounded-full text-xs font-mono font-semibold bg-[#c8f332]/10 text-[#c8f332] border border-[#c8f332]/30 mb-3 inline-block">
                {selectedProject.category} • {selectedProject.period}
              </span>
              <h2 className="font-syne text-3xl font-bold text-white">{selectedProject.title}</h2>
              <p className="text-xs font-mono text-cyan-400 mt-1">{selectedProject.tagline}</p>
            </div>

            {/* Modal Description */}
            <p className="text-sm text-slate-300 leading-relaxed font-light">
              {selectedProject.longDescription}
            </p>

            {/* Architecture Pipeline Step Breakdown */}
            <div className="bg-[#08090b] p-5 rounded-2xl border border-white/10 space-y-3">
              <div className="text-xs font-mono text-[#c8f332] uppercase tracking-wider font-semibold flex items-center gap-1.5">
                <Code2 className="w-4 h-4" />
                Data Flow & Execution Pipeline
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-3 gap-2 pt-2">
                {selectedProject.architecture.map((step, idx) => (
                  <div key={idx} className="p-3 rounded-xl bg-white/5 border border-white/5 text-center">
                    <div className="text-[10px] font-mono text-slate-500 mb-1">Step 0{idx+1}</div>
                    <div className="text-xs font-mono text-slate-200 font-semibold">{step}</div>
                  </div>
                ))}
              </div>
            </div>

            {/* Highlights List */}
            <div>
              <h4 className="text-xs font-mono text-slate-400 uppercase tracking-wider mb-3">Complete Engineering Highlights</h4>
              <div className="space-y-2">
                {selectedProject.highlights.map((hl, i) => (
                  <div key={i} className="flex items-start gap-2.5 text-xs text-slate-300">
                    <CheckCircle className="w-4 h-4 text-[#c8f332] shrink-0 mt-0.5" />
                    <span>{hl}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Metric Pills */}
            <div className="grid grid-cols-3 gap-3 pt-2">
              {selectedProject.metrics.map((m, i) => (
                <div key={i} className="p-3 rounded-xl bg-white/5 border border-white/10 text-center">
                  <div className="text-base font-syne font-bold text-[#c8f332]">{m.value}</div>
                  <div className="text-[10px] font-mono text-slate-400">{m.label}</div>
                </div>
              ))}
            </div>

            {/* Action Footer */}
            <div className="pt-4 border-t border-white/10 flex items-center justify-between">
              <a
                href={selectedProject.github}
                target="_blank"
                rel="noopener noreferrer"
                className="px-5 py-2.5 rounded-full bg-[#c8f332] text-black font-semibold text-xs flex items-center gap-2 hover:bg-[#b0dc1a] transition-all"
              >
                <Github className="w-4 h-4" />
                <span>View Source Code</span>
              </a>

              <button
                onClick={() => setSelectedProject(null)}
                className="px-5 py-2.5 rounded-full bg-white/10 text-slate-300 hover:text-white text-xs font-mono"
              >
                Close Window
              </button>
            </div>

          </div>
        </div>
      )}

    </section>
  );
}

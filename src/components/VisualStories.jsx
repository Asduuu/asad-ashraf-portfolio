import React, { useState } from 'react';
import { visualStories } from '../data/portfolioData';
import { ChevronRight, ChevronLeft, Sparkles, CheckCircle2, ArrowRight } from 'lucide-react';

export default function VisualStories() {
  const [activeStoryIdx, setActiveStoryIdx] = useState(0);
  const [activeStepIdx, setActiveStepIdx] = useState(0);

  const currentStory = visualStories[activeStoryIdx];

  // SVG Stick Figure Illustrations for Story Steps
  const renderStepStickFigure = (storyId, stepNumber) => {
    if (storyId === "ai-workflow") {
      switch (stepNumber) {
        case "01": // RAW DATA & MESSY PDF
          return (
            <svg className="w-full h-44" viewBox="0 0 300 160" fill="none" xmlns="http://www.w3.org/2000/svg">
              {/* Confused Person */}
              <circle cx="90" cy="50" r="16" stroke="#e2e8f0" strokeWidth="2.5" />
              <line x1="90" y1="66" x2="90" y2="110" stroke="#e2e8f0" strokeWidth="2.5" />
              <line x1="90" y1="80" x2="70" y2="95" stroke="#e2e8f0" strokeWidth="2.5" />
              <line x1="90" y1="80" x2="110" y2="95" stroke="#e2e8f0" strokeWidth="2.5" />
              <line x1="90" y1="110" x2="75" y2="145" stroke="#e2e8f0" strokeWidth="2.5" />
              <line x1="90" y1="110" x2="105" y2="145" stroke="#e2e8f0" strokeWidth="2.5" />
              {/* Messy Document Cloud */}
              <path d="M160 40 L210 30 L230 70 L180 80 Z" stroke="#ef4444" strokeWidth="2" strokeDasharray="4 4" />
              <text x="170" y="55" fill="#f87171" fontSize="10" fontFamily="mono">.PDF ?</text>
              <text x="180" y="70" fill="#ef4444" fontSize="11" fontFamily="mono">NOISE</text>
              <path d="M210 80 L250 90 L240 130 L200 120 Z" stroke="#e2e8f0" strokeWidth="1.5" strokeDasharray="3 3" opacity="0.6" />
              {/* Question mark clouds */}
              <text x="115" y="45" fill="#c8f332" fontSize="20" fontWeight="bold">?</text>
              <text x="135" y="30" fill="#c8f332" fontSize="16">!</text>
            </svg>
          );
        case "02": // MEET ASAD - PIPELINE & EMBEDDINGS
          return (
            <svg className="w-full h-44" viewBox="0 0 300 160" fill="none" xmlns="http://www.w3.org/2000/svg">
              {/* Stick Figure 1: Client */}
              <circle cx="60" cy="50" r="16" stroke="#e2e8f0" strokeWidth="2.5" />
              <line x1="60" y1="66" x2="60" y2="110" stroke="#e2e8f0" strokeWidth="2.5" />
              <line x1="60" y1="80" x2="80" y2="75" stroke="#e2e8f0" strokeWidth="2.5" />
              <line x1="60" y1="110" x2="48" y2="145" stroke="#e2e8f0" strokeWidth="2.5" />
              <line x1="60" y1="110" x2="72" y2="145" stroke="#e2e8f0" strokeWidth="2.5" />

              {/* Shaking hands with Asad (Lime Figure) */}
              <circle cx="120" cy="50" r="16" stroke="#c8f332" strokeWidth="3" />
              <line x1="120" y1="66" x2="120" y2="110" stroke="#c8f332" strokeWidth="3" />
              <line x1="120" y1="80" x2="80" y2="75" stroke="#c8f332" strokeWidth="3" />
              <line x1="120" y1="80" x2="140" y2="95" stroke="#c8f332" strokeWidth="3" />
              <line x1="120" y1="110" x2="108" y2="145" stroke="#c8f332" strokeWidth="3" />
              <line x1="120" y1="110" x2="132" y2="145" stroke="#c8f332" strokeWidth="3" />

              {/* Glowing Vector Embedding Box */}
              <rect x="180" y="35" width="90" height="90" rx="10" stroke="#c8f332" strokeWidth="2" fill="rgba(200, 243, 50, 0.05)" />
              <text x="195" y="60" fill="#c8f332" fontSize="11" fontFamily="mono">SBERT</text>
              <text x="195" y="80" fill="#00f2fe" fontSize="10" fontFamily="mono">Vectors[]</text>
              <text x="195" y="100" fill="#e2e8f0" fontSize="10" fontFamily="mono">Pydantic</text>
            </svg>
          );
        case "03": // LANGGRAPH & RAG
          return (
            <svg className="w-full h-44" viewBox="0 0 300 160" fill="none" xmlns="http://www.w3.org/2000/svg">
              {/* Asad at laptop */}
              <circle cx="90" cy="45" r="16" stroke="#c8f332" strokeWidth="2.5" />
              <line x1="90" y1="61" x2="90" y2="100" stroke="#c8f332" strokeWidth="2.5" />
              <line x1="90" y1="75" x2="120" y2="85" stroke="#c8f332" strokeWidth="2.5" />
              <line x1="90" y1="100" x2="75" y2="140" stroke="#c8f332" strokeWidth="2.5" />
              <line x1="90" y1="100" x2="105" y2="140" stroke="#c8f332" strokeWidth="2.5" />

              {/* Laptop Desk */}
              <rect x="110" y="85" width="50" height="25" rx="3" stroke="#e2e8f0" strokeWidth="2" />
              <line x1="100" y1="110" x2="170" y2="110" stroke="#e2e8f0" strokeWidth="3" />

              {/* Floating Graph Network */}
              <circle cx="210" cy="45" r="12" fill="#c8f332" opacity="0.8" />
              <circle cx="260" cy="75" r="10" fill="#00f2fe" opacity="0.8" />
              <circle cx="220" cy="115" r="12" fill="#8b5cf6" opacity="0.8" />
              <line x1="210" y1="45" x2="260" y2="75" stroke="#c8f332" strokeWidth="2" />
              <line x1="260" y1="75" x2="220" y2="115" stroke="#00f2fe" strokeWidth="2" />
              <line x1="210" y1="45" x2="220" y2="115" stroke="#8b5cf6" strokeWidth="2" />
              <text x="218" y="50" fill="#000" fontSize="8" fontWeight="bold">RAG</text>
            </svg>
          );
        case "04": // PRODUCTION READY
          return (
            <svg className="w-full h-44" viewBox="0 0 300 160" fill="none" xmlns="http://www.w3.org/2000/svg">
              {/* Happy Asad cheering */}
              <circle cx="100" cy="45" r="16" stroke="#c8f332" strokeWidth="3" />
              <line x1="100" y1="61" x2="100" y2="105" stroke="#c8f332" strokeWidth="3" />
              <line x1="100" y1="75" x2="75" y2="50" stroke="#c8f332" strokeWidth="3" />
              <line x1="100" y1="75" x2="125" y2="50" stroke="#c8f332" strokeWidth="3" />
              <line x1="100" y1="105" x2="85" y2="145" stroke="#c8f332" strokeWidth="3" />
              <line x1="100" y1="105" x2="115" y2="145" stroke="#c8f332" strokeWidth="3" />

              {/* Rocket & Docker Container */}
              <path d="M190 120 C 190 60, 230 30, 230 30 C 230 30, 270 60, 270 120 Z" stroke="#00f2fe" strokeWidth="2.5" fill="rgba(0, 242, 254, 0.1)" />
              <circle cx="230" cy="70" r="10" stroke="#c8f332" strokeWidth="2" />
              <text x="215" y="110" fill="#c8f332" fontSize="11" fontFamily="mono" fontWeight="bold">FastAPI</text>
              {/* Dollar / Success symbols */}
              <text x="140" y="45" fill="#c8f332" fontSize="20" fontWeight="bold">✨</text>
              <text x="250" y="40" fill="#00f2fe" fontSize="16" fontWeight="bold">100%</text>
            </svg>
          );
        default:
          return null;
      }
    } else {
      // Story 2: Enterprise AI Defense Climb
      switch (stepNumber) {
        case "01": // STRUGGLE / LEAKS
          return (
            <svg className="w-full h-44" viewBox="0 0 300 160" fill="none" xmlns="http://www.w3.org/2000/svg">
              <line x1="150" y1="20" x2="150" y2="140" stroke="#475569" strokeWidth="3" strokeDasharray="4 4" />
              <text x="165" y="35" fill="#ef4444" fontSize="11" fontFamily="mono">PII LEAK RISKS</text>
              <circle cx="150" cy="110" r="14" stroke="#ef4444" strokeWidth="2.5" />
              <line x1="150" y1="124" x2="150" y2="150" stroke="#ef4444" strokeWidth="2.5" />
              <text x="110" y="115" fill="#f87171" fontSize="20">?</text>
            </svg>
          );
        case "02": // CEREBRAOS FIREWALL
          return (
            <svg className="w-full h-44" viewBox="0 0 300 160" fill="none" xmlns="http://www.w3.org/2000/svg">
              <line x1="150" y1="20" x2="150" y2="140" stroke="#c8f332" strokeWidth="3" />
              <circle cx="150" cy="80" r="14" stroke="#e2e8f0" strokeWidth="2.5" />
              {/* Asad holding shield below */}
              <circle cx="120" cy="100" r="14" stroke="#c8f332" strokeWidth="3" />
              <rect x="160" y="60" width="80" height="40" rx="6" stroke="#c8f332" fill="rgba(200,243,50,0.1)" />
              <text x="170" y="85" fill="#c8f332" fontSize="10" fontFamly="mono">CerebraOS</text>
            </svg>
          );
        case "03": // ASCEND / SANITIZE
          return (
            <svg className="w-full h-44" viewBox="0 0 300 160" fill="none" xmlns="http://www.w3.org/2000/svg">
              <line x1="150" y1="20" x2="150" y2="140" stroke="#c8f332" strokeWidth="3" />
              <circle cx="150" cy="45" r="14" stroke="#c8f332" strokeWidth="3" />
              <text x="175" y="45" fill="#c8f332" fontSize="12" fontWeight="bold">Sanitized!</text>
            </svg>
          );
        case "04": // SUMMIT / SECURE
          return (
            <svg className="w-full h-44" viewBox="0 0 300 160" fill="none" xmlns="http://www.w3.org/2000/svg">
              <line x1="150" y1="20" x2="150" y2="140" stroke="#c8f332" strokeWidth="4" />
              <path d="M150 25 L190 35 L150 45 Z" fill="#c8f332" />
              <text x="160" y="80" fill="#00f2fe" fontSize="14" fontWeight="bold">Zero Leaks!</text>
            </svg>
          );
        default:
          return null;
      }
    }
  };

  return (
    <section id="stories" className="py-24 relative bg-[#090b0e] border-y border-white/5">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
          <div>
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#c8f332]/10 border border-[#c8f332]/30 text-[#c8f332] text-xs font-mono mb-4">
              <Sparkles className="w-3.5 h-3.5" />
              <span>VISUAL ARCHITECTURE STORY</span>
            </div>
            <h2 className="font-syne text-3xl sm:text-5xl font-extrabold text-white tracking-tight">
              {currentStory.title}
            </h2>
            <p className="text-slate-400 text-base max-w-2xl mt-2 font-light">
              {currentStory.subtitle}
            </p>
          </div>

          {/* Switch Story Tabs */}
          <div className="flex items-center gap-2 p-1.5 rounded-2xl bg-white/5 border border-white/10 backdrop-blur-md">
            {visualStories.map((story, idx) => (
              <button
                key={story.id}
                onClick={() => {
                  setActiveStoryIdx(idx);
                  setActiveStepIdx(0);
                }}
                className={`px-4 py-2 rounded-xl text-xs font-mono transition-all cursor-pointer ${
                  activeStoryIdx === idx
                    ? 'bg-[#c8f332] text-black font-bold shadow-lg shadow-[#c8f332]/20'
                    : 'text-slate-400 hover:text-white'
                }`}
              >
                {story.id === 'ai-workflow' ? '01. AI Workflow' : '02. AI Defense'}
              </button>
            ))}
          </div>
        </div>

        {/* 4-Step Interactive Story Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {currentStory.steps.map((step, idx) => {
            const isSelected = activeStepIdx === idx;

            return (
              <div
                key={step.number}
                onClick={() => setActiveStepIdx(idx)}
                className={`group relative rounded-2xl p-6 transition-all duration-300 cursor-pointer ${
                  isSelected
                    ? 'glass-card border-[#c8f332] bg-[#12151e] shadow-2xl shadow-[#c8f332]/10 scale-[1.02]'
                    : 'bg-white/5 border border-white/10 hover:border-white/20 hover:bg-white/10'
                }`}
              >
                {/* Step Header */}
                <div className="flex items-center justify-between border-b border-white/10 pb-3 mb-4">
                  <span className={`font-mono text-xs font-bold px-2.5 py-1 rounded-md ${
                    isSelected ? 'bg-[#c8f332] text-black' : 'bg-white/10 text-slate-400'
                  }`}>
                    {step.number}
                  </span>
                  <span className="text-[10px] font-mono text-slate-400 truncate max-w-[120px]">
                    {step.status}
                  </span>
                </div>

                {/* SVG Visual Illustration */}
                <div className="bg-[#08090b] rounded-xl p-2 border border-white/5 mb-4 overflow-hidden flex items-center justify-center">
                  {renderStepStickFigure(currentStory.id, step.number)}
                </div>

                {/* Title & Description */}
                <h3 className="font-syne text-sm font-bold text-white mb-2 tracking-wide group-hover:text-[#c8f332] transition-colors">
                  {step.stage}
                </h3>
                
                <p className="text-xs text-slate-400 leading-relaxed font-light">
                  {step.desc}
                </p>

                {/* Bottom Active Indicator */}
                {isSelected && (
                  <div className="mt-4 flex items-center gap-1.5 text-[11px] font-mono text-[#c8f332]">
                    <CheckCircle2 className="w-3.5 h-3.5" />
                    <span>Active View Step</span>
                  </div>
                )}
              </div>
            );
          })}
        </div>

        {/* Narrative Step Highlight Footer */}
        <div className="mt-10 p-6 rounded-2xl glass-card border border-white/10 flex flex-col md:flex-row items-center justify-between gap-6 bg-gradient-to-r from-slate-900/90 via-[#0e121a] to-slate-900/90">
          <div className="flex items-center gap-4">
            <div className="w-12 h-12 rounded-2xl bg-[#c8f332]/10 border border-[#c8f332]/30 flex items-center justify-center text-[#c8f332] font-mono font-bold text-lg">
              {currentStory.steps[activeStepIdx].number}
            </div>
            <div>
              <div className="text-xs font-mono text-[#c8f332] uppercase tracking-wider">
                Current Focus: {currentStory.steps[activeStepIdx].stage}
              </div>
              <p className="text-sm text-slate-200 mt-0.5">
                {currentStory.steps[activeStepIdx].desc}
              </p>
            </div>
          </div>

          <div className="flex items-center gap-2">
            <button
              onClick={() => setActiveStepIdx((prev) => (prev > 0 ? prev - 1 : currentStory.steps.length - 1))}
              className="p-2.5 rounded-xl bg-white/5 border border-white/10 hover:bg-white/10 text-slate-300 cursor-pointer"
            >
              <ChevronLeft className="w-4 h-4" />
            </button>
            <button
              onClick={() => setActiveStepIdx((prev) => (prev < currentStory.steps.length - 1 ? prev + 1 : 0))}
              className="p-2.5 rounded-xl bg-white/5 border border-white/10 hover:bg-white/10 text-slate-300 cursor-pointer"
            >
              <ChevronRight className="w-4 h-4" />
            </button>
          </div>
        </div>

      </div>
    </section>
  );
}

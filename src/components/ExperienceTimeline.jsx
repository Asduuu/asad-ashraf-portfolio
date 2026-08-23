import React from 'react';
import { experiences, education, awards } from '../data/portfolioData';
import { Briefcase, GraduationCap, Trophy, Award, Star, Calendar, MapPin, CheckCircle2, ArrowUpRight } from 'lucide-react';

export default function ExperienceTimeline() {
  return (
    <section id="experience" className="py-24 relative bg-[#08090b]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#c8f332]/10 border border-[#c8f332]/30 text-[#c8f332] text-xs font-mono mb-3">
            <Trophy className="w-3.5 h-3.5" />
            <span>EXPERIENCE, AWARDS & EDUCATION</span>
          </div>
          <h2 className="font-syne text-3xl sm:text-5xl font-extrabold text-white">
            Track Record & Engineering Leadership
          </h2>
          <p className="text-slate-400 text-sm sm:text-base mt-2 font-light">
            Competitive programming victories, community leadership, and software development history.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
          
          {/* Left Column: Work Experience Timeline (7 Cols) */}
          <div className="lg:col-span-7 space-y-8">
            <div className="flex items-center gap-2 text-[#c8f332] font-syne font-bold text-xl border-b border-white/10 pb-4">
              <Briefcase className="w-5 h-5" />
              <span>Professional Experience</span>
            </div>

            <div className="relative border-l-2 border-white/10 pl-6 ml-3 space-y-10">
              {experiences.map((exp, idx) => (
                <div key={idx} className="relative group">
                  {/* Timeline Dot */}
                  <div className="absolute -left-[31px] top-1.5 w-4 h-4 rounded-full bg-[#08090b] border-2 border-[#c8f332] group-hover:scale-125 transition-transform" />

                  <div className="p-6 rounded-2xl glass-card border border-white/10 glass-card-hover bg-[#0d1017]">
                    <div className="flex flex-wrap items-center justify-between gap-2 mb-2">
                      <span className="px-2.5 py-0.5 rounded-full text-[10px] font-mono font-semibold bg-[#c8f332]/10 text-[#c8f332] border border-[#c8f332]/30">
                        {exp.type}
                      </span>
                      <span className="text-xs font-mono text-slate-400 flex items-center gap-1">
                        <Calendar className="w-3 h-3 text-[#c8f332]" />
                        {exp.period}
                      </span>
                    </div>

                    <h3 className="font-syne text-xl font-bold text-white group-hover:text-[#c8f332] transition-colors">
                      {exp.role}
                    </h3>
                    
                    <div className="text-xs font-mono text-cyan-400 mt-0.5 mb-3 flex items-center gap-2">
                      <span>{exp.organization}</span>
                      <span>•</span>
                      <span className="text-slate-400 font-light flex items-center gap-1">
                        <MapPin className="w-3 h-3" />
                        {exp.location}
                      </span>
                    </div>

                    <p className="text-xs text-slate-300 leading-relaxed font-light mb-4">
                      {exp.description}
                    </p>

                    <div className="space-y-1.5 border-t border-white/5 pt-3">
                      {exp.bullets.map((b, i) => (
                        <div key={i} className="flex items-start gap-2 text-xs text-slate-300 font-light">
                          <CheckCircle2 className="w-3.5 h-3.5 text-[#c8f332] shrink-0 mt-0.5" />
                          <span>{b}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Right Column: Achievements & Education (5 Cols) */}
          <div className="lg:col-span-5 space-y-10">
            
            {/* Speed Programming Awards */}
            <div className="space-y-6">
              <div className="flex items-center gap-2 text-[#c8f332] font-syne font-bold text-xl border-b border-white/10 pb-4">
                <Trophy className="w-5 h-5" />
                <span>Honors & Achievements</span>
              </div>

              <div className="space-y-4">
                {awards.map((award, idx) => (
                  <div
                    key={idx}
                    className="p-5 rounded-2xl glass-card border border-white/10 glass-card-hover bg-[#0d1017] flex items-start gap-4"
                  >
                    <div className="p-3 rounded-xl bg-[#c8f332]/10 border border-[#c8f332]/30 text-[#c8f332]">
                      <Trophy className="w-5 h-5" />
                    </div>
                    <div>
                      <div className="flex items-center gap-2">
                        <span className="text-[10px] font-mono px-2 py-0.5 rounded bg-yellow-400/10 text-yellow-400 font-bold border border-yellow-400/30">
                          {award.badge}
                        </span>
                        <span className="text-xs font-mono text-slate-400">{award.year}</span>
                      </div>
                      <h4 className="font-syne text-sm font-bold text-white mt-1">
                        {award.title}
                      </h4>
                      <p className="text-xs text-slate-400 font-light mt-0.5">
                        Issued by: {award.issuer}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Education Card */}
            <div className="space-y-4">
              <div className="flex items-center gap-2 text-[#c8f332] font-syne font-bold text-xl border-b border-white/10 pb-4">
                <GraduationCap className="w-5 h-5" />
                <span>Education</span>
              </div>

              <div className="p-6 rounded-2xl glass-card border border-white/10 bg-[#0d1017] space-y-4">
                <div>
                  <div className="text-xs font-mono text-[#c8f332] mb-1">{education.period}</div>
                  <h3 className="font-syne text-lg font-bold text-white">{education.degree}</h3>
                  <div className="text-xs font-mono text-slate-400 mt-0.5">{education.institution}</div>
                </div>

                <div>
                  <div className="text-[11px] font-mono text-slate-400 uppercase tracking-wider mb-2">Core Focus Areas:</div>
                  <div className="flex flex-wrap gap-1.5">
                    {education.focusAreas.map((fa) => (
                      <span key={fa} className="px-2.5 py-1 rounded-lg text-[11px] font-mono bg-white/5 text-slate-300 border border-white/5">
                        {fa}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
}

import React, { useState, useEffect } from 'react';
import Hero3DCanvas from './Hero3DCanvas';
import { personalInfo, stats } from '../data/portfolioData';
import { Mail, ArrowRight, Terminal, Sparkles, Cpu, ShieldCheck, Code2, Layers, CheckCircle2, UserCheck } from 'lucide-react';
import { Github, Linkedin } from './Icons';

export default function HeroSection({ onOpenTerminal }) {
  // Mouse movement parallax state
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });
  const [photoMode, setPhotoMode] = useState('cutout'); // 'cutout' or 'portrait'

  useEffect(() => {
    const handleMouseMove = (e) => {
      const { innerWidth, innerHeight } = window;
      const x = (e.clientX / innerWidth - 0.5) * 20; // -10 to +10px
      const y = (e.clientY / innerHeight - 0.5) * 20;
      setMousePos({ x, y });
    };

    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  return (
    <section id="hero" className="relative min-h-screen pt-24 pb-16 flex flex-col justify-between overflow-hidden bg-[#07080a] bg-grid-pattern">
      {/* 3D WebGL Background Scene */}
      <Hero3DCanvas />

      {/* Decorative Radial Lighting Glows */}
      <div className="absolute top-1/3 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[700px] bg-[#c8f332]/10 rounded-full blur-[160px] pointer-events-none" />
      <div className="absolute bottom-10 right-10 w-[500px] h-[500px] bg-cyan-500/10 rounded-full blur-[140px] pointer-events-none" />

      {/* GIANT BACKDROP DISPLAY TYPOGRAPHY (Layered behind subject) */}
      <div 
        className="absolute top-24 left-0 w-full pointer-events-none z-0 overflow-hidden select-none opacity-20 transition-transform duration-300 ease-out hidden md:block"
        style={{ transform: `translate3d(${mousePos.x * -0.5}px, ${mousePos.y * -0.5}px, 0)` }}
      >
        <div className="max-w-7xl mx-auto px-4">
          <h1 className="font-syne text-[11vw] font-extrabold uppercase leading-none tracking-tighter text-stroke-white text-white/10 whitespace-nowrap">
            ASAD ASHRAF
          </h1>
          <h2 className="font-syne text-[7vw] font-bold uppercase leading-none tracking-tighter text-[#c8f332]/15 whitespace-nowrap pl-20">
            AI / ML ENGINEER
          </h2>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full relative z-10 my-auto pt-8">
        
        {/* Availability Pill Header */}
        <div className="flex items-center justify-between gap-4 mb-8">
          <div className="inline-flex items-center gap-2.5 px-4 py-2 rounded-full bg-white/5 border border-white/10 backdrop-blur-xl text-xs font-mono">
            <span className="relative flex h-2.5 w-2.5">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#c8f332] opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-[#c8f332]"></span>
            </span>
            <span className="text-slate-200 font-medium tracking-wide">
              Available for Full-time AI/ML & High-Impact Engineering Roles
            </span>
          </div>

          {/* Photo Toggle Mode Switcher */}
          <button
            onClick={() => setPhotoMode(photoMode === 'cutout' ? 'portrait' : 'cutout')}
            className="hidden sm:flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white/5 hover:bg-white/10 border border-white/10 text-xs font-mono text-slate-300 hover:text-[#c8f332] transition-all cursor-pointer"
            title="Toggle between Cutout Mode and Studio Portrait Mode"
          >
            <UserCheck className="w-3.5 h-3.5 text-[#c8f332]" />
            <span>Mode: {photoMode === 'cutout' ? '3D Cutout' : 'Studio Portrait'}</span>
          </button>
        </div>

        {/* Hero Grid Layout Inspired by Reference Sample */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
          
          {/* Left Column: Bold Name & Big Title */}
          <div 
            className="lg:col-span-4 space-y-6 z-20 transition-transform duration-300 ease-out"
            style={{ transform: `translate3d(${mousePos.x * 0.4}px, ${mousePos.y * 0.4}px, 0)` }}
          >
            <div className="space-y-3">
              <h1 className="font-syne text-5xl sm:text-6xl lg:text-7xl font-extrabold tracking-tight text-white leading-[1.02]">
                Asad<br />
                <span className="text-[#c8f332]">Ashraf.</span>
              </h1>
              <div className="h-1.5 w-20 bg-[#c8f332] rounded-full shadow-[0_0_15px_#c8f332]" />
            </div>

            <p className="font-syne text-xl sm:text-2xl font-bold text-slate-200 leading-snug">
              AI/ML-Focused Software Engineer & RAG Agent Specialist.
            </p>

            {/* Floating Quick Badges */}
            <div className="flex flex-wrap gap-2 pt-2">
              <span className="px-3 py-1 rounded-md bg-white/5 border border-white/10 text-xs font-mono text-cyan-300">
                ⚡ LangGraph & LangChain
              </span>
              <span className="px-3 py-1 rounded-md bg-white/5 border border-white/10 text-xs font-mono text-emerald-300">
                🤖 FastAPI & PyTorch
              </span>
              <span className="px-3 py-1 rounded-md bg-white/5 border border-white/10 text-xs font-mono text-yellow-300">
                🏆 3x Speed Prog Winner
              </span>
            </div>
          </div>

          {/* Center Column: User Cutout Photo with Parallax 3D & Tech Badges */}
          <div className="lg:col-span-4 relative flex justify-center items-center my-6 lg:my-0 z-10">
            {/* Background Radial Halo behind photo */}
            <div className="absolute w-[280px] sm:w-[360px] h-[280px] sm:h-[360px] bg-gradient-to-tr from-[#c8f332]/30 via-cyan-500/20 to-purple-600/30 rounded-full blur-3xl animate-pulse-glow" />

            {/* Cutout / Portrait Image Frame */}
            <div 
              className="relative group transition-transform duration-300 ease-out max-w-[340px] sm:max-w-[400px]"
              style={{ transform: `translate3d(${mousePos.x * 0.8}px, ${mousePos.y * 0.8}px, 0)` }}
            >
              {photoMode === 'cutout' ? (
                /* Transparent PNG Cutout with Glow Shadow */
                <div className="relative">
                  <img
                    src="/user-cutout.png"
                    alt="Asad Ashraf - AI/ML Engineer"
                    className="w-full h-auto object-contain filter drop-shadow-[0_15px_35px_rgba(200,243,50,0.25)] hover:scale-[1.02] transition-transform duration-500"
                  />
                  {/* Subtle rim lighting effect */}
                  <div className="absolute inset-0 bg-gradient-to-t from-[#07080a] via-transparent to-transparent opacity-80 pointer-events-none" />
                </div>
              ) : (
                /* Studio Portrait Card Frame */
                <div className="relative rounded-2xl overflow-hidden border-2 border-[#c8f332]/40 shadow-2xl shadow-[#c8f332]/20">
                  <img
                    src="/user-portrait.jpg"
                    alt="Asad Ashraf Studio Portrait"
                    className="w-full h-auto object-cover hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#07080a] via-transparent to-transparent opacity-70" />
                </div>
              )}

              {/* Floating Tech Pill 1 (Top Right) */}
              <div 
                className="absolute -top-4 -right-4 px-3.5 py-1.5 rounded-full bg-[#0d101a]/95 border border-[#c8f332]/40 text-[#c8f332] text-xs font-mono shadow-xl backdrop-blur-md animate-float-slow flex items-center gap-1.5"
              >
                <Cpu className="w-3.5 h-3.5" />
                <span>FastAPI + RAG</span>
              </div>

              {/* Floating Tech Pill 2 (Bottom Left) */}
              <div 
                className="absolute bottom-6 -left-6 px-3.5 py-1.5 rounded-full bg-[#0d101a]/95 border border-cyan-500/40 text-cyan-300 text-xs font-mono shadow-xl backdrop-blur-md animate-float-reverse flex items-center gap-1.5"
              >
                <Sparkles className="w-3.5 h-3.5 text-[#c8f332]" />
                <span>Stateful LangGraph</span>
              </div>

            </div>
          </div>

          {/* Right Column: Bio Paragraph & Electric Lime CTA Button */}
          <div 
            className="lg:col-span-4 space-y-6 z-20 transition-transform duration-300 ease-out"
            style={{ transform: `translate3d(${mousePos.x * 0.3}px, ${mousePos.y * 0.3}px, 0)` }}
          >
            <div className="space-y-4">
              <h3 className="font-syne text-xl font-bold text-white leading-tight">
                Building Scalable AI Microservices, LLM Agents & Intelligent Backends.
              </h3>

              <p className="text-sm sm:text-base text-slate-300 leading-relaxed font-light">
                Full-stack AI/ML engineer from Lahore Garrison University with competitive speed programming gold medals. I architect modern, fast machine learning backends, RAG pipelines, and enterprise AI firewall systems — clean UI, thoughtful UX, and production-ready APIs.
              </p>
            </div>

            {/* Call To Action Buttons */}
            <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3 pt-2">
              <a
                href="#contact"
                className="group px-8 py-4 rounded-full bg-[#c8f332] text-black font-extrabold text-sm hover:bg-[#b8e322] transition-all duration-300 shadow-xl shadow-[#c8f332]/30 flex items-center justify-center gap-2 transform hover:-translate-y-1 cursor-pointer"
              >
                <span>Let's Talk</span>
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1.5 transition-transform" />
              </a>

              <a
                href="#projects"
                className="px-6 py-4 rounded-full bg-white/5 border border-white/10 text-slate-200 hover:text-white hover:bg-white/10 text-sm font-semibold text-center transition-all backdrop-blur-md"
              >
                View Systems
              </a>
            </div>

            {/* Quick Terminal Trigger */}
            <div className="pt-1">
              <button
                onClick={onOpenTerminal}
                className="w-full px-4 py-3 rounded-xl bg-[#0b0e17] border border-slate-800 hover:border-cyan-500/50 text-slate-300 hover:text-cyan-300 text-xs font-mono transition-all flex items-center justify-between cursor-pointer group shadow-lg"
              >
                <div className="flex items-center gap-2">
                  <Terminal className="w-4 h-4 text-cyan-400 group-hover:animate-pulse" />
                  <span>Launch AI Developer Sandbox</span>
                </div>
                <span className="text-[10px] text-[#c8f332] bg-[#c8f332]/10 px-2 py-0.5 rounded border border-[#c8f332]/20">Interactive</span>
              </button>
            </div>

          </div>

        </div>

        {/* Footer Bar of Hero: Socials & Live Availability Status (Matching Reference Sample) */}
        <div className="mt-16 pt-8 border-t border-white/10 flex flex-col md:flex-row items-center justify-between gap-6">
          
          {/* Social Links & Contact Icons */}
          <div className="flex items-center gap-6 text-slate-400 text-xs font-mono">
            <a 
              href={personalInfo.linkedin} 
              target="_blank" 
              rel="noopener noreferrer" 
              className="p-2.5 rounded-full bg-white/5 hover:bg-white/10 text-slate-300 hover:text-[#c8f332] transition-colors flex items-center gap-2 border border-white/10"
            >
              <Linkedin className="w-4 h-4" />
              <span className="hidden sm:inline">LinkedIn</span>
            </a>

            <a 
              href={personalInfo.github} 
              target="_blank" 
              rel="noopener noreferrer" 
              className="p-2.5 rounded-full bg-white/5 hover:bg-white/10 text-slate-300 hover:text-[#c8f332] transition-colors flex items-center gap-2 border border-white/10"
            >
              <Github className="w-4 h-4" />
              <span className="hidden sm:inline">GitHub</span>
            </a>

            <a 
              href={`mailto:${personalInfo.email}`} 
              className="p-2.5 rounded-full bg-white/5 hover:bg-white/10 text-slate-300 hover:text-[#c8f332] transition-colors flex items-center gap-2 border border-white/10"
            >
              <Mail className="w-4 h-4" />
              <span className="hidden sm:inline">Email</span>
            </a>
          </div>

          {/* Status Indicator Bar */}
          <div className="flex items-center gap-2 text-xs font-mono text-slate-400">
            <span className="w-2 h-2 rounded-full bg-[#c8f332] animate-ping" />
            <span>Available for freelance • Open to new projects</span>
          </div>

        </div>

        {/* Key Metrics Counter Strip */}
        <div className="mt-8 grid grid-cols-2 md:grid-cols-4 gap-4">
          {stats.map((stat, idx) => (
            <div key={idx} className="p-4 rounded-xl bg-white/5 border border-white/10 backdrop-blur-md hover:border-[#c8f332]/40 transition-all">
              <div className="font-syne text-2xl sm:text-3xl font-extrabold text-[#c8f332] tracking-tight">
                {stat.value}
              </div>
              <div className="text-xs font-bold text-white mt-1">
                {stat.label}
              </div>
              <div className="text-[11px] text-slate-400 mt-0.5">
                {stat.detail}
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}

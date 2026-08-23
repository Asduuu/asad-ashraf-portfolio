import React, { useState, useEffect } from 'react';
import { personalInfo } from '../data/portfolioData';
import { ArrowUp, Clock, Globe } from 'lucide-react';
import { Github, Linkedin } from './Icons';

export default function Footer() {
  const [pktTime, setPktTime] = useState('');

  useEffect(() => {
    const updateClock = () => {
      const options = {
        timeZone: 'Asia/Karachi',
        hour: '2-digit',
        minute: '2-digit',
        second: '2-digit',
        hour12: true
      };
      const timeStr = new Intl.DateTimeFormat('en-US', options).format(new Date());
      setPktTime(timeStr);
    };

    updateClock();
    const interval = setInterval(updateClock, 1000);
    return () => clearInterval(interval);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="py-12 bg-[#050608] border-t border-white/10 relative z-10 text-slate-400 text-xs font-mono">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col md:flex-row items-center justify-between gap-6">
        
        {/* Left: Branding & Local Time */}
        <div className="flex flex-col sm:flex-row items-center gap-3">
          <div className="flex items-center gap-2">
            <span className="font-syne text-xl font-extrabold text-white">
              ASAD<span className="text-[#c8f332]">.</span>
            </span>
            <span className="text-slate-600">|</span>
            <span className="text-slate-300">AI/ML Software Engineer</span>
          </div>

          {pktTime && (
            <div className="px-3 py-1 rounded-full bg-white/5 border border-white/10 text-[11px] text-cyan-300 flex items-center gap-1.5">
              <Clock className="w-3 h-3 text-[#c8f332] animate-pulse" />
              <span>Lahore, PKT: {pktTime}</span>
            </div>
          )}
        </div>

        {/* Middle: Social Links */}
        <div className="flex items-center gap-6">
          <a href={personalInfo.linkedin} target="_blank" rel="noopener noreferrer" className="hover:text-[#c8f332] transition-colors">
            LinkedIn
          </a>
          <a href={personalInfo.github} target="_blank" rel="noopener noreferrer" className="hover:text-[#c8f332] transition-colors">
            GitHub
          </a>
          <a href={`mailto:${personalInfo.email}`} className="hover:text-[#c8f332] transition-colors">
            Email
          </a>
        </div>

        {/* Right: Copyright & Back to Top */}
        <div className="flex items-center gap-4">
          <span className="text-slate-500">© {new Date().getFullYear()} Asad Ashraf. All rights reserved.</span>
          <button
            onClick={scrollToTop}
            className="p-2.5 rounded-full bg-white/5 border border-white/10 hover:bg-[#c8f332] hover:text-black transition-all cursor-pointer shadow-lg"
            title="Back to Top"
          >
            <ArrowUp className="w-4 h-4" />
          </button>
        </div>

      </div>
    </footer>
  );
}


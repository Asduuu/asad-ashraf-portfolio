import React, { useState, useEffect } from 'react';
import { personalInfo } from '../data/portfolioData';
import { Terminal, Download, Sparkles, Menu, X, ArrowUpRight } from 'lucide-react';

export default function Navbar({ activeSection, onOpenTerminal }) {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 40);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { label: "About", href: "#about" },
    { label: "AI Workflows", href: "#stories" },
    { label: "Skills", href: "#skills" },
    { label: "Projects", href: "#projects" },
    { label: "AI Sandbox", href: "#sandbox" },
    { label: "Experience", href: "#experience" },
    { label: "Contact", href: "#contact" }
  ];

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled ? 'py-3 bg-[#08090b]/85 backdrop-blur-xl border-b border-white/10 shadow-2xl' : 'py-5 bg-transparent'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between">
        {/* Logo */}
        <a href="#" className="flex items-center gap-2 group">
          <span className="font-syne text-2xl font-extrabold tracking-tight text-white group-hover:text-[#c8f332] transition-colors">
            ASAD<span className="text-[#c8f332] group-hover:animate-ping">.</span>
          </span>
          <span className="hidden sm:inline-block px-2.5 py-0.5 text-[10px] font-mono tracking-wider bg-[#c8f332]/10 text-[#c8f332] border border-[#c8f332]/30 rounded-full font-semibold">
            AI / ML ENGINEER
          </span>
        </a>

        {/* Desktop Nav Links */}
        <nav className="hidden md:flex items-center gap-1 bg-white/5 border border-white/10 p-1.5 rounded-full backdrop-blur-md">
          {navLinks.map((link) => (
            <a
              key={link.label}
              href={link.href}
              className={`px-4 py-1.5 rounded-full text-xs font-medium transition-all duration-200 ${
                activeSection === link.href.substring(1)
                  ? 'bg-[#c8f332] text-black font-semibold shadow-lg shadow-[#c8f332]/20'
                  : 'text-slate-300 hover:text-white hover:bg-white/10'
              }`}
            >
              {link.label}
            </a>
          ))}
        </nav>

        {/* Action Buttons */}
        <div className="flex items-center gap-3">
          {/* AI Terminal Trigger */}
          <button
            onClick={onOpenTerminal}
            className="hidden lg:flex items-center gap-1.5 px-3 py-1.5 rounded-full text-xs font-mono bg-cyan-950/40 text-cyan-400 border border-cyan-500/30 hover:border-cyan-400 hover:bg-cyan-900/40 transition-all cursor-pointer"
            title="Open Interactive AI Agent Sandbox"
          >
            <Terminal className="w-3.5 h-3.5 animate-pulse text-cyan-400" />
            <span>AI Sandbox</span>
          </button>

          {/* Let's Talk CTA */}
          <a
            href="#contact"
            className="flex items-center gap-1.5 px-4 py-2 rounded-full text-xs font-semibold bg-[#c8f332] text-black hover:bg-[#b0dc1a] hover:shadow-lg hover:shadow-[#c8f332]/30 transition-all transform hover:-translate-y-0.5"
          >
            <span>Let's Connect</span>
            <ArrowUpRight className="w-3.5 h-3.5" />
          </a>

          {/* Mobile Toggle */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="md:hidden p-2 rounded-lg bg-white/5 border border-white/10 text-slate-300 hover:text-white"
          >
            {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>
      </div>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div className="md:hidden bg-[#0c0e14] border-b border-white/10 px-4 py-6 space-y-3 animate-fadeIn">
          <div className="flex flex-col gap-2">
            {navLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                onClick={() => setMobileMenuOpen(false)}
                className="px-4 py-2 rounded-lg text-sm text-slate-300 hover:text-white hover:bg-white/5 font-medium flex items-center justify-between"
              >
                <span>{link.label}</span>
                <ArrowUpRight className="w-3.5 h-3.5 opacity-50" />
              </a>
            ))}
          </div>

          <div className="pt-4 border-t border-white/10 flex flex-col gap-2">
            <button
              onClick={() => {
                setMobileMenuOpen(false);
                onOpenTerminal();
              }}
              className="w-full flex items-center justify-center gap-2 py-2.5 rounded-xl bg-cyan-950/60 border border-cyan-500/40 text-cyan-400 font-mono text-xs font-semibold"
            >
              <Terminal className="w-4 h-4" />
              <span>Launch AI Prompt Agent</span>
            </button>
          </div>
        </div>
      )}
    </header>
  );
}

import React, { useState, useEffect } from 'react';
import Navbar from './components/Navbar';
import HeroSection from './components/HeroSection';
import VisualStories from './components/VisualStories';
import AITerminal from './components/AITerminal';
import SkillsSection from './components/SkillsSection';
import ProjectsSection from './components/ProjectsSection';
import ExperienceTimeline from './components/ExperienceTimeline';
import ContactSection from './components/ContactSection';
import Footer from './components/Footer';

export default function App() {
  const [activeSection, setActiveSection] = useState('hero');
  const [terminalOpen, setTerminalOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const sections = ['hero', 'stories', 'skills', 'projects', 'sandbox', 'experience', 'contact'];
      const scrollPosition = window.scrollY + 200;

      for (const section of sections) {
        const el = document.getElementById(section);
        if (el) {
          const top = el.offsetTop;
          const height = el.offsetHeight;
          if (scrollPosition >= top && scrollPosition < top + height) {
            setActiveSection(section);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className="min-h-screen bg-[#08090b] text-slate-100 selection:bg-[#c8f332] selection:text-black">
      {/* Navigation */}
      <Navbar
        activeSection={activeSection}
        onOpenTerminal={() => {
          const el = document.getElementById('sandbox');
          if (el) el.scrollIntoView({ behavior: 'smooth' });
        }}
      />

      {/* Main Sections */}
      <main>
        <HeroSection
          onOpenTerminal={() => {
            const el = document.getElementById('sandbox');
            if (el) el.scrollIntoView({ behavior: 'smooth' });
          }}
        />

        <VisualStories />

        <SkillsSection />

        <ProjectsSection />

        <AITerminal />

        <ExperienceTimeline />

        <ContactSection />
      </main>

      {/* Footer */}
      <Footer />
    </div>
  );
}

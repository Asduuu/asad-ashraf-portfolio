import React, { useState } from 'react';
import { personalInfo } from '../data/portfolioData';
import { Mail, Phone, MapPin, Send, Sparkles, Check, Copy, ArrowUpRight } from 'lucide-react';
import { Github, Linkedin } from './Icons';
import confetti from 'canvas-confetti';

export default function ContactSection() {
  const [formData, setFormData] = useState({ name: '', email: '', subject: '', message: '' });
  const [submitted, setSubmitted] = useState(false);
  const [copiedItem, setCopiedItem] = useState(null);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!formData.name || !formData.email || !formData.message) return;

    setSubmitted(true);

    // Launch celebratory confetti effect!
    try {
      confetti({
        particleCount: 100,
        spread: 70,
        origin: { y: 0.6 },
        colors: ['#c8f332', '#00f2fe', '#8b5cf6']
      });
    } catch (err) {
      console.log('Confetti triggered');
    }

    setTimeout(() => {
      setSubmitted(false);
      setFormData({ name: '', email: '', subject: '', message: '' });
    }, 5000);
  };

  const copyText = (text, type) => {
    navigator.clipboard.writeText(text);
    setCopiedItem(type);
    setTimeout(() => setCopiedItem(null), 2000);
  };

  return (
    <section id="contact" className="py-24 relative bg-[#090b0e] border-t border-white/5">
      
      {/* Decorative Radial Background */}
      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[700px] h-[350px] bg-[#c8f332]/5 rounded-full blur-[150px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#c8f332]/10 border border-[#c8f332]/30 text-[#c8f332] text-xs font-mono mb-3">
            <Mail className="w-3.5 h-3.5" />
            <span>LET'S BUILD SOMETHING GREAT</span>
          </div>
          <h2 className="font-syne text-4xl sm:text-6xl font-extrabold text-white tracking-tight">
            Initiate Contact
          </h2>
          <p className="text-slate-400 text-base mt-3 font-light">
            Have an AI system idea, RAG architecture query, full-time role, or freelance project? Reach out directly.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          
          {/* Left Column: Direct Contact Details & Quick Copy */}
          <div className="lg:col-span-5 space-y-6">
            
            <div className="p-8 rounded-3xl glass-card border border-white/10 bg-[#0d1017] space-y-6">
              <h3 className="font-syne text-2xl font-bold text-white mb-2">
                Asad Ashraf
              </h3>
              <p className="text-xs font-mono text-[#c8f332]">
                AI/ML Software Engineer • Lahore, Pakistan
              </p>

              {/* Direct Info Items */}
              <div className="space-y-4 pt-2">
                
                {/* Email */}
                <div className="p-4 rounded-2xl bg-white/5 border border-white/5 flex items-center justify-between group hover:border-[#c8f332]/40 transition-all">
                  <div className="flex items-center gap-3">
                    <div className="p-2.5 rounded-xl bg-[#c8f332]/10 text-[#c8f332]">
                      <Mail className="w-4 h-4" />
                    </div>
                    <div>
                      <div className="text-[10px] font-mono text-slate-400">Direct Email</div>
                      <a href={`mailto:${personalInfo.email}`} className="text-xs font-mono font-semibold text-white hover:text-[#c8f332]">
                        {personalInfo.email}
                      </a>
                    </div>
                  </div>
                  <button
                    onClick={() => copyText(personalInfo.email, 'email')}
                    className="p-2 rounded-lg bg-white/5 hover:bg-white/10 text-slate-400 hover:text-white transition-colors"
                    title="Copy Email"
                  >
                    {copiedItem === 'email' ? <Check className="w-4 h-4 text-emerald-400" /> : <Copy className="w-4 h-4" />}
                  </button>
                </div>

                {/* Phone */}
                <div className="p-4 rounded-2xl bg-white/5 border border-white/5 flex items-center justify-between group hover:border-[#c8f332]/40 transition-all">
                  <div className="flex items-center gap-3">
                    <div className="p-2.5 rounded-xl bg-cyan-500/10 text-cyan-400">
                      <Phone className="w-4 h-4" />
                    </div>
                    <div>
                      <div className="text-[10px] font-mono text-slate-400">Phone / WhatsApp</div>
                      <a href={`tel:${personalInfo.phone.replace(/\s+/g, '')}`} className="text-xs font-mono font-semibold text-white hover:text-cyan-400">
                        {personalInfo.phone}
                      </a>
                    </div>
                  </div>
                  <button
                    onClick={() => copyText(personalInfo.phone, 'phone')}
                    className="p-2 rounded-lg bg-white/5 hover:bg-white/10 text-slate-400 hover:text-white transition-colors"
                    title="Copy Phone"
                  >
                    {copiedItem === 'phone' ? <Check className="w-4 h-4 text-emerald-400" /> : <Copy className="w-4 h-4" />}
                  </button>
                </div>

                {/* Location */}
                <div className="p-4 rounded-2xl bg-white/5 border border-white/5 flex items-center gap-3">
                  <div className="p-2.5 rounded-xl bg-purple-500/10 text-purple-400">
                    <MapPin className="w-4 h-4" />
                  </div>
                  <div>
                    <div className="text-[10px] font-mono text-slate-400">Location</div>
                    <div className="text-xs font-mono font-semibold text-white">Lahore, Pakistan</div>
                  </div>
                </div>

              </div>

              {/* Social Buttons */}
              <div className="pt-4 border-t border-white/10 flex items-center gap-3">
                <a
                  href={personalInfo.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex-1 py-3 px-4 rounded-2xl bg-white/5 border border-white/10 hover:border-[#c8f332] text-xs font-mono font-semibold text-slate-200 hover:text-white flex items-center justify-center gap-2 transition-all"
                >
                  <Linkedin className="w-4 h-4 text-[#c8f332]" />
                  <span>LinkedIn</span>
                  <ArrowUpRight className="w-3 h-3 text-slate-500" />
                </a>

                <a
                  href={personalInfo.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex-1 py-3 px-4 rounded-2xl bg-white/5 border border-white/10 hover:border-cyan-400 text-xs font-mono font-semibold text-slate-200 hover:text-white flex items-center justify-center gap-2 transition-all"
                >
                  <Github className="w-4 h-4 text-cyan-400" />
                  <span>GitHub</span>
                  <ArrowUpRight className="w-3 h-3 text-slate-500" />
                </a>
              </div>

            </div>

          </div>

          {/* Right Column: Contact Form */}
          <div className="lg:col-span-7">
            <div className="p-8 rounded-3xl glass-card border border-white/10 bg-[#0d1017] relative">
              
              {submitted ? (
                <div className="py-16 text-center space-y-4 animate-fadeIn">
                  <div className="w-16 h-16 rounded-full bg-[#c8f332]/20 border border-[#c8f332] text-[#c8f332] flex items-center justify-center mx-auto">
                    <Check className="w-8 h-8" />
                  </div>
                  <h3 className="font-syne text-2xl font-bold text-white">Message Transmitted!</h3>
                  <p className="text-sm text-slate-300 max-w-md mx-auto font-light">
                    Thank you for reaching out. Asad will review your inquiry and respond shortly.
                  </p>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-6">
                  <h3 className="font-syne text-xl font-bold text-white mb-6">
                    Send Direct Message
                  </h3>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                    <div className="space-y-2">
                      <label className="text-xs font-mono text-slate-300 font-medium">Your Name *</label>
                      <input
                        type="text"
                        required
                        value={formData.name}
                        onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                        placeholder="John Doe"
                        className="w-full px-4 py-3 rounded-xl bg-white/5 border border-white/10 text-xs font-mono text-slate-100 placeholder-slate-500 focus:outline-none focus:border-[#c8f332]"
                      />
                    </div>

                    <div className="space-y-2">
                      <label className="text-xs font-mono text-slate-300 font-medium">Your Email *</label>
                      <input
                        type="email"
                        required
                        value={formData.email}
                        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                        placeholder="john@example.com"
                        className="w-full px-4 py-3 rounded-xl bg-white/5 border border-white/10 text-xs font-mono text-slate-100 placeholder-slate-500 focus:outline-none focus:border-[#c8f332]"
                      />
                    </div>
                  </div>

                  <div className="space-y-2">
                    <label className="text-xs font-mono text-slate-300 font-medium">Subject / Project Title</label>
                    <input
                      type="text"
                      value={formData.subject}
                      onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
                      placeholder="e.g. AI System Consulting / Full-time Role"
                      className="w-full px-4 py-3 rounded-xl bg-white/5 border border-white/10 text-xs font-mono text-slate-100 placeholder-slate-500 focus:outline-none focus:border-[#c8f332]"
                    />
                  </div>

                  <div className="space-y-2">
                    <label className="text-xs font-mono text-slate-300 font-medium">Message *</label>
                    <textarea
                      rows={5}
                      required
                      value={formData.message}
                      onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                      placeholder="Details about your inquiry..."
                      className="w-full px-4 py-3 rounded-xl bg-white/5 border border-white/10 text-xs font-mono text-slate-100 placeholder-slate-500 focus:outline-none focus:border-[#c8f332]"
                    />
                  </div>

                  <button
                    type="submit"
                    className="w-full py-4 rounded-2xl bg-[#c8f332] text-black font-syne font-bold text-sm hover:bg-[#b5db20] shadow-xl shadow-[#c8f332]/20 transition-all flex items-center justify-center gap-2 cursor-pointer transform hover:-translate-y-0.5"
                  >
                    <Send className="w-4 h-4" />
                    <span>Send Message to Asad</span>
                  </button>
                </form>
              )}

            </div>
          </div>

        </div>

      </div>
    </section>
  );
}

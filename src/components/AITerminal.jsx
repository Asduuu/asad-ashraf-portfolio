import React, { useState, useEffect } from 'react';
import { aiSandboxPrompts, personalInfo } from '../data/portfolioData';
import { Terminal, Send, Sparkles, Copy, Check, RefreshCw, X, Code2 } from 'lucide-react';

export default function AITerminal({ isOpen, onClose }) {
  const [activePromptIdx, setActivePromptIdx] = useState(0);
  const [customPrompt, setCustomPrompt] = useState("");
  const [displayResponse, setDisplayResponse] = useState("");
  const [isTyping, setIsTyping] = useState(false);
  const [copied, setCopied] = useState(false);

  // Trigger typing effect when active prompt changes
  useEffect(() => {
    let currentText = aiSandboxPrompts[activePromptIdx].response;
    let i = 0;
    setIsTyping(true);
    setDisplayResponse("");

    const timer = setInterval(() => {
      if (i < currentText.length) {
        setDisplayResponse((prev) => prev + currentText.charAt(i));
        i++;
      } else {
        setIsTyping(false);
        clearInterval(timer);
      }
    }, 12);

    return () => clearInterval(timer);
  }, [activePromptIdx]);

  const handleCustomSubmit = (e) => {
    e.preventDefault();
    if (!customPrompt.trim()) return;

    setIsTyping(true);
    setDisplayResponse("");

    const answer = `Regarding "${customPrompt}": Asad specializes in production-ready AI systems using FastAPI, LangChain, PyTorch, and LangGraph. He builds deterministic guardrails with Pydantic schemas and Docker containers. Feel free to contact him directly at ${personalInfo.email} or +92 309 1428959!`;

    let i = 0;
    const timer = setInterval(() => {
      if (i < answer.length) {
        setDisplayResponse((prev) => prev + answer.charAt(i));
        i++;
      } else {
        setIsTyping(false);
        clearInterval(timer);
      }
    }, 15);

    setCustomPrompt("");
  };

  const copyToClipboard = () => {
    navigator.clipboard.writeText(displayResponse);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <section id="sandbox" className="py-20 relative bg-[#08090b]">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Terminal Header */}
        <div className="text-center max-w-2xl mx-auto mb-10">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-cyan-500/10 border border-cyan-500/30 text-cyan-400 text-xs font-mono mb-3">
            <Terminal className="w-3.5 h-3.5 animate-pulse" />
            <span>INTERACTIVE AI AGENT SANDBOX</span>
          </div>
          <h2 className="font-syne text-3xl sm:text-4xl font-extrabold text-white">
            Ask Asad's AI Assistant
          </h2>
          <p className="text-slate-400 text-sm mt-2 font-light">
            Test prompt engineering, RAG architecture query routing, and experience metrics in real time.
          </p>
        </div>

        {/* Main Terminal Window */}
        <div className="rounded-2xl glass-card border border-cyan-500/30 overflow-hidden shadow-2xl shadow-cyan-950/50 bg-[#0a0c10]">
          
          {/* Title Bar */}
          <div className="px-5 py-3.5 bg-[#0f121a] border-b border-white/10 flex items-center justify-between">
            <div className="flex items-center gap-2">
              <div className="w-3 h-3 rounded-full bg-red-500/80" />
              <div className="w-3 h-3 rounded-full bg-yellow-500/80" />
              <div className="w-3 h-3 rounded-full bg-green-500/80" />
              <span className="ml-2 font-mono text-xs text-slate-300 font-semibold flex items-center gap-1.5">
                <Code2 className="w-3.5 h-3.5 text-cyan-400" />
                asad_ai_agent_v2.4 [LangGraph + FastAPI]
              </span>
            </div>

            <div className="flex items-center gap-3">
              <span className="hidden sm:inline-block font-mono text-[10px] text-emerald-400 px-2 py-0.5 rounded bg-emerald-950/60 border border-emerald-500/30">
                🟢 Model: Gemini 3.6 Flash / PyTorch
              </span>
              <button
                onClick={copyToClipboard}
                className="p-1.5 rounded-lg text-slate-400 hover:text-white hover:bg-white/10 transition-colors"
                title="Copy Terminal Output"
              >
                {copied ? <Check className="w-4 h-4 text-emerald-400" /> : <Copy className="w-4 h-4" />}
              </button>
            </div>
          </div>

          {/* Quick Preset Prompt Chips */}
          <div className="p-4 bg-[#0d1017] border-b border-white/5 flex flex-wrap gap-2">
            <span className="text-xs font-mono text-slate-400 py-1 flex items-center gap-1">
              <Sparkles className="w-3 h-3 text-[#c8f332]" />
              Presets:
            </span>
            {aiSandboxPrompts.map((item, idx) => (
              <button
                key={idx}
                onClick={() => setActivePromptIdx(idx)}
                className={`px-3 py-1 rounded-lg text-xs font-mono transition-all cursor-pointer ${
                  activePromptIdx === idx
                    ? 'bg-cyan-500/20 text-cyan-300 border border-cyan-500/50 font-medium'
                    : 'bg-white/5 text-slate-300 border border-white/10 hover:border-white/20 hover:bg-white/10'
                }`}
              >
                {item.prompt}
              </button>
            ))}
          </div>

          {/* Prompt Input & Response Area */}
          <div className="p-6 font-mono text-xs leading-relaxed space-y-4 min-h-[220px]">
            {/* Input Prompt Display */}
            <div className="flex items-start gap-3 text-cyan-400">
              <span className="text-[#c8f332] font-bold">visitor@asad-portfolio:~$</span>
              <span className="text-slate-100 font-semibold">{aiSandboxPrompts[activePromptIdx].prompt}</span>
            </div>

            {/* AI Agent Streaming Output */}
            <div className="p-4 rounded-xl bg-[#060709] border border-white/5 text-slate-200 relative group">
              <div className="text-[10px] text-slate-500 mb-2 flex items-center gap-2 border-b border-white/5 pb-1">
                <span>[LangSmith Trace ID: #tr_{Math.floor(Math.random()*90000+10000)}]</span>
                <span>• Latency: 142ms</span>
                <span>• Strict Pydantic Guardrail PASS</span>
              </div>
              <p className="whitespace-pre-wrap leading-relaxed text-sm text-slate-200">
                {displayResponse}
                {isTyping && <span className="inline-block w-2 h-4 bg-[#c8f332] ml-1 animate-ping" />}
              </p>
            </div>
          </div>

          {/* Interactive Custom Input Bar */}
          <form onSubmit={handleCustomSubmit} className="p-4 bg-[#0d1017] border-t border-white/10 flex items-center gap-3">
            <span className="text-cyan-400 font-mono text-xs font-bold pl-2">&gt;</span>
            <input
              type="text"
              value={customPrompt}
              onChange={(e) => setCustomPrompt(e.target.value)}
              placeholder="Type your question about Asad's experience, FastAPI, PyTorch, RAG, etc..."
              className="flex-1 bg-transparent border-none outline-none text-xs font-mono text-slate-100 placeholder-slate-500 focus:ring-0"
            />
            <button
              type="submit"
              disabled={!customPrompt.trim()}
              className="px-4 py-2 rounded-lg bg-cyan-500/20 text-cyan-300 border border-cyan-500/40 hover:bg-cyan-500/30 disabled:opacity-40 text-xs font-mono flex items-center gap-1.5 cursor-pointer"
            >
              <span>Execute</span>
              <Send className="w-3.5 h-3.5" />
            </button>
          </form>

        </div>

      </div>
    </section>
  );
}

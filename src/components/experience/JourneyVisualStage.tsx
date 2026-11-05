import { useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import { 
  Code2, 
  Terminal, 
  GraduationCap, 
  GitBranch, 
  Layers, 
  Palette, 
  Figma, 
  ExternalLink, 
  CheckCircle2, 
  Sparkles, 
  Cpu, 
  Globe, 
  Clock, 
  Briefcase, 
  ArrowUpRight 
} from "lucide-react";
import { JourneyChapter } from "@/types";

interface JourneyVisualStageProps {
  chapter: JourneyChapter;
}

export function JourneyVisualStage({ chapter }: JourneyVisualStageProps) {
  const [activeFigmaTab, setActiveFigmaTab] = useState<"design" | "code">("design");

  return (
    <div className="w-full h-full min-h-[460px] lg:min-h-[560px] rounded-3xl glass-panel border border-white/10 p-5 sm:p-7 flex flex-col justify-between relative overflow-hidden shadow-2xl bg-darker/70">
      {/* Background ambient glow matching chapter */}
      <div className="absolute -top-20 -right-20 w-80 h-80 bg-primary/10 rounded-full blur-3xl pointer-events-none transition-all duration-700" />
      <div className="absolute -bottom-20 -left-20 w-80 h-80 bg-accent-purple/10 rounded-full blur-3xl pointer-events-none transition-all duration-700" />

      {/* Stage Top Bar */}
      <div className="relative z-10 flex items-center justify-between pb-4 border-b border-white/10 text-xs font-mono">
        <div className="flex items-center gap-2">
          <span className="w-2.5 h-2.5 rounded-full bg-primary animate-pulse" />
          <span className="text-theme-secondary">CHAPTER // {chapter.number}</span>
        </div>
        <span className="px-2.5 py-0.5 rounded-full bg-white/5 border border-white/10 text-primary-light font-medium tracking-wider uppercase text-[10px]">
          {chapter.timeframe}
        </span>
      </div>

      {/* Main Animated Visual Canvas */}
      <div className="relative z-10 flex-1 my-4 flex items-center justify-center overflow-hidden">
        <AnimatePresence mode="wait">
          {/* ============================================================== */}
          {/* CHAPTER 01: THE BEGINNING (Code Genesis & Semantic Spark) */}
          {/* ============================================================== */}
          {chapter.visualType === "code-genesis" && (
            <motion.div
              key="code-genesis"
              initial={{ opacity: 0, scale: 0.94, y: 15 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.94, y: -15 }}
              transition={{ duration: 0.45, ease: "easeOut" }}
              className="w-full max-w-md space-y-4"
            >
              {/* Code Editor Window */}
              <div className="rounded-2xl border border-white/15 bg-black/80 overflow-hidden shadow-2xl">
                <div className="px-4 py-2.5 bg-white/5 border-b border-white/10 flex items-center justify-between">
                  <div className="flex items-center gap-2">
                    <span className="w-2.5 h-2.5 rounded-full bg-rose-500/80" />
                    <span className="w-2.5 h-2.5 rounded-full bg-amber-500/80" />
                    <span className="w-2.5 h-2.5 rounded-full bg-emerald-500/80" />
                    <span className="ml-2 text-[11px] font-mono text-theme-secondary/80">index.html</span>
                  </div>
                  <Terminal size={13} className="text-primary" />
                </div>

                <div className="p-4 sm:p-5 font-mono text-xs sm:text-[13px] leading-relaxed text-theme-secondary space-y-1">
                  <div>
                    <span className="text-primary">&lt;!DOCTYPE html&gt;</span>
                  </div>
                  <div>
                    <span className="text-primary-light">&lt;html</span> <span className="text-amber-400">lang</span>=<span className="text-emerald-400">"en"</span><span className="text-primary-light">&gt;</span>
                  </div>
                  <div className="pl-4">
                    <span className="text-primary-light">&lt;head&gt;</span>
                  </div>
                  <div className="pl-8 text-white/90">
                    <span className="text-primary-light">&lt;title&gt;</span>The Vision<span className="text-primary-light">&lt;/title&gt;</span>
                  </div>
                  <div className="pl-4">
                    <span className="text-primary-light">&lt;/head&gt;</span>
                  </div>
                  <div className="pl-4">
                    <span className="text-primary-light">&lt;body&gt;</span>
                  </div>
                  <div className="pl-8 text-white">
                    <span className="text-primary-light">&lt;h1</span> <span className="text-amber-400">class</span>=<span className="text-emerald-400">"curiosity"</span><span className="text-primary-light">&gt;</span>
                    <br />
                    <span className="pl-4 text-primary font-bold">"Hello, World. I can build this."</span>
                    <br />
                    <span className="text-primary-light">&lt;/h1&gt;</span>
                  </div>
                  <div className="pl-4">
                    <span className="text-primary-light">&lt;/body&gt;</span>
                  </div>
                  <div>
                    <span className="text-primary-light">&lt;/html&gt;</span>
                  </div>
                </div>
              </div>

              {/* Live Render Output Preview Card */}
              <div className="p-4 rounded-2xl glass-panel border border-primary/30 flex items-center justify-between shadow-lg">
                <div className="flex items-center gap-3">
                  <div className="w-9 h-9 rounded-xl bg-primary/20 border border-primary/40 flex items-center justify-center text-primary">
                    <Code2 size={18} />
                  </div>
                  <div>
                    <span className="text-xs font-semibold text-theme-primary block font-heading">First Web Canvas</span>
                    <span className="text-[11px] font-mono text-theme-secondary">Vanilla Semantics & CSS Layouts</span>
                  </div>
                </div>
                <span className="px-2.5 py-1 rounded-md text-[10px] font-mono bg-emerald-500/10 text-emerald-400 border border-emerald-500/20">
                  EST. 2022
                </span>
              </div>
            </motion.div>
          )}

          {/* ============================================================== */}
          {/* CHAPTER 02: LEARNING & EXPLORATION (NTI & Structured Growth) */}
          {/* ============================================================== */}
          {chapter.visualType === "learning-roadmap" && (
            <motion.div
              key="learning-roadmap"
              initial={{ opacity: 0, scale: 0.94, y: 15 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.94, y: -15 }}
              transition={{ duration: 0.45, ease: "easeOut" }}
              className="w-full max-w-md space-y-3"
            >
              {/* NTI Accreditation Badge */}
              <div className="p-4 rounded-2xl glass-panel border border-primary/40 bg-primary/5 flex items-center gap-3 shadow-md">
                <div className="w-10 h-10 rounded-xl bg-primary/20 text-primary flex items-center justify-center shrink-0 border border-primary/30">
                  <GraduationCap size={20} />
                </div>
                <div>
                  <h4 className="text-sm font-bold text-theme-primary font-heading">
                    NTI Egypt • Front-End Specialized Track
                  </h4>
                  <p className="text-[11px] font-mono text-theme-secondary">
                    National Telecommunication Institute Specialization
                  </p>
                </div>
              </div>

              {/* Roadmap Interactive Step Nodes */}
              <div className="space-y-2 relative before:absolute before:left-5 before:top-3 before:bottom-3 before:w-0.5 before:bg-linear-to-b before:from-primary before:via-primary-light before:to-accent-purple">
                {[
                  {
                    step: "01",
                    title: "Advanced ES6+ & Asynchronous JavaScript",
                    desc: "Promises, async/await, closures, prototypes, event loops",
                    icon: <Terminal size={14} />
                  },
                  {
                    step: "02",
                    title: "React Component Hierarchy & State",
                    desc: "Hooks architecture, context lifecycle, predictable state flows",
                    icon: <Cpu size={14} />
                  },
                  {
                    step: "03",
                    title: "Git Workflow & Branching Discipline",
                    desc: "Feature branches, merge strategies, GitHub collaborative repositories",
                    icon: <GitBranch size={14} />
                  }
                ].map((item, idx) => (
                  <div
                    key={item.step}
                    className="relative pl-10 pr-3 py-2.5 rounded-xl glass-panel border border-white/5 hover:border-primary/30 transition-all flex items-center justify-between group"
                  >
                    <div className="absolute left-3 w-4 h-4 rounded-full bg-darker border-2 border-primary flex items-center justify-center">
                      <span className="w-1.5 h-1.5 rounded-full bg-primary" />
                    </div>
                    <div>
                      <h5 className="text-xs font-semibold text-theme-primary group-hover:text-primary transition-colors">
                        {item.title}
                      </h5>
                      <span className="text-[10px] font-mono text-theme-secondary block">
                        {item.desc}
                      </span>
                    </div>
                    <CheckCircle2 size={14} className="text-emerald-400 shrink-0 ml-2" />
                  </div>
                ))}
              </div>

              {/* Key Competency Summary */}
              <div className="p-3 rounded-xl bg-white/5 border border-white/10 flex items-center justify-between text-xs font-mono">
                <span className="text-theme-secondary">Outcome:</span>
                <span className="text-primary font-semibold">Production Code Hygiene & Clean Architecture</span>
              </div>
            </motion.div>
          )}

          {/* ============================================================== */}
          {/* CHAPTER 03: DESIGN MEETS CODE (Figma <-> Code Bridge) */}
          {/* ============================================================== */}
          {chapter.visualType === "design-meets-code" && (
            <motion.div
              key="design-meets-code"
              initial={{ opacity: 0, scale: 0.94, y: 15 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.94, y: -15 }}
              transition={{ duration: 0.45, ease: "easeOut" }}
              className="w-full max-w-md space-y-4"
            >
              {/* Interactive Design / Code Toggle */}
              <div className="flex items-center justify-between p-1.5 rounded-2xl glass-panel border border-white/10 bg-black/40">
                <button
                  onClick={() => setActiveFigmaTab("design")}
                  className={`flex-1 py-1.5 rounded-xl text-xs font-mono flex items-center justify-center gap-2 transition-all ${
                    activeFigmaTab === "design"
                      ? "bg-primary text-white font-semibold shadow-md shadow-primary/25"
                      : "text-theme-secondary hover:text-theme-primary"
                  }`}
                >
                  <Figma size={14} />
                  <span>Figma Design Token</span>
                </button>
                <button
                  onClick={() => setActiveFigmaTab("code")}
                  className={`flex-1 py-1.5 rounded-xl text-xs font-mono flex items-center justify-center gap-2 transition-all ${
                    activeFigmaTab === "code"
                      ? "bg-primary text-white font-semibold shadow-md shadow-primary/25"
                      : "text-theme-secondary hover:text-theme-primary"
                  }`}
                >
                  <Code2 size={14} />
                  <span>React / Tailwind JSX</span>
                </button>
              </div>

              {/* Dynamic View Representation */}
              <div className="rounded-2xl border border-white/15 bg-black/80 overflow-hidden shadow-2xl min-h-[220px]">
                {activeFigmaTab === "design" ? (
                  <div className="p-5 space-y-4">
                    <div className="flex items-center justify-between text-xs font-mono text-theme-secondary border-b border-white/10 pb-2">
                      <span className="flex items-center gap-1.5 text-primary">
                        <Palette size={14} /> Auto-Layout Frame: #0ea5e9
                      </span>
                      <span>1:1 Pixel Specs</span>
                    </div>

                    {/* Mock Figma Frame */}
                    <div className="p-4 rounded-xl border border-dashed border-primary/50 bg-primary/5 relative">
                      <span className="absolute -top-2.5 left-3 text-[10px] font-mono bg-primary px-2 py-0.5 rounded text-white">
                        Frame // Component
                      </span>
                      <div className="flex items-center justify-between mb-3">
                        <div className="w-20 h-4 rounded bg-white/20 animate-pulse" />
                        <div className="w-12 h-4 rounded-full bg-primary/30" />
                      </div>
                      <div className="space-y-1.5">
                        <div className="w-full h-2 rounded bg-white/10" />
                        <div className="w-4/5 h-2 rounded bg-white/10" />
                      </div>
                      <div className="mt-3 flex gap-2">
                        <span className="text-[10px] font-mono text-primary-light">gap-4</span>
                        <span className="text-[10px] font-mono text-primary-light">p-6</span>
                        <span className="text-[10px] font-mono text-primary-light">rounded-3xl</span>
                      </div>
                    </div>

                    <div className="flex items-center justify-between text-[11px] font-mono text-theme-secondary">
                      <span>Typography: Space Grotesk</span>
                      <span>Grid: 12-Column Responsive</span>
                    </div>
                  </div>
                ) : (
                  <div className="p-5 font-mono text-xs leading-relaxed text-theme-secondary space-y-1">
                    <div className="text-primary font-bold">// Pixel-Perfect React Translation</div>
                    <div className="text-white/90">
                      <span className="text-primary-light">export function</span>{" "}
                      <span className="text-amber-400">FeatureCard</span>() &#123;
                    </div>
                    <div className="pl-4 text-white/80">
                      <span className="text-primary-light">return</span> (
                    </div>
                    <div className="pl-8 text-primary-light">
                      &lt;<span className="text-amber-400">motion.div</span>
                    </div>
                    <div className="pl-12 text-emerald-400 text-[11px]">
                      className="rounded-3xl glass-panel p-6 border border-white/10 hover:border-primary/40"
                    </div>
                    <div className="pl-12 text-primary-light">
                      whileHover=&#123;&#123; y: -6, scale: 1.02 &#125;&#125;
                    </div>
                    <div className="pl-8 text-primary-light">&gt;</div>
                    <div className="pl-12 text-theme-secondary">
                      &lt;<span className="text-amber-400">DesignTokenContent</span> /&gt;
                    </div>
                    <div className="pl-8 text-primary-light">&lt;/<span className="text-amber-400">motion.div</span>&gt;</div>
                    <div className="pl-4 text-white/80">);</div>
                    <div className="text-white/90">&#125;</div>
                  </div>
                )}
              </div>

              {/* Philosophy Callout */}
              <div className="p-3.5 rounded-xl glass-panel border border-white/10 flex items-center gap-3">
                <div className="w-8 h-8 rounded-lg bg-accent-purple/20 text-accent-purple flex items-center justify-center shrink-0">
                  <Layers size={16} />
                </div>
                <p className="text-xs text-theme-secondary">
                  No lost-in-translation handover. Design intent is preserved straight into clean JSX.
                </p>
              </div>
            </motion.div>
          )}

          {/* ============================================================== */}
          {/* CHAPTER 04: REAL-WORLD EXPERIENCE (Client Work & Proven Systems) */}
          {/* ============================================================== */}
          {chapter.visualType === "real-world-projects" && (
            <motion.div
              key="real-world-projects"
              initial={{ opacity: 0, scale: 0.94, y: 15 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.94, y: -15 }}
              transition={{ duration: 0.45, ease: "easeOut" }}
              className="w-full max-w-md space-y-3"
            >
              {/* Project Showcase Mockup Stack */}
              <div className="relative rounded-2xl overflow-hidden border border-white/15 bg-black/80 shadow-2xl">
                {/* Browser bar */}
                <div className="px-3.5 py-2 bg-white/5 border-b border-white/10 flex items-center justify-between text-[11px] font-mono text-theme-secondary">
                  <div className="flex items-center gap-1.5">
                    <span className="w-2 h-2 rounded-full bg-red-500/80" />
                    <span className="w-2 h-2 rounded-full bg-yellow-500/80" />
                    <span className="w-2 h-2 rounded-full bg-green-500/80" />
                    <span className="ml-2 truncate max-w-[180px]">azaban.production.system</span>
                  </div>
                  <span className="text-emerald-400 font-semibold">100% LIVE</span>
                </div>

                {/* Screenshot */}
                <div className="aspect-[16/9] overflow-hidden relative group">
                  <img
                    src="/Screenshot 2026-05-20 233100.png"
                    alt="Azaban System E-commerce"
                    className="w-full h-full object-cover object-top"
                  />
                  <div className="absolute inset-0 bg-linear-to-t from-black/80 via-transparent to-transparent flex items-end p-3">
                    <span className="text-xs font-bold text-white font-heading">
                      Azaban E-commerce & Retail Management System
                    </span>
                  </div>
                </div>
              </div>

              {/* Verified Metrics Counter Row */}
              <div className="grid grid-cols-3 gap-2">
                <div className="p-3 rounded-xl glass-panel border border-white/10 text-center">
                  <span className="text-lg font-bold text-primary font-heading block">13+</span>
                  <span className="text-[10px] font-mono uppercase text-theme-secondary">Clients</span>
                </div>
                <div className="p-3 rounded-xl glass-panel border border-white/10 text-center">
                  <span className="text-lg font-bold text-primary-light font-heading block">+1,200</span>
                  <span className="text-[10px] font-mono uppercase text-theme-secondary">Hours</span>
                </div>
                <div className="p-3 rounded-xl glass-panel border border-white/10 text-center">
                  <span className="text-lg font-bold text-emerald-400 font-heading block">100%</span>
                  <span className="text-[10px] font-mono uppercase text-theme-secondary">On-Time</span>
                </div>
              </div>

              {/* Supporting Deliveries Badge */}
              <div className="p-3 rounded-xl bg-white/5 border border-white/10 flex items-center justify-between text-xs font-mono">
                <span className="text-theme-secondary">Key Deliveries:</span>
                <span className="text-white truncate">Best Rate Logistics, Digital Studio, Azaban</span>
              </div>
            </motion.div>
          )}

          {/* ============================================================== */}
          {/* CHAPTER 05: TODAY & BEYOND (Next-Gen Stack & AI Features) */}
          {/* ============================================================== */}
          {chapter.visualType === "today-and-beyond" && (
            <motion.div
              key="today-and-beyond"
              initial={{ opacity: 0, scale: 0.94, y: 15 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.94, y: -15 }}
              transition={{ duration: 0.45, ease: "easeOut" }}
              className="w-full max-w-md space-y-3"
            >
              {/* Tafahom AI & Pink Shield Showcase Preview */}
              <div className="relative rounded-2xl overflow-hidden border border-primary/40 bg-black/80 shadow-2xl">
                <div className="px-3.5 py-2 bg-white/5 border-b border-white/10 flex items-center justify-between text-[11px] font-mono text-theme-secondary">
                  <div className="flex items-center gap-1.5">
                    <Sparkles size={13} className="text-primary" />
                    <span>Tafahom // Faheem AI Exam Engine</span>
                  </div>
                  <span className="text-primary-light font-semibold">React 19</span>
                </div>

                <div className="aspect-[16/9] overflow-hidden relative">
                  <img
                    src="/Screenshot 2026-04-19 231223.png"
                    alt="Tafahom Platform AI Engine"
                    className="w-full h-full object-cover object-top"
                  />
                  <div className="absolute inset-0 bg-linear-to-t from-black/85 via-black/20 to-transparent flex items-end p-3.5">
                    <div>
                      <span className="text-[10px] font-mono uppercase px-2 py-0.5 rounded bg-primary text-white mb-1 inline-block">
                        AI-Orchestrated EdTech
                      </span>
                      <h5 className="text-xs font-bold text-white font-heading">
                        Bilingual Exam Synthesis & Automated Grading
                      </h5>
                    </div>
                  </div>
                </div>
              </div>

              {/* Status & Forward Horizons Card */}
              <div className="p-4 rounded-2xl glass-panel border border-primary/30 flex items-center justify-between shadow-lg">
                <div className="flex items-center gap-3">
                  <span className="relative flex h-3 w-3">
                    <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
                    <span className="relative inline-flex rounded-full h-3 w-3 bg-emerald-500"></span>
                  </span>
                  <div>
                    <h5 className="text-xs font-bold text-theme-primary font-heading">
                      Ready for High-Impact Teams
                    </h5>
                    <span className="text-[11px] font-mono text-theme-secondary">
                      Available for Remote Worldwide Roles
                    </span>
                  </div>
                </div>
                <a
                  href="#contact"
                  className="px-3 py-1.5 rounded-full text-xs font-semibold bg-primary hover:bg-primary-light text-white flex items-center gap-1 transition-all"
                >
                  <span>Connect</span>
                  <ArrowUpRight size={13} />
                </a>
              </div>

              {/* Forward Tech Radar Tags */}
              <div className="flex flex-wrap gap-1.5 pt-1">
                {["Strict TypeScript", "Tailwind v4", "AI Prompt UX", "WCAG 2.2 AA", "Sub-second FCP"].map((item) => (
                  <span
                    key={item}
                    className="px-2.5 py-1 rounded-md text-[10px] font-mono bg-white/5 border border-white/10 text-theme-secondary"
                  >
                    • {item}
                  </span>
                ))}
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>

      {/* Stage Bottom Quote & Micro-Indicator */}
      <div className="relative z-10 pt-3 border-t border-white/10 flex items-center justify-between text-xs">
        <p className="text-theme-secondary text-[11px] font-mono italic truncate max-w-[80%]">
          "{chapter.quote}"
        </p>
        <div className="flex items-center gap-1 text-[11px] font-mono text-primary font-bold">
          <span>{chapter.number}</span>
          <span className="text-theme-secondary/50">/</span>
          <span className="text-theme-secondary">05</span>
        </div>
      </div>
    </div>
  );
}

import { useState, useEffect, useRef, useCallback } from "react";
import { motion, AnimatePresence } from "motion/react";
import {
  Sparkles,
  ArrowRight,
  Check,
  CheckCircle2,
  Code,
  Briefcase,
  Award,
  Calendar,
  Layers
} from "lucide-react";
import { journeyChapters } from "@/data/journey";
import { useSectionVisibility } from "@/hooks/useSectionVisibility";

export function JourneySection() {
  const [activeChapterIndex, setActiveChapterIndex] = useState(0);
  const chapterRefs = useRef<(HTMLElement | null)[]>([]);
  const sectionRef = useRef<HTMLElement>(null);
  const isClickScrollingRef = useRef(false);
  const rafIdRef = useRef<number | null>(null);

  // Viewport-aware visibility observer: only active when Journey is in or near viewport
  const isJourneyInView = useSectionVisibility(sectionRef, { rootMargin: "200px" });

  const activeChapter = journeyChapters[activeChapterIndex] || journeyChapters[0];

  // Helper to smoothly scroll to a specific chapter in the right column
  const scrollToChapter = useCallback((index: number) => {
    isClickScrollingRef.current = true;
    setActiveChapterIndex(index);
    const targetElement = chapterRefs.current[index];

    if (targetElement) {
      // 112px (7rem) offset ensures the chapter header lines up cleanly below the fixed navbar
      const navOffset = 112;
      const elementPosition = targetElement.getBoundingClientRect().top + window.scrollY;
      window.scrollTo({
        top: elementPosition - navOffset,
        behavior: "smooth"
      });

      // Release lock after smooth scroll settling
      setTimeout(() => {
        isClickScrollingRef.current = false;
      }, 700);
    }
  }, []);

  // Natural scroll detection: evaluate which chapter occupies the primary reading zone
  // Completely suspended when JourneySection is outside viewport or tab is hidden
  useEffect(() => {
    if (!isJourneyInView) {
      if (rafIdRef.current) {
        cancelAnimationFrame(rafIdRef.current);
        rafIdRef.current = null;
      }
      return;
    }

    const handleScroll = () => {
      if (isClickScrollingRef.current) return;
      if (!sectionRef.current) return;

      if (rafIdRef.current) cancelAnimationFrame(rafIdRef.current);

      rafIdRef.current = requestAnimationFrame(() => {
        // Trigger line at 38% from top of viewport where reader's gaze rests
        const triggerPoint = window.innerHeight * 0.38;
        let detectedIndex = 0;
        let found = false;

        for (let i = 0; i < chapterRefs.current.length; i++) {
          const el = chapterRefs.current[i];
          if (!el) continue;
          const rect = el.getBoundingClientRect();

          // Element actively encompasses the trigger line
          if (rect.top <= triggerPoint && rect.bottom >= triggerPoint) {
            detectedIndex = i;
            found = true;
            break;
          }
        }

        // Boundary fallbacks
        if (!found) {
          const firstEl = chapterRefs.current[0];
          const lastEl = chapterRefs.current[chapterRefs.current.length - 1];

          if (firstEl && firstEl.getBoundingClientRect().top > triggerPoint) {
            detectedIndex = 0;
          } else if (lastEl && lastEl.getBoundingClientRect().bottom < triggerPoint) {
            detectedIndex = journeyChapters.length - 1;
          } else {
            // Pick the chapter closest to the trigger line
            let closestDistance = Infinity;
            chapterRefs.current.forEach((el, idx) => {
              if (!el) return;
              const rect = el.getBoundingClientRect();
              const dist = Math.abs(rect.top - triggerPoint);
              if (dist < closestDistance) {
                closestDistance = dist;
                detectedIndex = idx;
              }
            });
          }
        }

        setActiveChapterIndex((prev) => (prev !== detectedIndex ? detectedIndex : prev));
      });
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    handleScroll(); // Initial check when entering viewport

    return () => {
      window.removeEventListener("scroll", handleScroll);
      if (rafIdRef.current) {
        cancelAnimationFrame(rafIdRef.current);
        rafIdRef.current = null;
      }
    };
  }, [isJourneyInView]);

  const progressPercent = Math.round(((activeChapterIndex + 1) / journeyChapters.length) * 100);

  return (
    <section
      ref={sectionRef}
      id="experience"
      aria-label="Building My Journey"
      className="py-24 sm:py-32 px-4 sm:px-6 lg:px-8 relative bg-theme-primary transition-colors"
    >
      {/* Ambient background glows */}
      <div className="absolute top-1/4 left-0 w-96 h-96 bg-primary/5 rounded-full blur-3xl pointer-events-none -translate-x-1/2" />
      <div className="absolute bottom-1/4 right-0 w-96 h-96 bg-primary/5 rounded-full blur-3xl pointer-events-none translate-x-1/2" />

      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <div className="flex flex-col items-start mb-14 sm:mb-20">
          <div className="inline-flex items-center gap-2 text-primary font-mono text-xs uppercase tracking-widest font-semibold mb-3">
            <Sparkles size={14} />
            <span>Interactive Scrollytelling Experience</span>
          </div>
          <h2 className="text-3xl sm:text-5xl font-extrabold tracking-tight font-heading text-theme-primary">
            Building My <span className="text-gradient">Journey.</span>
          </h2>
          <p className="text-theme-secondary max-w-2xl text-sm sm:text-base leading-relaxed mt-3">
            An evolving timeline from foundational code to production e-commerce platforms and AI-driven interfaces. The left panel stays anchored while you scroll through each milestone on the right.
          </p>
        </div>

        {/* ========================================================= */}
        {/* MOBILE CHAPTER JUMP STRIP (< lg screens)                 */}
        {/* ========================================================= */}
        <div className="lg:hidden mb-10 p-4 rounded-xl border border-white/10 bg-zinc-950/70 backdrop-blur-md">
          <div className="flex items-center justify-between mb-3 text-xs font-mono">
            <span className="text-theme-secondary uppercase tracking-wider">
              Chapter {activeChapter.number} of {activeChapter.totalChapters}
            </span>
            <span className="text-primary font-semibold">
              {progressPercent}% Complete
            </span>
          </div>

          {/* Progress bar */}
          <div className="w-full h-1.5 bg-white/10 rounded-full overflow-hidden mb-4">
            <div
              className="h-full bg-linear-to-r from-primary to-primary-light transition-all duration-300 ease-out"
              style={{ width: `${progressPercent}%` }}
            />
          </div>

          {/* Horizontal Chapter Buttons */}
          <div className="flex gap-2 overflow-x-auto pb-1 scrollbar-none">
            {journeyChapters.map((chap, idx) => {
              const isActive = idx === activeChapterIndex;
              const isPast = idx < activeChapterIndex;
              return (
                <button
                  key={chap.id}
                  onClick={() => scrollToChapter(idx)}
                  className={`px-3.5 py-2 rounded-lg text-xs font-medium whitespace-nowrap transition-all flex items-center gap-2 shrink-0 border ${
                    isActive
                      ? "bg-white text-zinc-950 border-white font-semibold shadow-md"
                      : isPast
                      ? "bg-white/5 text-theme-primary border-white/10 hover:border-white/20"
                      : "text-zinc-500 border-white/5 hover:text-zinc-300 hover:border-white/15"
                  }`}
                >
                  <span className="font-mono text-[11px] opacity-75">{chap.number}</span>
                  <span>{chap.title}</span>
                  {isPast && <Check size={12} className="text-emerald-400 shrink-0" />}
                </button>
              );
            })}
          </div>
        </div>

        {/* ========================================================= */}
        {/* TWO-COLUMN GRID: TRUE STICKY LEFT + SCROLLING RIGHT       */}
        {/* ========================================================= */}
        <div className="grid lg:grid-cols-12 gap-8 lg:gap-14 relative">
          {/* ========================================================= */}
          {/* LEFT COLUMN: Anchored Sticky Navigation (Spans 100% Height) */}
          {/* ========================================================= */}
          <aside className="hidden lg:block lg:col-span-5 xl:col-span-4 relative h-full">
            <div className="sticky top-28 space-y-5 max-h-[calc(100vh-8rem)]">
              {/* Sticky Chapter Information Card */}
              <div className="p-7 xl:p-8 rounded-xl border border-white/10 bg-zinc-950/85 backdrop-blur-xl shadow-2xl relative overflow-hidden transition-all duration-300">
                {/* Top cyan accent indicator */}
                <div className="absolute top-0 left-0 right-0 h-[2px] bg-linear-to-r from-primary via-primary-light to-transparent" />

                {/* Category & Period Metadata */}
                <div className="flex items-center justify-between text-xs font-mono text-zinc-400 uppercase tracking-wider mb-4">
                  <AnimatePresence mode="wait">
                    <motion.span
                      key={activeChapter.category}
                      initial={{ opacity: 0, y: -4 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: 4 }}
                      transition={{ duration: 0.2 }}
                      className="text-primary font-semibold truncate max-w-[210px]"
                    >
                      {activeChapter.category}
                    </motion.span>
                  </AnimatePresence>
                  <span className="shrink-0 text-zinc-400 font-mono">
                    {activeChapter.period}
                  </span>
                </div>

                {/* Large Chapter Number: 01 / 05 */}
                <div className="flex items-baseline gap-2 mb-3">
                  <AnimatePresence mode="wait">
                    <motion.span
                      key={activeChapter.number}
                      initial={{ opacity: 0, y: -14 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: 14 }}
                      transition={{ duration: 0.28, ease: "easeOut" }}
                      className="text-6xl xl:text-7xl font-extrabold font-mono tracking-tight text-white tabular-nums leading-none"
                    >
                      {activeChapter.number}
                    </motion.span>
                  </AnimatePresence>
                  <span className="text-xl xl:text-2xl font-mono text-zinc-500 font-normal">
                    / {activeChapter.totalChapters}
                  </span>
                </div>

                {/* Chapter Title & Short Description */}
                <div className="min-h-[96px] flex flex-col justify-center">
                  <AnimatePresence mode="wait">
                    <motion.div
                      key={activeChapter.id}
                      initial={{ opacity: 0, y: 8 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: -8 }}
                      transition={{ duration: 0.25, ease: "easeOut" }}
                    >
                      <h3 className="text-xl xl:text-2xl font-bold font-heading text-white tracking-tight mb-2">
                        {activeChapter.title}
                      </h3>
                      <p className="text-zinc-400 text-xs xl:text-sm leading-relaxed font-normal">
                        {activeChapter.shortDescription}
                      </p>
                    </motion.div>
                  </AnimatePresence>
                </div>

                {/* Overall Journey Progress Indicator */}
                <div className="mt-5 pt-4 border-t border-white/10">
                  <div className="flex items-center justify-between text-[11px] font-mono text-zinc-400 mb-2">
                    <span className="tracking-widest uppercase">JOURNEY PROGRESS</span>
                    <span className="text-primary font-semibold font-mono">
                      {progressPercent}%
                    </span>
                  </div>
                  <div className="w-full h-1.5 bg-white/10 rounded-full overflow-hidden">
                    <motion.div
                      className="h-full bg-linear-to-r from-primary to-primary-light"
                      initial={false}
                      animate={{ width: `${progressPercent}%` }}
                      transition={{ duration: 0.35, ease: "easeOut" }}
                    />
                  </div>
                </div>
              </div>

              {/* Chapter Navigation List */}
              <nav aria-label="Journey Chapters" className="space-y-1.5">
                <div className="text-[11px] font-mono uppercase tracking-widest text-zinc-500 mb-2 px-1">
                  CHAPTER NAVIGATION
                </div>

                {journeyChapters.map((chapter, index) => {
                  const isActive = index === activeChapterIndex;
                  const isCompleted = index < activeChapterIndex;
                  const isUpcoming = index > activeChapterIndex;

                  return (
                    <button
                      key={chapter.id}
                      data-cursor-magnetic
                      onClick={() => scrollToChapter(index)}
                      aria-current={isActive ? "step" : undefined}
                      className={`w-full text-left p-3 xl:p-3.5 rounded-xl border transition-all duration-300 flex items-center justify-between group cursor-pointer ${
                        isActive
                          ? "bg-white text-zinc-950 border-white shadow-xl font-semibold scale-[1.01]"
                          : isCompleted
                          ? "bg-zinc-950/40 text-theme-primary border-white/10 hover:border-white/20 hover:bg-zinc-900/60"
                          : "bg-transparent text-zinc-500 border-white/5 hover:text-zinc-300 hover:border-white/15"
                      }`}
                    >
                      <div className="flex items-center gap-3 min-w-0">
                        {/* Chapter Number */}
                        <span
                          className={`font-mono text-xs tabular-nums font-semibold shrink-0 ${
                            isActive
                              ? "text-zinc-950"
                              : isCompleted
                              ? "text-primary"
                              : "text-zinc-500"
                          }`}
                        >
                          {chapter.number}
                        </span>

                        {/* Chapter Title */}
                        <span className="text-xs xl:text-sm truncate">
                          {chapter.title}
                        </span>
                      </div>

                      {/* Status Indicator */}
                      <div className="shrink-0 ml-2">
                        {isActive ? (
                          <ArrowRight
                            size={14}
                            className="text-zinc-950 transition-transform group-hover:translate-x-0.5"
                          />
                        ) : isCompleted ? (
                          <div className="w-5 h-5 rounded-full bg-emerald-500/10 flex items-center justify-center border border-emerald-500/20">
                            <Check size={11} className="text-emerald-400" />
                          </div>
                        ) : (
                          <span className="w-1.5 h-1.5 rounded-full bg-zinc-600 block" />
                        )}
                      </div>
                    </button>
                  );
                })}
              </nav>
            </div>
          </aside>

          {/* ========================================================= */}
          {/* RIGHT COLUMN: Five Independent Vertical Chapter Sections */}
          {/* ========================================================= */}
          <div className="lg:col-span-7 xl:col-span-8 space-y-24 lg:space-y-36 pb-24">
            {journeyChapters.map((chapter, index) => {
              const isActive = index === activeChapterIndex;

              return (
                <article
                  key={chapter.id}
                  id={`chapter-${chapter.number}`}
                  ref={(el) => {
                    chapterRefs.current[index] = el;
                  }}
                  className={`min-h-[75vh] lg:min-h-[85vh] flex flex-col justify-between p-7 sm:p-9 lg:p-11 xl:p-12 rounded-xl border transition-all duration-500 relative scroll-mt-28 ${
                    isActive
                      ? "border-primary/50 shadow-[0_0_40px_rgba(14,165,233,0.14)] bg-zinc-950/90"
                      : "border-white/10 bg-zinc-950/50 opacity-70 hover:opacity-100 hover:border-white/20"
                  }`}
                >
                  <div>
                    {/* Top Header Row */}
                    <div className="flex flex-wrap items-center justify-between gap-3 mb-6 pb-5 border-b border-white/10">
                      <div className="flex items-center gap-2 text-xs font-mono text-zinc-400">
                        <span className="text-primary font-semibold tracking-wider uppercase">
                          {chapter.category}
                        </span>
                        <span>·</span>
                        <span className="flex items-center gap-1">
                          <Calendar size={13} className="text-zinc-400" />
                          {chapter.period}
                        </span>
                      </div>

                      <div className="flex items-center gap-2">
                        <span className="text-xs font-mono font-bold px-2.5 py-1 rounded bg-white/5 border border-white/10 text-theme-primary">
                          CHAPTER {chapter.number}
                        </span>
                        {isActive && (
                          <span className="text-[11px] font-mono font-medium px-2.5 py-0.5 rounded bg-primary/20 text-primary-light border border-primary/30 flex items-center gap-1.5">
                            <span className="w-1.5 h-1.5 rounded-full bg-primary animate-pulse" />
                            <span>ACTIVE CHAPTER</span>
                          </span>
                        )}
                      </div>
                    </div>

                    {/* Chapter Main Title & Subtitle */}
                    <div className="mb-6">
                      <h3 className="text-2xl sm:text-3xl xl:text-4xl font-extrabold font-heading text-white tracking-tight mb-2">
                        {chapter.title}
                      </h3>
                      <p className="text-sm sm:text-base font-medium text-primary-light">
                        {chapter.subtitle}
                      </p>
                    </div>

                    {/* Narrative Full Description */}
                    <p className="text-zinc-300 text-sm sm:text-base leading-relaxed mb-8">
                      {chapter.fullDescription}
                    </p>

                    {/* Key Metrics Row (if present) */}
                    {chapter.metrics && chapter.metrics.length > 0 && (
                      <div className="grid grid-cols-2 gap-3 mb-8">
                        {chapter.metrics.map((metric) => (
                          <div
                            key={metric.label}
                            className="p-3.5 rounded-lg border border-white/10 bg-white/[0.02] flex items-center justify-between"
                          >
                            <span className="text-[11px] font-mono uppercase tracking-wider text-zinc-400">
                              {metric.label}
                            </span>
                            <span className="text-xs sm:text-sm font-semibold font-mono text-primary-light">
                              {metric.value}
                            </span>
                          </div>
                        ))}
                      </div>
                    )}

                    {/* Two-Column Grid: Core Competencies & Key Experiences */}
                    <div className="grid md:grid-cols-2 gap-6 mb-8">
                      {/* Core Competencies Panel */}
                      <div className="p-5 rounded-lg bg-white/[0.02] border border-white/10">
                        <div className="flex items-center gap-2 text-xs font-mono uppercase tracking-wider text-theme-primary font-semibold mb-4">
                          <Code size={14} className="text-primary" />
                          <span>Core Competencies</span>
                        </div>
                        <ul className="space-y-2.5">
                          {chapter.coreCompetencies.map((comp) => (
                            <li
                              key={comp}
                              className="flex items-start gap-2.5 text-xs sm:text-sm text-zinc-300 leading-normal"
                            >
                              <span className="w-1.5 h-1.5 rounded-full bg-primary shrink-0 mt-1.5" />
                              <span>{comp}</span>
                            </li>
                          ))}
                        </ul>
                      </div>

                      {/* Key Experiences Panel */}
                      <div className="p-5 rounded-lg bg-white/[0.02] border border-white/10">
                        <div className="flex items-center gap-2 text-xs font-mono uppercase tracking-wider text-theme-primary font-semibold mb-4">
                          <Briefcase size={14} className="text-primary-light" />
                          <span>Key Experiences</span>
                        </div>
                        <ul className="space-y-2.5">
                          {chapter.keyExperiences.map((exp) => (
                            <li
                              key={exp}
                              className="flex items-start gap-2.5 text-xs sm:text-sm text-zinc-300 leading-normal"
                            >
                              <CheckCircle2
                                size={14}
                                className="text-primary shrink-0 mt-0.5"
                              />
                              <span>{exp}</span>
                            </li>
                          ))}
                        </ul>
                      </div>
                    </div>

                    {/* Outcomes & Verifiable Impact */}
                    <div className="p-5 rounded-lg bg-white/[0.02] border border-white/10 mb-8">
                      <div className="flex items-center gap-2 text-xs font-mono uppercase tracking-wider text-theme-primary font-semibold mb-3">
                        <Award size={14} className="text-accent-purple" />
                        <span>Outcomes & Verifiable Impact</span>
                      </div>
                      <ul className="space-y-2.5">
                        {chapter.outcomes.map((outcome) => (
                          <li
                            key={outcome}
                            className="flex items-start gap-2.5 text-xs sm:text-sm text-zinc-200 font-medium"
                          >
                            <span className="text-emerald-400 font-bold">✓</span>
                            <span>{outcome}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>

                  {/* Technologies & Tooling Footer */}
                  <div className="pt-5 border-t border-white/10 flex flex-wrap items-center gap-2">
                    <span className="text-[11px] font-mono text-zinc-400 uppercase tracking-wider mr-2">
                      Technologies:
                    </span>
                    {chapter.technologies.map((tech) => (
                      <span
                        key={tech}
                        className="px-2.5 py-1 rounded text-xs font-mono bg-white/5 text-zinc-300 border border-white/10"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </article>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}

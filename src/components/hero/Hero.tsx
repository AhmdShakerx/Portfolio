import { useRef } from "react";
import { motion } from "motion/react";
import { ChevronRight, Download, MapPin, Sparkles, ArrowDown } from "lucide-react";
import { SplineScene } from "@/components/ui/splite";
import Particles from "@/components/Particles";
import { useSectionVisibility } from "@/hooks/useSectionVisibility";

interface HeroProps {
  isActive?: boolean;
}

export function Hero({ isActive = true }: HeroProps) {
  const sectionRef = useRef<HTMLElement>(null);
  const isHeroInView = useSectionVisibility(sectionRef, { rootMargin: "100px" });
  const isHeroActive = isActive && isHeroInView;

  const scrollTo = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section
      ref={sectionRef}
      id="home"
      className="relative min-h-screen flex items-center justify-center pt-24 pb-16 px-6 overflow-hidden w-full"
    >
      {/* Background ambient particles (halted when offscreen) */}
      <Particles isActive={isHeroActive} />

      {/* 3D Spline Scene (Desktop & Tablet) - halted when offscreen */}
      <div
        data-cursor="explore"
        data-cursor-text="3D SCENE"
        className="absolute inset-0 w-full h-full z-0 flex items-center justify-center pointer-events-auto opacity-75 dark:opacity-70 transition-opacity"
      >
        <SplineScene
          scene="https://prod.spline.design/kZDDjO5HuC9GJUM2/scene.splinecode"
          className="w-full h-full object-cover"
          isActive={isHeroActive}
        />
      </div>

      {/* Radial depth vignette overlay */}
      <div className="absolute inset-0 bg-radial from-transparent via-theme-primary/40 to-theme-primary/95 pointer-events-none z-[1]" />

      {/* Hero Content Container */}
      <div className="max-w-6xl mx-auto w-full relative z-10 flex flex-col items-center md:items-start text-center md:text-left pointer-events-none">
        {/* Availability & Role Status Pill */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="pointer-events-auto inline-flex items-center gap-2.5 px-3.5 py-1.5 rounded-full glass-panel border border-primary/30 mb-6 shadow-sm"
        >
          <span className="relative flex h-2 w-2">
            <span
              className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"
              style={{ animationPlayState: isHeroActive ? "running" : "paused" }}
            />
            <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500"></span>
          </span>
          <span className="text-xs font-mono font-medium tracking-wide text-theme-primary">
            AVAILABLE FOR FREELANCE & PRODUCT ROLES
          </span>
        </motion.div>

        {/* Small Intro Label */}
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="flex items-center gap-2 text-primary font-mono text-xs sm:text-sm uppercase tracking-widest mb-3 font-semibold"
        >
          <Sparkles size={16} />
          <span>Front-End Web Developer & UI/UX Designer</span>
        </motion.div>

        {/* Main Brand Headline */}
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.3 }}
          className="text-4xl sm:text-6xl md:text-7xl lg:text-8xl font-extrabold tracking-tight mb-6 max-w-4xl"
        >
          <span>I turn ideas into </span>
          <span className="text-gradient drop-shadow-sm">digital experiences.</span>
        </motion.h1>

        {/* Supporting Narrative */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.4 }}
          className="text-theme-secondary text-base sm:text-lg md:text-xl max-w-2xl mb-8 leading-relaxed font-normal"
        >
          I'm <strong className="text-theme-primary font-semibold">Ahmed Shaker</strong> — crafting modern, high-performance web applications with thoughtful design systems and clean, maintainable code.
        </motion.p>

        {/* Quick Location & Experience verification badges */}
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.5 }}
          className="flex flex-wrap items-center justify-center md:justify-start gap-4 text-xs font-mono text-theme-secondary mb-10"
        >
          <span className="flex items-center gap-1.5 px-3 py-1 rounded-md bg-white/5 border border-white/10">
            <MapPin size={13} className="text-primary" />
            Mansoura, Egypt
          </span>
          <span className="px-3 py-1 rounded-md bg-white/5 border border-white/10">
            2+ Years Verified Experience
          </span>
          <span className="px-3 py-1 rounded-md bg-white/5 border border-white/10">
            10+ Production Projects
          </span>
        </motion.div>

        {/* Primary and Secondary CTA Buttons */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.6 }}
          className="pointer-events-auto flex flex-wrap items-center justify-center md:justify-start gap-4 w-full sm:w-auto"
        >
          {/* Primary CTA */}
          <motion.button
            data-cursor-magnetic
            onClick={() => scrollTo("projects")}
            whileHover={{ scale: 1.03 }}
            whileTap={{ scale: 0.97 }}
            className="w-full sm:w-auto px-7 py-3.5 rounded-full font-semibold text-white bg-linear-to-r from-primary to-primary-light shadow-lg shadow-primary/25 hover:shadow-primary/40 flex items-center justify-center gap-2 transition-all group"
          >
            <span>Explore My Work</span>
            <ChevronRight size={18} className="group-hover:translate-x-1 transition-transform" />
          </motion.button>

          {/* Secondary CTA */}
          <motion.button
            data-cursor-magnetic
            onClick={() => scrollTo("contact")}
            whileHover={{ scale: 1.03 }}
            whileTap={{ scale: 0.97 }}
            className="w-full sm:w-auto px-7 py-3.5 rounded-full font-semibold text-theme-primary glass-panel hover:bg-white/10 border border-white/15 flex items-center justify-center gap-2 transition-colors"
          >
            <span>Let's Work Together</span>
          </motion.button>

          {/* Resume Download CTA */}
          <motion.a
            data-cursor-magnetic
            href="/CV.pdf"
            download="Ahmed_Shaker_CV.pdf"
            whileHover={{ scale: 1.03 }}
            whileTap={{ scale: 0.97 }}
            className="w-full sm:w-auto px-6 py-3.5 rounded-full text-sm font-medium text-theme-secondary hover:text-theme-primary border border-transparent hover:border-white/10 flex items-center justify-center gap-2 transition-colors"
          >
            <Download size={16} className="text-primary" />
            <span>Download Resume</span>
          </motion.a>
        </motion.div>
      </div>

      {/* Elegant Scroll Indicator */}
      <motion.div
        data-cursor-magnetic
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1, duration: 1 }}
        className="absolute bottom-6 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 text-theme-secondary/60 pointer-events-auto cursor-pointer"
        onClick={() => scrollTo("about")}
      >
        <span className="text-[11px] font-mono tracking-widest uppercase">Scroll</span>
        <motion.div
          animate={isHeroActive ? { y: [0, 6, 0] } : { y: 0 }}
          transition={
            isHeroActive
              ? { repeat: Infinity, duration: 2, ease: "easeInOut" }
              : { duration: 0.3 }
          }
        >
          <ArrowDown size={14} />
        </motion.div>
      </motion.div>
    </section>
  );
}

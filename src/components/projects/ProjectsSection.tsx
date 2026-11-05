import { useState, useRef } from "react";
import { motion, AnimatePresence } from "motion/react";
import { ExternalLink, ArrowRight, Github, Sparkles, Layers, Check } from "lucide-react";
import { Link } from "react-router-dom";
import { projects } from "@/data/projects";
import { Project } from "@/types";
import { useSectionVisibility } from "@/hooks/useSectionVisibility";

type CategoryFilter = "All Projects" | "Cryptography & Cybersecurity" |"Creative Agency Website"| "Fitness & Gym Websites"|"Web Development" | "E-commerce" | "UI/UX Design" | "AI & Technology" | "Landing Pages";

export function ProjectsSection() {
  const sectionRef = useRef<HTMLElement>(null);
  const isProjectsInView = useSectionVisibility(sectionRef, { rootMargin: "120px" });
  const [selectedCategory, setSelectedCategory] = useState<CategoryFilter>("All Projects");

  const categories: CategoryFilter[] = [
    "All Projects",
    "Cryptography & Cybersecurity",
    "Fitness & Gym Websites",
    "Web Development",
    "Creative Agency Website",
    "E-commerce",
    "UI/UX Design",
    "AI & Technology",
    "Landing Pages"
  ];

  const featuredProjects = projects.filter((p) => p.featured);
  const filteredProjects = selectedCategory === "All Projects"
    ? projects
    : projects.filter((p) => p.category === selectedCategory);

  return (
    <section ref={sectionRef} id="projects" className="py-24 px-6 relative">
      <div className="max-w-6xl mx-auto">
        {/* Section Header */}
        <div className="flex flex-col items-center text-center mb-16">
          <div className="inline-flex items-center gap-2 text-primary font-mono text-xs uppercase tracking-widest font-semibold mb-3">
            <Sparkles size={14} />
            <span>Curated Engineering & Design</span>
          </div>
          <h2 className="text-3xl sm:text-5xl font-extrabold tracking-tight mb-4">
            Featured <span className="text-gradient">Projects.</span>
          </h2>
          <p className="text-theme-secondary max-w-2xl text-sm sm:text-base leading-relaxed">
            Real-world systems, client platforms, and educational tools engineered with precision, high performance, and accessible UI.
          </p>
        </div>

        {/* ========================================================================= */}
        {/* PART A: FEATURED EDITORIAL PROJECTS (Top 3) */}
        {/* ========================================================================= */}
        <div className="space-y-20 mb-28">
          {featuredProjects.map((project, index) => {
            const isEven = index % 2 === 1;

            return (
              <motion.article
                key={project.id}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 0.7 }}
                className="rounded-3xl glass-panel border border-white/10 p-6 sm:p-8 lg:p-10 shadow-2xl relative overflow-hidden group"
              >
                {/* Subtle background gradient glow */}
                <div className="absolute -top-24 -right-24 w-96 h-96 bg-primary/10 rounded-full blur-3xl pointer-events-none group-hover:bg-primary/15 transition-all duration-700" />

                <div className={`grid lg:grid-cols-12 gap-8 lg:gap-12 items-center ${isEven ? "lg:flex-row-reverse" : ""}`}>
                  {/* Visual Preview Side (7 cols) */}
                  <div className={`lg:col-span-7 ${isEven ? "lg:order-2" : "lg:order-1"}`}>
                    <div className="relative rounded-2xl overflow-hidden border border-white/10 bg-darker/60 shadow-xl group/img">
                      {/* Browser header bar */}
                      <div className="px-4 py-2.5 bg-black/40 border-b border-white/10 flex items-center gap-2">
                        <div className="flex items-center gap-1.5">
                          <span className="w-2.5 h-2.5 rounded-full bg-red-500/80" />
                          <span className="w-2.5 h-2.5 rounded-full bg-yellow-500/80" />
                          <span className="w-2.5 h-2.5 rounded-full bg-green-500/80" />
                        </div>
                        <div className="ml-3 px-3 py-0.5 rounded-md bg-white/5 text-[11px] font-mono text-theme-secondary/70 truncate max-w-xs">
                          {project.slug}.web
                        </div>
                      </div>

                      {/* Main Screenshot with link */}
                      <div
                        data-cursor="view"
                        data-cursor-text="VIEW"
                        className="aspect-[16/10] overflow-hidden bg-black/20 relative"
                      >
                        <img
                          src={project.imageSrc}
                          alt={project.title}
                          className="w-full h-full object-cover object-top transition-transform duration-700 ease-out group-hover/img:scale-105"
                          loading="lazy"
                        />
                        <div className="absolute inset-0 bg-black/20 opacity-0 group-hover/img:opacity-100 transition-opacity flex items-center justify-center">
                          <Link
                            to={`/projects/${project.slug}`}
                            data-cursor-magnetic
                            className="px-5 py-2.5 rounded-full glass-panel border border-white/20 text-white font-medium text-sm flex items-center gap-2 shadow-xl hover:bg-white hover:text-black transition-all"
                          >
                            <span>View Case Study</span>
                            <ArrowRight size={15} />
                          </Link>
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Editorial Details Side (5 cols) */}
                  <div className={`lg:col-span-5 flex flex-col justify-center ${isEven ? "lg:order-1" : "lg:order-2"}`}>
                    <div className="flex items-center gap-2 mb-3">
                      <span className="text-xs font-mono font-semibold uppercase px-3 py-1 rounded-full bg-primary/10 text-primary border border-primary/20">
                        {project.category}
                      </span>
                      <span className="text-xs font-mono text-theme-secondary">
                        {project.year}
                      </span>
                    </div>

                    <h3 className="text-2xl sm:text-3xl font-extrabold tracking-tight mb-3 font-heading text-theme-primary">
                      {project.title}
                    </h3>

                    <p className="text-theme-secondary text-sm sm:text-base leading-relaxed mb-6">
                      {project.shortDescription}
                    </p>

                    {/* Role & Problem Callout */}
                    <div className="space-y-3 mb-6 p-4 rounded-xl bg-white/5 border border-white/5 text-xs sm:text-sm">
                      <div>
                        <span className="text-theme-secondary block font-mono text-[11px] uppercase">My Role:</span>
                        <strong className="text-theme-primary">{project.role}</strong>
                      </div>
                      <div>
                        <span className="text-theme-secondary block font-mono text-[11px] uppercase">The Challenge:</span>
                        <p className="text-theme-secondary leading-snug">{project.problem}</p>
                      </div>
                    </div>

                    {/* Tech Badges */}
                    <div className="flex flex-wrap gap-2 mb-8">
                      {project.technologies.map((tech) => (
                        <span
                          key={tech}
                          className="px-2.5 py-1 rounded-md text-xs font-mono bg-white/5 border border-white/10 text-theme-secondary"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>

                    {/* Action Links */}
                    <div className="flex flex-wrap items-center gap-4">
                      <Link
                        to={`/projects/${project.slug}`}
                        data-cursor-magnetic
                        className="px-5 py-2.5 rounded-full font-semibold text-white bg-linear-to-r from-primary to-primary-light shadow-md shadow-primary/20 hover:shadow-primary/40 flex items-center gap-2 text-sm transition-all"
                      >
                        <span>Read Case Study</span>
                        <ArrowRight size={16} />
                      </Link>

                      {project.liveUrl && (
                        <a
                          href={project.liveUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                          data-cursor-magnetic
                          className="px-4 py-2.5 rounded-full font-medium text-theme-primary glass-panel hover:bg-white/10 border border-white/10 flex items-center gap-1.5 text-sm transition-colors"
                        >
                          <span>Live Demo</span>
                          <ExternalLink size={14} className="text-primary" />
                        </a>
                      )}

                      {project.githubUrl && (
                        <a
                          href={project.githubUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                          data-cursor-magnetic
                          className="p-2.5 rounded-full text-theme-secondary hover:text-theme-primary hover:bg-white/5 transition-colors"
                          title="View Source on GitHub"
                        >
                          <Github size={18} />
                        </a>
                      )}
                    </div>
                  </div>
                </div>
              </motion.article>
            );
          })}
        </div>

        {/* ========================================================================= */}
        {/* PART B: ALL PROJECTS FILTERABLE INTERACTIVE GRID */}
        {/* ========================================================================= */}
        <div className="mb-24">
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-10 pb-6 border-b border-white/10">
            <div>
              <div className="flex items-center gap-2 text-xs font-mono text-primary uppercase tracking-wider mb-2 font-semibold">
                <Layers size={14} />
                <span>Portfolio Archive</span>
              </div>
              <h3 className="text-2xl sm:text-3xl font-bold font-heading">
                All Verified Projects
              </h3>
            </div>

            {/* Category Filter Pills */}
            <div className="flex flex-wrap items-center gap-1.5">
              {categories.map((cat) => {
                const isActive = selectedCategory === cat;
                return (
                  <button
                    key={cat}
                    data-cursor-magnetic
                    onClick={() => setSelectedCategory(cat)}
                    className={`px-3.5 py-1.5 rounded-full text-xs font-medium transition-all ${
                      isActive
                        ? "bg-primary text-white shadow-md shadow-primary/25 font-semibold"
                        : "text-theme-secondary hover:text-theme-primary hover:bg-white/5"
                    }`}
                  >
                    {cat}
                  </button>
                );
              })}
            </div>
          </div>

          {/* Grid of Projects */}
          <motion.div
            layout
            className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8"
          >
            <AnimatePresence>
              {filteredProjects.map((project) => (
                <motion.div
                  layout
                  key={project.id}
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.95 }}
                  transition={{ duration: 0.3 }}
                  className="rounded-2xl glass-panel border border-white/10 overflow-hidden flex flex-col justify-between group hover:border-primary/40 transition-all duration-300 shadow-lg"
                >
                  <div>
                    {/* Thumbnail */}
                    <div
                      data-cursor="view"
                      data-cursor-text="VIEW"
                      className="relative aspect-[16/10] overflow-hidden bg-darker/60 border-b border-white/10"
                    >
                      <img
                        src={project.imageSrc}
                        alt={project.title}
                        className="w-full h-full object-cover object-top transition-transform duration-500 group-hover:scale-105"
                        loading="lazy"
                      />
                      <div className="absolute top-3 left-3">
                        <span className="px-2.5 py-1 rounded-md text-[10px] font-mono font-medium uppercase tracking-wider bg-black/70 text-white backdrop-blur-md border border-white/10">
                          {project.category}
                        </span>
                      </div>
                    </div>

                    {/* Content */}
                    <div className="p-5 sm:p-6">
                      <h4 className="text-lg font-bold font-heading text-theme-primary mb-2 group-hover:text-primary transition-colors">
                        {project.title}
                      </h4>
                      <p className="text-theme-secondary text-xs sm:text-sm line-clamp-2 leading-relaxed mb-4">
                        {project.shortDescription}
                      </p>

                      {/* Tech Chips */}
                      <div className="flex flex-wrap gap-1.5 mb-2">
                        {project.technologies.slice(0, 3).map((t) => (
                          <span
                            key={t}
                            className="px-2 py-0.5 rounded text-[11px] font-mono bg-white/5 text-theme-secondary/80 border border-white/5"
                          >
                            {t}
                          </span>
                        ))}
                        {project.technologies.length > 3 && (
                          <span className="px-1.5 py-0.5 rounded text-[11px] font-mono bg-white/5 text-theme-secondary/60">
                            +{project.technologies.length - 3}
                          </span>
                        )}
                      </div>
                    </div>
                  </div>

                  {/* Card Footer Actions */}
                  <div className="p-5 sm:p-6 pt-0 border-t border-white/5 flex items-center justify-between text-xs mt-2">
                    <Link
                      to={`/projects/${project.slug}`}
                      className="font-semibold text-primary flex items-center gap-1 hover:underline"
                    >
                      <span>Case Study</span>
                      <ArrowRight size={13} />
                    </Link>

                    {project.liveUrl && (
                      <a
                        href={project.liveUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-theme-secondary hover:text-theme-primary flex items-center gap-1 font-mono transition-colors"
                      >
                        <span>Demo</span>
                        <ExternalLink size={12} />
                      </a>
                    )}
                  </div>
                </motion.div>
              ))}
            </AnimatePresence>
          </motion.div>
        </div>

        {/* ========================================================================= */}
        {/* PART C: INFINITE PROJECT MARQUEE GALLERY */}
        {/* ========================================================================= */}
        <div className="pt-8 border-t border-white/10">
          <div className="text-center mb-6">
            <span className="text-xs font-mono uppercase tracking-widest text-theme-secondary">
              Continuous Work Showcase • Hover to Pause
            </span>
          </div>

          <div className="relative w-full overflow-hidden py-4 [mask-image:linear-gradient(to_right,transparent,black_10%,black_90%,transparent)]">
            <div
              className="flex w-max gap-6 animate-[marquee_35s_linear_infinite] hover:[animation-play-state:paused]"
              style={{
                animationPlayState: isProjectsInView ? "running" : "paused"
              }}
            >
              {[...projects, ...projects].map((p, idx) => (
                <a
                  key={`${p.id}-${idx}`}
                  href={p.liveUrl || `#${p.slug}`}
                  target={p.liveUrl ? "_blank" : "_self"}
                  rel="noopener noreferrer"
                  className="flex items-center gap-4 px-4 py-3 rounded-2xl glass-panel border border-white/10 hover:border-primary/40 shrink-0 group transition-all"
                >
                  <img
                    src={p.imageSrc}
                    alt={p.title}
                    className="w-14 h-10 rounded-lg object-cover border border-white/10 group-hover:scale-105 transition-transform"
                  />
                  <div>
                    <h5 className="text-xs font-bold text-theme-primary group-hover:text-primary transition-colors">
                      {p.title}
                    </h5>
                    <span className="text-[10px] font-mono text-theme-secondary">
                      {p.category}
                    </span>
                  </div>
                  <ExternalLink size={12} className="text-theme-secondary group-hover:text-primary ml-2" />
                </a>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

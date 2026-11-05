import { useEffect } from "react";
import { useParams, Link, useNavigate } from "react-router-dom";
import { motion } from "motion/react";
import { ArrowLeft, ExternalLink, Github, CheckCircle2, Calendar, User, Code2, ArrowRight } from "lucide-react";
import { projects } from "@/data/projects";

export function ProjectDetails() {
  const { slug } = useParams<{ slug: string }>();
  const navigate = useNavigate();

  const projectIndex = projects.findIndex((p) => p.slug === slug);
  const project = projects[projectIndex];

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "instant" as ScrollBehavior });
  }, [slug]);

  if (!project) {
    return (
      <div className="min-h-screen flex flex-col items-center justify-center p-6 text-center">
        <h1 className="text-3xl font-bold font-heading mb-4 text-theme-primary">
          Project Case Study Not Found
        </h1>
        <p className="text-theme-secondary text-sm max-w-md mb-8">
          The requested project record could not be found or has moved.
        </p>
        <Link
          to="/"
          className="px-6 py-3 rounded-full font-semibold text-white bg-primary hover:bg-primary-light transition-colors"
        >
          Return to Portfolio
        </Link>
      </div>
    );
  }

  const prevProject = projectIndex > 0 ? projects[projectIndex - 1] : projects[projects.length - 1];
  const nextProject = projectIndex < projects.length - 1 ? projects[projectIndex + 1] : projects[0];

  return (
    <article className="min-h-screen pt-28 pb-24 px-6 relative">
      <div className="max-w-4xl mx-auto">
        {/* Breadcrumb Navigation */}
        <div className="mb-8">
          <Link
            to="/#projects"
            data-cursor-magnetic
            className="inline-flex items-center gap-2 text-xs font-mono text-theme-secondary hover:text-primary transition-colors group"
          >
            <ArrowLeft size={14} className="group-hover:-translate-x-1 transition-transform" />
            <span>Back to All Projects</span>
          </Link>
        </div>

        {/* Project Header */}
        <header className="mb-12">
          <div className="flex flex-wrap items-center gap-3 mb-4">
            <span className="text-xs font-mono uppercase tracking-wider px-3 py-1 rounded-full bg-primary/10 text-primary border border-primary/20 font-semibold">
              {project.category}
            </span>
            {project.year && (
              <span className="text-xs font-mono text-theme-secondary">
                Delivered in {project.year}
              </span>
            )}
          </div>

          <h1 className="text-3xl sm:text-5xl font-extrabold tracking-tight font-heading text-theme-primary mb-6">
            {project.title}
          </h1>

          <p className="text-lg sm:text-xl text-theme-secondary leading-relaxed font-normal mb-8">
            {project.fullDescription}
          </p>

          {/* Quick Meta Row */}
          <div className="grid grid-cols-2 sm:grid-cols-3 gap-4 p-5 rounded-2xl glass-panel border border-white/10 mb-8 text-xs sm:text-sm">
            <div>
              <span className="text-[11px] font-mono text-theme-secondary block uppercase">My Role</span>
              <strong className="text-theme-primary">{project.role}</strong>
            </div>
            <div>
              <span className="text-[11px] font-mono text-theme-secondary block uppercase">Category</span>
              <strong className="text-theme-primary">{project.category}</strong>
            </div>
            <div>
              <span className="text-[11px] font-mono text-theme-secondary block uppercase">Status</span>
              <strong className="text-emerald-400">Production Verified</strong>
            </div>
          </div>

          {/* Action Links */}
          <div className="flex flex-wrap items-center gap-4">
            {project.liveUrl && (
              <a
                href={project.liveUrl}
                target="_blank"
                rel="noopener noreferrer"
                data-cursor-magnetic
                className="px-6 py-3 rounded-full font-semibold text-white bg-linear-to-r from-primary to-primary-light shadow-lg shadow-primary/25 hover:shadow-primary/40 flex items-center gap-2 text-sm transition-all"
              >
                <span>Launch Live System</span>
                <ExternalLink size={15} />
              </a>
            )}

            {project.githubUrl && (
              <a
                href={project.githubUrl}
                target="_blank"
                rel="noopener noreferrer"
                data-cursor-magnetic
                className="px-5 py-3 rounded-full font-medium text-theme-primary glass-panel hover:bg-white/10 border border-white/10 flex items-center gap-2 text-sm transition-colors"
              >
                <Github size={16} />
                <span>Source Code</span>
              </a>
            )}
          </div>
        </header>

        {/* Hero Visual Mockup */}
        <div
          data-cursor="view"
          data-cursor-text="PREVIEW"
          className="rounded-3xl overflow-hidden glass-panel border border-white/10 shadow-2xl mb-16"
        >
          <div className="px-4 py-3 bg-black/40 border-b border-white/10 flex items-center gap-2">
            <div className="flex items-center gap-1.5">
              <span className="w-2.5 h-2.5 rounded-full bg-red-500/80" />
              <span className="w-2.5 h-2.5 rounded-full bg-yellow-500/80" />
              <span className="w-2.5 h-2.5 rounded-full bg-green-500/80" />
            </div>
            <span className="ml-3 text-[11px] font-mono text-theme-secondary/70">
              {project.title.toLowerCase().replace(/\s+/g, "-")}.live-preview
            </span>
          </div>
          <div className="aspect-[16/10] bg-darker overflow-hidden">
            <img
              src={project.imageSrc}
              alt={`${project.title} Interface Preview`}
              className="w-full h-full object-cover object-top"
            />
          </div>
        </div>

        {/* Case Study Content Breakdown */}
        <div className="space-y-12">
          {/* Section 1: Overview & Goals */}
          <section className="p-7 sm:p-9 rounded-3xl glass-panel border border-white/10 shadow-xl space-y-6">
            <h2 className="text-2xl font-bold font-heading text-theme-primary">
              1. Project Overview & Primary Goals
            </h2>
            <p className="text-theme-secondary text-sm sm:text-base leading-relaxed">
              {project.caseStudy.overview}
            </p>

            <div>
              <h3 className="text-sm font-mono uppercase tracking-wider text-primary font-semibold mb-3">
                Key Objectives:
              </h3>
              <div className="space-y-2.5">
                {project.caseStudy.goals.map((g) => (
                  <div key={g} className="flex items-start gap-2.5 text-xs sm:text-sm text-theme-primary">
                    <CheckCircle2 size={16} className="text-primary shrink-0 mt-0.5" />
                    <span>{g}</span>
                  </div>
                ))}
              </div>
            </div>
          </section>

          {/* Section 2: The Challenge & Engineering Solutions */}
          <section className="p-7 sm:p-9 rounded-3xl glass-panel border border-white/10 shadow-xl space-y-6">
            <h2 className="text-2xl font-bold font-heading text-theme-primary">
              2. Technical Challenge & Implementation
            </h2>
            <div className="p-4 rounded-2xl bg-white/5 border border-white/5">
              <span className="text-xs font-mono uppercase text-theme-secondary block mb-1">Challenge Identified:</span>
              <p className="text-sm sm:text-base text-theme-primary leading-relaxed">
                {project.caseStudy.challenge}
              </p>
            </div>

            <div>
              <h3 className="text-sm font-mono uppercase tracking-wider text-primary font-semibold mb-2">
                Development Methodology:
              </h3>
              <p className="text-theme-secondary text-sm sm:text-base leading-relaxed">
                {project.caseStudy.developmentProcess}
              </p>
            </div>

            <div>
              <h3 className="text-sm font-mono uppercase tracking-wider text-primary font-semibold mb-3">
                Architectural Highlights:
              </h3>
              <div className="grid sm:grid-cols-2 gap-3">
                {project.caseStudy.technicalHighlights.map((th) => (
                  <div key={th} className="p-3.5 rounded-xl bg-white/5 border border-white/5 text-xs sm:text-sm text-theme-primary">
                    • {th}
                  </div>
                ))}
              </div>
            </div>
          </section>

          {/* Section 3: Technologies Used */}
          <section className="p-7 sm:p-9 rounded-3xl glass-panel border border-white/10 shadow-xl space-y-4">
            <h2 className="text-2xl font-bold font-heading text-theme-primary">
              3. Technology Stack
            </h2>
            <p className="text-theme-secondary text-xs sm:text-sm mb-4">
              Carefully chosen libraries and frameworks prioritizing client runtime speed and zero architectural bloat.
            </p>
            <div className="flex flex-wrap gap-2.5">
              {project.technologies.map((t) => (
                <span
                  key={t}
                  className="px-3.5 py-1.5 rounded-xl font-mono text-xs sm:text-sm bg-white/5 border border-white/10 text-theme-primary"
                >
                  {t}
                </span>
              ))}
            </div>
          </section>

          {/* Section 4: Key Features */}
          <section className="p-7 sm:p-9 rounded-3xl glass-panel border border-white/10 shadow-xl space-y-4">
            <h2 className="text-2xl font-bold font-heading text-theme-primary">
              4. Delivered Features
            </h2>
            <div className="grid sm:grid-cols-2 gap-3">
              {project.keyFeatures.map((kf) => (
                <div key={kf} className="flex items-start gap-2.5 p-3 rounded-xl bg-white/5 border border-white/5 text-xs sm:text-sm text-theme-primary">
                  <CheckCircle2 size={16} className="text-primary shrink-0 mt-0.5" />
                  <span>{kf}</span>
                </div>
              ))}
            </div>
          </section>

          {/* Section 5: Lessons Learned */}
          <section className="p-7 sm:p-9 rounded-3xl glass-panel border border-white/10 shadow-xl space-y-3">
            <h2 className="text-2xl font-bold font-heading text-theme-primary">
              5. Engineering Retrospective
            </h2>
            <p className="text-theme-secondary text-sm sm:text-base leading-relaxed italic">
              "{project.caseStudy.lessonsLearned}"
            </p>
          </section>
        </div>

        {/* Previous / Next Case Study Navigation */}
        <div className="mt-16 pt-10 border-t border-white/10 grid grid-cols-2 gap-4">
          <Link
            to={`/projects/${prevProject.slug}`}
            className="p-5 rounded-2xl glass-panel border border-white/10 hover:border-primary/40 transition-all text-left group"
          >
            <span className="text-[11px] font-mono text-theme-secondary flex items-center gap-1 mb-1">
              <ArrowLeft size={12} className="group-hover:-translate-x-1 transition-transform" />
              Previous Case Study
            </span>
            <span className="font-bold font-heading text-sm sm:text-base text-theme-primary block truncate group-hover:text-primary transition-colors">
              {prevProject.title}
            </span>
          </Link>

          <Link
            to={`/projects/${nextProject.slug}`}
            className="p-5 rounded-2xl glass-panel border border-white/10 hover:border-primary/40 transition-all text-right group"
          >
            <span className="text-[11px] font-mono text-theme-secondary flex items-center justify-end gap-1 mb-1">
              Next Case Study
              <ArrowRight size={12} className="group-hover:translate-x-1 transition-transform" />
            </span>
            <span className="font-bold font-heading text-sm sm:text-base text-theme-primary block truncate group-hover:text-primary transition-colors">
              {nextProject.title}
            </span>
          </Link>
        </div>
      </div>
    </article>
  );
}

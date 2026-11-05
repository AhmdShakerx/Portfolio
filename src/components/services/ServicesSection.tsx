import { motion } from "motion/react";
import { ArrowUpRight } from "lucide-react";

export function ServicesSection() {
  const services = [
    {
      index: "01",
      title: "Front-End Engineering",
      subtitle: "Scalable architecture & 60fps web performance",
      description:
        "Building modern, responsive, high-performance web applications with clean, modular React and TypeScript architecture. Translating complex business logic and visual designs into maintainable code with strict type-safety, accessible semantics, and seamless state management.",
      deliverables: [
        "Component-Driven Architecture (React 19, TypeScript)",
        "State Orchestration & Context Architecture",
        "REST API Integration & Optimistic UI Updates",
        "Responsive & Cross-Browser Precision",
        "Performance Optimization & Core Web Vitals",
      ],
      stack: ["React", "TypeScript", "Tailwind CSS", "REST APIs", "Vite", "Motion"],
    },
    {
      index: "02",
      title: "UI/UX Design Systems",
      subtitle: "Human-centered interfaces & design systems",
      description:
        "Designing intuitive digital experiences centered on real human behavior. From user flows and wireframes to complete Figma design systems with systematic typography, spatial rhythm, and interactive micro-interactions designed before writing a line of code.",
      deliverables: [
        "Figma Design Systems & Scalable Component Libraries",
        "Information Architecture & User Flow Mapping",
        "Interactive Prototypes & Motion Choreography",
        "WCAG Accessibility & High-Contrast Typography",
        "Developer-Ready Design Handoffs",
      ],
      stack: ["Figma", "Design Tokens", "Wireframing", "Prototyping", "Design Systems"],
    },
  ];

  return (
    <section id="services" className="py-24 sm:py-32 px-6 hairline-b">
      <div className="max-w-6xl mx-auto">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-16 sm:mb-24">
          <div>
            <span className="text-xs font-mono uppercase tracking-widest text-theme-secondary block mb-3">
              Capabilities
            </span>
            <h2 className="text-3xl sm:text-5xl md:text-6xl font-bold tracking-tight text-balance">
              What I Do
            </h2>
          </div>
          <p className="text-sm sm:text-base text-theme-secondary max-w-md leading-relaxed">
            Bridging engineering discipline with design empathy to deliver digital products that look exceptional and perform flawlessly.
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid md:grid-cols-2 gap-12 lg:gap-16">
          {services.map((service) => (
            <motion.div
              key={service.index}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.6 }}
              className="flex flex-col justify-between p-8 sm:p-10 rounded-2xl editorial-card group hover:border-[var(--accent)] transition-colors duration-300"
            >
              <div>
                <div className="flex items-baseline justify-between mb-8">
                  <span className="font-mono text-xs sm:text-sm text-theme-secondary">
                    {service.index}
                  </span>
                  <span className="text-xs font-mono text-theme-secondary group-hover:text-[var(--accent)] transition-colors flex items-center gap-1">
                    Core Discipline
                    <ArrowUpRight size={14} className="opacity-0 group-hover:opacity-100 transition-opacity" />
                  </span>
                </div>

                <h3 className="text-2xl sm:text-3xl font-bold mb-2 tracking-tight">
                  {service.title}
                </h3>
                <p className="text-xs sm:text-sm font-mono text-theme-secondary mb-6">
                  {service.subtitle}
                </p>

                <p className="text-sm sm:text-base text-theme-secondary leading-relaxed mb-8">
                  {service.description}
                </p>

                <div className="pt-6 hairline-t">
                  <span className="text-xs font-mono uppercase tracking-wider text-theme-secondary block mb-4">
                    Key Deliverables
                  </span>
                  <ul className="space-y-2.5 text-xs sm:text-sm text-theme-secondary">
                    {service.deliverables.map((item, idx) => (
                      <li key={idx} className="flex items-start gap-2.5">
                        <span className="w-1 h-1 rounded-full bg-[var(--accent)] mt-2 shrink-0" />
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>

              {/* Technologies unboxed list */}
              <div className="mt-8 pt-6 hairline-t flex flex-wrap items-center gap-x-3 gap-y-1 text-xs font-mono text-theme-secondary">
                <span className="text-[var(--accent)]">Stack:</span>
                {service.stack.map((tech, idx) => (
                  <span key={tech} className="flex items-center gap-2">
                    <span>{tech}</span>
                    {idx < service.stack.length - 1 && <span aria-hidden="true" className="opacity-40">·</span>}
                  </span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

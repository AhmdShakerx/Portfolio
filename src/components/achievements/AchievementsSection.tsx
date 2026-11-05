import { useRef } from "react";
import { motion } from "motion/react";
import { ShoppingCart, Cpu, Code2, Users2 } from "lucide-react";
import {
  EASE_EDITORIAL,
  staggerContainerVariants,
  itemStaggerVariants,
} from "@/lib/animations";
import { useSectionVisibility } from "@/hooks/useSectionVisibility";

export function AchievementsSection() {
  const sectionRef = useRef<HTMLElement>(null);
  const isAchievementsInView = useSectionVisibility(sectionRef, { rootMargin: "80px" });

  const achievements = [
    {
      title: "Production E-commerce Solutions",
      category: "Full Architecture",
      icon: <ShoppingCart size={22} className="text-primary-app" />,
      desc: "Engineered scalable multi-category catalog architectures with zero-latency client-side filtering, stateful shopping cart calculations, and responsive mobile-first checkout flows.",
      highlight: "Azaban System Platform",
      number: "01 /",
    },
    {
      title: "EdTech & AI Interface Integration",
      category: "Academic Solutions",
      icon: <Cpu size={22} className="text-accent-app" />,
      desc: "Developed modern bilingual assessment dashboards integrating proprietary AI prompt orchestration for automatic teacher exam generation and instant grading formats.",
      highlight: "Tafahom 'Faheem' AI Platform",
      number: "02 /",
    },
    {
      title: "Modular UI Component Systems",
      category: "Engineering Rigor",
      icon: <Code2 size={22} className="text-primary-app" />,
      desc: "Built a private, production-tested library of accessible, reusable React & TypeScript components adhering to WCAG 2.2 AA accessibility and atomic design patterns.",
      highlight: "10+ Reusable Production Components",
      number: "03 /",
    },
    {
      title: "Verified Client Collaborations",
      category: "Client Trust",
      icon: <Users2 size={22} className="text-emerald-400" />,
      desc: "Collaborated with 13 regional clients and agencies across e-commerce, healthcare awareness, corporate logistics, and culinary services with 1,200+ hours of verified work.",
      highlight: "13+ Satisfied Client Deliveries",
      number: "04 /",
    },
  ];

  return (
    <section ref={sectionRef} id="achievements" className="py-24 sm:py-28 px-6 sm:px-10 max-w-7xl mx-auto w-full border-t border-subtle-app">
      {/* Section Header */}
      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-60px" }}
        className="border-b border-subtle-app pb-8 mb-16 sm:mb-20"
      >
        <motion.span
          variants={{
            hidden: { opacity: 0, y: -6 },
            visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: EASE_EDITORIAL } },
          }}
          className="editorial-tag text-accent-app block mb-2.5"
        >
          PROVEN DELIVERY & OUTCOMES
        </motion.span>
        <div className="grid lg:grid-cols-12 gap-6 items-end">
          <div className="lg:col-span-6 overflow-hidden">
            <motion.h2
              variants={{
                hidden: { y: "100%", opacity: 0 },
                visible: {
                  y: 0,
                  opacity: 1,
                  transition: { duration: 0.8, delay: 0.1, ease: EASE_EDITORIAL },
                },
              }}
              className="text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight text-primary-app font-heading"
            >
              Key achievements.
            </motion.h2>
          </div>
          <motion.p
            variants={{
              hidden: { opacity: 0, y: 15 },
              visible: {
                opacity: 1,
                y: 0,
                transition: { duration: 0.7, delay: 0.22, ease: EASE_EDITORIAL },
              },
            }}
            className="lg:col-span-6 text-secondary-app text-sm sm:text-base leading-relaxed max-w-xl"
          >
            Concrete milestones backed by delivered code, real user interfaces, and verifiable client impact.
          </motion.p>
        </div>
      </motion.div>

      {/* 4 Cards Grid with Staggered Motion */}
      <motion.div
        variants={staggerContainerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-80px" }}
        className="grid md:grid-cols-2 gap-8"
      >
        {achievements.map((item) => (
          <motion.div
            key={item.title}
            variants={itemStaggerVariants}
            whileHover={{ y: -4 }}
            transition={{ duration: 0.25, ease: EASE_EDITORIAL }}
            className="p-8 border border-subtle-app bg-surface-app/40 hover:border-subtle-app/80 transition-colors flex flex-col justify-between group"
          >
            <div>
              <div className="flex items-center justify-between mb-6">
                <span className="font-mono text-xs text-secondary-app group-hover:text-accent-app transition-colors">
                  {item.number}
                </span>
                <span className="editorial-tag">{item.category}</span>
              </div>

              <h3 className="text-xl sm:text-2xl font-bold font-heading text-primary-app mb-3 group-hover:text-accent-app transition-colors">
                {item.title}
              </h3>

              <p className="text-secondary-app text-sm leading-relaxed mb-6 font-normal">
                {item.desc}
              </p>
            </div>

            <div className="pt-4 border-t border-subtle-app flex items-center justify-between text-xs font-mono">
              <span className="text-secondary-app">Milestone:</span>
              <span className="text-primary-app font-semibold group-hover:text-accent-app transition-colors">
                {item.highlight}
              </span>
            </div>
          </motion.div>
        ))}
      </motion.div>
    </section>
  );
}

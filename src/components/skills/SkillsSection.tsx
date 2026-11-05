import { useRef } from "react";
import { motion } from "motion/react";
import { skillCategories } from "@/data/skills";
import {
  EASE_EDITORIAL,
  staggerContainerVariants,
  itemStaggerVariants,
} from "@/lib/animations";
import { useSectionVisibility } from "@/hooks/useSectionVisibility";

export function SkillsSection() {
  const sectionRef = useRef<HTMLElement>(null);
  const isSkillsInView = useSectionVisibility(sectionRef, { rootMargin: "80px" });

  return (
    <section
      ref={sectionRef}
      id="skills"
      className="py-28 px-6 sm:px-10 max-w-7xl mx-auto w-full border-t border-subtle-app"
    >
      {/* Section Header */}
      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-60px" }}
        className="grid lg:grid-cols-12 gap-12 mb-16"
      >
        <div className="lg:col-span-5">
          <motion.span
            variants={{
              hidden: { opacity: 0, y: -6 },
              visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: EASE_EDITORIAL } },
            }}
            className="editorial-tag text-accent-app block mb-3"
          >
            CAPABILITIES & TOOLING
          </motion.span>
          <div className="overflow-hidden">
            <motion.h2
              variants={{
                hidden: { y: "100%", opacity: 0 },
                visible: {
                  y: 0,
                  opacity: 1,
                  transition: { duration: 0.8, delay: 0.1, ease: EASE_EDITORIAL },
                },
              }}
              className="text-3xl sm:text-5xl font-bold tracking-tight text-primary-app font-heading"
            >
              Technical toolbox.
            </motion.h2>
          </div>
        </div>

        <motion.div
          variants={{
            hidden: { opacity: 0, y: 15 },
            visible: {
              opacity: 1,
              y: 0,
              transition: { duration: 0.7, delay: 0.2, ease: EASE_EDITORIAL },
            },
          }}
          className="lg:col-span-7 flex items-end"
        >
          <p className="text-secondary-app text-base sm:text-lg leading-relaxed max-w-xl">
            Practical competencies utilized in daily production—measured by code cleanliness, accessibility, and real project deliverables.
          </p>
        </motion.div>
      </motion.div>

      {/* 4 Categorical Columns with Staggered Entrance */}
      <motion.div
        variants={staggerContainerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-80px" }}
        className="grid md:grid-cols-2 lg:grid-cols-4 gap-8"
      >
        {skillCategories.map((cat, idx) => (
          <motion.div
            key={cat.title}
            variants={itemStaggerVariants}
            className="border-t border-subtle-app pt-6 flex flex-col justify-between group"
          >
            <div>
              <div className="font-mono text-xs text-secondary-app mb-2 group-hover:text-accent-app transition-colors">
                0{idx + 1} /
              </div>
              <h3 className="text-lg font-bold text-primary-app mb-3 font-heading group-hover:text-accent-app transition-colors">
                {cat.title}
              </h3>
              <p className="text-secondary-app text-xs leading-relaxed mb-6">
                {cat.description}
              </p>

              <div className="space-y-4">
                {cat.skills.map((s) => (
                  <div
                    key={s.name}
                    className="border-b border-subtle-app pb-3 hover:border-subtle-app/80 transition-colors"
                  >
                    <div className="flex items-baseline justify-between gap-2 mb-1">
                      <strong className="text-sm font-semibold text-primary-app">
                        {s.name}
                      </strong>
                    </div>
                    <p className="text-xs text-secondary-app leading-relaxed">
                      {s.levelDescription}
                    </p>
                    {s.featuredIn && (
                      <span className="text-[10px] font-mono text-accent-app block mt-1">
                        In: {s.featuredIn}
                      </span>
                    )}
                  </div>
                ))}
              </div>
            </div>
          </motion.div>
        ))}
      </motion.div>
    </section>
  );
}

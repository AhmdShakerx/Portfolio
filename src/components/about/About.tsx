import { useRef } from "react";
import { motion } from "motion/react";
import { Download, Github, Linkedin } from "lucide-react";
import {
  EASE_EDITORIAL,
  EASE_SMOOTH,
  maskRevealVariants,
  imageZoomVariants,
  staggerContainerVariants,
  itemStaggerVariants,
} from "@/lib/animations";
import { useSectionVisibility } from "@/hooks/useSectionVisibility";

export function About() {
  const sectionRef = useRef<HTMLElement>(null);
  const isAboutInView = useSectionVisibility(sectionRef, { rootMargin: "80px" });

  const factBlocks = [
    { label: "Experience", value: "2+ Years", sub: "Verified Client Work" },
    { label: "Delivered", value: "13+ Clients", sub: "Across 5 Sectors" },
    { label: "Time On Deck", value: "+1,200 Hrs", sub: "Production Code" },
    { label: "Base", value: "Mansoura", sub: "Egypt (UTC+2)" },
  ];

  return (
    <section
      ref={sectionRef}
      id="about"
      className="py-24 sm:py-28 px-6 sm:px-10 max-w-7xl mx-auto w-full border-t border-subtle-app"
    >
      <div className="grid lg:grid-cols-12 gap-12 lg:gap-16 items-start">
        {/* Left Column: Editorial Photo & Metadata with Masking Transition (5 cols) */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-80px" }}
          className="lg:col-span-5 space-y-5"
        >
          {/* Eyebrow Tag */}
          <motion.div
            variants={{
              hidden: { opacity: 0, x: -10 },
              visible: { opacity: 1, x: 0, transition: { duration: 0.6, ease: EASE_EDITORIAL } },
            }}
            className="flex items-center gap-2.5"
          >
            <span className="editorial-tag text-accent-app">PROFILE / BACKGROUND</span>
          </motion.div>

          {/* Masked Profile Image Container */}
          <div className="relative aspect-[4/5] overflow-hidden bg-surface-app border border-subtle-app group">
            {/* Smooth Masking Curtain Reveal */}
            <motion.div
              variants={maskRevealVariants}
              custom={0.15}
              className="w-full h-full relative overflow-hidden"
            >
              <motion.img
                variants={imageZoomVariants}
                custom={0.15}
                src="/proto.jpeg"
                alt="Ahmed Shaker — Front-End Developer"
                className="w-full h-full object-cover object-center filter grayscale contrast-105 group-hover:grayscale-0 transition-all duration-700 ease-out"
                loading="lazy"
              />
            </motion.div>

            {/* Floating Info Overlay Bar */}
            <motion.div
              variants={{
                hidden: { opacity: 0, y: 15 },
                visible: {
                  opacity: 1,
                  y: 0,
                  transition: { duration: 0.6, delay: 0.5, ease: EASE_EDITORIAL },
                },
              }}
              className="absolute bottom-4 left-4 right-4 bg-primary-app/90 backdrop-blur-sm border border-subtle-app p-3.5 text-xs font-mono text-secondary-app flex items-center justify-between"
            >
              <div>
                <span className="text-primary-app font-semibold block text-xs">Ahmed Shaker</span>
                <span className="text-[11px]">Front-End Dev & UI/UX</span>
              </div>
              <span className="text-accent-app text-[11px] font-medium">Mansoura, EG</span>
            </motion.div>
          </div>

          {/* Direct Profile Links */}
          <motion.div
            variants={{
              hidden: { opacity: 0 },
              visible: { opacity: 1, transition: { duration: 0.5, delay: 0.6 } },
            }}
            className="flex items-center justify-between text-xs font-mono border-t border-subtle-app pt-3"
          >
            <a
              href="https://github.com/AhmdShakerx"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-1.5 text-secondary-app hover:text-primary-app transition-colors group"
            >
              <Github size={13} className="group-hover:text-accent-app transition-colors" />
              <span>github.com/AhmdShakerx</span>
            </a>
            <a
              href="https://www.linkedin.com/in/axshaker"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-1.5 text-secondary-app hover:text-primary-app transition-colors group"
            >
              <Linkedin size={13} className="group-hover:text-accent-app transition-colors" />
              <span>linkedin/axshaker</span>
            </a>
          </motion.div>
        </motion.div>

        {/* Right Column: Editorial Narrative & Verification (7 cols) */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-80px" }}
          className="lg:col-span-7 flex flex-col justify-between"
        >
          <div>
            {/* Progressive Heading Reveal with masked line containers */}
            <h2 className="text-2xl sm:text-4xl md:text-[2.6rem] font-bold tracking-tight text-primary-app mb-6 leading-[1.14] font-heading">
              <div className="overflow-hidden">
                <motion.span
                  variants={{
                    hidden: { y: "110%", opacity: 0 },
                    visible: {
                      y: 0,
                      opacity: 1,
                      transition: { duration: 0.8, delay: 0.1, ease: EASE_EDITORIAL },
                    },
                  }}
                  className="inline-block"
                >
                  Design with intention.
                </motion.span>
              </div>
              <div className="overflow-hidden">
                <motion.span
                  variants={{
                    hidden: { y: "110%", opacity: 0 },
                    visible: {
                      y: 0,
                      opacity: 1,
                      transition: { duration: 0.8, delay: 0.22, ease: EASE_EDITORIAL },
                    },
                  }}
                  className="inline-block"
                >
                  <span className="text-secondary-app font-normal italic font-serif">Engineered</span> for production.
                </motion.span>
              </div>
            </h2>

            {/* Narrative text revealed in small coordinated groups */}
            <motion.div
              variants={{
                hidden: { opacity: 0, y: 18 },
                visible: {
                  opacity: 1,
                  y: 0,
                  transition: { duration: 0.7, delay: 0.35, ease: EASE_EDITORIAL },
                },
              }}
              className="space-y-4 text-sm sm:text-base text-secondary-app leading-relaxed font-normal mb-8 max-w-2xl"
            >
              <p>
                I am a Front-End Web Developer and UI/UX Designer based in Mansoura, Egypt. Over the past two years, I have turned ideas into functional, pixel-precise digital experiences—partnering with 13 clients and collaborating across retail e-commerce systems, AI-powered EdTech tools, and corporate logistics portals.
              </p>
              <p>
                My work exists at the intersection of design discipline and engineering precision. Before touching code, I organize typography, spacing systems, and interactive flow in Figma. When implementing, I build with strict TypeScript, clean component architectures, and responsive utility CSS that runs smoothly on standard mobile networks.
              </p>
            </motion.div>

            {/* Editorial Fact Blocks: Staggered entrance */}
            <motion.div
              variants={staggerContainerVariants}
              className="grid grid-cols-2 sm:grid-cols-4 gap-4 py-6 border-y border-subtle-app mb-8 text-xs font-mono"
            >
              {factBlocks.map((block) => (
                <motion.div
                  key={block.label}
                  variants={itemStaggerVariants}
                  className="p-3 bg-surface-app/40 border border-subtle-app hover:border-subtle-app/80 transition-colors"
                >
                  <span className="text-secondary-app block uppercase text-[10px] mb-1">
                    {block.label}
                  </span>
                  <strong className="text-base font-bold font-heading text-primary-app block">
                    {block.value}
                  </strong>
                  <span className="text-[10px] text-secondary-app">{block.sub}</span>
                </motion.div>
              ))}
            </motion.div>
          </div>

          {/* Action Download Resume */}
          <motion.div
            variants={{
              hidden: { opacity: 0, y: 15 },
              visible: {
                opacity: 1,
                y: 0,
                transition: { duration: 0.6, delay: 0.55, ease: EASE_EDITORIAL },
              },
            }}
          >
            <motion.a
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              transition={{ duration: 0.2, ease: EASE_SMOOTH }}
              href="/CV.pdf"
              download="Ahmed_Shaker_CV.pdf"
              className="inline-flex items-center gap-2.5 px-5 py-3 border border-primary-app text-primary-app hover:bg-primary-app hover:text-bg-primary transition-all text-xs sm:text-sm font-semibold group cursor-pointer"
            >
              <Download
                size={14}
                className="group-hover:-translate-y-0.5 transition-transform duration-200"
              />
              <span>Download Official Resume (PDF)</span>
            </motion.a>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}

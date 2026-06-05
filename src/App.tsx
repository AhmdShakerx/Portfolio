/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { motion, AnimatePresence } from "motion/react";
import { 
  Github, 
  Linkedin, 
  Mail, 
  Phone, 
  MapPin, 
  ExternalLink, 
  ChevronRight, 
  Menu, 
  X, 
  Award, 
  Code, 
  Layout, 
  Send,
  Download,
  User,
  Calendar,
  Sun,
  Moon,
} from "lucide-react";
import { useState, useEffect, ReactNode } from "react";
import Particles from "./components/Particles";

export default function App() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("home");
  const [scrolled, setScrolled] = useState(false);
  const [hoveredLink, setHoveredLink] = useState<string | null>(null);
  const [theme, setTheme] = useState("dark");

  useEffect(() => {
    document.body.classList.remove("light", "dark");
    if (theme === "light") {
      document.body.classList.add("light");
    } else {
      document.body.classList.remove("light");
    }
  }, [theme]);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);

      const sections = ["home", "about", "achievements", "skills", "projects", "contact"];
      const current = sections.find(section => {
        const el = document.getElementById(section);
        if (el) {
          const rect = el.getBoundingClientRect();
          return rect.top <= 150 && rect.bottom >= 150;
        }
        return false;
      });
      if (current) setActiveSection(current);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { name: "Home", id: "home" },
    { name: "About", id: "about" },
    { name: "Achievements", id: "achievements" },
    { name: "Skills", id: "skills" },
    { name: "Projects", id: "projects" },
    { name: "Contact", id: "contact" },
  ];

  return (
    <div className="min-h-screen bg-darker text-light font-sans selection:bg-primary/30">
      {/* Navigation */}
      <motion.nav 
        initial={{ y: -30, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
        className="fixed top-0 left-0 w-full z-50 flex justify-center py-6"
      >
        <div className="flex items-center gap-12 justify-between md:justify-center glass rounded-full px-8 py-4 shadow-[0_0_40px_rgba(0,0,0,0.3)] border border-white/10 w-[calc(100%-3rem)] md:w-auto">
          <motion.a 
            href="#home" 
            className="text-4xl font-bold tracking-tighter group flex items-center"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <span className="text-white">.A</span>
            <span className="text-primary transition-all group-hover:drop-shadow-[0_0_12px_var(--color-primary)]">S</span>
          </motion.a>
          
          {/* Desktop Nav */}
          <div className="hidden md:flex items-center gap-2 rounded-full relative" onMouseLeave={() => setHoveredLink(null)}>
            {navLinks.map((link) => (
              <a
                key={link.id}
                href={`#${link.id}`}
                onMouseEnter={() => setHoveredLink(link.id)}
                className={`px-6 py-3 relative rounded-full font-bold text-base transition-colors duration-300 ${
                  activeSection === link.id ? "text-white" : "text-gray hover:text-white"
                }`}
              >
                <span className="relative z-10">{link.name}</span>
                {hoveredLink === link.id && (
                  <motion.div
                    layoutId="navHover"
                    className="absolute inset-0 bg-primary/80 rounded-full backdrop-blur-md"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    transition={{ type: "spring", stiffness: 350, damping: 30 }}
                  />
                )}
                {activeSection === link.id && !hoveredLink && (
                  <motion.div
                    layoutId="navActiveHover"
                    className="absolute inset-0 bg-white/10 rounded-full"
                    transition={{ type: "spring", stiffness: 350, damping: 30 }}
                  />
                )}
              </a>
            ))}
          </div>

          <div className="flex items-center gap-2">
            <motion.button
              onClick={() => setTheme(t => t === 'dark' ? 'light' : 'dark')}
              className="p-3 rounded-full hover:bg-white/10 transition-colors text-white relative flex items-center justify-center overflow-hidden"
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
              title="Toggle Theme"
            >
              <AnimatePresence mode="wait">
                {theme === 'dark' ? (
                  <motion.div
                    key="moon"
                    initial={{ y: -20, opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    exit={{ y: 20, opacity: 0 }}
                    transition={{ duration: 0.2 }}
                  >
                    <Moon size={22} className="text-white" />
                  </motion.div>
                ) : (
                  <motion.div
                    key="sun"
                    initial={{ y: -20, opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    exit={{ y: 20, opacity: 0 }}
                    transition={{ duration: 0.2 }}
                  >
                    <Sun size={22} className="text-white" />
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.button>

            <motion.button 
              className={`md:hidden text-light p-3 rounded-2xl transition-all flex items-center justify-center ${scrolled ? "bg-white/5" : "glass"}`}
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              whileTap={{ scale: 0.9 }}
            >
              {isMenuOpen ? <X size={28} /> : <Menu size={28} />}
            </motion.button>
          </div>
        </div>

        {/* Mobile Nav */}
        <AnimatePresence>
          {isMenuOpen && (
            <motion.div
              initial={{ opacity: 0, scale: 0.95, y: -20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.95, y: -20 }}
              transition={{ duration: 0.3, ease: "circOut" }}
              className="md:hidden absolute top-full left-4 right-4 mt-2 glass rounded-3xl overflow-hidden shadow-2xl z-50 border border-white/10"
            >
              <div className="flex flex-col p-4 gap-2">
                {navLinks.map((link, i) => (
                  <motion.a
                    key={link.id}
                    href={`#${link.id}`}
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: i * 0.1 }}
                    onClick={() => setIsMenuOpen(false)}
                    className={`text-lg font-medium px-6 py-4 rounded-2xl transition-all ${
                      activeSection === link.id 
                        ? "bg-primary/10 text-primary" 
                        : "text-gray hover:bg-white/5 hover:text-white"
                    }`}
                  >
                    {link.name}
                  </motion.a>
                ))}
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </motion.nav>

      {/* Hero Section */}
      <section id="home" className="relative h-screen flex items-center justify-center pt-20 overflow-hidden">
        <Particles />
        <div className="max-w-7xl mx-auto px-6 relative z-10 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <span className="text-primary font-mono tracking-widest text-sm uppercase mb-4 block">Hello, I'm</span>
            <h1 className="text-6xl md:text-8xl font-extrabold mb-6">
              <span className="text-gradient">Ahmed Shaker</span>
            </h1>
            <p className="text-gray text-lg md:text-xl max-w-2xl mx-auto mb-10 leading-relaxed">
              A creative front-end developer and UI/UX designer with passion for building elegant web experiences and interactive interfaces.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <motion.a 
                href="#projects" 
                whileHover={{ scale: 1.05, filter: "brightness(1.1)" }}
                whileTap={{ scale: 0.95 }}
                className="px-8 py-4 bg-linear-to-r from-primary to-accent rounded-full font-bold shadow-lg shadow-primary/25 transition-all flex items-center gap-2 group"
              >
                View My Work
                <ChevronRight size={18} className="group-hover:translate-x-1 transition-transform" />
              </motion.a>
              <motion.a 
                href="#contact" 
                whileHover={{ scale: 1.05, backgroundColor: "#fff", color: "#000" }}
                whileTap={{ scale: 0.95 }}
                className="px-8 py-4 bg-white/5 border border-white/10 rounded-full font-bold backdrop-blur-sm transition-colors flex items-center gap-2"
              >
                Get In Touch
              </motion.a>
            </div>
          </motion.div>
        </div>

        <motion.div 
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 2, repeat: Infinity }}
          className="absolute bottom-10 left-1/2 -translate-x-1/2 text-gray/50 hidden md:block"
        >
          <div className="w-6 h-10 border-2 border-gray/20 rounded-full flex justify-center p-1">
            <div className="w-1.5 h-3 bg-primary rounded-full" />
          </div>
        </motion.div>
      </section>

      {/* About Section */}
      <section id="about" className="py-24 bg-dark/50 relative overflow-hidden">
        {/* Background blobs */}
        <div className="absolute -left-[20%] top-0 w-96 h-96 bg-primary/10 rounded-full blur-[120px] pointer-events-none" />
        <div className="absolute -right-[10%] bottom-0 w-[500px] h-[500px] bg-secondary/10 rounded-full blur-[150px] pointer-events-none" />
        
        <div className="max-w-7xl mx-auto px-6 relative z-10">
          <SectionHeader title="About Me" subtitle="My Journey" />
          
          <div className="grid lg:grid-cols-2 gap-16 lg:gap-24 items-center">
            {/* Image side with creative interactions */}
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, ease: "easeOut" }}
              className="relative group w-full max-w-md mx-auto lg:mx-0"
            >
              {/* Decorative back framing */}
              <div className="absolute inset-0 border-2 border-primary/30 rounded-3xl translate-x-4 translate-y-4 group-hover:translate-x-6 group-hover:translate-y-6 transition-transform duration-700 ease-out" />
              <div className="absolute inset-0 bg-linear-to-tr from-primary/20 to-accent/20 rounded-3xl blur-2xl z-0 opacity-50 group-hover:opacity-100 transition-opacity duration-700" />
              
              {/* Main image container */}
              <div className="aspect-[4/5] rounded-3xl overflow-hidden shadow-2xl relative z-10 bg-dark/50 border border-white/5 group-hover:border-primary/30 transition-colors duration-500">
                <img 
                  src="/proto.jpeg" 
                  alt="Ahmed Shaker" 
                  className="w-full h-full object-cover transition-all duration-1000 group-hover:scale-110 group-hover:rotate-1"
                  referrerPolicy="no-referrer"
                />
                
                {/* Modern overlay */}
                <div className="absolute inset-0 bg-linear-to-t from-dark/90 via-dark/20 to-transparent opacity-60 group-hover:opacity-80 transition-opacity duration-500" />
                
                {/* Floating Experience Badge */}
                <motion.div 
                  className="absolute bottom-6 left-6 right-6 p-4 rounded-2xl bg-white/5 border border-white/10 flex items-center justify-between shadow-xl backdrop-blur-md translate-y-4 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-500 delay-100"
                >
                  <div>
                    <p className="text-white font-bold text-lg">2+ Years</p>
                    <p className="text-gray/80 text-sm">Of Experience</p>
                  </div>
                  <div className="w-12 h-12 rounded-full bg-primary/20 flex items-center justify-center animate-pulse">
                    <Code className="text-primary" size={20} />
                  </div>
                </motion.div>
                
                {/* Github Link */}
                <div className="absolute top-6 right-6 opacity-0 group-hover:opacity-100 transition-all duration-500 delay-200 -translate-y-4 group-hover:translate-y-0">
                  <a href="https://github.com/AhmdShakerx" target="_blank" rel="noopener noreferrer" className="flex items-center justify-center w-12 h-12 bg-white/10 hover:bg-white text-white hover:text-dark rounded-full backdrop-blur-md border border-white/20 transition-all duration-300">
                    <Github size={22} />
                  </a>
                </div>
              </div>
            </motion.div>

            {/* Text and Details Side */}
            <div className="relative">
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, delay: 0.2 }}
                className="mb-8"
              >
                <div className="flex items-center gap-3 mb-4">
                  <span className="h-[2px] w-10 bg-primary rounded-full"></span>
                  <span className="text-primary font-mono text-sm tracking-wider uppercase">Who I Am</span>
                </div>
                <h3 className="text-3xl md:text-5xl font-bold mb-6 tracking-tight">
                  Turning <span className="text-transparent bg-clip-text bg-linear-to-r from-primary to-accent">imagination</span> into interactive reality.
                </h3>
                <p className="text-gray text-lg mb-6 leading-relaxed">
                  "I'm Ahmed — a front-end developer and UI/UX designer with 2 years of hands-on experience building products that people actually enjoy using. I've had the privilege of partnering with 13 clients across different industries, turning ideas into polished digital experiences — from early wireframes to pixel-perfect production code. My work sits at the intersection of design thinking and clean engineering: every interface I ship is purposeful, accessible, and built to last — backed by 1,200+ hours of real-world client work."
                </p>
              </motion.div>
              
              {/* Bento Grid Info */}
              <motion.div 
                className="grid grid-cols-2 gap-4 mb-10"
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                variants={{
                  visible: { transition: { staggerChildren: 0.1 } },
                  hidden: {}
                }}
              >
                {[
                  { label: "Name", value: "Ahmed Shaker", icon: <User size={18} /> },
                  { label: "Hours", value: "+1,200", icon: <Calendar size={18} /> },
                  { label: "Location", value: "Mansoura, Egypt", icon: <MapPin size={18} /> },
                  { label: "LinkedIn", value: "/axshaker", icon: <Linkedin size={18} /> },
                ].map((info) => (
                  <motion.div 
                    key={info.label} 
                    variants={{
                      hidden: { opacity: 0, y: 20 },
                      visible: { opacity: 1, y: 0, transition: { type: "spring", stiffness: 100 } }
                    }}
                    whileHover={{ scale: 1.05, y: -2 }}
                    className="p-4 rounded-2xl bg-white/5 border border-white/5 hover:bg-white/10 hover:border-primary/30 transition-colors flex flex-col gap-2 group cursor-default"
                  >
                    <div className="w-8 h-8 rounded-full bg-white/5 flex items-center justify-center text-primary group-hover:bg-primary group-hover:text-white transition-colors">
                      {info.icon}
                    </div>
                    <div>
                      <p className="text-xs text-gray/60 uppercase tracking-wider mb-1">{info.label}</p>
                      <p className="font-semibold text-white/90 truncate">{info.value}</p>
                    </div>
                  </motion.div>
                ))}
              </motion.div>

              <motion.a
                href='/Ahmed_Shaker_CV.pdf'
                download='Ahmed_Shaker_CV.pdf'
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.6 }}
                whileHover={{
                  scale: 1.05,
                  boxShadow: '0 0 20px rgba(14, 165, 233, 0.3)'
                }}
                whileTap={{ scale: 0.95 }}
                className='inline-flex items-center gap-3 px-8 py-4 bg-linear-to-r from-primary to-accent rounded-full font-bold shadow-lg shadow-primary/20 transition-all group overflow-hidden relative'
              >
                <div className='absolute inset-0 bg-white/20 -translate-x-[150%] skew-x-[-15deg] group-hover:translate-x-[150%] transition-transform duration-700' />

                <Download
                  size={20}
                  className='group-hover:-translate-y-1 group-hover:scale-110 transition-transform relative z-10'
                />
                <span className="relative z-10">Download Resume</span>
              </motion.a>
            </div>
          </div>
        </div>
      </section>

      {/* Achievements Section */}
      <section id="achievements" className="py-24 relative overflow-hidden">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-primary/5 rounded-full blur-[100px] pointer-events-none" />
        <div className="max-w-7xl mx-auto px-6 relative z-10">
          <SectionHeader title="Achievements" subtitle="My Milestones" />
          
          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                title: "E-commerce System",
                desc: "Designed & built a full e-commerce platform with advanced product filtering and cart system.",
                icon: <Layout className="text-primary" size={32} />,
                bg: "from-primary/20 via-primary/5"
              },
              {
                title: "20+ Fullstack Projects",
                desc: "Delivered creative interfaces for mobile apps, dashboards, and landing pages using Figma, alongside robust web applications.",
                icon: <Award className="text-accent" size={32} />,
                bg: "from-accent/20 via-accent/5"
              },
              {
                title: "Custom Components",
                desc: "Built a library of 10+ reusable UI components with clean, scalable React structure.",
                icon: <Code className="text-secondary" size={32} />,
                bg: "from-secondary/20 via-secondary/5"
              }
            ].map((ach, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: i * 0.15 }}
                whileHover={{ y: -10, scale: 1.02 }}
                className="p-8 md:p-10 rounded-[2rem] bg-dark/40 border border-white/5 hover:border-white/10 transition-all duration-500 overflow-hidden group relative shadow-2xl backdrop-blur-sm"
              >
                {/* Spotlight effect background */}
                <div className={`absolute inset-0 bg-linear-to-br ${ach.bg} to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-700 pointer-events-none`} />
                
                <div className="relative z-10">
                  <div className="mb-10 relative inline-flex">
                    <div className="absolute inset-0 bg-white/10 blur-2xl rounded-full scale-150 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                    <motion.div 
                      className="relative p-5 bg-white/5 rounded-2xl group-hover:bg-white/10 border border-white/10 shadow-[0_8px_30px_rgb(0,0,0,0.12)]"
                      whileHover={{ rotate: 5 }}
                      transition={{ type: "spring", stiffness: 300 }}
                    >
                      {ach.icon}
                    </motion.div>
                  </div>
                  
                  <h3 className="text-2xl font-bold mb-4 text-white group-hover:text-primary transition-colors duration-300">{ach.title}</h3>
                  <div className="w-12 h-1 bg-white/20 rounded-full mb-6 group-hover:w-24 group-hover:bg-primary transition-all duration-500" />
                  <p className="text-gray leading-relaxed font-light group-hover:text-white/80 transition-colors duration-300">{ach.desc}</p>
                </div>

                {/* Big faint background icon */}
                <div className="absolute -bottom-6 -right-6 text-white/[0.02] group-hover:text-white/[0.08] group-hover:-translate-y-4 group-hover:-translate-x-4 group-hover:-rotate-12 transition-all duration-700 pointer-events-none">
                  <Award size={180} />
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section id="skills" className="py-24 bg-dark/50">
        <div className="max-w-7xl mx-auto px-6">
          <SectionHeader title="My Skills" subtitle="Toolbox" />
          
          <div className="grid md:grid-cols-2 gap-8">
            <SkillCategory title="Technical Skills" delay={0.1} skills={[
              { name: "HTML/CSS", level: 95 },
              { name: "JavaScript", level: 90 },
              { name: "React", level: 95 },
              { name: "Next.js", level: 90 },
            ]} />
            <SkillCategory title="Design & Tools" delay={0.2} skills={[
              { name: "UI/UX Design", level: 95 },
              { name: "Figma", level: 90 },
              { name: "TypeScript", level: 85 },
              { name: "Tailwind CSS", level: 95 },
            ]} />
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" className="py-24">
        <div className="max-w-7xl mx-auto px-6">
          <SectionHeader title="My Projects" subtitle="Portfolio" />
          
          <div className="grid md:grid-cols-2 gap-8">
            {[
              {
                title: "Azaban System",
                desc: "A comprehensive e-commerce platform and integrated management system. It provides an advanced, end-to-end dashboard to track, monitor, and manage every single aspect of the store's operations seamlessly.",
                tags: ["React", "Laravel", "PHP"],
                img: "/Screenshot 2026-05-20 233100.png",
                link: "https://purple-bear-616763.hostingersite.com/"
              },
              {
                title: "Tafahom Platform",
                desc: "An advanced EdTech solution featuring the 'Faheem' AI engine to generate professional exams and summarize curricula from documents. It includes secure anti-cheat testing, comprehensive classroom management, gamification, and analytics dashboards, built on a scalable API-First architecture.",
                tags: ["HTML", "CSS", "JS"],
                img: "/Screenshot 2026-04-19 231223.png",
                link: "https://tafahomedu.com/"
              },
              {
                title: "AZ-Learning",
                desc: "A contemporary user interface for an online learning platform. It utilizes a modern dark theme paired with vibrant purple gradients, creating a look perfectly suited for the tech and education sectors. The hero section is optimized for conversions, encouraging users to join the community with clear, dual CTAs to either 'Start Learning' or 'Browse Catalog.'",
                tags: ["React", "TypeScript", "Laravel"],
                img: "/az.png",
                link: "https://az-learning-delta.vercel.app/"
              },
              {
                title: "English Academy",
                desc: "A modern UI design for an Arabic e-learning platform. The design incorporates vibrant colors, dynamic shapes, and bold typography to create an engaging experience for students. The layout builds trust by prominently featuring the instructor and offers intuitive CTAs, allowing users to seamlessly start their learning journey or watch an introductory video.",
                tags: ["React", "TypeScript", "PHP"],
                img: "/ayman.png",
                link: "https://english-academy-eta.vercel.app/"
              },
              {
                title: "Best Rate",
                desc: "A professional and straightforward corporate website design for a freight forwarding and logistics company. It utilizes an industry-relevant background image to immediately establish context. The clean layout emphasizes the company's reliability and global reach, anchored by a prominent 'Contact Us' CTA aimed at lead generation.",
                tags: ["HTML", "CSS", "Tailwind"],
                img: "/best.png",
                link: "https://ahmdshakerx.github.io/Best-Rate/"
              },
              {
                title: "ELEGANTER",
                desc: "A sophisticated landing page designed to showcase a premium HTML5 template. The design features a classic, elegant dark mode utilizing refined Serif typography to reflect luxury and high quality. The clean interface naturally draws the user's eye to the central message and features a clear 'Get Started Now' CTA.",
                tags: ["HTML", "CSS", "JS"],
                img: "/ava.png",
                link: "https://ahmdshakerx.github.io/ELEGANTER/"
              },
              {
                title: "Digital Studio",
                desc: "A sleek, dark-themed website design tailored for a digital agency or creative studio. The aesthetic conveys professionalism and modernity. The hero section is designed to deliver a strong, direct message ('Simple solutions for complex problems'), complemented by clear navigation, social media integration, and a prominent 'Leave a request' Call-to-Action (CTA).",
                tags: ["Tailwind", "CSS", "JS"],
                img: "/digital-1.png",
                link: "https://ahmdshakerx.github.io/Digital-Studio/"
              },
              {
                title: "pink shield",
                desc: "Pink Shield is an AI-powered healthcare platform focused on early breast cancer detection and health awareness. It provides smart risk assessment, educational resources, and access to medical centers through a modern and user-friendly interface.",
                tags: ["React", "TypeScript", "NextJs"],
                img: "/pink.png",
                link: "https://pink-shield.vercel.app/"
              },
              {
                title: "Delicious",
                desc: "A clean, bright, and modern website design for a restaurant. It leverages ample white space to highlight high-quality, authentic photography. The layout combines aesthetic appeal with functionality, featuring quick social proof statistics (such as daily guests) and an appetizing, high-contrast orange 'Book Now' CTA to drive reservations.",
                tags: ["HTML", "JS", "Tailwind"],
                img: "/delechice.png",
                link: "https://ahmdshakerx.github.io/Delicious/"
              },
              {
                title: "HVAC",
                desc:"A trust-building website design for an HVAC and home services provider. The hero section uses a family-oriented background image to evoke feelings of comfort and reliability. The UI is highly organized and conversion-focused, highlighting essential contact information in a striking yellow color, while clearly displaying the company's core guarantees in clean feature cards.",
                tags: ["HTML", "CSS", "JS"],
                img: "/pro.png",
                link: "https://ahmdshakerx.github.io/HVAC/"
              }
            ].map((project, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: false, margin: "-50px" }}
                transition={{ delay: i * 0.1 }}
                className="group rounded-3xl bg-dark/50 border border-white/5 overflow-hidden hover:border-primary/20 transition-all flex flex-col"
              >
                <div className="h-48 overflow-hidden relative">
                  <img 
                    src={project.img} 
                    alt={project.title} 
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                    referrerPolicy="no-referrer"
                  />
                  <div className="absolute inset-0 bg-primary/20 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center gap-4">
                    <a 
                      href={project.link} 
                      target="_blank" 
                      rel="noopener noreferrer" 
                      className="p-3 bg-white text-dark rounded-full hover:scale-110 transition-transform"
                    >
                      <ExternalLink size={20} />
                    </a>
                    <a 
                      href="https://github.com/AhmdShakerx" 
                      target="_blank" 
                      rel="noopener noreferrer" 
                      className="p-3 bg-white text-dark rounded-full hover:scale-110 transition-transform"
                    >
                      <Github size={20} />
                    </a>
                  </div>
                </div>
                <div className="p-6 flex flex-col flex-grow">
                  <h3 className="text-xl font-bold mb-2 group-hover:text-primary transition-colors">{project.title}</h3>
                  <p className="text-gray text-sm mb-6 flex-grow">{project.desc}</p>
                  <div className="flex flex-wrap gap-2">
                    {project.tags.map(tag => (
                      <span key={tag} className="text-[10px] uppercase tracking-wider font-bold px-2 py-1 bg-white/5 rounded-md border border-white/5">
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-24 bg-dark/50">
        <div className="max-w-7xl mx-auto px-6">
          <SectionHeader title="Contact" subtitle="Let's Connect" />
          
          <div className="grid md:grid-cols-2 gap-16">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: false, margin: "-50px" }}
            >
              <h3 className="text-3xl font-bold mb-6">Let's Talk About Your Project</h3>
              <p className="text-gray mb-10 leading-relaxed">
                Feel free to reach out if you're looking for a developer, have a question, or just want to connect. I'm always open to discussing new projects and creative ideas.
              </p>
              
              <div className="space-y-6">
                <ContactDetail icon={<MapPin size={20} />} title="Location" value="Mansoura, Egypt" />
                <ContactDetail icon={<Mail size={20} />} title="Email" value="engxahmedshaker@gmail.com" />
                <ContactDetail icon={<Phone size={20} />} title="Phone" value="+20 1006734678" />
              </div>
            </motion.div>

            <motion.form
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: false, margin: "-50px" }}
              className="space-y-6"
              onSubmit={(e) => { e.preventDefault(); alert("Message sent!"); }}
            >
              <FloatingInput label="Your Name" type="text" />
              <FloatingInput label="Your Email" type="email" />
              <FloatingInput label="Subject" type="text" />
              <div className="relative">
                <textarea 
                  required 
                  placeholder=" " 
                  rows={5}
                  className="w-full bg-white/5 border border-white/10 rounded-2xl p-4 pt-6 text-light focus:outline-none focus:border-primary transition-all peer resize-none"
                />
                <label className="absolute left-4 top-4 text-gray text-sm transition-all peer-focus:text-xs peer-focus:top-2 peer-focus:text-primary peer-[:not(:placeholder-shown)]:text-xs peer-[:not(:placeholder-shown)]:top-2">
                  Your Message
                </label>
              </div>
              <motion.button 
                type="submit"
                whileHover={{ scale: 1.02, filter: "brightness(1.1)", boxShadow: "0 0 20px rgba(14, 165, 233, 0.4)" }}
                whileTap={{ scale: 0.98 }}
                className="w-full py-4 bg-linear-to-r from-primary to-accent rounded-2xl font-bold flex items-center justify-center gap-2 shadow-lg shadow-primary/20 transition-all group"
              >
                Send Message
                <Send size={18} className="group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
              </motion.button>
            </motion.form>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-12 border-t border-white/5">
        <div className="max-w-7xl mx-auto px-6 flex flex-col md:flex-row justify-between items-center gap-8">
          <div className="text-center md:text-left">
            <h2 className="text-3xl font-bold tracking-tighter mb-2 flex items-center justify-center md:justify-start">
              <span className="text-white">.A</span>
              <span className="text-primary">S</span>
            </h2>
            <p className="text-gray text-sm">© 2025 Ahmed Shaker. All Rights Reserved.</p>
          </div>

          <div className="flex gap-4">
            <SocialLink icon={<Linkedin size={20} />} href="https://www.linkedin.com/in/axshaker" />
            <SocialLink icon={<Github size={20} />} href="https://github.com/AhmdShakerx" />
          </div>
        </div>
      </footer>
    </div>
  );
}

function SectionHeader({ title, subtitle }: { title: string; subtitle: string }) {
  return (
    <div className="text-center mb-16">
      <motion.span 
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: false, margin: "-50px" }}
        className="text-primary font-mono text-sm tracking-widest uppercase mb-2 block"
      >
        {subtitle}
      </motion.span>
      <motion.h2 
        initial={{ opacity: 0, y: 10 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: false, margin: "-50px" }}
        className="text-4xl md:text-5xl font-bold"
      >
        {title}
      </motion.h2>
      <div className="w-20 h-1.5 bg-linear-to-r from-primary to-accent mx-auto mt-6 rounded-full" />
    </div>
  );
}

function SkillCategory({ title, skills, delay = 0 }: { title: string; skills: { name: string; level: number }[], delay?: number }) {
  return (
    <motion.div 
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6, delay }}
      whileHover={{ y: -5 }}
      className="p-8 md:p-10 rounded-3xl bg-dark/40 border border-white/5 hover:border-primary/30 transition-all duration-500 relative group overflow-hidden"
    >
      {/* Subtle Glow */}
      <div className="absolute -top-24 -right-24 w-48 h-48 bg-primary/20 rounded-full blur-[80px] group-hover:bg-primary/40 transition-colors duration-500 pointer-events-none" />
      
      <div className="flex items-center gap-4 mb-10 relative z-10">
        <h3 className="text-2xl font-bold tracking-tight text-white">{title}</h3>
      </div>

      <div className="space-y-8 relative z-10">
        {skills.map((skill, idx) => (
          <div key={skill.name} className="group/skill">
            <div className="flex justify-between items-end mb-3">
              <span className="text-lg font-medium text-gray group-hover/skill:text-white transition-colors duration-300">
                {skill.name}
              </span>
              <div className="overflow-hidden h-6">
                <div className="flex flex-col group-hover/skill:-translate-y-1/2 transition-transform duration-500">
                  <span className="text-gray/50 font-mono text-sm h-6 flex items-center justify-end">{skill.level}%</span>
                  <span className="text-primary font-mono text-sm h-6 flex items-center justify-end font-bold">{skill.level}%</span>
                </div>
              </div>
            </div>
            
            <div className="h-2 w-full bg-white/5 rounded-full overflow-hidden">
              <motion.div
                initial={{ width: 0 }}
                whileInView={{ width: `${skill.level}%` }}
                viewport={{ once: true }}
                transition={{ duration: 1.5, delay: delay + (idx * 0.15), ease: [0.16, 1, 0.3, 1] }}
                className="h-full bg-linear-to-r from-primary to-accent rounded-full overflow-hidden relative group-hover/skill:shadow-[0_0_15px_rgba(14,165,233,0.5)] transition-shadow duration-500"
              >
                <motion.div
                  animate={{ x: ["-200%", "300%"] }}
                  transition={{ duration: 2.5, repeat: Infinity, ease: "linear", repeatDelay: 1 }}
                  className="absolute inset-0 w-1/3 bg-linear-to-r from-transparent via-white/50 to-transparent skew-x-[-20deg]"
                />
              </motion.div>
            </div>
          </div>
        ))}
      </div>
    </motion.div>
  );
}

function ContactDetail({ icon, title, value }: { icon: ReactNode, title: string, value: string }) {
  return (
    <div className="flex items-center gap-4 group">
      <div className="w-12 h-12 bg-white/5 rounded-2xl flex items-center justify-center text-primary group-hover:bg-primary group-hover:text-white transition-all">
        {icon}
      </div>
      <div>
        <h4 className="text-gray text-sm">{title}</h4>
        <p className="font-semibold">{value}</p>
      </div>
    </div>
  );
}

function FloatingInput({ label, type }: { label: string, type: string }) {
  return (
    <div className="relative">
      <input 
        type={type} 
        required 
        placeholder=" " 
        className="w-full bg-white/5 border border-white/10 rounded-2xl p-4 pt-6 text-light focus:outline-none focus:border-primary transition-all peer"
      />
      <label className="absolute left-4 top-4 text-gray text-sm transition-all peer-focus:text-xs peer-focus:top-2 peer-focus:text-primary peer-[:not(:placeholder-shown)]:text-xs peer-[:not(:placeholder-shown)]:top-2">
        {label}
      </label>
    </div>
  );
}

function SocialLink({ icon, href }: { icon: ReactNode, href: string }) {
  return (
    <a 
      href={href} 
      target="_blank" 
      rel="noopener noreferrer"
      className="w-11 h-11 bg-white/5 border border-white/10 rounded-xl flex items-center justify-center text-gray hover:text-primary hover:border-primary/50 transition-all hover:scale-110"
    >
      {icon}
    </a>
  );
}

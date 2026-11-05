import { ArrowUp, Github, Linkedin, Mail } from "lucide-react";
import { Link } from "react-router-dom";

export function Footer() {
  const currentYear = new Date().getFullYear();

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const navLinks = [
    { name: "Home", href: "/#home" },
    { name: "About", href: "/#about" },
    { name: "Projects", href: "/#projects" },
    { name: "Experience", href: "/#experience" },
    { name: "Skills", href: "/#skills" },
    { name: "Contact", href: "/#contact" },
  ];

  return (
    <footer className="py-12 px-6 border-t border-white/10 relative bg-theme-primary">
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center justify-between gap-8 text-center md:text-left">
        {/* Brand identity */}
        <div>
          <div className="flex items-center justify-center md:justify-start gap-2 mb-2">
            <span className="text-2xl font-bold font-heading text-theme-primary">.A</span>
            <span className="text-2xl font-bold font-heading text-primary">S</span>
          </div>
          <p className="text-xs sm:text-sm text-theme-secondary font-medium">
            Ahmed Shaker — Front-End Web Developer & UI/UX Designer
          </p>
          <p className="text-[11px] font-mono text-theme-secondary/60 mt-1 italic">
            "Designed with intention. Built with precision."
          </p>
        </div>

        {/* Navigation Links */}
        <div className="flex flex-wrap items-center justify-center gap-6 text-xs sm:text-sm text-theme-secondary">
          {navLinks.map((l) => (
            <a
              key={l.name}
              href={l.href}
              className="hover:text-theme-primary transition-colors"
            >
              {l.name}
            </a>
          ))}
        </div>

        {/* Social Links & Back to Top */}
        <div className="flex items-center gap-4">
          <a
            href="https://github.com/AhmdShakerx"
            target="_blank"
            rel="noopener noreferrer"
            data-cursor-magnetic
            className="p-2.5 rounded-full glass-panel hover:bg-white/10 text-theme-secondary hover:text-theme-primary transition-colors"
            title="GitHub"
          >
            <Github size={18} />
          </a>
          <a
            href="https://www.linkedin.com/in/axshaker"
            target="_blank"
            rel="noopener noreferrer"
            data-cursor-magnetic
            className="p-2.5 rounded-full glass-panel hover:bg-white/10 text-theme-secondary hover:text-theme-primary transition-colors"
            title="LinkedIn"
          >
            <Linkedin size={18} />
          </a>
          <a
            href="mailto:engxahmedshaker@gmail.com"
            data-cursor-magnetic
            className="p-2.5 rounded-full glass-panel hover:bg-white/10 text-theme-secondary hover:text-theme-primary transition-colors"
            title="Email"
          >
            <Mail size={18} />
          </a>

          <button
            onClick={scrollToTop}
            data-cursor-magnetic
            className="p-2.5 rounded-full bg-primary/10 hover:bg-primary text-primary hover:text-white border border-primary/20 transition-all ml-2"
            title="Back to Top"
            aria-label="Back to Top"
          >
            <ArrowUp size={18} />
          </button>
        </div>
      </div>

      <div className="max-w-6xl mx-auto mt-8 pt-6 border-t border-white/5 flex flex-col sm:flex-row items-center justify-between text-[11px] font-mono text-theme-secondary/60 gap-3">
        <span>© {currentYear} Ahmed Shaker. All rights reserved.</span>
        <span>Mansoura, Egypt • Available Worldwide</span>
      </div>
    </footer>
  );
}

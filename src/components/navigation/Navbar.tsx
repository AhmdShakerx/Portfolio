import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "motion/react";
import { Moon, Sun, Menu, X, Command } from "lucide-react";
import { Link, useLocation } from "react-router-dom";

interface NavbarProps {
  theme: string;
  onToggleTheme: () => void;
  onOpenCommandPalette: () => void;
}

export function Navbar({ theme, onToggleTheme, onOpenCommandPalette }: NavbarProps) {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("home");
  const [hoveredLink, setHoveredLink] = useState<string | null>(null);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();
  const isHomePage = location.pathname === "/";

  const navLinks = [
    { name: "Home", id: "home" },
    { name: "About", id: "about" },
    { name: "Projects", id: "projects" },
    { name: "Experience", id: "experience" },
    { name: "Skills", id: "skills" },
    { name: "Contact", id: "contact" },
  ];

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 40);

      if (!isHomePage) return;

      const sections = ["home", "about", "projects", "experience", "skills", "contact"];
      const current = sections.find((section) => {
        const el = document.getElementById(section);
        if (el) {
          const rect = el.getBoundingClientRect();
          return rect.top <= 200 && rect.bottom >= 200;
        }
        return false;
      });
      if (current) setActiveSection(current);
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, [isHomePage]);

  // Close mobile drawer on Escape
  useEffect(() => {
    const handleEscape = (e: KeyboardEvent) => {
      if (e.key === "Escape" && isMenuOpen) setIsMenuOpen(false);
    };
    window.addEventListener("keydown", handleEscape);
    return () => window.removeEventListener("keydown", handleEscape);
  }, [isMenuOpen]);

  const handleNavClick = (id: string) => {
    setIsMenuOpen(false);
    if (!isHomePage) {
      window.location.href = `/#${id}`;
      return;
    }
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <motion.header
      initial={{ y: -30, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      className="fixed top-0 left-0 w-full z-50 flex justify-center py-4 px-4 sm:px-6 pointer-events-none"
    >
      <nav
        aria-label="Main Navigation"
        className={`pointer-events-auto flex items-center justify-between gap-4 md:gap-8 rounded-full px-5 py-2.5 sm:px-6 sm:py-3 transition-all duration-300 ${
          scrolled
            ? "glass-panel shadow-[0_8px_32px_rgba(0,0,0,0.3)] border border-white/10"
            : "glass-panel border border-white/10"
        } w-full max-w-5xl`}
      >
        {/* Brand Logo */}
        <Link
          to="/"
          data-cursor-magnetic
          onClick={() => {
            if (isHomePage) window.scrollTo({ top: 0, behavior: "smooth" });
          }}
          className="text-2xl font-bold tracking-tighter flex items-center group font-heading"
        >
          <span className="text-theme-primary">.A</span>
          <span className="text-primary transition-all duration-300 group-hover:drop-shadow-[0_0_12px_rgba(14,165,233,0.8)]">
            S
          </span>
        </Link>

        {/* Desktop Navigation Links */}
        <div
          className="hidden md:flex items-center gap-1 rounded-full relative"
          onMouseLeave={() => setHoveredLink(null)}
        >
          {navLinks.map((link) => {
            const isActive = isHomePage && activeSection === link.id;
            const isHovered = hoveredLink === link.id;

            return (
              <button
                key={link.id}
                data-cursor-magnetic
                onClick={() => handleNavClick(link.id)}
                onMouseEnter={() => setHoveredLink(link.id)}
                className={`px-4 py-2 relative rounded-full text-sm font-medium transition-colors duration-200 ${
                  isActive ? "text-white" : "text-theme-secondary hover:text-theme-primary"
                }`}
              >
                <span className="relative z-10">{link.name}</span>

                {isHovered && (
                  <motion.div
                    layoutId="navHover"
                    className="absolute inset-0 bg-primary/75 rounded-full"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    transition={{ type: "spring", stiffness: 350, damping: 30 }}
                  />
                )}

                {isActive && !isHovered && (
                  <motion.div
                    layoutId="navActive"
                    className="absolute inset-0 bg-primary/20 border border-primary/40 rounded-full"
                    transition={{ type: "spring", stiffness: 350, damping: 30 }}
                  />
                )}
              </button>
            );
          })}
        </div>

        {/* Right Action Icons (Command Palette, Theme Toggle, Mobile Menu) */}
        <div className="flex items-center gap-2">
          {/* Quick Command Palette Button */}
          <button
            data-cursor-magnetic
            onClick={onOpenCommandPalette}
            title="Open Command Palette (Ctrl+K)"
            className="flex items-center gap-1.5 px-2.5 py-1.5 rounded-full bg-white/5 hover:bg-white/10 border border-white/10 text-theme-secondary hover:text-theme-primary text-xs font-mono transition-colors"
          >
            <Command size={14} className="text-primary" />
            <span className="hidden sm:inline">Ctrl K</span>
          </button>

          {/* Theme Switcher Button */}
          <motion.button
            data-cursor-magnetic
            onClick={onToggleTheme}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            title={`Switch to ${theme === "dark" ? "Light" : "Dark"} mode`}
            className="p-2 rounded-full hover:bg-white/10 text-theme-secondary hover:text-theme-primary transition-colors flex items-center justify-center border border-transparent hover:border-white/10"
            aria-label="Toggle theme"
          >
            <AnimatePresence mode="wait" initial={false}>
              {theme === "dark" ? (
                <motion.div
                  key="moon"
                  initial={{ rotate: -90, opacity: 0 }}
                  animate={{ rotate: 0, opacity: 1 }}
                  exit={{ rotate: 90, opacity: 0 }}
                  transition={{ duration: 0.2 }}
                >
                  <Moon size={18} className="text-primary-light" />
                </motion.div>
              ) : (
                <motion.div
                  key="sun"
                  initial={{ rotate: -90, opacity: 0 }}
                  animate={{ rotate: 0, opacity: 1 }}
                  exit={{ rotate: 90, opacity: 0 }}
                  transition={{ duration: 0.2 }}
                >
                  <Sun size={18} className="text-amber-500" />
                </motion.div>
              )}
            </AnimatePresence>
          </motion.button>

          {/* Mobile Menu Trigger */}
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="p-2 rounded-xl text-theme-primary hover:bg-white/10 transition-colors md:hidden"
            aria-label={isMenuOpen ? "Close menu" : "Open menu"}
            aria-expanded={isMenuOpen}
          >
            {isMenuOpen ? <X size={22} /> : <Menu size={22} />}
          </button>
        </div>
      </nav>

      {/* Mobile Navigation Drawer */}
      <AnimatePresence>
        {isMenuOpen && (
          <motion.div
            initial={{ opacity: 0, scale: 0.95, y: -10 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.95, y: -10 }}
            transition={{ duration: 0.2, ease: "easeOut" }}
            className="pointer-events-auto md:hidden absolute top-full left-4 right-4 mt-2 p-3 glass-panel rounded-2xl shadow-2xl border border-white/10 z-50 flex flex-col gap-1"
          >
            {navLinks.map((link) => (
              <button
                key={link.id}
                onClick={() => handleNavClick(link.id)}
                className={`w-full text-left px-4 py-3 rounded-xl font-medium text-sm transition-all ${
                  isHomePage && activeSection === link.id
                    ? "bg-primary text-white font-semibold shadow-md shadow-primary/20"
                    : "text-theme-secondary hover:bg-white/5 hover:text-theme-primary"
                }`}
              >
                {link.name}
              </button>
            ))}

            <div className="pt-2 mt-1 border-t border-white/10 flex justify-between items-center px-4 py-2">
              <span className="text-xs text-theme-secondary">Quick Shortcuts</span>
              <button
                onClick={() => {
                  setIsMenuOpen(false);
                  onOpenCommandPalette();
                }}
                className="text-xs font-mono text-primary flex items-center gap-1"
              >
                <Command size={12} /> Command Menu
              </button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.header>
  );
}

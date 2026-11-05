import { useState, useEffect } from "react";
import { BrowserRouter, Routes, Route, useLocation } from "react-router-dom";
import { AnimatePresence, motion } from "motion/react";
import { Navbar } from "@/components/navigation/Navbar";
import { Footer } from "@/components/footer/Footer";
import { Home } from "@/pages/Home";
import { ProjectDetails } from "@/pages/ProjectDetails";
import { NotFound } from "@/pages/NotFound";
import { FluidCursorTrail } from "@/components/common/FluidCursorTrail";
import { ScrollProgress } from "@/components/common/ScrollProgress";
import { CommandPalette } from "@/components/common/CommandPalette";
import { ParticleTextEffect } from "@/components/ui/particle-text-effect";

function AppContent() {
  const [showIntro, setShowIntro] = useState(() => {
    // Only show intro once per session for seamless UX, or always on fresh load
    return !sessionStorage.getItem("intro_seen");
  });
  const [theme, setTheme] = useState(() => {
    return localStorage.getItem("theme") || "dark";
  });
  const [isCommandPaletteOpen, setIsCommandPaletteOpen] = useState(false);

  // Sync theme with DOM
  useEffect(() => {
    document.documentElement.classList.remove("light", "dark");
    document.body.classList.remove("light", "dark");

    if (theme === "light") {
      document.documentElement.classList.add("light");
      document.body.classList.add("light");
    } else {
      document.documentElement.classList.add("dark");
      document.body.classList.add("dark");
    }
    localStorage.setItem("theme", theme);
  }, [theme]);

  // Lock scroll while intro is visible
  useEffect(() => {
    if (showIntro) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "auto";
    }
  }, [showIntro]);

  // Listen for open command palette events
  useEffect(() => {
    const handleOpen = () => setIsCommandPaletteOpen(true);
    window.addEventListener("open-command-palette", handleOpen);
    return () => window.removeEventListener("open-command-palette", handleOpen);
  }, []);

  const handleIntroComplete = () => {
    sessionStorage.setItem("intro_seen", "true");
    setShowIntro(false);
  };

  const handleToggleTheme = () => {
    setTheme((prev) => (prev === "dark" ? "light" : "dark"));
  };

  return (
    <>
      <FluidCursorTrail />

      {/* Cinematic Particle Intro Preloader */}
      <AnimatePresence>
        {showIntro && (
          <motion.div
            key="preloader"
            className="fixed inset-0 z-[10000]"
            exit={{ opacity: 0 }}
            transition={{ duration: 0.8, ease: "easeInOut" }}
          >
            <ParticleTextEffect onComplete={handleIntroComplete} />
          </motion.div>
        )}
      </AnimatePresence>

      {/* Main Portfolio Wrapper */}
      <div
        className={`min-h-screen bg-theme-primary text-theme-primary transition-opacity duration-700 ${
          showIntro ? "opacity-0 h-screen overflow-hidden" : "opacity-100"
        }`}
      >
        <ScrollProgress />
        
        <Navbar
          theme={theme}
          onToggleTheme={handleToggleTheme}
          onOpenCommandPalette={() => setIsCommandPaletteOpen(true)}
        />

        <Routes>
          <Route path="/" element={<Home isIntroActive={showIntro} />} />
          <Route path="/projects/:slug" element={<ProjectDetails />} />
          <Route path="*" element={<NotFound />} />
        </Routes>

        <Footer />

        <CommandPalette
          isOpen={isCommandPaletteOpen}
          onClose={() => setIsCommandPaletteOpen(false)}
          theme={theme}
          onToggleTheme={handleToggleTheme}
        />
      </div>
    </>
  );
}

export default function App() {
  return (
    <BrowserRouter>
      <AppContent />
    </BrowserRouter>
  );
}

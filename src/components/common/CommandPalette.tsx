import { useState, useEffect, useRef } from "react";
import { motion, AnimatePresence } from "motion/react";
import { Search, Home, User, Briefcase, Award, Code, Mail, Moon, Sun, Download, ExternalLink, X } from "lucide-react";
import { useNavigate } from "react-router-dom";

interface CommandPaletteProps {
  isOpen: boolean;
  onClose: () => void;
  theme: string;
  onToggleTheme: () => void;
}

export function CommandPalette({ isOpen, onClose, theme, onToggleTheme }: CommandPaletteProps) {
  const [query, setQuery] = useState("");
  const [selectedIndex, setSelectedIndex] = useState(0);
  const inputRef = useRef<HTMLInputElement>(null);
  const navigate = useNavigate();

  const commands = [
    { id: "home", label: "Go to Home", category: "Navigation", icon: <Home size={18} />, action: () => { navigate("/#home"); window.scrollTo({ top: 0, behavior: "smooth" }); } },
    { id: "about", label: "About Ahmed", category: "Navigation", icon: <User size={18} />, action: () => { navigate("/#about"); document.getElementById("about")?.scrollIntoView({ behavior: "smooth" }); } },
    { id: "projects", label: "Explore Projects", category: "Navigation", icon: <Briefcase size={18} />, action: () => { navigate("/#projects"); document.getElementById("projects")?.scrollIntoView({ behavior: "smooth" }); } },
    { id: "experience", label: "Career Journey & Timeline", category: "Navigation", icon: <Award size={18} />, action: () => { navigate("/#experience"); document.getElementById("experience")?.scrollIntoView({ behavior: "smooth" }); } },
    { id: "skills", label: "Technical Skills & Toolbox", category: "Navigation", icon: <Code size={18} />, action: () => { navigate("/#skills"); document.getElementById("skills")?.scrollIntoView({ behavior: "smooth" }); } },
    { id: "contact", label: "Get in Touch / Contact", category: "Navigation", icon: <Mail size={18} />, action: () => { navigate("/#contact"); document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" }); } },
    { id: "theme", label: `Switch to ${theme === "dark" ? "Light" : "Dark"} Mode`, category: "Preferences", icon: theme === "dark" ? <Sun size={18} /> : <Moon size={18} />, action: () => onToggleTheme() },
    { id: "resume", label: "Download Resume (CV)", category: "Actions", icon: <Download size={18} />, action: () => { const link = document.createElement("a"); link.href = "/CV.pdf"; link.download = "Ahmed_Shaker_CV.pdf"; link.click(); } },
    { id: "github", label: "Open GitHub Profile", category: "Social", icon: <ExternalLink size={18} />, action: () => window.open("https://github.com/AhmdShakerx", "_blank") },
    { id: "linkedin", label: "Open LinkedIn Profile", category: "Social", icon: <ExternalLink size={18} />, action: () => window.open("https://www.linkedin.com/in/axshaker", "_blank") },
  ];

  const filteredCommands = commands.filter((cmd) =>
    cmd.label.toLowerCase().includes(query.toLowerCase()) ||
    cmd.category.toLowerCase().includes(query.toLowerCase())
  );

  useEffect(() => {
    if (isOpen) {
      setTimeout(() => inputRef.current?.focus(), 50);
      setSelectedIndex(0);
      setQuery("");
    }
  }, [isOpen]);

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if ((e.metaKey || e.ctrlKey) && e.key === "k") {
        e.preventDefault();
        if (isOpen) onClose();
        else {
          // Open palette
          const event = new CustomEvent("open-command-palette");
          window.dispatchEvent(event);
        }
      }

      if (!isOpen) return;

      if (e.key === "Escape") {
        e.preventDefault();
        onClose();
      } else if (e.key === "ArrowDown") {
        e.preventDefault();
        setSelectedIndex((prev) => (prev + 1) % (filteredCommands.length || 1));
      } else if (e.key === "ArrowUp") {
        e.preventDefault();
        setSelectedIndex((prev) => (prev - 1 + filteredCommands.length) % (filteredCommands.length || 1));
      } else if (e.key === "Enter") {
        e.preventDefault();
        if (filteredCommands[selectedIndex]) {
          filteredCommands[selectedIndex].action();
          onClose();
        }
      }
    };

    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [isOpen, filteredCommands, selectedIndex, onClose]);

  return (
    <AnimatePresence>
      {isOpen && (
        <div className="fixed inset-0 z-[100000] flex items-start justify-center pt-24 px-4 sm:px-6">
          {/* Backdrop */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
            className="fixed inset-0 bg-black/70 backdrop-blur-md"
          />

          {/* Modal Card */}
          <motion.div
            initial={{ opacity: 0, scale: 0.96, y: -20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.96, y: -20 }}
            transition={{ duration: 0.2, ease: "easeOut" }}
            className="relative w-full max-w-xl rounded-2xl glass-panel shadow-2xl border border-white/10 overflow-hidden z-10"
          >
            {/* Search Input Bar */}
            <div className="flex items-center px-4 py-3.5 border-b border-white/10 gap-3">
              <Search className="text-primary w-5 h-5 shrink-0" />
              <input
                ref={inputRef}
                type="text"
                placeholder="Type a command or jump to section..."
                value={query}
                onChange={(e) => {
                  setQuery(e.target.value);
                  setSelectedIndex(0);
                }}
                className="w-full bg-transparent text-sm md:text-base outline-none text-theme-primary placeholder:text-theme-secondary/50"
              />
              <kbd className="hidden sm:inline-flex items-center gap-1 text-[11px] font-mono px-2 py-0.5 rounded bg-white/10 text-theme-secondary border border-white/10">
                ESC
              </kbd>
              <button
                onClick={onClose}
                className="p-1 rounded-lg hover:bg-white/10 text-theme-secondary sm:hidden"
              >
                <X size={18} />
              </button>
            </div>

            {/* Commands List */}
            <div className="max-h-80 overflow-y-auto p-2 space-y-1">
              {filteredCommands.length === 0 ? (
                <div className="py-8 text-center text-sm text-theme-secondary">
                  No matching commands found.
                </div>
              ) : (
                filteredCommands.map((command, index) => {
                  const isSelected = index === selectedIndex;
                  return (
                    <button
                      key={command.id}
                      onClick={() => {
                        command.action();
                        onClose();
                      }}
                      onMouseEnter={() => setSelectedIndex(index)}
                      className={`w-full flex items-center justify-between px-3.5 py-2.5 rounded-xl text-sm transition-all text-left ${
                        isSelected
                          ? "bg-primary text-white shadow-md shadow-primary/25"
                          : "text-theme-primary hover:bg-white/5"
                      }`}
                    >
                      <div className="flex items-center gap-3">
                        <span className={isSelected ? "text-white" : "text-primary"}>
                          {command.icon}
                        </span>
                        <span className="font-medium">{command.label}</span>
                      </div>
                      <span className={`text-[11px] font-mono uppercase tracking-wider ${isSelected ? "text-white/80" : "text-theme-secondary/70"}`}>
                        {command.category}
                      </span>
                    </button>
                  );
                })
              )}
            </div>

            {/* Modal Footer */}
            <div className="px-4 py-2.5 border-t border-white/10 bg-black/20 flex items-center justify-between text-[11px] text-theme-secondary font-mono">
              <span className="flex items-center gap-2">
                <span>Use</span>
                <kbd className="px-1.5 py-0.5 rounded bg-white/10 border border-white/10">↑</kbd>
                <kbd className="px-1.5 py-0.5 rounded bg-white/10 border border-white/10">↓</kbd>
                <span>to navigate</span>
              </span>
              <span>
                <kbd className="px-1.5 py-0.5 rounded bg-white/10 border border-white/10">↵</kbd>
                <span className="ml-1">to select</span>
              </span>
            </div>
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
}

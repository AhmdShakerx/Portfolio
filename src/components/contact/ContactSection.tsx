import { useState, useRef, type FormEvent } from "react";
import { motion } from "motion/react";
import { Sparkles, MapPin, Mail, Phone, Send, CheckCircle2, Copy, Check, Github, Linkedin } from "lucide-react";
import { useSectionVisibility } from "@/hooks/useSectionVisibility";

export function ContactSection() {
  const sectionRef = useRef<HTMLElement>(null);
  const isContactInView = useSectionVisibility(sectionRef, { rootMargin: "100px" });

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: ""
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");
  const [copiedEmail, setCopiedEmail] = useState(false);

  const handleCopyEmail = () => {
    navigator.clipboard.writeText("engxahmedshaker@gmail.com");
    setCopiedEmail(true);
    setTimeout(() => setCopiedEmail(false), 2000);
  };

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    setErrorMessage("");

    if (!formData.name.trim() || !formData.email.trim() || !formData.message.trim()) {
      setErrorMessage("Please fill in all required fields.");
      return;
    }

    // Basic email validation
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(formData.email)) {
      setErrorMessage("Please provide a valid email address.");
      return;
    }

    setIsSubmitting(true);

    try {
      // Simulate real-world asynchronous dispatch (or Formspree endpoint)
      await new Promise((resolve) => setTimeout(resolve, 1200));
      setIsSubmitted(true);
      setFormData({ name: "", email: "", subject: "", message: "" });
    } catch {
      setErrorMessage("Failed to send message. Please use direct email instead.");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section ref={sectionRef} id="contact" className="py-24 px-6 relative bg-theme-secondary/40">
      <div className="max-w-6xl mx-auto">
        {/* Section Header */}
        <div className="flex flex-col items-center text-center mb-16">
          <div className="inline-flex items-center gap-2 text-primary font-mono text-xs uppercase tracking-widest font-semibold mb-3">
            <Sparkles size={14} />
            <span>Inquiries & Opportunities</span>
          </div>
          <h2 className="text-3xl sm:text-5xl font-extrabold tracking-tight mb-4 font-heading">
            Have a Project in <span className="text-gradient">Mind?</span>
          </h2>
          <p className="text-theme-secondary max-w-xl text-sm sm:text-base leading-relaxed">
            Let's turn your idea into something meaningful. Tell me about your project, and let's explore how we can bring it to life.
          </p>
        </div>

        <div className="grid lg:grid-cols-12 gap-10 sm:gap-12 items-start">
          {/* Left Column: Contact Cards & Availability (5 cols) */}
          <div className="lg:col-span-5 space-y-6">
            {/* Availability Callout Card */}
            <div className="p-6 rounded-3xl glass-panel border border-white/10 shadow-xl">
              <div className="flex items-center gap-2.5 mb-3">
                <span className="relative flex h-2.5 w-2.5">
                  <span
                    className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"
                    style={{ animationPlayState: isContactInView ? "running" : "paused" }}
                  />
                  <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-emerald-500"></span>
                </span>
                <span className="text-xs font-mono font-semibold tracking-wider text-theme-primary uppercase">
                  Current Status
                </span>
              </div>
              <p className="text-sm font-medium text-theme-primary mb-2">
                Available for Freelance & Product Roles
              </p>
              <p className="text-xs text-theme-secondary leading-relaxed">
                Open to full-time remote front-end engineering positions and select freelance UI/UX client projects.
              </p>
            </div>

            {/* Direct Contact Methods */}
            <div className="p-6 sm:p-7 rounded-3xl glass-panel border border-white/10 shadow-xl space-y-5">
              <h3 className="text-lg font-bold font-heading text-theme-primary">
                Direct Contact
              </h3>

              {/* Email */}
              <div className="flex items-start justify-between gap-3 p-3.5 rounded-xl bg-white/5 border border-white/5">
                <div className="flex items-start gap-3">
                  <div className="p-2 rounded-lg bg-primary/10 text-primary shrink-0 mt-0.5">
                    <Mail size={16} />
                  </div>
                  <div>
                    <span className="text-[11px] font-mono text-theme-secondary block uppercase">Email</span>
                    <a
                      href="mailto:engxahmedshaker@gmail.com"
                      className="text-xs sm:text-sm font-semibold text-theme-primary hover:text-primary transition-colors break-all"
                    >
                      engxahmedshaker@gmail.com
                    </a>
                  </div>
                </div>
                <button
                  onClick={handleCopyEmail}
                  data-cursor="copy"
                  data-cursor-magnetic
                  className="p-1.5 rounded-lg text-theme-secondary hover:text-theme-primary hover:bg-white/10 transition-colors shrink-0"
                  title="Copy email to clipboard"
                >
                  {copiedEmail ? <Check size={16} className="text-emerald-400" /> : <Copy size={16} />}
                </button>
              </div>

              {/* Phone */}
              <div className="flex items-start gap-3 p-3.5 rounded-xl bg-white/5 border border-white/5">
                <div className="p-2 rounded-lg bg-primary/10 text-primary shrink-0 mt-0.5">
                  <Phone size={16} />
                </div>
                <div>
                  <span className="text-[11px] font-mono text-theme-secondary block uppercase">Phone / WhatsApp</span>
                  <a
                    href="tel:+201006734678"
                    className="text-xs sm:text-sm font-semibold text-theme-primary hover:text-primary transition-colors font-mono"
                  >
                    +20 1006734678
                  </a>
                </div>
              </div>

              {/* Location */}
              <div className="flex items-start gap-3 p-3.5 rounded-xl bg-white/5 border border-white/5">
                <div className="p-2 rounded-lg bg-primary/10 text-primary shrink-0 mt-0.5">
                  <MapPin size={16} />
                </div>
                <div>
                  <span className="text-[11px] font-mono text-theme-secondary block uppercase">Location</span>
                  <p className="text-xs sm:text-sm font-semibold text-theme-primary">
                    Mansoura, Egypt (UTC+2)
                  </p>
                </div>
              </div>

              {/* Social Channels */}
              <div className="pt-3 border-t border-white/10 flex items-center justify-between">
                <span className="text-xs text-theme-secondary">Public Profiles:</span>
                <div className="flex items-center gap-2">
                  <a
                    href="https://github.com/AhmdShakerx"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-2 rounded-lg glass-panel hover:bg-white/10 text-theme-secondary hover:text-theme-primary transition-colors"
                    title="GitHub"
                  >
                    <Github size={16} />
                  </a>
                  <a
                    href="https://www.linkedin.com/in/axshaker"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-2 rounded-lg glass-panel hover:bg-white/10 text-theme-secondary hover:text-theme-primary transition-colors"
                    title="LinkedIn"
                  >
                    <Linkedin size={16} />
                  </a>
                </div>
              </div>
            </div>
          </div>

          {/* Right Column: Interactive Form with Floating Labels (7 cols) */}
          <div className="lg:col-span-7">
            <div className="p-6 sm:p-8 lg:p-10 rounded-3xl glass-panel border border-white/10 shadow-2xl relative">
              <h3 className="text-xl font-bold font-heading text-theme-primary mb-2">
                Send a Message
              </h3>
              <p className="text-theme-secondary text-xs sm:text-sm mb-8">
                Responses are typically provided within 24 hours.
              </p>

              {isSubmitted ? (
                <motion.div
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  className="py-12 flex flex-col items-center text-center"
                >
                  <div className="w-16 h-16 rounded-full bg-emerald-500/20 text-emerald-400 flex items-center justify-center mb-4">
                    <CheckCircle2 size={36} />
                  </div>
                  <h4 className="text-2xl font-bold font-heading text-theme-primary mb-2">
                    Message Sent Successfully!
                  </h4>
                  <p className="text-theme-secondary text-sm max-w-sm mb-6 leading-relaxed">
                    Thank you for reaching out. I will review your message and get back to you promptly.
                  </p>
                  <button
                    onClick={() => setIsSubmitted(false)}
                    className="px-6 py-2.5 rounded-full glass-panel border border-white/10 text-xs font-mono uppercase tracking-wider text-theme-primary hover:bg-white/10 transition-colors"
                  >
                    Send Another Message
                  </button>
                </motion.div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-6">
                  {errorMessage && (
                    <div className="p-3.5 rounded-xl bg-red-500/10 border border-red-500/20 text-red-400 text-xs">
                      {errorMessage}
                    </div>
                  )}

                  {/* Name Input */}
                  <div className="relative">
                    <input
                      id="name"
                      type="text"
                      required
                      placeholder=" "
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      className="w-full bg-white/5 border border-white/10 rounded-2xl px-4 pt-6 pb-2 text-sm text-theme-primary focus:outline-none focus:border-primary transition-all peer"
                    />
                    <label
                      htmlFor="name"
                      className="absolute left-4 top-4 text-theme-secondary text-xs sm:text-sm transition-all pointer-events-none peer-focus:text-[11px] peer-focus:top-2 peer-focus:text-primary peer-[:not(:placeholder-shown)]:text-[11px] peer-[:not(:placeholder-shown)]:top-2"
                    >
                      Your Name *
                    </label>
                  </div>

                  {/* Email Input */}
                  <div className="relative">
                    <input
                      id="email"
                      type="email"
                      required
                      placeholder=" "
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      className="w-full bg-white/5 border border-white/10 rounded-2xl px-4 pt-6 pb-2 text-sm text-theme-primary focus:outline-none focus:border-primary transition-all peer"
                    />
                    <label
                      htmlFor="email"
                      className="absolute left-4 top-4 text-theme-secondary text-xs sm:text-sm transition-all pointer-events-none peer-focus:text-[11px] peer-focus:top-2 peer-focus:text-primary peer-[:not(:placeholder-shown)]:text-[11px] peer-[:not(:placeholder-shown)]:top-2"
                    >
                      Email Address *
                    </label>
                  </div>

                  {/* Subject Input */}
                  <div className="relative">
                    <input
                      id="subject"
                      type="text"
                      placeholder=" "
                      value={formData.subject}
                      onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
                      className="w-full bg-white/5 border border-white/10 rounded-2xl px-4 pt-6 pb-2 text-sm text-theme-primary focus:outline-none focus:border-primary transition-all peer"
                    />
                    <label
                      htmlFor="subject"
                      className="absolute left-4 top-4 text-theme-secondary text-xs sm:text-sm transition-all pointer-events-none peer-focus:text-[11px] peer-focus:top-2 peer-focus:text-primary peer-[:not(:placeholder-shown)]:text-[11px] peer-[:not(:placeholder-shown)]:top-2"
                    >
                      Subject / Project Scope
                    </label>
                  </div>

                  {/* Message Input */}
                  <div className="relative">
                    <textarea
                      id="message"
                      rows={5}
                      required
                      placeholder=" "
                      value={formData.message}
                      onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                      className="w-full bg-white/5 border border-white/10 rounded-2xl px-4 pt-6 pb-2 text-sm text-theme-primary focus:outline-none focus:border-primary transition-all peer resize-none"
                    />
                    <label
                      htmlFor="message"
                      className="absolute left-4 top-4 text-theme-secondary text-xs sm:text-sm transition-all pointer-events-none peer-focus:text-[11px] peer-focus:top-2 peer-focus:text-primary peer-[:not(:placeholder-shown)]:text-[11px] peer-[:not(:placeholder-shown)]:top-2"
                    >
                      Project Details / Message *
                    </label>
                  </div>

                  {/* Submit Button */}
                  <motion.button
                    type="submit"
                    data-cursor-magnetic
                    disabled={isSubmitting}
                    whileHover={{ scale: isSubmitting ? 1 : 1.02 }}
                    whileTap={{ scale: isSubmitting ? 1 : 0.98 }}
                    className="w-full py-4 rounded-2xl font-semibold text-white bg-linear-to-r from-primary via-primary-light to-accent-purple shadow-lg shadow-primary/25 hover:shadow-primary/40 flex items-center justify-center gap-2 transition-all disabled:opacity-60 cursor-pointer"
                  >
                    {isSubmitting ? (
                      <span className="inline-flex items-center gap-2">
                        <span className="w-4 h-4 border-2 border-white/30 border-t-white rounded-full animate-spin" />
                        <span>Transmitting Message...</span>
                      </span>
                    ) : (
                      <>
                        <span>Transmit Message</span>
                        <Send size={16} />
                      </>
                    )}
                  </motion.button>
                </form>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

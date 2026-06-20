import { motion } from "motion/react";
import { useEffect, useState } from "react";

export default function Particles() {
  const [particles, setParticles] = useState<Array<{ id: number; size: number; x: number; y: number; duration: number; delay: number }>>([]);

  useEffect(() => {
    const newParticles = Array.from({ length: 40 }).map((_, i) => ({
      id: i,
      size: Math.random() * 6 + 2,
      x: Math.random() * 100,
      y: Math.random() * 100,
      duration: Math.random() * 12 + 8,
      delay: Math.random() * 6,
    }));
    setParticles(newParticles);
  }, []);

  return (
    <div className="absolute inset-0 z-0 pointer-events-none overflow-hidden">
      {particles.map((p) => (
        <motion.div
          key={p.id}
          className="absolute rounded-full bg-linear-to-r from-primary to-accent opacity-20"
          style={{
            width: p.size,
            height: p.size,
            left: `${p.x}%`,
            top: `${p.y}%`,
          }}
          animate={{
            x: [0, (Math.random() - 0.5) * 80],
            y: [0, (Math.random() - 0.5) * 80],
          }}
          transition={{
            duration: p.duration,
            delay: p.delay,
            repeat: Infinity,
            repeatType: "reverse",
            ease: "easeInOut",
          }}
        />
      ))}
    </div>
  );
}

import { useEffect, useState, useMemo } from "react";
import { motion } from "motion/react";

interface ParticleItem {
  id: number;
  size: number;
  x: number;
  y: number;
  targetX: number;
  targetY: number;
  duration: number;
  delay: number;
}

interface ParticlesProps {
  isActive?: boolean;
}

export default function Particles({ isActive = true }: ParticlesProps) {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  const particles = useMemo<ParticleItem[]>(() => {
    return Array.from({ length: 30 }).map((_, i) => ({
      id: i,
      size: Math.floor(Math.random() * 5 + 2),
      x: Math.floor(Math.random() * 95),
      y: Math.floor(Math.random() * 95),
      targetX: Math.floor((Math.random() - 0.5) * 60),
      targetY: Math.floor((Math.random() - 0.5) * 60),
      duration: Math.floor(Math.random() * 8 + 8),
      delay: Number((Math.random() * 4).toFixed(1)),
    }));
  }, []);

  if (!mounted) {
    return null;
  }

  return (
    <div className="absolute inset-0 z-0 pointer-events-none overflow-hidden" aria-hidden="true">
      {particles.map((p) => (
        <motion.div
          key={p.id}
          className="absolute rounded-full bg-primary/25 blur-[0.5px]"
          style={{
            width: p.size,
            height: p.size,
            left: `${p.x}%`,
            top: `${p.y}%`,
          }}
          animate={
            isActive
              ? {
                  x: [0, p.targetX, 0],
                  y: [0, p.targetY, 0],
                  opacity: [0.15, 0.4, 0.15],
                }
              : {
                  x: 0,
                  y: 0,
                  opacity: 0.15,
                }
          }
          transition={
            isActive
              ? {
                  duration: p.duration,
                  delay: p.delay,
                  repeat: Infinity,
                  repeatType: "reverse",
                  ease: "easeInOut",
                }
              : {
                  duration: 0.5,
                }
          }
        />
      ))}
    </div>
  );
}

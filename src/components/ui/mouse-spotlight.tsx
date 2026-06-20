import React, { useState, useEffect } from 'react';
import { motion, useSpring } from 'framer-motion';
import { cn } from '@/lib/utils';

export function MouseSpotlight({ className, size = 250 }: { className?: string, size?: number }) {
  const [isHovered, setIsHovered] = useState(false);
  const [isHidden, setIsHidden] = useState(false);

  // Fast following spring for the cursor
  const mouseX = useSpring(-size, { stiffness: 800, damping: 40 });
  const mouseY = useSpring(-size, { stiffness: 800, damping: 40 });

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      mouseX.set(e.clientX - size / 2);
      mouseY.set(e.clientY - size / 2);

      // Check if hovering over a clickable element or outside #home
      const target = e.target as HTMLElement;
      if (!target.closest('#home')) {
        setIsHovered(false);
      } else {
        setIsHovered(true);
        if (target.closest('a') || target.closest('button')) {
          setIsHidden(true);
        } else {
          setIsHidden(false);
        }
      }
    };

    const handleMouseLeave = () => setIsHovered(false);

    window.addEventListener('mousemove', handleMouseMove);
    document.addEventListener('mouseleave', handleMouseLeave);
    
    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
      document.removeEventListener('mouseleave', handleMouseLeave);
    };
  }, [mouseX, mouseY, size]);

  return (
    <motion.div
      className={cn(
        'pointer-events-none fixed z-[9999] rounded-full transition-opacity duration-300 mix-blend-screen',
        isHovered && !isHidden ? 'opacity-100' : 'opacity-0',
        className
      )}
      style={{
        width: size,
        height: size,
        left: 0,
        top: 0,
        x: mouseX,
        y: mouseY,
        background: 'radial-gradient(circle, rgba(255,255,255,0.4) 0%, rgba(255,255,255,0.1) 40%, rgba(255,255,255,0) 70%)',
        willChange: 'transform'
      }}
    />
  );
}


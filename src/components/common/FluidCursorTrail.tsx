import { useEffect, useRef, useState } from "react";

interface TrailPoint {
  x: number;
  y: number;
}

const TOTAL_POINTS = 22; // Smooth fluid chain length
const IDLE_TIMEOUT_MS = 90; // Milliseconds before fading out on mouse stop

export function FluidCursorTrail() {
  const canvasRef = useRef<HTMLCanvasElement | null>(null);
  const [isEnabled, setIsEnabled] = useState(false);

  // Physics and Animation State stored in refs to avoid React re-render overhead
  const pointsRef = useRef<TrailPoint[]>([]);
  const targetPosRef = useRef({ x: -100, y: -100 });
  const isMovingRef = useRef(false);
  const lastMoveTimeRef = useRef(0);
  const opacityRef = useRef(0);
  const animFrameIdRef = useRef<number | null>(null);
  const isRunningRef = useRef(false);
  const isDarkRef = useRef(true);

  // Device capability and touch detection
  useEffect(() => {
    const isTouch =
      window.matchMedia("(pointer: coarse)").matches ||
      window.matchMedia("(hover: none)").matches ||
      "ontouchstart" in window ||
      navigator.maxTouchPoints > 0;

    const prefersReducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

    if (isTouch || prefersReducedMotion) {
      setIsEnabled(false);
      return;
    }

    setIsEnabled(true);

    const handlePointerDown = (e: PointerEvent) => {
      if (e.pointerType === "touch") {
        setIsEnabled(false);
      }
    };

    window.addEventListener("pointerdown", handlePointerDown, { passive: true });
    return () => {
      window.removeEventListener("pointerdown", handlePointerDown);
    };
  }, []);

  // Main Canvas & Fluid Simulation Effect
  useEffect(() => {
    if (!isEnabled) return;

    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d", { alpha: true });
    if (!ctx) return;

    // Check dark/light theme
    const checkTheme = () => {
      isDarkRef.current = !document.documentElement.classList.contains("light");
    };
    checkTheme();

    const themeObserver = new MutationObserver(checkTheme);
    themeObserver.observe(document.documentElement, {
      attributes: true,
      attributeFilter: ["class"]
    });

    // Handle high-DPI retina canvas sizing
    const handleResize = () => {
      const dpr = Math.min(window.devicePixelRatio || 1, 2);
      canvas.width = window.innerWidth * dpr;
      canvas.height = window.innerHeight * dpr;
      ctx.scale(dpr, dpr);
    };
    handleResize();
    window.addEventListener("resize", handleResize, { passive: true });

    // Initialize points array
    pointsRef.current = Array.from({ length: TOTAL_POINTS }, () => ({
      x: -100,
      y: -100
    }));

    // Start Animation Loop (Auto-Wake)
    const startLoop = () => {
      if (isRunningRef.current) return;
      isRunningRef.current = true;
      animFrameIdRef.current = requestAnimationFrame(render);
    };

    // Stop Animation Loop (Auto-Sleep for 0% CPU consumption when idle)
    const stopLoop = () => {
      if (!isRunningRef.current) return;
      isRunningRef.current = false;
      if (animFrameIdRef.current) {
        cancelAnimationFrame(animFrameIdRef.current);
        animFrameIdRef.current = null;
      }
      ctx.clearRect(0, 0, window.innerWidth, window.innerHeight);
    };

    // Render & Physics Loop
    const render = (currentTime: number) => {
      const timeSinceMove = currentTime - lastMoveTimeRef.current;
      const points = pointsRef.current;
      const target = targetPosRef.current;

      // 1. Fluid Physics: Spring interpolation along the node chain
      // Head node follows pointer with responsive easing
      points[0].x += (target.x - points[0].x) * 0.46;
      points[0].y += (target.y - points[0].y) * 0.46;

      // Trailing nodes follow each other with smoothly decaying spring tension
      for (let i = 1; i < TOTAL_POINTS; i++) {
        const prev = points[i - 1];
        const current = points[i];
        const spring = 0.4 - (i / TOTAL_POINTS) * 0.12; // Easing from 0.40 down to 0.28
        current.x += (prev.x - current.x) * spring;
        current.y += (prev.y - current.y) * spring;
      }

      // 2. Measure tail convergence and motion state
      const headDist = Math.hypot(target.x - points[0].x, target.y - points[0].y);
      const tailDist = Math.hypot(points[0].x - points[TOTAL_POINTS - 1].x, points[0].y - points[TOTAL_POINTS - 1].y);

      // Handle fading out when movement stops
      if (timeSinceMove > IDLE_TIMEOUT_MS) {
        isMovingRef.current = false;
        opacityRef.current *= 0.88; // Smooth exponential decay
      } else {
        opacityRef.current = Math.min(1, opacityRef.current + 0.15);
      }

      // Check if completely settled and faded -> go to sleep (0% CPU)
      if (opacityRef.current < 0.005 || (!isMovingRef.current && tailDist < 0.8 && opacityRef.current < 0.05)) {
        stopLoop();
        return;
      }

      // 3. Render Canvas
      ctx.clearRect(0, 0, window.innerWidth, window.innerHeight);

      if (opacityRef.current > 0.01 && points[0].x > -50) {
        const isDark = isDarkRef.current;
        const baseAlpha = opacityRef.current * (isDark ? 0.36 : 0.42);

        ctx.save();
        ctx.lineCap = "round";
        ctx.lineJoin = "round";

        // Ambient soft glow (subtle and restrained)
        ctx.shadowColor = isDark ? "rgba(56, 189, 248, 0.3)" : "rgba(2, 132, 199, 0.25)";
        ctx.shadowBlur = 6;

        // Draw organic fluid curve using midpoint quadratic Bezier splines
        let prevMidX = (points[0].x + points[1].x) / 2;
        let prevMidY = (points[0].y + points[1].y) / 2;

        for (let i = 1; i < TOTAL_POINTS - 1; i++) {
          const pCurrent = points[i];
          const pNext = points[i + 1];
          const nextMidX = (pCurrent.x + pNext.x) / 2;
          const nextMidY = (pCurrent.y + pNext.y) / 2;

          // Normalized progression from head (0) to tail (1)
          const progress = i / TOTAL_POINTS;
          const segmentAlpha = Math.max(0, baseAlpha * Math.pow(1 - progress, 1.25));

          // Tapered stroke width: from 3.5px down to 0.6px
          const strokeWidth = Math.max(0.6, (1 - progress) * 3.6);

          ctx.beginPath();
          ctx.moveTo(prevMidX, prevMidY);
          ctx.quadraticCurveTo(pCurrent.x, pCurrent.y, nextMidX, nextMidY);

          // Subtle cyan-to-purple gradient interpolation
          if (isDark) {
            if (progress < 0.5) {
              // Cyan-to-Sky range
              ctx.strokeStyle = `rgba(56, 189, 248, ${segmentAlpha})`;
            } else {
              // Subtle violet fade at the tail
              ctx.strokeStyle = `rgba(139, 92, 246, ${segmentAlpha * 0.8})`;
            }
          } else {
            // Light theme: crisp sapphire cyan
            ctx.strokeStyle = `rgba(2, 132, 199, ${segmentAlpha})`;
          }

          ctx.lineWidth = strokeWidth;
          ctx.stroke();

          prevMidX = nextMidX;
          prevMidY = nextMidY;
        }

        // Draw an ultra-subtle luminous bead at the leading head point
        const headAlpha = baseAlpha * 1.1;
        ctx.beginPath();
        ctx.arc(points[0].x, points[0].y, 1.8, 0, Math.PI * 2);
        ctx.fillStyle = isDark
          ? `rgba(56, 189, 248, ${headAlpha})`
          : `rgba(2, 132, 199, ${headAlpha})`;
        ctx.shadowBlur = 4;
        ctx.fill();

        ctx.restore();
      }

      animFrameIdRef.current = requestAnimationFrame(render);
    };

    // Mouse Event Listeners
    const handleMouseMove = (e: MouseEvent) => {
      const now = performance.now();
      lastMoveTimeRef.current = now;
      isMovingRef.current = true;

      // On first entry or if previously offscreen, initialize points immediately to cursor position
      if (targetPosRef.current.x < 0) {
        pointsRef.current.forEach((pt) => {
          pt.x = e.clientX;
          pt.y = e.clientY;
        });
        opacityRef.current = 0.2;
      }

      targetPosRef.current.x = e.clientX;
      targetPosRef.current.y = e.clientY;

      startLoop();
    };

    const handleMouseLeave = () => {
      // Gracefully initiate fade out
      isMovingRef.current = false;
      lastMoveTimeRef.current = 0;
    };

    const handleMouseEnter = (e: MouseEvent) => {
      // Re-anchor points to new entry location so it doesn't streak across screen
      targetPosRef.current.x = e.clientX;
      targetPosRef.current.y = e.clientY;
      pointsRef.current.forEach((pt) => {
        pt.x = e.clientX;
        pt.y = e.clientY;
      });
      opacityRef.current = 0.2;
      lastMoveTimeRef.current = performance.now();
      isMovingRef.current = true;
      startLoop();
    };

    const handleVisibilityChange = () => {
      if (document.hidden) {
        stopLoop();
      }
    };

    const handleWindowBlur = () => {
      stopLoop();
    };

    window.addEventListener("mousemove", handleMouseMove, { passive: true });
    window.addEventListener("blur", handleWindowBlur);
    document.documentElement.addEventListener("mouseleave", handleMouseLeave);
    document.documentElement.addEventListener("mouseenter", handleMouseEnter);
    document.addEventListener("visibilitychange", handleVisibilityChange);

    return () => {
      themeObserver.disconnect();
      window.removeEventListener("resize", handleResize);
      window.removeEventListener("mousemove", handleMouseMove);
      window.removeEventListener("blur", handleWindowBlur);
      document.documentElement.removeEventListener("mouseleave", handleMouseLeave);
      document.documentElement.removeEventListener("mouseenter", handleMouseEnter);
      document.removeEventListener("visibilitychange", handleVisibilityChange);
      stopLoop();
    };
  }, [isEnabled]);

  if (!isEnabled) return null;

  return (
    <canvas
      ref={canvasRef}
      aria-hidden="true"
      className="pointer-events-none fixed inset-0 z-30 select-none"
      style={{ willChange: "transform" }}
    />
  );
}

// Re-export as CustomCursor for seamless backwards-compatibility
export { FluidCursorTrail as CustomCursor };

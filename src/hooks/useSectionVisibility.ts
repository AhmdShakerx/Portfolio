import { useState, useEffect, useRef } from "react";

interface VisibilityOptions {
  rootMargin?: string;
  threshold?: number | number[];
  pauseWhenHidden?: boolean;
}

// Global page visibility state to synchronize across all sections without duplicate listeners
let isGlobalTabVisible = typeof document !== "undefined" ? !document.hidden : true;
const visibilityListeners = new Set<(visible: boolean) => void>();

if (typeof document !== "undefined") {
  document.addEventListener("visibilitychange", () => {
    isGlobalTabVisible = !document.hidden;
    visibilityListeners.forEach((listener) => listener(isGlobalTabVisible));
  });
}

// Shared IntersectionObserver registry to reuse observers by rootMargin/threshold
const observerRegistry = new Map<string, {
  observer: IntersectionObserver;
  callbacks: Map<Element, (isIntersecting: boolean, entry: IntersectionObserverEntry) => void>;
}>();

function getSharedObserver(rootMargin: string, threshold: number | number[]) {
  const thresholdKey = Array.isArray(threshold) ? threshold.join(",") : threshold.toString();
  const key = `${rootMargin}_${thresholdKey}`;

  if (!observerRegistry.has(key)) {
    const callbacks = new Map<Element, (isIntersecting: boolean, entry: IntersectionObserverEntry) => void>();
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          const cb = callbacks.get(entry.target);
          if (cb) {
            cb(entry.isIntersecting, entry);
          }
        });
      },
      { rootMargin, threshold }
    );

    observerRegistry.set(key, { observer, callbacks });
  }

  return observerRegistry.get(key)!;
}

/**
 * High-performance hook that tracks whether an element is visible in the viewport
 * AND whether the browser tab is currently active.
 *
 * Automatically suspends animations when offscreen or when user switches browser tabs.
 */
export function useSectionVisibility(
  targetRef: React.RefObject<HTMLElement | null>,
  options: VisibilityOptions = {}
): boolean {
  const { rootMargin = "120px", threshold = 0.05, pauseWhenHidden = true } = options;

  const [isInViewport, setIsInViewport] = useState(false);
  const [isTabActive, setIsTabActive] = useState(isGlobalTabVisible);

  // Sync with global browser tab visibility
  useEffect(() => {
    if (!pauseWhenHidden) return;

    const handleTabChange = (visible: boolean) => {
      setIsTabActive(visible);
    };

    visibilityListeners.add(handleTabChange);
    setIsTabActive(isGlobalTabVisible);

    return () => {
      visibilityListeners.delete(handleTabChange);
    };
  }, [pauseWhenHidden]);

  // Sync with viewport intersection using shared observer
  useEffect(() => {
    const element = targetRef.current;
    if (!element) return;

    const { observer, callbacks } = getSharedObserver(rootMargin, threshold);

    const onIntersection = (intersecting: boolean) => {
      setIsInViewport(intersecting);
    };

    callbacks.set(element, onIntersection);
    observer.observe(element);

    return () => {
      callbacks.delete(element);
      observer.unobserve(element);
    };
  }, [targetRef, rootMargin, threshold]);

  return isInViewport && (!pauseWhenHidden || isTabActive);
}

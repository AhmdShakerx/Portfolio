'use client'

import { Suspense, lazy, useEffect, useRef } from 'react'
const Spline = lazy(() => import('@splinetool/react-spline'))

interface SplineSceneProps {
  scene: string
  className?: string
  isActive?: boolean
}

export function SplineScene({ scene, className, isActive = true }: SplineSceneProps) {
  const appRef = useRef<any>(null);

  useEffect(() => {
    if (appRef.current) {
      try {
        if (isActive) {
          appRef.current.play();
        } else {
          appRef.current.stop();
        }
      } catch (err) {
        console.warn("Could not control spline playback:", err);
      }
    }
  }, [isActive]);

  return (
    <Suspense 
      fallback={
        <div className="w-full h-full flex items-center justify-center">
          <span className="w-8 h-8 rounded-full border-4 border-white/20 border-t-primary animate-spin"></span>
        </div>
      }
    >
      <Spline
        scene={scene}
        className={className}
        onLoad={(app) => {
          appRef.current = app;
          if (!isActive) {
            try {
              app.stop();
            } catch (e) {}
          }
        }}
      />
    </Suspense>
  )
}

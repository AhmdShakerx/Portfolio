import React, { Suspense, lazy, useEffect, useRef, type ReactNode } from 'react';

const Spline = lazy(() => import('@splinetool/react-spline'));

interface ErrorBoundaryProps {
  children: ReactNode;
  fallback?: ReactNode;
}

interface ErrorBoundaryState {
  hasError: boolean;
}

class SplineErrorBoundary extends React.Component<ErrorBoundaryProps, ErrorBoundaryState> {
  state: ErrorBoundaryState = { hasError: false };

  static getDerivedStateFromError(): ErrorBoundaryState {
    return { hasError: true };
  }

  componentDidCatch(error: unknown) {
    console.warn("Spline 3D Scene could not be loaded:", error);
  }

  render() {
    if (this.state.hasError) {
      return (
        this.props.fallback || (
          <div className="w-full h-full flex items-center justify-center opacity-30">
            <div className="w-48 h-48 rounded-full bg-linear-to-tr from-primary/30 to-accent-purple/30 blur-2xl" />
          </div>
        )
      );
    }
    return this.props.children;
  }
}

interface SplineSceneProps {
  scene: string;
  className?: string;
  isActive?: boolean;
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
    <SplineErrorBoundary>
      <Suspense
        fallback={
          <div className="w-full h-full flex items-center justify-center">
            <span className="w-8 h-8 rounded-full border-2 border-white/20 border-t-primary animate-spin" />
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
              } catch {
                // ignore
              }
            }
          }}
        />
      </Suspense>
    </SplineErrorBoundary>
  );
}

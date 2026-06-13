import React from 'react';
import { cn } from "@/lib/utils";

export interface ProjectItem {
  id?: string | number;
  imageSrc: string;
  title: string;
  href?: string;
  description?: string;
}

interface ImageAutoSliderProps {
  items: ProjectItem[];
  className?: string;
}

export const ImageAutoSlider = ({ items, className }: ImageAutoSliderProps) => {
  // Duplicate items for seamless loop and shift for visual variety
  const duplicatedItems1 = [...items, ...items];
  const duplicatedItems2 = [...items.slice(4), ...items.slice(0, 4), ...items.slice(4), ...items.slice(0, 4)];
  const duplicatedItems3 = [...items.slice(7), ...items.slice(0, 7), ...items.slice(7), ...items.slice(0, 7)];

  const renderRow = (rowItems: ProjectItem[], direction: 'left' | 'right') => (
    <div className={`infinite-scroll-${direction} flex gap-4 md:gap-6 pr-4 md:pr-6 w-max`}>
      {rowItems.map((item, index) => (
        <a
          key={index}
          href={item.href || '#'}
          target="_blank"
          rel="noreferrer"
          className="image-item group flex-shrink-0 w-56 h-40 md:w-[320px] md:h-[220px] lg:w-[400px] lg:h-[280px] rounded-2xl overflow-hidden shadow-2xl relative block"
        >
          <img
            src={item.imageSrc}
            alt={item.title}
            className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
            loading="lazy"
          />
          {/* Subtle gradient overlay at bottom for text readability */}
          <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-80 group-hover:opacity-100 transition-opacity duration-300" />
          
          {/* Content */}
          <div className="relative z-10 flex h-full flex-col justify-end p-4 md:p-6 absolute inset-0">
            <div className="translate-y-4 group-hover:translate-y-0 transition-transform duration-300">
              <h3 className="truncate text-lg md:text-xl font-bold text-white mb-1 md:mb-2 shadow-sm">
                {item.title}
              </h3>
              {item.description && (
                <p className="line-clamp-2 text-xs md:text-sm text-gray font-medium opacity-0 group-hover:opacity-100 transition-opacity duration-300 delay-100">
                  {item.description}
                </p>
              )}
            </div>
          </div>
        </a>
      ))}
    </div>
  );

  return (
    <>
      <style>{`
        @keyframes scroll-left {
          0% {
            transform: translate3d(0, 0, 0);
          }
          100% {
            transform: translate3d(-50%, 0, 0);
          }
        }
        @keyframes scroll-right {
          0% {
            transform: translate3d(-50%, 0, 0);
          }
          100% {
            transform: translate3d(0, 0, 0);
          }
        }

        .infinite-scroll-left {
          animation: scroll-left 40s linear infinite;
          will-change: transform;
        }

        .infinite-scroll-right {
          animation: scroll-right 40s linear infinite;
          will-change: transform;
        }

        .infinite-scroll-left:hover, .infinite-scroll-right:hover {
          animation-play-state: paused;
        }

        .scroll-container {
          mask: linear-gradient(
            90deg,
            transparent 0%,
            black 5%,
            black 95%,
            transparent 100%
          );
          -webkit-mask: linear-gradient(
            90deg,
            transparent 0%,
            black 5%,
            black 95%,
            transparent 100%
          );
        }

        .image-item {
          transition: transform 0.3s ease, filter 0.3s ease;
        }
      `}</style>
      
      <div className={cn("w-full relative overflow-hidden flex items-center justify-center py-10", className)}>
        <div className="relative z-10 w-full flex items-center justify-center">
          <div className="scroll-container w-full flex flex-col gap-4 md:gap-6">
            {renderRow(duplicatedItems1, 'left')}
            {renderRow(duplicatedItems2, 'right')}
            {renderRow(duplicatedItems3, 'left')}
          </div>
        </div>
      </div>
    </>
  );
};

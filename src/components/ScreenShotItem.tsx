"use client";

import Image, { StaticImageData } from "next/image";
import { useState, useEffect } from "react";

type ColorVariant = "blue" | "green" | "purple" | "orange" | "pink" | "indigo" | "red" | "teal" | "gray";

const colorStyles: Record<ColorVariant, { border: string; bg: string; text: string }> = {
  blue: { border: "border-blue-400", bg: "bg-blue-50", text: "text-blue-700" },
  green: { border: "border-green-400", bg: "bg-green-50", text: "text-green-700" },
  purple: { border: "border-purple-400", bg: "bg-purple-50", text: "text-purple-700" },
  orange: { border: "border-orange-400", bg: "bg-orange-50", text: "text-orange-700" },
  pink: { border: "border-pink-400", bg: "bg-pink-50", text: "text-pink-700" },
  indigo: { border: "border-indigo-400", bg: "bg-indigo-50", text: "text-indigo-700" },
  red: { border: "border-red-400", bg: "bg-red-50", text: "text-red-700" },
  teal: { border: "border-teal-400", bg: "bg-teal-50", text: "text-teal-700" },
  gray: { border: "border-gray-400", bg: "bg-gray-50", text: "text-gray-700" },
};

export function ScreenShotItem({ 
  image,
  alt,
  caption,
  title,
  orientation = "image-left",
  color = "blue",
}: {
  image: StaticImageData;
  alt: string;
  width?: number;
  caption: string;
  title: string;
  orientation?: "image-left" | "image-right";
  color?: ColorVariant;
}) {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const isImageLeft = orientation === "image-left";
  const colors = colorStyles[color];
  
  // Handle escape key to close modal
  useEffect(() => {
    const handleEscape = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        setIsModalOpen(false);
      }
    };
    
    if (isModalOpen) {
      document.addEventListener("keydown", handleEscape);
      // Prevent body scroll when modal is open
      document.body.style.overflow = "hidden";
    }
    
    return () => {
      document.removeEventListener("keydown", handleEscape);
      document.body.style.overflow = "unset";
    };
  }, [isModalOpen]);
  
  return (
    <>
      <div 
        onClick={() => setIsModalOpen(true)}
        className={`group bg-white rounded-2xl overflow-hidden border ${colors.border} hover:border-gray-200 shadow-sm hover:shadow-2xl transition-all duration-500 cursor-pointer`}
      >
        <div className={`flex flex-col ${isImageLeft ? 'md:flex-row' : 'md:flex-row-reverse'}`}>
          {/* Image Section - 2/3 width, no padding */}
          <div className="flex-shrink-0 md:w-2/3 bg-gray-50 overflow-hidden">
            <div className="relative w-full aspect-video">
              <Image
                src={image}
                alt={alt}
                fill
                className="object-cover transform group-hover:scale-105 transition-transform duration-700 ease-out"
                sizes="(max-width: 768px) 100vw, 66vw"
              />
            </div>
          </div>
          
          {/* Content Section - 1/3 width */}
          <div className={`md:w-1/3 flex flex-col justify-center p-8 space-y-4 ${colors.bg} ${colors.text}`}>
            <h3 className="text-xl font-semibold tracking-tight leading-tight">
              {title}
            </h3>
            <p className="text-sm leading-relaxed font-light">
              {caption}
            </p>
            <div className="pt-2">
              <span className="inline-flex items-center text-xs font-medium opacity-70 group-hover:opacity-100 transition-opacity">
                View fullscreen
                <svg className="ml-1 w-4 h-4 transform group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              </span>
            </div>
          </div>
        </div>
      </div>

      {/* Modal */}
      {isModalOpen && (
        <div 
          onClick={() => setIsModalOpen(false)}
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/90 p-6 backdrop-blur-md animate-in fade-in duration-300"
        >
          <div 
            onClick={(e) => e.stopPropagation()}
            className="relative max-w-7xl max-h-[90vh] w-full animate-in zoom-in-95 duration-300"
          >
            {/* Close button */}
            <button
              onClick={() => setIsModalOpen(false)}
              className="absolute -top-14 right-0 p-2 rounded-full bg-white/10 hover:bg-white/20 text-white backdrop-blur-sm transition-all duration-200 hover:scale-110"
              aria-label="Close modal"
            >
              <svg 
                className="w-6 h-6" 
                fill="none" 
                stroke="currentColor" 
                viewBox="0 0 24 24"
              >
                <path 
                  strokeLinecap="round" 
                  strokeLinejoin="round" 
                  strokeWidth={2} 
                  d="M6 18L18 6M6 6l12 12" 
                />
              </svg>
            </button>
            
            {/* Image */}
            <div className="relative w-full h-full bg-white rounded-2xl overflow-hidden shadow-2xl ring-1 ring-white/10">
              <Image
                src={image}
                alt={alt}
                className="object-contain w-full h-full"
                style={{ maxHeight: "90vh" }}
                quality={100}
              />
            </div>
            
            {/* Caption */}
            <div className="mt-6 text-center px-4">
              <p className="text-white text-base font-medium tracking-wide">{title}</p>
              <p className="text-gray-300 text-sm mt-2 font-light">{caption}</p>
            </div>
          </div>
        </div>
      )}
    </>
  );
}


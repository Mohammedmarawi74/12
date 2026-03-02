
import React from 'react';
import { SlideData } from '../types';

interface Props {
  slide: SlideData;
}

const SlidePreview: React.FC<Props> = ({ slide }) => {
  // Helpers to determine color brightness for contrast adjustments (simple version)
  const isDarkBg = slide.backgroundColor === '#1e1e1e' || slide.backgroundColor === '#0f172a';

  return (
    <div 
      className="slide-preview relative overflow-hidden flex flex-col select-none slide-root" 
      dir="rtl"
      style={{ backgroundColor: slide.backgroundColor, color: slide.textColor }}
    >
      {/* Custom CSS Injection */}
      {slide.customCss && <style>{slide.customCss}</style>}

      {/* Decorative Background Elements */}
      <div 
        className="absolute inset-0 pattern-gears pointer-events-none slide-bg-pattern" 
        style={{ opacity: isDarkBg ? 0.05 : 0.1, filter: isDarkBg ? 'invert(1)' : 'none' }}
      ></div>
      
      {/* Logo Rendering */}
      {slide.logoUrl && (
        <div className="absolute top-8 left-8 z-30 w-12 h-12 slide-logo-container">
          <img 
            src={slide.logoUrl} 
            alt="Logo" 
            className="w-full h-full object-contain drop-shadow-sm slide-logo-img" 
          />
        </div>
      )}
      
      {/* Content Container */}
      <div className="flex-1 flex flex-col px-10 pt-12 z-10 slide-content-wrapper">
        {/* Title */}
        <h2 
          className="text-4xl md:text-5xl font-black mb-6 text-center leading-tight slide-title"
          style={{ color: slide.textColor }}
        >
          {slide.title}
        </h2>

        {/* Subtitle with decorative underline/box */}
        <div className="relative mb-10 slide-subtitle-wrapper">
          <div 
            className="absolute -inset-1 rounded-lg -z-0 slide-subtitle-bg"
            style={{ backgroundColor: slide.themeColor, opacity: 0.1 }}
          ></div>
          <p 
            className="relative text-lg md:text-xl text-center font-medium leading-relaxed px-4 slide-subtitle"
            style={{ color: slide.textColor, opacity: 0.9 }}
          >
            {slide.subtitle.split(/(\d+)/).map((part, i) => 
              /\d+/.test(part) ? (
                <span key={i} className="font-bold slide-highlight" style={{ color: slide.themeColor }}>{part}</span>
              ) : part
            )}
          </p>
        </div>

        {/* Percentage Highlight */}
        <div className="flex justify-center mb-8 slide-percentage-wrapper">
          <div className="relative slide-percentage-container">
            <span 
              className="text-6xl md:text-8xl font-black italic absolute -top-4 -right-4 select-none slide-percentage-shadow"
              style={{ color: slide.textColor, opacity: 0.05 }}
            >
              {slide.percentage}
            </span>
            <span 
              className="text-6xl md:text-7xl font-bold relative slide-percentage-main"
              style={{ color: slide.themeColor, WebkitTextStroke: `1px ${slide.themeColor}33` }}
            >
              بنسبة <span className="font-black slide-percentage-number">{slide.percentage}</span>
            </span>
          </div>
        </div>

        {/* Comparative Values Section */}
        <div className="grid grid-cols-7 items-center gap-2 mb-10 text-center slide-stats-grid">
          <div className="col-span-3 slide-stat-left">
            <div className="text-xl md:text-2xl font-bold slide-stat-value" style={{ color: slide.textColor }}>
              {slide.val1}
            </div>
            <div className="text-xs font-medium uppercase slide-stat-label" style={{ color: slide.textColor, opacity: 0.6 }}>
              {slide.label1}
            </div>
          </div>
          
          <div className="col-span-1 flex justify-center slide-comparison-wrapper">
            <div 
              className="px-3 py-1 text-white text-sm font-bold rounded-md transform rotate-[-5deg] shadow-sm slide-comparison-badge"
              style={{ backgroundColor: slide.themeColor }}
            >
              {slide.comparisonLabel}
            </div>
          </div>

          <div className="col-span-3 opacity-60 slide-stat-right">
            <div className="text-xl md:text-2xl font-bold slide-stat-value" style={{ color: slide.textColor }}>
              {slide.val2}
            </div>
            <div className="text-xs font-medium uppercase slide-stat-label" style={{ color: slide.textColor, opacity: 0.6 }}>
              {slide.label2}
            </div>
          </div>
        </div>

        {/* Detailed Description */}
        <div 
          className="pt-6 mb-8 slide-description-wrapper"
          style={{ borderTop: `1px solid ${slide.textColor}22` }}
        >
          <p 
            className="text-sm md:text-base leading-relaxed text-center font-medium slide-description"
            style={{ color: slide.textColor, opacity: 0.8 }}
          >
            {slide.description.split(/(\d+%?|\d+ مليون دولار)/).map((part, i) => 
              /(\d+%?|\d+ مليون دولار)/.test(part) ? (
                <span key={i} className="font-bold slide-desc-highlight" style={{ color: slide.themeColor }}>{part}</span>
              ) : part
            )}
          </p>
        </div>
      </div>

      {/* Footer Visual Section */}
      <div className="relative mt-auto h-48 w-full flex items-end justify-center slide-footer">
        {/* Background Circle Element */}
        <div 
          className="absolute bottom-10 w-48 h-48 rounded-full blur-2xl slide-footer-glow"
          style={{ backgroundColor: slide.themeColor, opacity: 0.2 }}
        ></div>
        <div 
          className="absolute bottom-12 w-32 h-32 rounded-full slide-footer-circle"
          style={{ backgroundColor: slide.themeColor, opacity: 0.4 }}
        ></div>

        {/* Illustrative Image */}
        <div className="relative w-full px-6 z-20 transform translate-y-4 slide-image-container">
          <div 
            className="relative overflow-hidden rounded-t-3xl shadow-2xl border-x-4 border-t-4 slide-image-frame"
            style={{ borderColor: slide.backgroundColor }}
          >
            <img 
              src={slide.footerImage} 
              alt="Footer Visual" 
              crossOrigin="anonymous"
              className="w-full h-40 object-cover grayscale-[0.2] hover:grayscale-0 transition-all duration-700 slide-footer-img"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default SlidePreview;

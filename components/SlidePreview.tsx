
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
      className="slide-preview"
      dir="rtl"
      style={{ backgroundColor: slide.backgroundColor, color: slide.textColor }}
    >
      {/* Custom CSS Injection */}
      {slide.customCss && <style>{slide.customCss}</style>}

      {/* Decorative Background Elements */}
      <div
        className="slide-bg-pattern"
        style={{ opacity: isDarkBg ? 0.05 : 0.1, filter: isDarkBg ? 'invert(1)' : 'none' }}
      ></div>

      {/* Logo Rendering */}
      {slide.logoUrl && (
        <div className="slide-logo-container">
          <img
            src={slide.logoUrl}
            alt="Logo"
            className="slide-logo-img"
          />
        </div>
      )}

      {/* Content Container */}
      <div className="slide-content-wrapper">
        {/* Title */}
        <h2 className="slide-title" style={{ color: slide.textColor }}>
          {slide.title}
        </h2>

        {/* Subtitle with decorative underline/box */}
        <div className="slide-subtitle-wrapper">
          <div
            className="slide-subtitle-bg"
            style={{ backgroundColor: slide.themeColor, opacity: 0.1 }}
          ></div>
          <p className="slide-subtitle" style={{ color: slide.textColor, opacity: 0.9 }}>
            {slide.subtitle.split(/(\d+)/).map((part, i) =>
              /\d+/.test(part) ? (
                <span key={i} className="slide-highlight" style={{ color: slide.themeColor }}>{part}</span>
              ) : part
            )}
          </p>
        </div>

        {/* Percentage Highlight */}
        <div className="slide-percentage-wrapper">
          <div className="slide-percentage-container">
            <span
              className="slide-percentage-shadow"
              style={{ color: slide.textColor, opacity: 0.05 }}
            >
              {slide.percentage}
            </span>
            <span
              className="slide-percentage-main"
              style={{ color: slide.themeColor, WebkitTextStroke: `1px ${slide.themeColor}33` }}
            >
              بنسبة <span className="slide-percentage-number">{slide.percentage}</span>
            </span>
          </div>
        </div>

        {/* Comparative Values Section */}
        <div className="slide-stats-grid">
          <div className="slide-stat-left">
            <div className="slide-stat-value" style={{ color: slide.textColor }}>
              {slide.val1}
            </div>
            <div className="slide-stat-label" style={{ color: slide.textColor, opacity: 0.6 }}>
              {slide.label1}
            </div>
          </div>

          <div className="slide-comparison-wrapper">
            <div
              className="slide-comparison-badge"
              style={{ backgroundColor: slide.themeColor }}
            >
              {slide.comparisonLabel}
            </div>
          </div>

          <div className="slide-stat-right">
            <div className="slide-stat-value" style={{ color: slide.textColor }}>
              {slide.val2}
            </div>
            <div className="slide-stat-label" style={{ color: slide.textColor, opacity: 0.6 }}>
              {slide.label2}
            </div>
          </div>
        </div>

        {/* Detailed Description */}
        <div className="slide-description-wrapper" style={{ borderTop: `1px solid ${slide.textColor}22` }}>
          <p className="slide-description" style={{ color: slide.textColor, opacity: 0.8 }}>
            {slide.description.split(/(\d+%?|\d+ مليون دولار)/).map((part, i) =>
              /(\d+%?|\d+ مليون دولار)/.test(part) ? (
                <span key={i} className="slide-desc-highlight" style={{ color: slide.themeColor }}>{part}</span>
              ) : part
            )}
          </p>
        </div>
      </div>

      {/* Footer Visual Section */}
      <div className="slide-footer">
        {/* Background Circle Element */}
        <div
          className="slide-footer-glow"
          style={{ backgroundColor: slide.themeColor, opacity: 0.2 }}
        ></div>
        <div
          className="slide-footer-circle"
          style={{ backgroundColor: slide.themeColor, opacity: 0.4 }}
        ></div>

        {/* Illustrative Image */}
        <div className="slide-image-container">
          <div
            className="slide-image-frame"
            style={{ borderColor: slide.backgroundColor }}
          >
            <img
              src={slide.footerImage}
              alt="Footer Visual"
              crossOrigin="anonymous"
              className="slide-footer-img"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default SlidePreview;

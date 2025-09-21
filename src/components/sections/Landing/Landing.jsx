import React from 'react';
import { useLanguage } from '../../../context/LanguageContext';
import './Landing.css';

/**
 * Landing Page Section Component
 * Features: Background image, overlay, centered content, responsive design
 */
const Landing = ({ onPortfolioClick }) => {
  const { t } = useLanguage();
  
  const handlePortfolioClick = () => {
    // Scroll to portfolio section
    const portfolioSection = document.querySelector('#portfolio');
    portfolioSection?.scrollIntoView({ behavior: 'smooth' });
    
    // Call parent callback if provided
    onPortfolioClick?.();
  };

  return (
    <section className="landing">
      {/* Background Image */}
      <div className="landing__background"></div>
      
      {/* Dark Overlay */}
      <div className="landing__overlay"></div>
      
      {/* Content Container */}
      <div className="landing__content">
        <div className="landing__text">
          <h1 className="landing__title">
            {t('landing.title').split(' ').map((word, index) => {
              // Highlight company name in both languages
              if (word === 'العودة' || word === 'Alaouda') {
                return <span key={index} className="company-name">{word}</span>;
              }
              return word + ' ';
            })}
          </h1>
          
          <p className="landing__subtitle">
            {t('landing.subtitle')}
          </p>
          
          <button 
            className="landing__cta-btn"
            onClick={handlePortfolioClick}
          >
            {t('landing.cta')}
          </button>
        </div>
      </div>
    </section>
  );
};

export default Landing;
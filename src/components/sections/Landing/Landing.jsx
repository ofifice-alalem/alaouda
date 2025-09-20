import React from 'react';
import './Landing.css';

/**
 * Landing Page Section Component
 * Features: Background image, overlay, centered content, responsive design
 */
const Landing = ({ onPortfolioClick }) => {
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
            العودة للأثاث المكتبي
          </h1>
          
          <p className="landing__subtitle">
            نعمل على تقديم حلول أثاث متكاملة تجمع بين الجودة والوظيفة والتصميم العصري لتلبية احتياجات عملائنا المختلفة.
          </p>
          
          <button 
            className="landing__cta-btn"
            onClick={handlePortfolioClick}
          >
            رؤية معرض الأعمال
          </button>
        </div>
      </div>
    </section>
  );
};

export default Landing;
import React from 'react';
import { useLanguage } from '../../../context/LanguageContext';
import './Portfolio.css';

/**
 * Portfolio Section Component
 * Gallery layout with asymmetric grid
 * Right: large image, Left: 3 images (1 wide + 2 side by side)
 */
const Portfolio = () => {
  const { t } = useLanguage();
  
  return (
    <section className="portfolio">
      <div className="portfolio__container">
        <p className="portfolio__description">
          <span className="portfolio__description-title">{t('portfolio.title')}</span>
          {t('portfolio.subtitle')}
        </p>
        
        <div className="portfolio__gallery">
          {/* الصف الأول - 3 صور */}
          <div className="portfolio__row-1">
            <div className="portfolio__item-small">
              <img src="/img/portfolio/img-1.png" alt="مشروع 1" className="portfolio__image" />
            </div>
            <div className="portfolio__item-large">
              <img src="/img/portfolio/img-2.png" alt="مشروع 2" className="portfolio__image" />
            </div>
            <div className="portfolio__item-small">
              <img src="/img/portfolio/img-3.png" alt="مشروع 3" className="portfolio__image" />
            </div>
          </div>
          
          {/* الصف الثاني - 3 صور بنفس الحجم */}
          <div className="portfolio__row-2">
            <div className="portfolio__item-equal">
              <img src="/img/portfolio/img-4.png" alt="مشروع 4" className="portfolio__image" />
            </div>
            <div className="portfolio__item-equal">
              <img src="/img/portfolio/img-5.png" alt="مشروع 5" className="portfolio__image" />
            </div>
            <div className="portfolio__item-equal">
              <img src="/img/portfolio/img-6.png" alt="مشروع 6" className="portfolio__image" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Portfolio;
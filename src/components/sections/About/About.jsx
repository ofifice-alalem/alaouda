import React, { useMemo } from 'react';
import { useLanguage } from '../../../context/LanguageContext';
import './About.css';

/**
 * About Section Component
 * Two-column layout: Image (right) + Content (left)
 * Features list with icons and responsive design
 */
const About = () => {
  const { t } = useLanguage();
  
  const features = useMemo(() => [
    {
      id: 1,
      icon: '/img/about/icon-1.png',
      text: t('about.feature1')
    },
    {
      id: 2,
      icon: '/img/about/icon-2.png',
      text: t('about.feature2')
    },
    {
      id: 3,
      icon: '/img/about/icon-3.png',
      text: t('about.feature3')
    },
    {
      id: 4,
      icon: '/img/about/icon-4.png',
      text: t('about.feature4')
    }
  ], [t]);

  return (
    <section className="about">
      <div className="about__container">
        
        {/* Content Column (Left) */}
        <div className="about__content">
          <h2 className="about__heading">
              <span className="company-name">
                {t('landing.title').split(' ').map((word, index) => {
                  if (word === 'العودة' || word === 'Alaouda') {
                    return <span key={index}>{word}</span>;
                  }
                  return <span key={index}>{word} </span>;
                })}
              </span> {t('about.description')}
          </h2>
          
          <ul className="about__features">
            {features.map((feature) => (
              <li key={feature.id} className="about__feature-item">
                <img 
                  src={feature.icon} 
                  alt={`Feature ${feature.id}`}
                  className="about__feature-icon"
                  onError={(e) => e.target.style.display = 'none'}
                />
                <span className="about__feature-text">
                  {feature.text}
                </span>
              </li>
            ))}
          </ul>
        </div>

        {/* Image Column (Right) */}
        <div className="about__image">
          <img 
            src="/img/about/about-img.png" 
            alt="العودة للأثاث المكتبي"
            className="about__img"
          />
        </div>
      </div>
    </section>
  );
};

export default React.memo(About);
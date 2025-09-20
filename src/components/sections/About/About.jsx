import React from 'react';
import './About.css';

/**
 * About Section Component
 * Two-column layout: Image (right) + Content (left)
 * Features list with icons and responsive design
 */
const About = () => {
  const features = [
    {
      id: 1,
      icon: '/img/about/icon-1.png',
      text: 'أكثر من 15 سنوات خبرة في مجال الأثاث المكتبي.'
    },
    {
      id: 2,
      icon: '/img/about/icon-2.png',
      text: 'منتجات عالية الجودة وبأسعار منافسة.'
    },
    {
      id: 3,
      icon: '/img/about/icon-3.png',
      text: 'تصاميم تناسب جميع الأذواق والمساحات.'
    },
    {
      id: 4,
      icon: '/img/about/icon-4.png',
      text: 'خدمة حسب الطلب لتجهيز القاعات والفصول.'
    }
  ];

  return (
    <section className="about">
      <div className="about__container">
        
        {/* Content Column (Left) */}
        <div className="about__content">
          <h2 className="about__heading">
              <span  className="company-name">العودة للأثاث المكتبي</span> تعمل على تقديم حلول أثاث متكاملة تجمع بين الجودة والوظيفة والتصميم العصري لتلبية احتياجات عملائنا المختلفة.
          </h2>
          
          <ul className="about__features">
            {features.map((feature) => (
              <li key={feature.id} className="about__feature-item">
                <img 
                  src={feature.icon} 
                  alt={`Feature ${feature.id}`}
                  className="about__feature-icon"
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

export default About;
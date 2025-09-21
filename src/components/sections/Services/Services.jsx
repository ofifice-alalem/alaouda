import React from 'react';
import { useLanguage } from '../../../context/LanguageContext';
import './Services.css';

/**
 * Services Section Component
 * Responsive grid layout with service cards
 * 3 columns on desktop, 2 on tablet, 1 on mobile
 */
const Services = () => {
  const { t } = useLanguage();
  
  const services = [
    {
      id: 1,
      image: '/img/Services/img-1.jpg',
      title: t('services.service1.title'),
      description: t('services.service1.description')
    },
    {
      id: 2,
      image: '/img/Services/img-2.jpg',
      title: t('services.service2.title'),
      description: t('services.service2.description')
    },
    {
      id: 3,
      image: '/img/Services/img-3.jpg',
      title: t('services.service3.title'),
      description: t('services.service3.description')
    },
    {
      id: 4,
      image: '/img/Services/img-4.jpg',
      title: t('services.service4.title'),
      description: t('services.service4.description')
    },
    {
      id: 5,
      image: '/img/Services/img-5.jpg',
      title: t('services.service5.title'),
      description: t('services.service5.description')
    }
  ];

  return (
    <section className="services">
      <div className="services__container">
        <h2 className="services__title">{t('services.title')}</h2>
        
        <div className="services__grid">
          {services.map((service) => (
            <div key={service.id} className="services__card">
              <div className="services__image-wrapper">
                <img 
                  src={service.image} 
                  alt={service.title}
                  className="services__image"
                />
              </div>
              <div className="services__content">
                <h3 className="services__card-title">{service.title}</h3>
                <p className="services__description">{service.description}</p>
              </div>
              
              {/* Decorative SVG */}
              <svg className="services__decoration" viewBox="0 0 62 62" xmlns="http://www.w3.org/2000/svg">
                <path fill="#af9b14"
                  d="M 36 10 L 52 10 C 57.523 10 62 5.523 62 0 L 62 62 L 0 62 C 5.523 62 10 57.523 10 52 L 10 36 C 10 21.641 21.641 10 36 10 Z" />
              </svg>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
import React from 'react';
import './Services.css';

/**
 * Services Section Component
 * Responsive grid layout with service cards
 * 3 columns on desktop, 2 on tablet, 1 on mobile
 */
const Services = () => {
  const services = [
    {
      id: 1,
      image: '/img/Services/img-1.jpg',
      title: 'الأثاث المكتبي المتكامل',
      description: 'مكاتب، كراسي، خزانات ورفوف بجودة عالية وتصاميم عصرية تناسب بيئات العمل المختلفة.'
    },
    {
      id: 2,
      image: '/img/Services/img-2.jpg',
      title: 'تجهيز القاعات الدراسية',
      description: 'مقاعد عملية ومريحة للفصول وقاعات المحاضرات، تضمن بيئة تعليمية أفضل واستمرارية في الاستخدام.'
    },
    {
      id: 3,
      image: '/img/Services/img-3.jpg',
      title: 'تأثيث قاعات الاجتماعات',
      description: 'تجهيز كامل لقاعات الاجتماعات مع لمسات عصرية توفر الراحة والاحترافية أثناء اللقاءات.'
    },
    {
      id: 4,
      image: '/img/Services/img-4.jpg',
      title: 'الجلسات والكنبات حسب الطلب',
      description: 'جلسات وكنبات أنيقة تلائم المكاتب والمنازل، مع إمكانية اختيار الألوان والأحجام حسب ذوقك.'
    },
    {
      id: 5,
      image: '/img/Services/img-5.jpg',
      title: 'التصاميم الخاصة والتفصيل حسب المقاسات',
      description: 'نقدم خدمة تفصيل الأثاث بمقاسات وتصاميم مخصصة تلبي متطلباتك الخاصة وتناسب مساحتك تماماً.'
    }
  ];

  return (
    <section className="services">
      <div className="services__container">
        <h2 className="services__title">خدماتنا</h2>
        
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
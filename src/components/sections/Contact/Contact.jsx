import React from 'react';
import './Contact.css';

/**
 * Contact Section Component
 * 2-column layout: Image (right) + Contact info (left)
 * RTL-friendly with responsive design
 */
const Contact = () => {
  const handleEmailClick = () => {
    window.location.href = 'mailto:support@alauoda.ly';
  };

  const handleLocationClick = () => {
    window.open('https://maps.app.goo.gl/5Km3pGBZtmA64oM37?g_st=aw', '_blank');
  };

  return (
    <section className="contact">
      <div className="contact__container">
        {/* Left side - Content */}
        <div className="contact__content">
          <h2 className="contact__heading">مستعد لتبدأ مشروعك؟</h2>
          <p className="contact__subtext">
            فريقنا جاهز للإجابة على جميع استفساراتك وتقديم المساعدة.
          </p>
          
          <div className="contact__items">
            <div className="contact__item contact__item--clickable" onClick={handleEmailClick}>
              <img src="/img/contact/icon-1.png" alt="Email" className="contact__icon" />
              <span className="contact__text">support@alauoda.ly</span>
            </div>
            
            <div className="contact__item contact__item--clickable" onClick={handleLocationClick}>
              <img src="/img/contact/icon-2.png" alt="Location" className="contact__icon" />
              <span className="contact__text">الموقع الجغرافي</span>
            </div>
            
            <div className="contact__item">
              <img src="/img/contact/icon-3.png" alt="Fast Response" className="contact__icon" />
              <span className="contact__text">الاستجابة السريعة للرد</span>
            </div>
          </div>
        </div>

        {/* Right side - Image */}
        <div className="contact__image">
          <img 
            src="/img/contact/contact.png" 
            alt="تواصل معنا"
            className="contact__img"
          />
        </div>
      </div>
    </section>
  );
};

export default Contact;
import React from 'react';
import './Footer.css';

/**
 * Footer Component
 * Contains company info, navigation links, and contact details
 */
const Footer = () => {
  const handleEmailClick = () => {
    window.location.href = 'mailto:support@alauoda.ly';
  };

  const handleLocationClick = () => {
    window.open('https://maps.app.goo.gl/5Km3pGBZtmA64oM37?g_st=aw', '_blank');
  };

  const handleNavClick = (href) => {
    const element = document.querySelector(href);
    element?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <footer className="footer">
      <div className="footer__container">
        {/* Company Info */}
        <div className="footer__section">
          <img src="/img/banner/banner.png" alt="العودة للأثاث المكتبي" className="footer__logo" />
          <p className="footer__description">
            العودة للأثاث المكتبي - حلول أثاث متكاملة تجمع بين الجودة والوظيفة والتصميم العصري.
          </p>
        </div>

        {/* Navigation Links */}
        <div className="footer__section">
          <h3 className="footer__title">الروابط السريعة</h3>
          <ul className="footer__links">
            <li><a href="#home" onClick={(e) => { e.preventDefault(); handleNavClick('#home'); }}>الرئيسية</a></li>
            <li><a href="#about" onClick={(e) => { e.preventDefault(); handleNavClick('#about'); }}>من نحن</a></li>
            <li><a href="#services" onClick={(e) => { e.preventDefault(); handleNavClick('#services'); }}>الخدمات</a></li>
            <li><a href="#portfolio" onClick={(e) => { e.preventDefault(); handleNavClick('#portfolio'); }}>معرض الأعمال</a></li>
          </ul>
        </div>

        {/* Contact Info */}
        <div className="footer__section">
          <h3 className="footer__title">تواصل معنا</h3>
          <div className="footer__contact">
            <div className="footer__contact-item" onClick={handleEmailClick}>
              <span>support@alauoda.ly</span>
            </div>
            <div className="footer__contact-item" onClick={handleLocationClick}>
              <span>الموقع الجغرافي</span>
            </div>
          </div>
        </div>
      </div>

      {/* Copyright */}
      <div className="footer__bottom">
        <p>&copy; {new Date().getFullYear()} العودة للأثاث المكتبي. جميع الحقوق محفوظة.</p>
      </div>
    </footer>
  );
};

export default Footer;
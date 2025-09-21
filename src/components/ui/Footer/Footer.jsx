import React from 'react';
import { useLanguage } from '../../../context/LanguageContext';
import './Footer.css';

/**
 * Footer Component
 * Contains company info, navigation links, and contact details
 */
const Footer = () => {
  const { t } = useLanguage();
  
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
          <img src="/img/banner/banner.png" alt={t('footer.company')} className="footer__logo" />
          <p className="footer__description">
            {t('footer.company')} - {t('landing.subtitle')}
          </p>
        </div>

        {/* Navigation Links */}
        <div className="footer__section">
          <h3 className="footer__title">{t('footer.quickLinks')}</h3>
          <ul className="footer__links">
            <li><a href="#home" onClick={(e) => { e.preventDefault(); handleNavClick('#home'); }}>{t('navbar.home')}</a></li>
            <li><a href="#about" onClick={(e) => { e.preventDefault(); handleNavClick('#about'); }}>{t('navbar.about')}</a></li>
            <li><a href="#services" onClick={(e) => { e.preventDefault(); handleNavClick('#services'); }}>{t('navbar.services')}</a></li>
            <li><a href="#portfolio" onClick={(e) => { e.preventDefault(); handleNavClick('#portfolio'); }}>{t('navbar.portfolio')}</a></li>
          </ul>
        </div>

        {/* Contact Info */}
        <div className="footer__section">
          <h3 className="footer__title">{t('navbar.contact')}</h3>
          <div className="footer__contact">
            <div className="footer__contact-item" onClick={handleEmailClick}>
              <span>support@alauoda.ly</span>
            </div>
            <div className="footer__contact-item" onClick={handleLocationClick}>
              <span>{t('contact.location')}</span>
            </div>
          </div>
        </div>
      </div>

      {/* Copyright */}
      <div className="footer__bottom">
        <p>&copy; {new Date().getFullYear()} {t('footer.company')}. {t('footer.copyright')}.</p>
      </div>
    </footer>
  );
};

export default Footer;
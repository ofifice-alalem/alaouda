import React, { useMemo, useCallback } from 'react';
import { useLanguage } from '../../../context/LanguageContext';
import './Footer.css';

/**
 * Footer Component
 * Contains company info, navigation links, and contact details
 */
const Footer = () => {
  const { t } = useLanguage();
  
  const currentYear = useMemo(() => new Date().getFullYear(), []);
  
  const handleEmailClick = useCallback(() => {
    window.location.href = 'mailto:support@alauoda.ly';
  }, []);

  const handleLocationClick = useCallback(() => {
    window.open('https://maps.app.goo.gl/5Km3pGBZtmA64oM37?g_st=aw', '_blank', 'noopener,noreferrer');
  }, []);

  const createNavClickHandler = useCallback((href) => {
    return (e) => {
      e.preventDefault();
      try {
        const element = document.querySelector(href);
        element?.scrollIntoView({ behavior: 'smooth' });
      } catch (error) {
        console.warn('Invalid selector:', href);
      }
    };
  }, []);

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
            <li><a href="#home" onClick={createNavClickHandler('#home')}>{t('navbar.home')}</a></li>
            <li><a href="#about" onClick={createNavClickHandler('#about')}>{t('navbar.about')}</a></li>
            <li><a href="#services" onClick={createNavClickHandler('#services')}>{t('navbar.services')}</a></li>
            <li><a href="#portfolio" onClick={createNavClickHandler('#portfolio')}>{t('navbar.portfolio')}</a></li>
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
        <p>&copy; {currentYear} {t('footer.company')}. {t('footer.copyright')}.</p>
      </div>
    </footer>
  );
};

export default React.memo(Footer);
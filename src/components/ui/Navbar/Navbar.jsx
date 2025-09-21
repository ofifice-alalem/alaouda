import React, { useState } from 'react';
import './Navbar.css';

/**
 * Responsive Navbar Component
 * Layout: Logo (left) | Navigation Links (center) | CTA Button (right)
 * Uses flexbox for responsive layout and burger menu for mobile
 */
const Navbar = ({ 
  logo = "LOGO", 
  onContactClick,
  className = "" 
}) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  // Navigation items configuration
  const navItems = [
    { id: 'home', label: 'الرئيسية', href: '#home' },
    { id: 'about', label: 'من نحن', href: '#about' },
    { id: 'services', label: 'الخدمات', href: '#services' },
    { id: 'portfolio', label: 'معرض الأعمال', href: '#portfolio' }
  ];

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);
  const closeMenu = () => setIsMenuOpen(false);

  const handleNavClick = (href) => {
    setIsMenuOpen(false);
    // Smooth scroll to section
    const element = document.querySelector(href);
    element?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <nav className={`navbar ${className}`}>
      <div className="navbar__container">
        
        {/* Left: Logo */}
        <div className="navbar__logo">
          <a href="#home" className="navbar__logo-link">
            <img src="/img/banner/banner.png" alt="العودة للأثاث المكتبي" className="navbar__logo-img" />
          </a>
        </div>

        {/* Center: Navigation Links (Desktop) */}
        <ul className="navbar__menu navbar__menu--desktop">
          {navItems.map((item) => (
            <li key={item.id} className="navbar__item">
              <a 
                href={item.href}
                className="navbar__link"
                onClick={(e) => {
                  e.preventDefault();
                  handleNavClick(item.href);
                }}
              >
                {item.label}
              </a>
            </li>
          ))}
        </ul>

        {/* Right: CTA Button (Desktop) */}
        <button 
          className="navbar__cta-btn navbar__cta-btn--desktop"
          onClick={onContactClick}
        >
          تواصل معنا
        </button>

        {/* Mobile: Burger Menu Toggle */}
        <button 
          className={`navbar__toggle ${isMenuOpen ? 'navbar__toggle--open' : ''}`}
          onClick={toggleMenu}
          aria-label="Toggle navigation menu"
        >
          <span className="navbar__toggle-line"></span>
          <span className="navbar__toggle-line"></span>
          <span className="navbar__toggle-line"></span>
        </button>
      </div>

      {/* Mobile Drawer Menu */}
      <div className={`navbar__drawer ${isMenuOpen ? 'navbar__drawer--open' : ''}`}>
        <div className="navbar__drawer-header">
          <div className="navbar__drawer-logo">
            <img src="/img/banner/banner.png" alt="العودة للأثاث المكتبي" className="navbar__drawer-logo-img" />
          </div>
          <button 
            className="navbar__drawer-close"
            onClick={closeMenu}
            aria-label="Close navigation menu"
          >
            ×
          </button>
        </div>
        
        <ul className="navbar__drawer-menu">
          {navItems.map((item) => (
            <li key={item.id} className="navbar__drawer-item">
              <a 
                href={item.href}
                className="navbar__drawer-link"
                onClick={(e) => {
                  e.preventDefault();
                  handleNavClick(item.href);
                }}
              >
                {item.label}
              </a>
            </li>
          ))}
          
          {/* Mobile CTA Button (inside drawer) */}
          <li className="navbar__drawer-item navbar__drawer-item--cta">
            <button 
              className="navbar__drawer-cta"
              onClick={() => {
                setIsMenuOpen(false);
                onContactClick?.();
              }}
            >
              تواصل معنا
            </button>
          </li>
        </ul>
      </div>

      {/* Mobile Backdrop */}
      <div 
        className={`navbar__backdrop ${isMenuOpen ? 'navbar__backdrop--open' : ''}`}
        onClick={closeMenu}
      ></div>
    </nav>
  );
};

export default Navbar;
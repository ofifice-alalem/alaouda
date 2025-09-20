import React from 'react';
import { Navbar, Footer } from '../ui';

/**
 * Main Layout Component
 * Wraps content with Navbar and provides proper spacing
 */
const Layout = ({ children }) => {
  const handleContactClick = () => {
    // Scroll to contact section or open contact modal
    const contactSection = document.querySelector('#contact');
    contactSection?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <>
      <Navbar 
        logo="شركتي" 
        onContactClick={handleContactClick}
      />
      <main style={{ paddingTop: '70px' }}>
        {children}
      </main>
      <Footer />
    </>
  );
};

export default Layout;
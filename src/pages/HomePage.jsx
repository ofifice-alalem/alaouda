import React from 'react';
import Layout from '../components/layout/Layout';
import { Landing, About, Slider, Services, Portfolio, Contact } from '../components/sections';

/**
 * Demo HomePage with sections for Navbar navigation
 */
const HomePage = () => {
  return (
    <Layout>
      <section id="home">
        <Landing />
      </section>
      
      <section id="about">
        <About />
      </section>
      
      <Slider />
      
      <section id="services">
        <Services />
      </section>
      
      <section id="portfolio">
        <Portfolio />
      </section>
      
      <section id="contact">
        <Contact />
      </section>
    </Layout>
  );
};

export default HomePage;
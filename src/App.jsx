import React from 'react';
import { AppProvider } from './context/AppContext';
import { LanguageProvider } from './context/LanguageContext';
import HomePage from './pages/HomePage';
import './styles/global.css';

/**
 * Main App component with Navbar integration
 * Uses Context API for global state management and internationalization
 */
const App = () => {
  return (
    <LanguageProvider>
      <AppProvider>
        <HomePage />
      </AppProvider>
    </LanguageProvider>
  );
};

export default App;
import React from 'react';
import { AppProvider } from './context/AppContext';
import HomePage from './pages/HomePage';
import './styles/global.css';

/**
 * Main App component with Navbar integration
 * Uses Context API for global state management
 */
const App = () => {
  return (
    <AppProvider>
      <HomePage />
    </AppProvider>
  );
};

export default App;
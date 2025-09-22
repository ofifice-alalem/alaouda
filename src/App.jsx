import React, { Suspense } from 'react';
import { AppProvider } from './context/AppContext';
import { LanguageProvider } from './context/LanguageContext';
import ErrorBoundary from './components/common/ErrorBoundary';
import LoadingSpinner from './components/common/LoadingSpinner';
import HomePage from './pages/HomePage';
import './styles/global.css';

/**
 * Main App component with Navbar integration
 * Uses Context API for global state management and internationalization
 */
const App = () => {
  return (
    <ErrorBoundary>
      <LanguageProvider>
        <AppProvider>
          <Suspense fallback={<LoadingSpinner size="large" />}>
            <HomePage />
          </Suspense>
        </AppProvider>
      </LanguageProvider>
    </ErrorBoundary>
  );
};

export default App;
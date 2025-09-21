import React, { createContext, useContext, useState, useEffect } from 'react';

// Translation files
import arTranslations from '../locales/ar.json';
import enTranslations from '../locales/en.json';

// Language configuration
const languages = {
  ar: {
    name: 'العربية',
    code: 'ar',
    direction: 'rtl',
    translations: arTranslations
  },
  en: {
    name: 'English',
    code: 'en',
    direction: 'ltr',
    translations: enTranslations
  }
};

// Context creation
const LanguageContext = createContext();

/**
 * Language Provider Component
 * Manages language state and provides translation functions
 */
export const LanguageProvider = ({ children }) => {
  const [currentLanguage, setCurrentLanguage] = useState(() => {
    // Get saved language from localStorage or default to Arabic
    const savedLanguage = localStorage.getItem('selectedLanguage');
    return savedLanguage && languages[savedLanguage] ? savedLanguage : 'ar';
  });

  // Update document direction and language when language changes
  useEffect(() => {
    const language = languages[currentLanguage];
    document.documentElement.lang = language.code;
    document.documentElement.dir = language.direction;
    document.body.className = `language-${language.code} direction-${language.direction}`;
    
    // Save to localStorage
    localStorage.setItem('selectedLanguage', currentLanguage);
  }, [currentLanguage]);

  /**
   * Translation function
   * @param {string} key - Translation key (e.g., 'navbar.home')
   * @param {object} params - Parameters for interpolation
   * @returns {string} Translated text
   */
  const t = (key, params = {}) => {
    const translations = languages[currentLanguage].translations;
    const keys = key.split('.');
    let translation = translations;
    
    // Navigate through nested keys
    for (const k of keys) {
      if (translation && typeof translation === 'object') {
        translation = translation[k];
      } else {
        console.warn(`Translation key "${key}" not found`);
        return key; // Return key if translation not found
      }
    }
    
    // Handle string interpolation
    if (typeof translation === 'string' && Object.keys(params).length > 0) {
      return translation.replace(/\{\{(\w+)\}\}/g, (match, param) => {
        return params[param] || match;
      });
    }
    
    return translation || key;
  };

  /**
   * Switch language
   * @param {string} languageCode - Language code ('ar' or 'en')
   */
  const switchLanguage = (languageCode) => {
    if (languages[languageCode]) {
      setCurrentLanguage(languageCode);
    }
  };

  /**
   * Get current language info
   */
  const getCurrentLanguage = () => languages[currentLanguage];

  /**
   * Get all available languages
   */
  const getAvailableLanguages = () => Object.values(languages);

  const value = {
    currentLanguage,
    currentLanguageInfo: getCurrentLanguage(),
    availableLanguages: getAvailableLanguages(),
    t,
    switchLanguage,
    isRTL: languages[currentLanguage].direction === 'rtl',
    isLTR: languages[currentLanguage].direction === 'ltr'
  };

  return (
    <LanguageContext.Provider value={value}>
      {children}
    </LanguageContext.Provider>
  );
};

/**
 * Custom hook for using language context
 */
export const useLanguage = () => {
  const context = useContext(LanguageContext);
  if (!context) {
    throw new Error('useLanguage must be used within LanguageProvider');
  }
  return context;
};

export default LanguageContext;

import { useState, useEffect } from 'react';
import { getTranslation, languages, defaultLanguage } from '@/lib/i18n';

export function useTranslation(initialLang = defaultLanguage) {
  const [currentLang, setCurrentLang] = useState(initialLang);

  useEffect(() => {
    // Get language from localStorage or browser preference
    const savedLang = localStorage.getItem('language');
    if (savedLang && languages[savedLang]) {
      setCurrentLang(savedLang);
    } else {
      // Get browser language
      const browserLang = navigator.language.split('-')[0];
      if (languages[browserLang]) {
        setCurrentLang(browserLang);
      }
    }
  }, []);

  const t = (key) => getTranslation(currentLang, key);

  const changeLanguage = (lang) => {
    if (languages[lang]) {
      setCurrentLang(lang);
      localStorage.setItem('language', lang);
      // Update document lang attribute
      document.documentElement.lang = lang;
      // Update document direction if needed
      document.documentElement.dir = languages[lang].dir;
    }
  };

  const getLocalizedPath = (path) => {
    if (currentLang === defaultLanguage) {
      return path;
    }
    return `/${currentLang}${path}`;
  };

  return {
    currentLang,
    languages: Object.values(languages),
    t,
    changeLanguage,
    getLocalizedPath,
    isRTL: languages[currentLang]?.dir === 'rtl'
  };
}
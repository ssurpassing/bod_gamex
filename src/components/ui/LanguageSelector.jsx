import { useState } from 'react';
import { ChevronDownIcon } from '@heroicons/react/24/outline';
import { useTranslation } from '@/hooks/useTranslation';

export function LanguageSelector() {
  const { currentLang, languages, changeLanguage } = useTranslation();
  const [isOpen, setIsOpen] = useState(false);

  const currentLanguage = languages.find(lang => lang.code === currentLang) || languages[0];

  return (
    <div className="relative">
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="flex items-center space-x-2 px-3 py-2 bg-secondary-bg border border-border-color rounded-lg hover:bg-card-bg transition-all"
      >
        <span className="text-lg">{currentLanguage.flag}</span>
        <span className="text-sm text-text-primary hidden sm:block">
          {currentLanguage.name}
        </span>
        <ChevronDownIcon className="w-4 h-4 text-text-secondary" />
      </button>

      {isOpen && (
        <div className="absolute right-0 mt-2 w-56 bg-secondary-bg border border-border-color rounded-xl shadow-xl z-50">
          <div className="py-2">
            {languages.map((language) => (
              <button
                key={language.code}
                onClick={() => {
                  changeLanguage(language.code);
                  setIsOpen(false);
                }}
                className={`w-full flex items-center space-x-3 px-4 py-3 text-left hover:bg-card-bg transition-colors ${
                  currentLang === language.code ? 'bg-accent-color/10 text-accent-color' : 'text-text-primary'
                }`}
              >
                <span className="text-lg">{language.flag}</span>
                <span className="text-sm font-medium">{language.name}</span>
                {currentLang === language.code && (
                  <span className="ml-auto text-xs text-accent-color">✓</span>
                )}
              </button>
            ))}
          </div>
        </div>
      )}
    </div>
  );
}
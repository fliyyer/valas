import React from 'react';
import translations from './translations.json';
const LanguageContext = React.createContext();

const languages = [
  {
    code: 'en',
    desk: 'EN',
    label: 'EN',
    icon: 'https://cdn.countryflags.com/thumbs/united-states-of-america/flag-square-250.png',
  },
  {
    code: 'id',
    desk: 'ID',
    label: 'ID',
    icon: 'https://cdn.countryflags.com/thumbs/indonesia/flag-square-250.png',
  },
];

const LanguageProvider = ({ children }) => {
  const [language, setLanguage] = React.useState('id');

  const t = (text) => {
    return translations[language][text];
  };

  return (
    <LanguageContext.Provider value={{ language, setLanguage, t }}>
      {children}
    </LanguageContext.Provider>
  );
};

export { LanguageContext, LanguageProvider, languages };
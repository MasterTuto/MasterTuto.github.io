import React, { createContext, useState } from 'react';

type Translator = {
  language: 'en' | 'pt';
  setLanguage: (language: 'en' | 'pt') => void;
}

export const TranslatorContext = createContext<Translator>({
  language: 'en',
  setLanguage: () => {},
});

export const TranslatorProvider = ({children}: React.PropsWithChildren) => {
  const [language, setLanguage] = useState<'en' | 'pt'>('en');

  return (
    <TranslatorContext.Provider value={{ language, setLanguage }}>
      {children}
    </TranslatorContext.Provider>
  );
};
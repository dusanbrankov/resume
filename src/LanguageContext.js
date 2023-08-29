import { useState, createContext } from 'react';

const LanguageContext = createContext();

function LanguageProvider(props) {
    const [lang, setLang] = useState('deutsch');

    function changeLanguage() {
        if (theme === 'dark') {
            setTheme('light');
        } else {
            setTheme('dark');
        }
    }

    const value = {
        lang,
        changeLanguage,
    };

    return (
        <LanguageContext.Provider value={value}>
            {props.children}
        </LanguageContext.Provider>
    );
};

export { LanguageContext, LanguageProvider };
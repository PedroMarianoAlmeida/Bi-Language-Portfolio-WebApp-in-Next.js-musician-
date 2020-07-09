import React, { createContext, useState } from 'react';

export const LanguageContext = createContext();

const LanguageProvider = (props) => {
    const [ language, setLanguage ] = useState("pt");

    const toggleLanguage = () => {
        if( language === "eng" ) setLanguage("pt");
        else setLanguage("eng");
    }
    
    return (
        <LanguageContext.Provider value={ { language, toggleLanguage } } >
            {props.children}
        </LanguageContext.Provider>
      );
}
 
export default LanguageProvider;
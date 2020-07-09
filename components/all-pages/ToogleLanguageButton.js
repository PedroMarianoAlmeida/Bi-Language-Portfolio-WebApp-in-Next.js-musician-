import { useContext } from 'react';

import { LanguageContext } from './../../contexts/LanguageContext';

const  ToggleLanguageButton= () => {
    
    const text = {
        button: { pt: "English", eng: "Portuguese" }
    }

    const { language, toggleLanguage } = useContext(LanguageContext);

    const handleClick = () => {
        toggleLanguage();
     }
    
    return (
        <button className="btn btn-light border border-dark" onClick={handleClick}>{text.button[language]}</button>
      );
}
 
export default ToggleLanguageButton;
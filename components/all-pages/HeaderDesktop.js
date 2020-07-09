import { useContext } from 'react'
import Link from 'next/link'

import ToggleLanguageButton from './ToogleLanguageButton';
import { LanguageContext } from './../../contexts/LanguageContext'
import text from './../../data/header-text'

const HeaderDesktop = () => { 

    const { language } = useContext( LanguageContext );

    return (
        <div className="d-none d-lg-flex w-100 justify-content-between">
            <Link href="/"><span className="nav-item nav-link mx-1 clickable"> Caio Andrade LOGO </span></Link>

            <div className="navbar-nav ml-auto align-items-center d-flex">
                <ToggleLanguageButton />
                <Link href="/"><span className="nav-item nav-link mx-1 clickable"> {text.home[language]} </span></Link>
                <Link href="/about"><span className="nav-item nav-link mx-1 clickable"> {text.about[language]} </span></Link>
                <Link href="/contact"><span className="nav-item nav-link mx-1 clickable"> {text.contact[language]} </span></Link>
                <Link href="/gear"><span className="nav-item nav-link mx-1 clickable"> {text.gear[language]} </span></Link>
            </div>
        </div>
    );
}

export default HeaderDesktop;
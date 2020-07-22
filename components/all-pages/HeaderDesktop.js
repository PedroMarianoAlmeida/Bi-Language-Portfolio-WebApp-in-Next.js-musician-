import { useContext } from 'react'
import Link from 'next/link'

import { UncontrolledDropdown, DropdownToggle, DropdownMenu, DropdownItem } from 'reactstrap'

import ToggleLanguageButton from './ToogleLanguageButton';
import { LanguageContext } from './../../contexts/LanguageContext'
import text from './../../data/header-text'

const HeaderDesktop = () => {

    const { language } = useContext(LanguageContext);

    return (
        <div className="d-none d-lg-flex w-100 justify-content-between">
            <Link href="/"><span className="nav-item nav-link mx-1 clickable"> <img src="/images/logo.png" alt="Logo Andrade - Logo" id="my-logo" /> </span></Link>
            <style jsx>{`
                #my-logo{
                    height: 50px;
                }
            `}</style>
            <div className="navbar-nav ml-auto align-items-center d-flex">
                <ToggleLanguageButton />
                <Link href="/"><span className="nav-item nav-link mx-1 clickable"> {text.home[language]} </span></Link>
                <Link href="/about"><span className="nav-item nav-link mx-1 clickable"> {text.about[language]} </span></Link>
                <Link href="/contact"><span className="nav-item nav-link mx-1 clickable"> {text.contact[language]} </span></Link>
                <Link href="/gear"><span className="nav-item nav-link mx-1 clickable"> Gear </span></Link>

                <UncontrolledDropdown nav inNavbar>
                    <DropdownToggle nav caret className="text-dark">
                        {text.projects[language]}
                    </DropdownToggle>
                    <DropdownMenu right>
                        <MyDropDownItem name="Pop / Singersongwriter" path="/projects/pop-singersongwriter" />
                        <MyDropDownItem name="Stock Music" path="/projects/stock-music" />
                        <MyDropDownItem name="Rock" path="/projects/rock" />
                        <MyDropDownItem name="Math Rock" path="/projects/math-rock" />
                    </DropdownMenu>
                </UncontrolledDropdown>


            </div>
        </div>
    );
}

export default HeaderDesktop;

const MyDropDownItem = (props) => {
    return (
        <Link href={props.path}>
            <DropdownItem>
                <span className="text-dark">{props.name}</span>
            </DropdownItem>
        </Link >
    );
}
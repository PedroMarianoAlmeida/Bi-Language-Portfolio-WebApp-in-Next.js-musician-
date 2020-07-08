import Link from 'next/link'

const HeaderDesktop = () => {
    const handleClick = () => { }

    const language = "eng";

    const text = {
        button: { pt: "English", eng: "Portuguese" },
        home: { pt: "Início", eng: "Home" },
        about: { pt: "Sobre", eng: "About" },
        contact: { pt: "Contact", eng: "Contato" },
        gear: { pt: "Engrenagem", eng: "Gear" }
    }

    return (
        <div className="d-none d-lg-flex w-100 justify-content-between">
            <Link href="/"><span className="nav-item nav-link mx-1 clickable"> Caio Andrade LOGO </span></Link>

            <div className="navbar-nav ml-auto align-items-center d-flex">
                <button className="btn btn-light border border-dark" onClick={handleClick}>{text.button[language]}</button>
                <Link href="/"><span className="nav-item nav-link mx-1 clickable"> {text.home[language]} </span></Link>
                <Link href="/about"><span className="nav-item nav-link mx-1 clickable"> {text.about[language]} </span></Link>
                <Link href="/contact"><span className="nav-item nav-link mx-1 clickable"> {text.contact[language]} </span></Link>
                <Link href="/gear"><span className="nav-item nav-link mx-1 clickable"> {text.gear[language]} </span></Link>
            </div>
        </div>
    );
}

export default HeaderDesktop;
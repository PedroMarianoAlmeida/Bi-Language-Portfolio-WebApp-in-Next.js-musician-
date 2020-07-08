import React, { useState } from 'react'

import Link from 'next/link'
import { Row, Col, Collapse, Card, CardBody, Button } from 'reactstrap'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBars } from '@fortawesome/free-solid-svg-icons'

const HeaderMobile = () => {
    const [isOpen, setIsOpen] = useState(false);
    const toggle = () => setIsOpen(!isOpen);
    
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
        <Row className="d-lg-none w-100 row justify-content-between">
            <Col xs='10'>
                <Link href="/"><span className="nav-item nav-link mx-1"> Caio Andrade </span></Link>
            </Col>
            <Col xs='2'>
                <button className="btn btn-light border border-dark" onClick={toggle}><FontAwesomeIcon icon={faBars} /></button>
            </Col>
            <Col xs='12' className="ml-4">
                <Collapse isOpen={isOpen}>
                    <Card>
                        <CardBody>
                            <button className="btn btn-light border border-dark" onClick={handleClick}>{text.button[language]}</button>
                            <Link href="/"><span className="nav-item nav-link mx-1"> {text.home[language]} </span></Link>
                            <Link href="/about"><span className="nav-item nav-link mx-1"> {text.about[language]} </span></Link>
                            <Link href="/contact"><span className="nav-item nav-link mx-1"> {text.contact[language]} </span></Link>
                            <Link href="/gear"><span className="nav-item nav-link mx-1"> {text.gear[language]} </span></Link>
                        </CardBody>
                    </Card>
                </Collapse>
            </Col>
        </Row>
    );
}

export default HeaderMobile;
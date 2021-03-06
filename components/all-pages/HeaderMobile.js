import React, { useState, useContext } from 'react'

import Link from 'next/link'
import { Row, Col, Collapse, Card, CardBody, UncontrolledDropdown, DropdownToggle } from 'reactstrap'

import ToggleLanguageButton from './ToogleLanguageButton'
import { LanguageContext } from './../../contexts/LanguageContext'
import SubMenu from './SubMenu'

import text from './../../data/header-text'

const HeaderMobile = () => {
    const { language } = useContext(LanguageContext);

    const [toggleMenuIsOpen, setToggleMenuIsOpen] = useState(false);
    const toggleDropdownMenu = () => setToggleMenuIsOpen(!toggleMenuIsOpen);

    return (
        <Row className="d-lg-none w-100 row justify-content-between">
            <Col xs='10'>
                <Link href="/"><span className="nav-item nav-link mx-1 clickable"> <img src="/images/logo.png" alt="Logo Andrade - Logo" id="my-logo" /> </span></Link>
                <style jsx>{`
                    #my-logo{
                        height: 50px;
                    }
                `}</style>
            </Col>
            <Col xs='2' className="my-auto">
                <button className="btn btn-light border border-dark" onClick={toggleDropdownMenu}><span>|||</span></button>
            </Col>
            <Col xs='12' className="ml-4">
                <Collapse isOpen={toggleMenuIsOpen}>
                    <Card>
                        <CardBody>
                            <ToggleLanguageButton />
                            <Link href="/"><span className="nav-item nav-link mx-1"> {text.home[language]} </span></Link>
                            <Link href="/about"><span className="nav-item nav-link mx-1"> {text.about[language]} </span></Link>
                            <Link href="/contact"><span className="nav-item nav-link mx-1"> {text.contact[language]} </span></Link>
                            <Link href="/gear"><span className="nav-item nav-link mx-1"> Gear </span></Link>

                            <UncontrolledDropdown>
                                <DropdownToggle nav caret className="text-dark">
                                    {text.projects[language]}
                                </DropdownToggle>

                                <SubMenu />

                            </UncontrolledDropdown>

                        </CardBody>
                    </Card>
                </Collapse>
            </Col>
        </Row>
    );
}

export default HeaderMobile;
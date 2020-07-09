import { useContext } from 'react';

import { Row, Col } from 'reactstrap';
import { LanguageContext } from './../contexts/LanguageContext';

const SoundBetterBadge = () => {

    const { language } = useContext(LanguageContext);

    return (
        <Row className={`mb-5 mt-3 ${language === "pt"? "d-none" : ""}`}>
            <Col xs="12" className="text-center">
                <a href="https://soundbetter.com/profiles/38156-caio-andrade" rel="noopener noreferrer" target="_blank" title="Caio Andrade profile on SoundBetter" >
                    <img alt="Caio Andrade, Mixing Engineer on SoundBetter" src="./images/SoundBetterBadge.svg" id="my-image" className="image-fluid"/></a>
                <style jsx>{`
                    #my-image {
                        max-width: 130px;
                    }
                `}</style>

            </Col>
        </Row>

    );
}

export default SoundBetterBadge;
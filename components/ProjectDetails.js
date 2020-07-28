import { Col, Row } from 'reactstrap'

import { LanguageContext } from './../contexts/LanguageContext'
import text from '../data/header-text';

const texts = {
    artist: {eng: "Artist", pt:"Artista"},
    music: {eng:"Music", pt:"Música"},
    credits: {eng:"Credits", pt:"Créditos"}
}

const ProjectDetails = (props) => {
    const { language } = React.useContext(LanguageContext);

    return (
        <Col xs='12' className="my-3">
            <Row>

                <Col xs='12' md='7' className="my-1">
                    <iframe src={props.adress} frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen id="my-video"></iframe>
                    <style jsx>{`
                    #my-video {
                        width: 560px;
                        height: 315px;                        
                    }

                    @media only screen and (max-width: 992px) {
                        #my-video {
                            width: 100%;
                            
                        }
                      }
                    `}</style>
                
                </Col>

                <Col xs='12' md='5' className="my-auto align-items-center">
                    <div><strong>{texts.artist[language]}:</strong> {props.artist}</div>
                    <div><strong>{texts.music[language]}:</strong> {props.music}</div>
                    <div><strong>{texts.credits[language]}:</strong> {props.credits[language]}</div>
                </Col>

            </Row>
        </Col>
    );
}

export default ProjectDetails;
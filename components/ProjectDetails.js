import { Col, Row } from 'reactstrap'

import { LanguageContext } from './../contexts/LanguageContext'

const ProjectDetails = (props) => {
    const { language } = React.useContext(LanguageContext);

    return (
        <Col xs='12'>
            <Row>

                <Col xs='12' md='6' className={props.textLocation === "left" ? "d-md-flex d-none align-items-center" : "d-none"}>
                    <p>{props.text[language]}</p>
                </Col>

                <Col xs='12' md='6' className="my-1">
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

                <Col xs='12' md='6' className={props.textLocation === "left" ? "d-flex d-md-none align-items-center" : "d-flex align-items-center"}>
                    <p>{props.text[language]}</p>
                </Col>

            </Row>
        </Col>
    );
}

export default ProjectDetails;
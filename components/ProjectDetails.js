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

                <Col xs='12' md='6'>
                    <iframe width="560" height="315" src={props.adress} frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen className="rounded border"></iframe>
                </Col>

                <Col xs='12' md='6' className={props.textLocation === "left" ? "d-flex d-md-none align-items-center" : "d-flex align-items-center"}>
                    <p>{props.text[language]}</p>
                </Col>

            </Row>
        </Col>
    );
}

export default ProjectDetails;
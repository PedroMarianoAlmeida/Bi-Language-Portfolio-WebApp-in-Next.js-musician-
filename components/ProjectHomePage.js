import React, { useContext } from 'react';
import Link from 'next/link'

import { Row, Col } from 'reactstrap';
import { LanguageContext } from './../contexts/LanguageContext';

const ProjectHomePage = (props) => {
  const { language } = useContext(LanguageContext);

  const text = {
    button: { pt: "Ouça aqui", eng: "Listen here" }
  }

  return (
    <Row className="mt-5">
      <Col md="4" className="align-items-center d-none d-md-flex mt-5">
        <Row>
          <Col xs="12">
            <div className="display-4">{props.name[language]}</div>
            <style jsx>{`
              font-family: Roboto Regular, Helvetica, sans-serif;
              font-size: 2rem;
            `}</style>
          </Col>
          <Col xs="12">
          <Link href={props['adress-to-go']}>
            <button className="btn btn-light border border-dark px-2 py-3 mt-2"><span className="lead">{text.button[language]}</span></button>
          </Link>
          </Col>
        </Row>
      </Col>

      <Col xs="12" md="8" className='mt-5'>
        <div className="h-100">
          <img src={props['image-adress']} alt={`${props.name[language]} - Cover Image`} className="img-thumbnail my-image" />
          <div className="my-content ml-3 d-md-none">
            <div className="display-4 my-text">{props.name[language]}</div>
            <br />
            <div>
              <Link href={props['adress-to-go']}>
                <button className="btn btn-light border border-dark px-1 py-2 my-button"><span className="lead">{text.button[language]}</span></button>
              </Link>
            </div>

          </div>
        </div>

        <style jsx>{`
                .my-image {
                  position: relative;
                  z-index: 0;
                }
                
                .my-content {
                  position: absolute;
                  z-index: 1;
                  top: 25%;
                }

                .my-text {
                  font-size: 2rem;                 
                }

                .my-button {
                  font-size: 0.5rem;
                }

                @media only screen and (max-width: 992px) {
                  .my-image {
                    filter: opacity(50%);
                  }
                }
              `}</style>
      </Col>
    </Row>
  );
}

export default ProjectHomePage;
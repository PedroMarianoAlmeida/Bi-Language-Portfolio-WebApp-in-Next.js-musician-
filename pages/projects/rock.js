import { useContext } from 'react';
import { Container, Row, Col } from 'reactstrap'

import Layout from '../../components/all-pages/Layout'
import ProjectDetails from '../../components/ProjectDetails';
import { LanguageContext } from './../../contexts/LanguageContext';

const text = {
  description: {
    eng: "There are some track I mixed for Rock Artists",
    pt: "A seguir alguns trabalhos de Rock que mixei"
  }
}

const RockPage = () => {

  const { language } = useContext(LanguageContext);

  return (
    <Layout seo={{ title: "Caio Andrade Mixing| Rock Projects", description: "Rock mixing portfolio", author: "Caio Andrade" }} className="h-100">
      <Container className="mt-5">
        <Row className="mt-5">

        <Col xs="12" className="align-items-center mt-5">
            <h1 className='text-center'>Rock</h1>
            <p className='lead my-3 text-center'>{text.description[language]}</p>
          </Col>

          <ProjectDetails artist="Drink Trio" music="Todo Dia" credits={{ eng: "Producer / Mixing / Mastering", pt: "Produção, mixagem e masterização" }} adress="https://www.youtube.com/embed/kqg6hhIiBtU" />

          <ProjectDetails artist="Mirrors Room" music="Myself" credits={{ eng: "Producer / Mixing / Mastering", pt: "Produção, mixagem e masterização" }} adress="https://www.youtube.com/embed/R5PD_SkHoe4" />

          <ProjectDetails artist="Radio Clock" music="Real X Eyez" credits={{ eng: "Producer / Mixing / Mastering", pt: "Produção, mixagem e masterização" }} adress="https://www.youtube.com/embed/zIjwE4vavuE" />

          <ProjectDetails  artist="Radio Clock" music="Journey Through The Decade" credits={{ eng: "Producer / Mixing / Mastering", pt: "Produção, mixagem e masterização" }} adress="https://www.youtube.com/embed/BEiBtC5fxgs" />

        </Row>

      </Container>
    </Layout>
  );
}

export default RockPage;
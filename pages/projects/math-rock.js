import { useContext } from 'react';
import { Container, Row, Col } from 'reactstrap';

import Layout from '../../components/all-pages/Layout';
import ProjectDetails from '../../components/ProjectDetails';
import { LanguageContext } from './../../contexts/LanguageContext';

const text = {
  description: {
    eng: "There are some track I mixed for Math Rock artists",
    pt: "A seguir alguns trabalhos que mixei de Math Rock"
  }
}

const MathRockPage = () => {
  const { language } = useContext(LanguageContext);

  return (
    <Layout seo={{ title: "Caio Andrade | Math Rock Projects", description: "All rock n' roll projects", author: "Pedro Almeida" }} className="h-100">
      <Container className="mt-5">
        <Row className="mt-5">

          <Col xs="12" className="align-items-center mt-5">
            <h1 className='text-center'>Math Rock</h1>
            <p className='lead my-3 text-center'>{text.description[language]}</p>
          </Col>

          <ProjectDetails artist="Caião Relíquia" music="アラケト" credits={{ eng: "Producer / Mixing / Mastering", pt: "Produção, mixagem e masterização" }} adress="https://www.youtube.com/embed/002g20JiuYY" />

          <ProjectDetails artist="Caião Relíquia" music="Não Criei Filho Ninja" credits={{ eng: "Producer / Mixing / Mastering", pt: "Produção, mixagem e masterização" }} adress="https://www.youtube.com/embed/OpvhuIP0Kkk" />
        </Row>

      </Container>
    </Layout>
  );
}

export default MathRockPage;
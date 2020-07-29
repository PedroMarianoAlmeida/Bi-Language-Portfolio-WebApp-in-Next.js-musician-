import { useContext } from 'react';
import { Container, Row, Col } from 'reactstrap'

import Layout from '../../components/all-pages/Layout'
import ProjectDetails from '../../components/ProjectDetails';
import { LanguageContext } from './../../contexts/LanguageContext';

const text = {
  description: {
    eng: "There are some track I mixed for Stock Music",
    pt: "A seguir alguns trabalhos que mixei para Stock Music"
  }
}

const StockPage = () => {
  const { language } = useContext(LanguageContext);

  return (
    <Layout seo={{ title: "Caio Andrade Mixing | Stock Projects", description: "Stock Music mixing portfolio", author: "Caio Andrade" }} className="h-100">
      <Container className="mt-5">
        <Row className="mt-5">

        <Col xs="12" className="align-items-center mt-5">
            <h1 className='text-center'>Stock Music</h1>
            <p className='lead my-3 text-center'>{text.description[language]}</p>
          </Col>

          <ProjectDetails  artist="Stock Music" music="A Walk At The Mall" credits={{ eng: "Producer / Mixing / Mastering", pt: "Produção, mixagem e masterização" }} adress="https://www.youtube.com/embed/j6hxJrWWjDM"/>

          <ProjectDetails  artist="Stock Music" music="Mad Groove" credits={{ eng: "Producer / Mixing / Mastering", pt: "Produção, mixagem e masterização" }} adress="https://www.youtube.com/embed/TsOs4D0POhg"/>

        </Row>

      </Container>
    </Layout>
  );
}

export default StockPage;
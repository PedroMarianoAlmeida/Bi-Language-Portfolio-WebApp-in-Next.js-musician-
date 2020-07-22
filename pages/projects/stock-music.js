import { Container, Row, Col } from 'reactstrap'

import Layout from '../../components/all-pages/Layout'
import ProjectDetails from '../../components/ProjectDetails';

const StockPage = () => {
  return (
    <Layout seo={{ title: "Caio Andrade | Stock Projects", description: "All projects of Stock Musics", author: "Pedro Almeida" }} className="h-100">
      <Container className="mt-5">
        <Row className="mt-5">

          <Col xs="12" className="align-items-center mt-5">
            <h1 className='text-center'>Stock Music</h1>
            <p className='lead my-3'>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
          </Col>

          <ProjectDetails text={ {eng: "Text in english 1", pt: "Texto em brazuca 1"} } textLocation="right" adress="https://www.youtube.com/embed/j6hxJrWWjDM"/>

          <ProjectDetails text={ {eng: "Text in english 2", pt: "Texto em brazuca 2"} } textLocation="left" adress="https://www.youtube.com/embed/TsOs4D0POhg"/>

        </Row>

      </Container>
    </Layout>
  );
}

export default StockPage;
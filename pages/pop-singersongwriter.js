import {Container, Row, Col} from 'reactstrap'
import Layout from './../components/all-pages/Layout'

const PopSingersongwriterPage = () => {
  return (
    <Layout seo={{ title: "Caio Andrade | Pop and Singer Song Writer Projects", description: "All projects of  Pop and Singer Song Writer", author: "Pedro Almeida" }} className="h-100">
    <Container className="mt-5">
      <Row className="mt-5">

        <Col xs="12" className="align-items-center d-none d-md-flex mt-5">
          <h1>Pop / Singer Song Writer</h1>
        </Col>

        <Col xs="12" className="align-items-center d-none d-md-flex mt-5">
          <p className='lead'>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
        </Col>

        <Col xs='6'>
          <iframe width="560" height="315" src="https://www.youtube.com/embed/-iceQYkcdDI" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen className="rounded border"></iframe>
        </Col>

        <Col xs='6' className="d-flex align-items-center">
          <p >Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
        </Col>

        <Col xs='6' className="d-flex align-items-center">
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
        </Col>

        <Col xs='6'>
        <iframe width="560" height="315" src="https://www.youtube.com/embed/q9JmvHlWRtk" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen className="rounded border"></iframe>
        </Col>

      </Row>




    </Container>
    </Layout>
  );
}

export default PopSingersongwriterPage;
import Head from 'next/head'
import { Container, Row, Col, Carousel } from 'reactstrap'
import Header from '../components/all-pages/Header'

export default function Home() {
  return (
    <div className="container">
      <Head>
        <title>Caio Andrade</title>
        <meta name="description" content="The best music projects of Caio Andrade" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Header />
      <main>
        <Container className="mt-5">
          <Row className="mt-5">
            <Col md="4" className="align-items-center d-none d-md-flex mt-5">
              <Row>
                <Col xs="12">
                  <div className="display-4">Caio Project 1</div>
                </Col>
                <Col xs="12">
                  <button className="btn btn-light border border-dark px-2 py-3 mt-2"><span className="lead">Discover Project</span></button>
                </Col>
              </Row>
            </Col>

            <Col xs="12" md="8" className='mt-5'>
              <div className="h-100">
                <img src="/images/image-project-1.PNG" alt="Project 1 Image" className="img-thumbnail my-image" />
                <div className="my-content ml-3 d-md-none">
                  <div className="display-4 my-text">Caio Project 1</div>
                  <br />
                  <div>
                    <button className="btn btn-light border border-dark px-1 py-2 my-button"><span className="lead">Discover Project</span></button>
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
        </Container>
      </main>


    </div >
  )
}

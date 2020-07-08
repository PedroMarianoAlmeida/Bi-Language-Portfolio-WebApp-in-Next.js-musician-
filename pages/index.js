import Layout from './../components/all-pages/Layout';
import { Container } from 'reactstrap'
import ProjectHomePage from './../components/ProjectHomePage'

export default function Home() {
  return (
    <Layout seo={{ title: "Caio Andrade", description: "The best music projects of Caio Andrade", author: "Pedro Almeida" }} className="h-100">
      <div className="container">
        
        <main>
          <Container className="mt-5">
            <ProjectHomePage name={ { eng: 'Project 1', pt: 'Projeto 1'} } image-adress="/images/image-project-1.PNG" />
          </Container>
        </main>

      </div >
    </Layout>
  )
}

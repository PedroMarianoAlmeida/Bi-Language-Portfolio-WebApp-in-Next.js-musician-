import { Container } from 'reactstrap';

import Layout from './../components/all-pages/Layout';
import ProjectHomePage from './../components/ProjectHomePage';
import SoundBetterBadge from './../components/SoundBetterBadge';

export default function Home() {
  return (
    <Layout seo={{ title: "Caio Andrade", description: "The best music projects of Caio Andrade", author: "Pedro Almeida" }} className="h-100">
      <div className="container">
        
        <main>
          <Container className="mt-5">
            <ProjectHomePage name={ { eng: 'Project 1', pt: 'Projeto 1'} } image-adress="/images/image-project-1.PNG" />
            
            <SoundBetterBadge />
          </Container>
        </main>      
      </div >
    </Layout>
  )
}

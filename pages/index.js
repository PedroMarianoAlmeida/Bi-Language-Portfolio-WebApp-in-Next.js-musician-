import { Container } from 'reactstrap';

import Layout from './../components/all-pages/Layout';
import ProjectHomePage from './../components/ProjectHomePage';
import SoundBetterBadge from './../components/SoundBetterBadge';

export default function Home() {
  return (
    <Layout seo={{ title: "Home | Caio Andrade Mixing", description: "Caio Andrade Mixing Engineer", author: "Caio Andrade" }} className="h-100">
      <div className="container">

        <main>
          <Container className="mt-5">
            <ProjectHomePage
              name={{ eng: 'Solo Artists', pt: 'Artistas Solo' }}
              image-adress="/images/singersongwriter.jpg"
              adress-to-go="/projects/solo-artists"
            />

            <ProjectHomePage
              name={{ eng: 'Stock Music', pt: 'Stock Music' }}
              image-adress="/images/stock-music.jpg"
              adress-to-go="/projects/stock-music"
            />

            <ProjectHomePage
              name={{ eng: 'Rock', pt: 'Rock' }}
              image-adress="/images/rock.jpg"
              adress-to-go="projects/rock"
            />

            <ProjectHomePage
              name={{ eng: 'Math Rock', pt: 'Math Rock' }}
              image-adress="/images/math-rock.jpg"
              adress-to-go="projects/math-rock"
            />

            <SoundBetterBadge />
          </Container>
        </main>
      </div >
    </Layout>
  )
}

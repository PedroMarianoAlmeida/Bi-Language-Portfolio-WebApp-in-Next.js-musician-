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
            <ProjectHomePage
              name={{ eng: 'Pop / Singer Song Writer', pt: 'Pop / Singer Song Writer' }}
              image-adress="/images/singersongwriter.jpg"
              adress-to-go="https://youtu.be/-iceQYkcdDI"
            />

            <ProjectHomePage
              name={{ eng: 'Stock Music', pt: 'Stock Music' }}
              image-adress="/images/stock-music.jpg"
              adress-to-go="https://youtu.be/q9JmvHlWRtk"
            />

            <ProjectHomePage
              name={{ eng: 'Rock', pt: 'Rock' }}
              image-adress="/images/rock.jpg"
              adress-to-go="https://youtu.be/zIjwE4vavuE"
            />

            <ProjectHomePage
              name={{ eng: 'Math Rock', pt: 'Math Rock' }}
              image-adress="/images/math-rock.jpg"
              adress-to-go="https://youtu.be/BEiBtC5fxgs"
            />

            <SoundBetterBadge />
          </Container>
        </main>
      </div >
    </Layout>
  )
}

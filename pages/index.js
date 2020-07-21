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
              name={{ eng: 'Perennial Singing - Amago', pt: 'Canto Perene - Amago' }}
              image-adress="/images/image-project-1.PNG"
              adress-to-go="https://youtu.be/-iceQYkcdDI"
            />

            <ProjectHomePage
              name={{ eng: 'Perennial Singing - To silence', pt: 'Canto Perene - Silenciar' }}
              image-adress="/images/image-project-1.PNG"
              adress-to-go="https://youtu.be/q9JmvHlWRtk"
            />

            <ProjectHomePage
              name={{ eng: 'Radio Clock – REAL X EYEZ', pt: 'Radio Clock – REAL X EYEZ' }}
              image-adress="/images/image-project-1.PNG"
              adress-to-go="https://youtu.be/zIjwE4vavuE"
            />

            <ProjectHomePage
              name={{ eng: 'Radio Clock – Journey Through the Decade', pt: 'Radio Clock – Viagem pela década' }}
              image-adress="/images/image-project-1.PNG"
              adress-to-go="https://youtu.be/BEiBtC5fxgs"
            />

            <ProjectHomePage
              name={{ eng: 'Drink Trio – Everyday', pt: 'Drink Trio – Todo Dia' }}
              image-adress="/images/image-project-1.PNG"
              adress-to-go="https://youtu.be/kqg6hhIiBtU"
            />

            <ProjectHomePage
              name={{ eng: 'Mad Groove – Stock Music', pt: 'Mad Groove – Stock Music' }}
              image-adress="/images/image-project-1.PNG"
              adress-to-go="https://youtu.be/TsOs4D0POhg"
            />

            <ProjectHomePage
              name={{ eng: 'A Walk at the Mall – Stock', pt: 'Um passeio no Shopping – Stock' }}
              image-adress="/images/image-project-1.PNG"
              adress-to-go="https://youtu.be/j6hxJrWWjDM"
            />

            <ProjectHomePage
              name={{ eng: 'Mirrors Room – MySelf', pt: 'Casa dos Espelhos – MySelf' }}
              image-adress="/images/image-project-1.PNG"
              adress-to-go="https://youtu.be/R5PD_SkHoe4"
            />

            <ProjectHomePage
              name={{ eng: 'Caião Relíquia -アラケト', pt: 'Caião Relíquia -アラケト' }}
              image-adress="/images/image-project-1.PNG"
              adress-to-go="https://youtu.be/002g20JiuYY"
            />

            <SoundBetterBadge />
          </Container>
        </main>
      </div >
    </Layout>
  )
}

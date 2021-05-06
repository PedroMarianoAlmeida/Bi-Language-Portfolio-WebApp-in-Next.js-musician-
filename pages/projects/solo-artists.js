import { useContext } from "react";
import { Container, Row, Col } from "reactstrap";

import Layout from "../../components/all-pages/Layout";
import ProjectDetails from "../../components/ProjectDetails";
import { LanguageContext } from "../../contexts/LanguageContext";

const text = {
  title: { eng: "Solo Artists", pt: "Artistas Solo" },

  description: {
    eng: "There are some track I mixed for Solo Artists",
    pt: "A seguir alguns trabalhos que mixei para Artistas Solo",
  },
};

const soloArtists = [
  {
    artist: "Canto Perene",
    music: "Mergulho em Mim",
    credits: {
      eng: "Mixing / Mastering",
      pt: "Mixagem e Masterização",
    },
    address: "https://www.youtube.com/embed/KFciXC2ElrA",
  },

  {
    artist: "Canto Perene",
    music: "Amago",
    credits: {
      eng: "Producer / Mixing / Mastering",
      pt: "Produção, mixagem e masterização",
    },
    address: "https://www.youtube.com/embed/-iceQYkcdDI",
  },

  {
    artist: "Canto Perene",
    music: "Silenciar",
    credits: { eng: "Mixing / Mastering", pt: "Mxagem e masterização" },
    address: "https://www.youtube.com/embed/q9JmvHlWRtk",
  },
];

const PopSingersongwriterPage = () => {
  const { language } = useContext(LanguageContext);

  return (
    <Layout
      seo={{
        title: "Caio Andrade Mixing | Solo Artists Projects",
        description: "Solo Artists mixing portfolio",
        author: "Pedro Almeida",
      }}
      className="h-100"
    >
      <Container className="my-5 pb-5">
        <Row className="mt-5">
          <Col xs="12" className="align-items-center mt-5">
            <h1 className="text-center">{text.title[language]}</h1>
            <p className="lead my-3 text-center">
              {text.description[language]}
            </p>
          </Col>

          {soloArtists.map((artist) => (
            <ProjectDetails
              artist={artist.artist}
              music={artist.music}
              credits={artist.credits}
              adress={artist.address}
              key={artist.music}
            />
          ))}
        </Row>
      </Container>
    </Layout>
  );
};

export default PopSingersongwriterPage;

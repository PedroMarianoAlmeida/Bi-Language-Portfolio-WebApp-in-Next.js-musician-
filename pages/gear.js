import { useContext } from "react";
import { Container, Row, Col } from "reactstrap";

import Layout from "../components/all-pages/Layout";
import { LanguageContext } from "../contexts/LanguageContext";

const text = {
  title: { eng: "Gear (Studio Setup)", pt: "Gear (equipamentos do estúdio)" },
  items: [
    {
      eng: "Yamaha NS10 Monitors",
      pt: "Monitores Yamaha NS10",
    },

    {
      eng: "Alesis RA150 Reference Amplifier",
      pt: "Amplificador de Referencia  Alesis RA150",
    },

    {
      eng: "Yamaha MC1602 – 16ch Analog mixing console",
      pt: "Mesa Analogica Yamaha MC1602 – 16 Canais",
    },

    {
      eng: "M-Audio ProFire2626 8 to 26 channel Interface",
      pt: "Interface M-Audio ProFire 2626",
    },

    {
      eng: "Phonic Firefly ADA8 - 8 Channel AD/DA Converter",
      pt: "Conversor AD/DA 8 canais - Phonic Firefly Ada8",
    },

    {
      eng: "Motu 2408 - 8 Channel AD/DA Converte",
      pt: "Conversor AD/DA 8 canais - Motu 2408",
    },

    {
      eng: "Presonus EUREKA Channel Strip",
      pt: "Channel Strip Presonus EUREKA",
    },

    {
      eng: "Alesis 3630 – Stereo VCA Compressor/Gate",
      pt: "Compressor/Limiter VCA Stereo – Alesis 3630",
    },

    {
      eng: "Presonus Bluemax - VCA Stereo Buss Compressor",
      pt: "Compressor Stereo Bus VCA - Presonus Bluemax",
    },
    {
      eng: "ART Tube EQ – 4 band Parametric Tube Equalizer",
      pt: "Equalizador Paramétrico Valvulado ART TUBE EQ",
    },
    {
      eng: "Samson C-Comp – Opto Compressor",
      pt: "Compressor Óptico Samson C-Comp",
    },
    {
      eng: "DBX 266 XL – Stereo VCA Compressor/Gate",
      pt: "Compressor/Limiter VCA Stereo – DBX 266 XL",
    },
    {
      eng: "Behringer T1952 – Two Channel Interactive Tube Compressor",
      pt: "Compressor Valvulado Stereo – Behringer T1952",
    },
    {
      eng: "Phonic DFX256 – Stereo MultifFX",
      pt: "Máquina de efeitos Phonic DFX256",
    },
    {
      eng: "24 In/Out Full Normal Patchbay",
      pt: "Patchbay Full normal 24 In/out",
    },
  ],
};

const Gear = () => {
  const { language } = useContext(LanguageContext);

  return (
    <Layout
      seo={{
        title: "Gear | Caio Andrade Mixing",
        description: "Caio's mixing setup",
        author: "Caio Andrade",
      }}
      className="h-100"
    >
      <Container className="mt-5">
        <Row>
          <Col xs="12" className="my-5 pb-4">
            <h1>{text.title[language]}</h1>
            <ul className="list-group list-group-flush">
              {text.items.map((item) => (
                <li className="list-group-item" key={item[language]}>
                  {item[language]}
                </li>
              ))}
            </ul>
          </Col>
        </Row>
      </Container>
    </Layout>
  );
};

export default Gear;

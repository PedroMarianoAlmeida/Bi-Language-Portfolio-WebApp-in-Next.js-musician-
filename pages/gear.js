import { useContext } from 'react';
import { Container, Row, Col } from 'reactstrap';

import Layout from '../components/all-pages/Layout';
import { LanguageContext } from '../contexts/LanguageContext';

const text = {
    title: { eng: "Gear (Studio Setup)", pt: "Gear (equipamentos do estúdio)" },
    item1: {
        eng: "Yamaha NS10 Monitors",
        pt: "Monitores Yamaha NS10"
    },

    item2: {
        eng: "Alesis RA150 Reference Amplifier",
        pt: "Amplificador de Referencia  Alesis RA150"
    },

    item3: {
        eng: "Mackie 1604 – 16ch Analog mixing console",
        pt: "Mesa Analogica Mackie 1604 – 16 Canais"
    },
    
    item4: {
        eng: "MOTU M828 MKII 8 to 16 channel Interface",
        pt: "Interface MOTU M828 MKII"
    },
    
    item5: {
        eng: "Presonus EUREKA Channel Strip",
        pt: "Channel Strip Presonus EUREKA"
    },

    item6: {
        eng: "DBX 166 – Stereo VCA Compressor/Gate",
        pt: "Compressor/Limiter VCA Stereo – DBX 166"
    },

    item7: {
        eng: "Presonus EQ3B – 3 band Parametric Equalizer",
        pt: "Equalizador Paramétrico Presonus EQ3B"
    },

    item8: {
        eng: "ART Tube EQ – 4 band Parametric Tube Equalizer",
        pt: "Equalizador Paramétrico Valvulado ART TUBE EQ"
    },

    item9: {
        eng: "Samson C-Comp – Opto Compressor",
        pt: "Compressor Óptico Samson C-Comp"
    },

    item10: {
        eng: "DBX 266 XL – Stereo VCA Compressor/Gate",
        pt: "Compressor/Limiter VCA Stereo  – DBX 266 XL"
    },

    item11: {
        eng: "Behringer T1952 – Two Channel Interactive Tube Compressor",
        pt: "Compressor Valvulado Stereo – Behringer T1952"
    },

    item12: {
        eng: "Behringer ADA8000 – 8 channel AD/DA Conversor ",
        pt: "Conversor AD/DA 8 Canais – Behringer ADA8000"
    },

    item13: {
        eng: "24 In/Out Half Normal Patchbay ",
        pt: "Patchbay Half normal 24 In/out"
    },
}

const Gear = () => {
    const { language } = useContext(LanguageContext);

    return (
        <Layout seo={{ title: "Gear | Caio Andrade Mixing", description: "Caio's mixing setup", author: "Caio Andrade" }} className="h-100">
            <Container className="mt-5">
                <Row>
                    <Col xs='12' className="mt-5">
                        <h1>{text.title[language]}</h1>
                        <ul className="list-group list-group-flush">
                            <li className="list-group-item">{text.item1[language]}</li>
                            <li className="list-group-item">{text.item2[language]}</li>
                            <li className="list-group-item">{text.item3[language]}</li>
                            <li className="list-group-item">{text.item4[language]}</li>
                            <li className="list-group-item">{text.item5[language]}</li>
                            <li className="list-group-item">{text.item6[language]}</li>
                            <li className="list-group-item">{text.item7[language]}</li>
                            <li className="list-group-item">{text.item8[language]}</li>
                            <li className="list-group-item">{text.item9[language]}</li>
                            <li className="list-group-item">{text.item10[language]}</li>
                            <li className="list-group-item">{text.item11[language]}</li>
                            <li className="list-group-item">{text.item12[language]}</li>
                            <li className="list-group-item">{text.item13[language]}</li>
                        </ul>
                    </Col>
                </Row>
            </Container>
        </Layout>
    )

}

export default Gear;
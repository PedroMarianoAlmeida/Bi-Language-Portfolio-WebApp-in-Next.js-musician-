import { useContext } from 'react';
import { Container, Row, Col } from 'reactstrap';

import Layout from './../components/all-pages/Layout';
import { LanguageContext } from './../contexts/LanguageContext';

const text = {
    title: { eng: "About", pt: "Sobre" },
    paragraph1: {
        eng: "Hey there!! I’m Caio Andrade, a mixer from Rio de Janeiro – Brazil. I’m a specialist on rock, pop rock, alternative rock, heavy rock, metal and anything that orbit this genre. My personal influences are Chris and Tom Lord-Alge, Lisciel Franco, Andrew Scheps, David Gnozzi, Yoad Nevo, Andy Wallace and many others. Due this, wait for punch, definition and colour on my jobs.",
        pt: "Olá! Eu sou o Caio Andrade, profissional de mixagem do Rio de Janeiro. Eu sou especialista em mixar rock, pop rock, rock alternativo, heavy rock, metal e tudo o que orbitar este genero. Minhas influências profissionais são Chris e Tom Lord-Alge, Lisciel Franco, Andrew Scheps, David Gnozzi, Yoad Nevo, Andy Wallace e tantos outros. Em virtude disso, as características do meu trabalho estão no punch, definição e na coloração."
    },
    paragraph2: {
        eng: "I started mixing almost 10 years ago as the same way as almost all homestudio guys of my generation started: With a M-Audio Fast Track, a Guitar, a bunch of plugins and a lot of curiosity.",
        pt: "Eu comecei no áudio a quase 10 anos da mesma maneira que toda a galera de “homestudio” da minha geração: Com uma M-audio Fast Track, uma guitarra, uns plug-ins e muita curiosidade. "
    },
    paragraph3: {
        eng: "It quickly became a passion. From bedroom I jumped to JRM Studios working as a producer and mixing my own projects. At this place I went into the  analog devices world and the idea of mixing for a living became real.",
        pt: "Isso logo se tornou uma paixão. Saí do meu quarto e fui ao Estúdio JRM onde trabalhei como produtor e mixava meus próprios projetos. Neste lugar entrei de cabeça no universo dos periféricos analógicos e a ideia de viver de mixagem se tornou uma realidade."
    },
    paragraph4: {
        eng: "I’m still based in Rio de Janeiro now on my own mixing room with my hybrid setup doing rock mixes for all country and all over the world! Check my portfolio and let’s rock your track!",
        pt: "Agora eu estou na minha própria sala de mixagem, com meu setup híbrido e ansioso para dar mais vida a sua música!"
    },
}

const About = () => {
    const { language } = useContext(LanguageContext);

    return (
        <Layout seo={{ title: "Sobre | Caio Andrade", description: "How Caio Andrade starts in Music Production", author: "Pedro Almeida" }} className="h-100">
            <Container className="mt-5">
                <Row>
                    <Col xs='12' className="mt-5">
                        <h1>{text.title[language]}</h1>
                        <p>{text.paragraph1[language]}</p>
                        <p>{text.paragraph2[language]}</p>
                        <p>{text.paragraph3[language]}</p>
                        <p>{text.paragraph4[language]}</p>
                    </Col>
                </Row>
            </Container>
        </Layout>
    )

}

export default About;
import { useContext } from 'react';
import { Container, Row, Col } from 'reactstrap';

import Layout from '../components/all-pages/Layout';
import { LanguageContext } from '../contexts/LanguageContext';

const text = {
    title: { eng: "Contact", pt: "Contato" },
    paragraph1: {
        eng: "Hey there! Thank you for your visit!",
        pt: "Olá! Muito obrigado pela sua visita!"
    },
    paragraph2: {
        eng: "I’m really excited to know more about how my services can help you!",
        pt: "Estou muito empolgado em saber como meu serviço pode ajudar você!"
    },
    paragraph3: {
        eng: "To know more about pricing, Turnaround time or any doubt, please write to:",
        pt: "Para saber mais sobre orçamento, tempo de entrega, ou qualquer outra dúvida escreva para:"
    },
    paragraph4: {
        eng: <React.Fragment> caioandrademix@gmail.com or <a href="https://api.whatsapp.com/send?phone=+5521983384747&text=Hi,%20I%20want%20to%20know%20more%20about%20your%20services" rel="noopener noreferrer" target="_blank">chat me on WhatsApp</a></React.Fragment>,
        pt: <React.Fragment> caioandrademix@gmail.com ou <a href="https://api.whatsapp.com/send?phone=+5521983384747&text=Hi,%20I%20want%20to%20know%20more%20about%20your%20services" rel="noopener noreferrer" target="_blank">me chama no WhatsApp</a></React.Fragment>,
    },

    paragraph5: {
        eng: "Please check out my Social Networks for more stuff: Instagram, YouTube and Facebook!",
        pt: "Siga-me nas minhas redes sociais. Eu estou no: Instagram, YouTube e Facebook!"
    },
}

const Contact = () => {
    const { language } = useContext(LanguageContext);

    return (
        <Layout seo={{ title: "Sobre | Caio Andrade", description: "How Caio Andrade starts in Music Production", author: "Pedro Almeida" }} className="h-100">
            <Container className="mt-5">
                <Row>
                    <Col xs='12' className="mt-4">
                        <h1>{text.title[language]}</h1>
                        <p>{text.paragraph1[language]}</p>
                        <p>{text.paragraph2[language]}</p>
                        <p>{text.paragraph3[language]}</p>
                        <p>{text.paragraph4[language]}</p>
                        { language==="eng" ? 
                            <p>
                                You can hire me via SoundBetter too! 
                                <a href="https://soundbetter.com/profiles/38156-caio-andrade"
                                    rel="noopener noreferrer"
                                    target="_blank"
                                    title="Caio Andrade profile on SoundBetter" >
                                        <small>(click here)</small>
                                </a>
                            </p> 
                        : "" }
                        <p>{text.paragraph5[language]}</p>
                    </Col>
                </Row>
            </Container>
        </Layout>
    )

}

export default Contact;
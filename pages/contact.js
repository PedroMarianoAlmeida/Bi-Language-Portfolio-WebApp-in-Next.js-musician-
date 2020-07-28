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
        pt: <React.Fragment> caioandrademix@gmail.com ou <a href="https://api.whatsapp.com/send?phone=+5521983384747&text=Ola,%20eu%20gostaria%20de%20conhecer%20melhor%20seus%20serviços" rel="noopener noreferrer" target="_blank">me chama no WhatsApp</a></React.Fragment>,
    },

    paragraph5: {
        eng: <React.Fragment>Please check out my Social Networks for more stuff: <a href="https://www.instagram.com/caiao_reliquia/" target="_blank">Instagram</a>, <a href="https://www.youtube.com/channel/UCb7wo4lCy-UU38ET98P8qFw" target="_blank">Youtube</a>, and <a href="https://www.facebook.com/CaiaoReliquiagt" target="_blank">Facebook</a></React.Fragment>,
        pt: <React.Fragment>Me siga nas redes sociais. Eu estou no: <a href="https://www.instagram.com/caiao_reliquia/" target="_blank">Instagram</a>, <a href="https://www.youtube.com/channel/UCb7wo4lCy-UU38ET98P8qFw" target="_blank">Youtube</a> e <a href="https://www.facebook.com/CaiaoReliquiagt" target="_blank">Facebook</a></React.Fragment>
    },
}

const Contact = () => {
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
                        { language==="eng" ? 
                            <p>
                                You can hire me via SoundBetter too! 
                                <a href="https://soundbetter.com/profiles/38156-caio-andrade"
                                    rel="noopener noreferrer"
                                    target="_blank"
                                    title="Caio Andrade profile on SoundBetter" >
                                        <small> (click here)</small>
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
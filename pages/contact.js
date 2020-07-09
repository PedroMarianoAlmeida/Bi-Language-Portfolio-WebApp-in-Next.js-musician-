import { useContext } from 'react';
import { Container, Row, Col } from 'reactstrap';

import Layout from '../components/all-pages/Layout';
import { LanguageContext } from '../contexts/LanguageContext';

const text = {
    title: { eng: "Contact", pt: "Contato" },
    paragraph1: {
        eng: "Hey there! Thank you for your visit!        ",
        pt: "Olá! Muito obrigado pela sua visita!"
    },
    paragraph2: {
        eng: "I’m really excited to know more about how my services can help you!",
        pt: "Estou muito empolgado em saber como meu serviço pode ajudar você!        "
    },
    paragraph3: {
        eng: <React.Fragment>Click here on <a href='./terms-of-service/Terms-of-Service.pdf' download>Terms of Service</a> to know more about Pricing, turnaround time, revisions, how to send your files properly etc.</React.Fragment>,
        pt: <React.Fragment>Clique aqui em <a href='./terms-of-service/Termos-de-Serviço.pdf' download>Termos de Serviço</a> para saber mais sobre preços, tempo de entrega, forma correta de enviar seus arquivos, revisões e etc. É bem curtinho, eu juro! ;)</React.Fragment>
    },
    paragraph4: {
        eng: "If you read the terms and have any doubt further, please write to: caioandrademix@gmail.com or chat me on WhatsApp: +55-21-98338-4747",
        pt: "Se você leu os termos e/ou tem mais alguma dúvida, escreva para: caioandrademix@gmail.com ou me chama no WhatsApp: +55-21-98338-4747"
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
                        {language==="eng"? <p>You can hire me too via SoundBetter too!</p> : ""}
                        <p>{text.paragraph5[language]}</p>
                    </Col>
                </Row>
            </Container>
        </Layout>
    )

}

export default Contact;
import Layout from './../components/all-pages/Layout';
import AboutComponent from './../components/AboutComponent';

const About = () => {
    return (
        <Layout seo={{ title: "Sobre | Caio Andrade", description: "How Caio Andrade starts in Music Production", author: "Pedro Almeida" }} className="h-100">
            <AboutComponent />
        </Layout>
    )

}

export default About;
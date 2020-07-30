import Header from './Header';
import SEO from './SEO';
import Footer from './Footer';

const Layout = (props) => {
    return (
        <React.Fragment>
            <SEO seo={props.seo || ""} />
            <Header />
            {props.children}
            <Footer />
        </React.Fragment>
    );
}

export default Layout;
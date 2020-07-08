import Header from './Header';
import SEO from './SEO';

const Layout = (props) => {
    return (
        <React.Fragment>
            <SEO seo={props.seo || ""} />
            <Header />
            {props.children}
        </React.Fragment>
    );
}

export default Layout;
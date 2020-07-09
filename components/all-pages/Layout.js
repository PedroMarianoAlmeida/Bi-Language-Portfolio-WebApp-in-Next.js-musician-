import LanguageProvider from './../../contexts/LanguageContext';

import Header from './Header';
import SEO from './SEO';


const Layout = (props) => {
    return (
        <LanguageProvider>
            <SEO seo={props.seo || ""} />
            <Header />
            {props.children}
        </LanguageProvider>
    );
}

export default Layout;
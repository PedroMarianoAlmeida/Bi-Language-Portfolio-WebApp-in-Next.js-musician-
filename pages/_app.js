import 'bootstrap/dist/css/bootstrap.min.css';

import LanguageProvider from './../contexts/LanguageContext'

function MyApp({ Component, pageProps }) {
    return (
        <LanguageProvider>
            <Component {...pageProps} />
        </LanguageProvider>
    )
}

export default MyApp
import Head from 'next/head'

const SEO = (props) => {
    return (
        <React.Fragment>
            {props.seo ?
                <Head>
                    {Object.keys(props.seo).map((element, index) => {
                        if (element === "title") return <title key={index}>{props.seo[element]}</title>
                        return <meta key={index} name={element} content={props.seo[element]} />
                    })}
                </Head> :
                ""}
        </React.Fragment>
    );
}

export default SEO;
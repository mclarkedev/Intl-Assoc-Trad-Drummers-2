import React from "react";
import { Helmet } from "react-helmet";
import { useStaticQuery, graphql } from "gatsby";


const Seo = ({ title }) => {
    const data = useStaticQuery(graphql`
        query {
            site {
                siteMetadata {
                    title
                    description
                }
            }
        }
    `)

    return (
        <Helmet 
            title={`${title} | ${data.site.siteMetadata.title}`}
            lang="en"
        >
            <meta name="description" content={data.site.siteMetadata.description} />
        </Helmet>
    )
}


export default Seo;

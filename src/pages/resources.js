import React from "react";
import Seo from "../components/Seo";
import Layout from "../components/structure/Layout";
import Container from "../components/structure/Container";
import DownloadablePDF from "../components/DownloadablePDF";
import Publication from "../components/Publication";
import Downloads from "../../data/downloads";
import Publications from "../../data/publications";
import "../styles/styles.scss"

const ResourcesPage = () => (
  <Layout>
    <Seo title="Resources" />
    <article>
        <Container>
            <h1>Resources</h1>
            <section>
                <div className="content__header">
                    <h2>Downloadable PDFs</h2>
                </div>
                {Downloads.map((download) => 
                    <DownloadablePDF key={download.title} title={download.title} path={download.path} />
                )}
            </section>
            <section>
                <div className="content__header">
                    <h2>IATD Member Publications</h2>
                </div>
                <div className="publication__grid">
                    {Publications.map((publication) => 
                        <Publication 
                            key={publication.title} 
                            title={publication.title} 
                            author={publication.author}
                            link={publication.link}
                            img={publication.thumbnail}
                        />
                    )}
                </div>
            </section>
        </Container>
      </article>
  </Layout>

)

export default ResourcesPage;

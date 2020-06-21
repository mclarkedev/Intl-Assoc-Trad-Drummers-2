import React from "react";
import { Link } from "gatsby";
import Seo from "../components/Seo";
import Layout from "../components/structure/Layout";
import Container from "../components/structure/Container";
import JohnPrattImg from "../images/john_pratt_salute.jpg";
import "../styles/styles.scss"

const IndexPage = () => (
  <Layout>
      <Seo title="Home" />
      <article className="callout">
        <Container>
          <div className="callout__header">
            <h2>In Memoriam</h2>
            <h3>John Sterling "Jack" Pratt</h3>
            <p>1931 -2020</p>
          </div>
          <section className="two-col-section">
            <div>
              <p>
                "My Loving Father, John Sterling Pratt, known to his Dear Friends and Family as, Jack, has ascended to his Heavenly Home with His Sticks Masterfully "Flam Para Diddle Diddle"-ing, Ratamacue-ing and "Pata Fla Fla"-ing, welcomed to The Grand Corps by throngs of Angels playing Golden Horns and Infinite Legions of Traditional Rudimental Drummers, thunrdering precisely as One!"
              </p>
              <p>
                <em>~ Joanie Pratt, Daughter of John S. Pratt</em>
              </p>
            </div>
            <div>
              <img src={JohnPrattImg} alt="" />
            </div>
          </section>
        </Container>
      </article>
      <article>
        <Container>
          <section>
            <h1>The International Assoctiation of Traditional Drummers</h1>
            <p>or I.A.T.D, founded by John S. Pratt (US Army Ret.), promotes the heritage of the "Traditional" rudimental drumming shared by rudimental drummers around the world.</p>
            <p>Our goal is to unite rudimental drummers from throughout the world to celebrate, study, and pass on the "Traditional" Heritage of rudimental drumming, as well as to educate and preserve the heritage of each country's "Traditional" rudimental drumming history.</p>
            <p>Our association has been endorsed by the following:</p>
            <ul>
              <li>The Company of Fifers & Drummers - Ivoryton, Connecticut USA</li>
              <li>The Canadian Associates Drumming Rudimental Excellence (C.A.D.R.E)</li>
              <li>The Drummers of North American Pipe Bands Associations</li>
              <li>The Drummers of "Top Secret" and the "Grey Coats" of Basel, Switzerland</li>
              <li>The Drummers of the Royal Scottish Pipe Band Association - Glasgow, Scotland</li>
              <li>The former American Patriots Rudimental Drummers Club - Morgantown, Pennsylvania USA</li>
            </ul>
            <Link to="/history" className="button" title="To History page">
              Learn more
            </Link>
          </section>
        </Container>
      </article>
  </Layout>

)

export default IndexPage;

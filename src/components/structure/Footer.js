import React from 'react';
import { Link } from 'gatsby';
import Container from './Container';
import Facebook from '../../../static/facebook.svg';

const year = new Date().getFullYear()

const Footer = () => {
    return (
        <footer>
            <Container>
                <div className="footer__nav">
                    <Link to="/" className="footer__nav-link">
                        Home
                    </Link>
                    <Link to="/history" className="footer__nav-link">
                        History
                    </Link>
                    <Link to="/resources" className="footer__nav-link">
                        Resources
                    </Link>
                    <a href="https://www.facebook.com/International-Association-of-Traditional-Drummers-119898948096735/" target="_blank" rel="noreferrer noopener" className="footer__nav-link">
                        <img src={Facebook} alt="" className="fb-icon" />
                    </a>
                </div>
                <div>
                    <p>&copy;{year} Copyright International Association of Rudimental Drummers</p>
                </div>
            </Container>
        </footer>
    )
}

export default Footer;
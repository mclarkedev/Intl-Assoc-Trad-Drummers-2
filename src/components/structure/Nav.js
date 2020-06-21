import React from 'react';
import { Link } from 'gatsby';
import Logo from '../../images/iatd-nav-logo.png';
import Facebook from '../../../static/facebook.svg';

const Nav = () => {
    return (
        <header>
            <div className="brand">
                <img src={Logo} alt=""/>
            </div>
            <nav>
                <Link to="/" className="nav-link" activeClassName="active">
                    Home
                </Link>
                <Link to="/history" className="nav-link" activeClassName="active">
                    History
                </Link>
                <Link to="/resources" className="nav-link" activeClassName="active">
                    Resources
                </Link>
                <a href="https://www.facebook.com/International-Association-of-Traditional-Drummers-119898948096735/" target="_blank" rel="noreferrer noopener" className="nav-link" activeclass="active">
                    <img src={Facebook} alt="" className="fb-icon" />
                </a>
            </nav>
        </header>
    )
}

export default Nav;
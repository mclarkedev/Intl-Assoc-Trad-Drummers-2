import React from 'react';
import Nav from '../structure/Nav';
import Footer from '../structure/Footer';

const Layout = (props) => {
    return (
        <>
            <Nav />
            <main>
                {props.children}
            </main>
            <Footer />
        </>

    )
}

export default Layout;
import React from "react";
import Layout from "../components/structure/Layout";
import Container from "../components/structure/Container";
import "../styles/styles.scss"

const ErrorPage = () => (
    <Layout>
        <Container>
            <h1>404: This page does not exist!</h1>
            <p>Looks like you were marching to the beat of a different drummer.</p>
        </Container>
    </Layout>

)

export default ErrorPage;

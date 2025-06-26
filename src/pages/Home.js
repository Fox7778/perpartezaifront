import React from 'react';
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import './Home.css';
import 'bootstrap/dist/css/bootstrap.min.css';
const Home = () => {
    return (
        <>
        <Container fluid className="bg-light">
            <Row className="text-center napis1">
                <h1>Učte se s námi</h1>
            </Row>
        </Container>    
        <Container fluid className="bg-light">
            <Row className="text-center text1">
                <p>
                    PerpartezAI je inovativní produkt, který si klade za cíl změnit způsob, jakým se studenti učí. <br></br>
                    Vytvořili jsme webovou aplikaci s umělou inteligencí, která funguje jako osobní doučovatel – dostupný kdykoliv a kdekoliv. Pomáhá studentům lépe porozumět učivu, připravit se na zkoušky a zvládat školu bez stresu.
                </p>
            </Row>
        </Container>

        <Container fluid className="footer">
            <Row className="d-inline">
                Kontakt:<a href="mailto:liskajakub612@outlook.com" id="mail">liskajakub612@outlook.com</a>
            </Row>
            <Row >
                &copy; 2025 PerpartezAI, Všechna práva vyhrazena.
            </Row>
        </Container>
        </>
    );
}

export default Home;

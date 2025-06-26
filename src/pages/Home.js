import React from 'react';
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Button from "react-bootstrap/Button";
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

        <div className="justify-content-center text-center text1 bg-light">
            <img src="/ChatGPT Image Jun 26, 2025 at 07_05_25 PM-2.png" alt="ChatGPT Image" className="img-fluid" id="chatgpt"/>
        </div>

        <Container fluid className="bg-light">
            <Row className="text-center text1">
                <h1>Proč PerpartezAI?</h1>
            </Row>
        </Container>

        <Container fluid classNmae="bg-light">
            <Row className="text-center text1 bg-light">
                <p>
                    PerpartezAI je moderní AI doučovatel, který přináší skutečnou pomoc tam, kde ostatní nástroje často selhávají. Na rozdíl od aplikací jako PhotoMath ti nerozumí jen v číslech, ale i v jazyce – doslova. Mluví česky, takže nemusíš nic překládat ani se přizpůsobovat. Když něco potřebuješ vysvětlit, dostaneš odpověď do několika vteřin, a navíc ne jen suchý výsledek, ale celý postup krok za krokem. Učíme tě chápat, ne jen opisovat. A to nejlepší? Naše služba je cenově dostupná pro každého studenta, protože věříme, že kvalitní vzdělání by nemělo být luxus. PerpartezAI je tu, aby ti opravdu pomohl uspět ve škole.
                </p>
            </Row>
        </Container>

        <div className="justify-content-center text-center text1 bg-light">
            <img src="/ChatGPT Image Jun 26, 2025 at 07_05_25 PM-2.png" alt="ChatGPT Image" className="img-fluid" id="chatgpt"/>
        </div>

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

import "./Pricing.css";
import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Table from "react-bootstrap/Table";
import Button from "react-bootstrap/Button";

const Pricing = () => {
    return(
        <>
            <Container fluid className="bg-light">
                <Row className="text-center text1">
                    <h1>Ceník</h1>
                </Row>    
            </Container>     
             <Table striped bordered hover>
                <thead>
                    <tr>
                        <th> </th>
                        <th> Úroveň </th>
                        <th> Počet příkazů </th>
                        <th> Cena</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td>1</td>
                        <td>Basic</td>
                        <td>cca 50 příkazů </td>
                        <td>39 Kč</td>
                    </tr>
                    <tr>
                        <td>2</td>
                        <td>Standard</td>
                        <td>cca 140 příkazů</td>
                        <td>89 Kč</td>
                    </tr>
                    <tr>
                        <td>3</td>
                        <td>Premium</td>
                        <td>cca 300 příkazů</td>
                        <td>159 Kč</td>
                    </tr>
                    <tr>
                        <td>4</td>
                        <td>Extra</td>
                        <td>cca 550 příkazů</td>
                        <td>269 Kč</td>
                    </tr>
                </tbody>
            </Table>
            
            <Container fluid className="bg-light">
                <Row className="text-center my-4">
                    <Col>
                        <Button variant="primary" size="lg">Paywall</Button>
                    </Col>
                </Row>
            </Container>
        </>
    )  
            
    }
export default Pricing;
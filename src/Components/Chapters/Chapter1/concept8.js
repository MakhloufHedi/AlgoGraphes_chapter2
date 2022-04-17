import React, { Component } from 'react'
import { Container, Row, Col, Card, Button, CardTitle, CardText } from 'reactstrap'
import { Routes, Route, Link } from "react-router-dom";

class Concept8 extends Component {



    render() {
        return (
            <div className="App" >

                <Card body inverse /*color="success"*/ style={{ position: "center", width: "1200px", "background": "#2F8DD6" }}>
                    <CardTitle style={{ "font-size": "50px", "font-family": "Times New Roman" }}>Introduction sur les graphes</CardTitle>
                    <Container>
                        <Row>
                            <Col xs="8">
                                <CardText>
                                    <p style={{ "font-size": "35px", "font-family": "Times New Roman" }}> Détermination des rangs (graphes sans circuits) </p>
                                    <p style={{ "font-size": "25px", "font-family": "Times New Roman" }} >
                                        <br />
                                        1 - quelquesoit i appartient à S, di = ensemble des sommets précédents  de i
                                        <br />
                                        2 - Sk = ensemble des sommets de degré = 0 et Sk+1 = ensemble vide
                                        <br />
                                        - Quelquesoit i appartient à Sk faire : r(i)=k; quelquesoit j appartient au suivants, dj=dj -1;
                                        <br />
                                        3- k= k+1 , si Sk = ensemble vide, Fin. Sinon, aller en 2.
                                    </p>
                                </CardText>
                            </Col>
                            <Col xs="1"></Col>
                            <Col xs="3">
                                <img id="profile-img" className="profile-img-card" src="http://www.ensi-uma.tn/wp-content/uploads/2017/01/cropped-Logo-p.png" />
                            </Col>
                        </Row>

                        <Row>
                            <Col sm="4" xs="6" className="bg-light border" ></Col>
                            <Col sm="4" xs="6"></Col>
                            <Col sm="4" className="bg-light border"></Col>
                            <br />
                            <div style={{ width: "300px", right: "100px" }} >
                                <nav>
                                    <Link to="/about" style={{ "font-size": "25px", "font-family": "Times New Roman", color: "green" }}><img style={{ height: "40px", width: "100px" }} id="profile-img" src="https://upload.wikimedia.org/wikipedia/commons/thumb/7/71/Arrow_east.svg/2560px-Arrow_east.svg.png" /></Link>
                                </nav>
                            </div>
                        </Row>
                    </Container>
                </Card>

            </div>

        )

    }
}

export default Concept8;
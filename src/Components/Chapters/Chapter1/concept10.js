import React, { Component } from 'react'
import { Container, Row, Col, Card, Button, CardTitle, CardText } from 'reactstrap'
import { Routes, Route, Link } from "react-router-dom";

class Concept10 extends Component {



    render() {
        return (
            <div className="App" >

                <Card body inverse /*color="success"*/ style={{ position: "center", width: "1200px", "background": "#2F8DD6" }}>
                    <CardTitle style={{ "font-size": "50px", "font-family": "Times New Roman" }}>Introduction sur les graphes</CardTitle>
                    <Container>
                        <Row>
                            <Col xs="8">
                                <CardText>
                                    <p style={{ "font-size": "35px", "font-family": "Times New Roman" }}> Modélisation </p>
                                    <p style={{ "font-size": "25px", "font-family": "Times New Roman" }} >
                                        <h1>A partir de la matrice d’incidence:</h1>
                                        <br />
                                        - Un multigraphe est un graphe où deux sommets adjacents
                                        peuvent être reliés par plus d’un arc ayant la même orientation.
                                        <br />
                                        - On appelle p-graphe un multigraphe dans lequel il n’existe pas
                                        plus de p arcs entre deux sommets i et j dans le même sens.
                                        <br />
                                        - On définit deux tableaux (.) et β(.) de dimension m où on
                                        associe à chaque arc les numéros de ses extrémités (u)
                                        ou β(u). Dans le cas orienté, (u) est l’extrémité initiale et β(u)
                                        est l’extrémité finale .
                                    </p>
                                </CardText>
                            </Col>
                            <Col xs="1"></Col>
                            <Col xs="3">
                                <img id="profile-img" className="profile-img-card" src="http://www.ensi-uma.tn/wp-content/uploads/2017/01/cropped-Logo-p.png" />
                            </Col>
                        </Row>

                        <Row>
                            <Col sm="4" xs="6"  ></Col>
                            <Col sm="4" xs="6"></Col>
                            <Col sm="4" ></Col>
                            <br />
                            <div style={{ width: "300px", right: "100px" }} >
                                <nav>
                                    <Link to="/chapter1/qcm9" style={{ "font-size": "25px", "font-family": "Times New Roman", color: "green" }}><img style={{ height: "40px", width: "100px" }} id="profile-img" src="https://upload.wikimedia.org/wikipedia/commons/thumb/7/71/Arrow_east.svg/2560px-Arrow_east.svg.png" /></Link>
                                </nav>
                            </div>
                        </Row>
                    </Container>
                </Card>

            </div>

        )

    }
}

export default Concept10;
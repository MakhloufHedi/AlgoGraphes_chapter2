import React, { Component } from 'react'
import { Container, Row, Col, Card, Button, CardTitle, CardText } from 'reactstrap'
import { Routes, Route, Link } from "react-router-dom";
import graph2 from "./Images/graph2.jpg";

class Concept22 extends Component {



    render() {
        return (
            <div className="App" >

                <Card body inverse /*color="success"*/ style={{ position: "center", width: "1210px", "background": "#2F8DD6" }}>
                    <CardTitle style={{ "font-size": "50px", "font-family": "Times New Roman" }}>Ordonnacement</CardTitle>
                    <Container>
                        <Row>
                            <Col xs="8">
                                <CardText>
                                    <p style={{ "font-size": "35px", "font-family": "Times New Roman" }}> Sur l'ordonnacement... </p>
                                    <p style={{ "font-size": "25px", "font-family": "Times New Roman" }} >
                                        <br />
                                        Le problème d’ordonnancement consiste à organiser dans le temps la
                                        réalisation d’un ensemble de tâches, compte tenu de contraintes
                                        temporelles (délais, contraintes d’enchaînements, . . .) et de contraintes
                                        portant sur l’utilisation et la disponibilité des ressources requises.<br/>
                                        - Un ensemble de tâches<br />
                                        -Un environnement de ressources pour effectuer les tâches<br />
                                        -Des contraintes sur les tâches et les ressources<br />
                                        -Un critère d’optimisation<br />
                                        Résoudre un pb d’ordonnancement = trouver l’ordre et le calendrier
                                        suivant lequel devront être exécutées != tâches afin d’optimiser un projet
                                        donné en tenant comptes d’un certain nbr de contraintes
                                    </p>
                                </CardText>
                            </Col>
                            <Col xs="1">
                                <br /> <br /> <br /> <br /> <br /> <br /><br /><br /><br />
                                <img src={graph2} width={400} />
                            </Col>
                            {/* images */}
                            <Col xs="3">
                                <img id="profile-img" className="profile-img-card" src="http://www.ensi-uma.tn/wp-content/uploads/2017/01/cropped-Logo-p.png" />
                            </Col>
                            {/* images  */}
                        </Row>

                        <Row>
                            <Col sm="4" xs="6"  ></Col>
                            <Col sm="4" xs="6"></Col>
                            <Col sm="4" ></Col>
                            <br />
                            <div style={{ width: "300px", right: "100px" }} >
                                <nav>
                                    <Link to="/chapter2/about22" style={{ "font-size": "25px", "font-family": "Times New Roman", color: "green" }}><img style={{ height: "40px", width: "100px" }} id="profile-img" src="https://upload.wikimedia.org/wikipedia/commons/thumb/7/71/Arrow_east.svg/2560px-Arrow_east.svg.png" /></Link>
                                </nav>
                            </div>
                        </Row>
                    </Container>
                </Card>

            </div>

        )

    }
}

export default Concept22;
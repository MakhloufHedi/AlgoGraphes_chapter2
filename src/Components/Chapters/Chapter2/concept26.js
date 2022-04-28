import React, { Component } from 'react'
import { Container, Row, Col, Card, Button, CardTitle, CardText } from 'reactstrap'
import { Routes, Route, Link } from "react-router-dom";
import graph1 from "./Images/graph1.jpg";
class Concept26 extends Component {

 

    render() {
        return (
            <div className="App" >

                <Card body inverse /*color="success"*/ style={{ position: "center", width: "1210px", "background": "#2F8DD6" }}>
                    <CardTitle style={{ "font-size": "50px", "font-family": "Times New Roman" }}>Ordonnancement</CardTitle>
                    <Container>
                        <Row>
                            <Col xs="8">
                                <CardText>
                                    <p style={{ "font-size": "35px", "font-family": "Times New Roman" }}> Graph PERT </p>
                                    <p style={{ "font-size": "25px", "font-family": "Times New Roman" }} >
                                        <br />
                                        ◉ Â partir d’un projet donné on construit le graphe suivant:<br /><br />
                                        ►Chaque tâche est un arc de longueur di ( durée de i)<br />
                                        ►Les sommets Étapes du prj , i.e: le début et la fin de chaque tâche<br />
                                        ►Si une tâche j succède à une tâche i L’extrémité initiale de j<br />
                                        coïncide avec l’extrémité terminale de i<br />
                                        ►On rajoute au graphe deux étapes fictives : dp et fp<br /><br />

                                        ◉ On définit ainsi un multigraphe sans circuit .<br /><br />
                                        ► Les dates au plus tôt et au plus tard de l’exécution d’une tâche
                                        sont calculées de la même manière que pour le graphe potentiel-tâche.<br />
                                        ► La durée min du projet est la longueur du plus long chemin
                                        entre le début et la fin du projet.
                                    </p>
                                </CardText>
                            </Col>
                            <Col xs="1"></Col>
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
                                    <Link to="/chapter2/about26" style={{ "font-size": "25px", "font-family": "Times New Roman", color: "green" }}><img style={{ height: "40px", width: "100px" }} id="profile-img" src="https://upload.wikimedia.org/wikipedia/commons/thumb/7/71/Arrow_east.svg/2560px-Arrow_east.svg.png" /></Link>
                                </nav>
                            </div>
                        </Row>
                    </Container>
                </Card>

            </div>

        )

    }
}

export default Concept26;
import React, { Component } from 'react'
import { Container, Row, Col, Card, Button, CardTitle, CardText } from 'reactstrap'
import { Routes, Route, Link } from "react-router-dom";

class Concept2 extends Component {



    render() {
        return (
            <div className="App" >

                <Card body inverse /*color="success"*/ style={{ position: "center", width: "1200px", "background": "#2F8DD6" }}>
                    <CardTitle style={{ "font-size": "50px", "font-family": "Times New Roman" }}>Introduction sur les graphes</CardTitle>
                    <Container>
                        <Row>
                            <Col xs="8">
                                <CardText>
                                    <p style={{ "font-size": "35px", "font-family": "Times New Roman" }}> Définitions </p>
                                    <p style={{ "font-size": "25px", "font-family": "Times New Roman" }} >
                                        <br />
                                        - Un graphe orienté est un couple G=(S,A) :
                                        S ensemble de sommets ou nœuds (|S|=n );
                                        A inclue S × S ensemble d’arcs (|A|=m).
                                        <br />
                                        - Pour un arc a = (i, j), i est l’extrémité initiale, j l’extrémité finale
                                        (ou bien origine et destination).
                                        <br />
                                        - Un graphe non orienté est un couple G=(S,A) :
                                        A inclue S × S ensemble d’arêtes.
                                        <br />
                                        - On appelle graphe valué et on note G=(S,A,c) un graphe où on
                                        associe une fonction c : A → IR appelée coût ou poids
                                        ou valeur des arcs .
                                        Le coût d’un arc (i,j) est noté c(i,j) ou cij
                                        <br />
                                        - Un graphe est dit symétrique si : quelquesoit i, j ∈ S, (i, j )∈ A indique que (j, i)∈ A.
                                        i.e. un graphe est symétrique lorsque chaque paire de sommets
                                        reliés dans un sens l’est aussi dans l’autre
                                        <br />
                                        - Un graphe est dit complet si quelquesoit i,j ∈ S, (i, j)  A  (j, i) ∈ A.
                                        i.e. Un graphe est complet si deux sommets quelconques sont
                                        reliés dans au moins une direction
                                        <br />
                                        

                                    </p>
                                </CardText>
                            </Col>
                            <Col xs="1"></Col>
                            <Col xs="3">
                                <img id="profile-img" className="profile-img-card" src="http://www.ensi-uma.tn/wp-content/uploads/2017/01/cropped-Logo-p.png" />
                            </Col>
                        </Row>

                        <Row>
                            <Col sm="4" xs="6"></Col>
                            <Col sm="4" xs="6"></Col>
                            <Col sm="4" ></Col>
                            <br />
                            <div style={{ width: "300px", right: "100px" }} >
                                <nav>
                                    <Link to="/chapter1/qcm1" style={{ "font-size": "25px", "font-family": "Times New Roman", color: "green" }}><img style={{ height: "40px", width: "100px" }} id="profile-img" src="https://upload.wikimedia.org/wikipedia/commons/thumb/7/71/Arrow_east.svg/2560px-Arrow_east.svg.png" /></Link>
                                </nav>
                            </div>
                        </Row>
                    </Container>
                </Card>

            </div>

        )

    }
}

export default Concept2;
import React, { Component } from 'react'
import { Container, Row, Col, Card, Button, CardTitle, CardText } from 'reactstrap'
import { Routes, Route, Link } from "react-router-dom";
import graph1 from "./Images/graph1.jpg";
class Concept28 extends Component {



    render() {
        return (
            <div className="App" >

                <Card body inverse /*color="success"*/ style={{ position: "center", width: "1210px", "background": "#2F8DD6" }}>
                    <CardTitle style={{ "font-size": "50px", "font-family": "Times New Roman" }}>Ordonnancement</CardTitle>
                    <Container>
                        <Row>
                            <Col xs="8">
                                <CardText>
                                    <p style={{ "font-size": "35px", "font-family": "Times New Roman" }}> Duree minimale d'un projet </p>
                                    <p style={{ "font-size": "25px", "font-family": "Times New Roman" }} >
                                        <br />
                                        ◉ Les  problèmes du plus court chemin se rencontrent dans de
                                        nombreuses applications et souvent comme sous-probléme de problèmes plus complexes.
                                        <br />
                                        ◉ Par exemple,supposons que nous voulions acheminer le plus rapidement possible
                                        des marchandises depuis une ville notée I,jusqu'à des villes
                                        2,3,4,5,6 et 7.On dispose pour cela d'une flotte de 6 camions.
                                        <br />
                                        ◉ Le problème est modélisé par le graphe orienté suivant: <br />
                                        - les villes sont représentées par des sommets<br />
                                        - le cout d'un arc (i,j) représente le temps (en heures) nécessaire pour relier la ville i à la ville j.
                                        <br />
                                        ◉ La formule decalculde la durée est:<br />
                                        - t_init=0 <br />
                                        - t_i=max(t_j + d_j) avec j ∈ Γ- de i

                                    </p>
                                </CardText>
                            </Col>
                            <Col xs="1">
                                <br /> <br /> <br /> <br /> <br /> <br /><br /><br /><br />
                                <img src={graph1} width={400} />
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
                                    <Link to="/chapter2/about28" style={{ "font-size": "25px", "font-family": "Times New Roman", color: "green" }}><img style={{ height: "40px", width: "100px" }} id="profile-img" src="https://upload.wikimedia.org/wikipedia/commons/thumb/7/71/Arrow_east.svg/2560px-Arrow_east.svg.png" /></Link>
                                </nav>
                            </div>
                        </Row>
                    </Container>
                </Card>

            </div>

        )

    }
}

export default Concept28;
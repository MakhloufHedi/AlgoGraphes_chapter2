import React, { Component } from 'react'
import { Container, Row, Col, Card, Button, CardTitle, CardText } from 'reactstrap'
import { Routes, Route, Link } from "react-router-dom";
import graph1 from "./Images/graph1.jpg";
class Concept29 extends Component {



    render() {
        return (
            <div className="App" >

                <Card body inverse /*color="success"*/ style={{ position: "center", width: "1210px", "background": "#2F8DD6" }}>
                    <CardTitle style={{ "font-size": "50px", "font-family": "Times New Roman" }}>Ordonnancement</CardTitle>
                    <Container>
                        <Row>
                            <Col xs="8">
                                <CardText>
                                    <p style={{ "font-size": "35px", "font-family": "Times New Roman" }}> Contraintes du graphe potentiel-taches MPM </p>
                                    <p style={{ "font-size": "25px", "font-family": "Times New Roman" }} >
                                        <br />
                                        ◉ Si les contraintes de type potentiel no sont pas uniquement des contraintes d'antériorité,on modifie le graph potentiel-taches ainsi:<br/><br/>
                                        - La contraint j ne doit pas commencer avant la moitié du tps de réalisation de la tâche i se représente par un arc (i,j) de valeur di/2 <br/>
                                        - La contraint j ne doit commencer qu’après un temps t de la fin de i -&gt; un arc(i,j) de valeur di +t<br/>
                                        - La contraint j ne doit commencer qu’après la date bj -&gt; arc(dp,j) de durée bj<br/>
                                        - La contraint j doit commencer avant la date cj -&gt; un arc entre dp et j de durée –cj<br/>
                                        - La contraint j ne doit suivre immédiatement la tache i , se représente par un arc entré(i,j)<br/><br/>
                                        ◉ Remarques:<br/><br/>
                                        - Les contraintes supplémentaires sont plus difficiles à prendre en compte dans le graphe PERT <br/>
                                        - Attention,  l’ajout des contraintes  peut introduire  des circuits dans le graphe.
                                    </p>
                                </CardText>
                            </Col>
                            <Col xs="1"> </Col>
                            {/* images */}
                            <Col xs="3">
                                <img id="profile-img" className="profile-img-card" src="http://www.ensi-uma.tn/wp-content/uploads/2017/01/cropped-Logo-p.png" />
                            </Col>
                            {/* images  */}
                        </Row>

                        <Row>
                            <Col sm="4" xs="6" ></Col>
                            <Col sm="4" xs="6"></Col>
                            <Col sm="4" ></Col>
                            <br />
                            <div style={{ width: "300px", right: "100px" }} >
                                <nav>
                                    <Link to="/chapter2/about29" style={{ "font-size": "25px", "font-family": "Times New Roman", color: "green" }}><img style={{ height: "40px", width: "100px" }} id="profile-img" src="https://upload.wikimedia.org/wikipedia/commons/thumb/7/71/Arrow_east.svg/2560px-Arrow_east.svg.png" /></Link>
                                </nav>
                            </div>
                        </Row>
                    </Container>
                </Card>

            </div>

        )

    }
}

export default Concept29;
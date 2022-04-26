import React, { Component } from 'react'
import { Container, Row, Col, Card, Button, CardTitle, CardText } from 'reactstrap'
import { Routes, Route, Link } from "react-router-dom";
import img1 from './Images/connexe.png'
import img2 from './Images/Graphefortementconnexe.png'
class Concept4 extends Component {



    render() {
        return (
            <div className="App" >

                <Card body inverse /*color="success"*/ style={{ position: "center", width: "1200px", "background": "#2F8DD6" }}>
                    <CardTitle style={{ "font-size": "50px", "font-family": "Times New Roman" }}>Introduction sur les graphes</CardTitle>
                    <Container>
                        <Row>
                            <Col xs="8">
                                <CardText>
                                    <p style={{ "font-size": "35px", "font-family": "Times New Roman" }}> Connexité </p>
                                    <p style={{ "font-size": "25px", "font-family": "Times New Roman" }} >
                                        <br />
                                        - Un graphe G = (S,A) est dit simplement connexe ou connexe si :quelquesoit, i,j ∈ S, il existe une chaîne entre i et j.
                                        - Un graphe orienté est connexe si le graphe non orienté associé est
                                        connexe.
                                        <br />
                                        - Une composante connexe C d’un graphe G = (S,A) est un sous-
                                        ensemble maximal de sommets tels que deux quelconques d’entreeux soient reliés par une chaîne : si i  C, alors :
                                        ▪quelquesoit j ∈ C, il existe une chaîne reliant i à j,
                                        ▪quelquesoit k ∈ S \ C, il n’existe pas de chaîne reliant i à k.
                                        <br />
                                        - Un graphe G = (S,A) est dit simplement connexe ou connexe si :
                                        ▪quelquesoit, i,j ∈ S, il existe une chaîne entre i et j.
                                        <br/>
                                    </p>
                                </CardText>
                            </Col>
                            <Col xs="1"></Col>
                            <Col xs="3">
                                <img src={img1}  style ={{marginLeft:"-100px"}}/>
                                <br />
                                <img src={img2}  style ={{marginLeft:"-100px",marginTop:"20px"}}/>
                            </Col>
                        </Row>

                        <Row>
                            {/* <Col sm="4" xs="6" className="bg-light border" ></Col>
                            <Col sm="4" xs="6"></Col>
                            <Col sm="4" className="bg-light border"></Col> */}
                            <br />
                            <div style={{ width: "300px", right: "100px" }} >
                                <nav>
                                    <Link to="/chapter1/qcm3" style={{ "font-size": "25px", "font-family": "Times New Roman", color: "green" }}><img style={{ height: "40px", width: "100px" }} id="profile-img" src="https://upload.wikimedia.org/wikipedia/commons/thumb/7/71/Arrow_east.svg/2560px-Arrow_east.svg.png" /></Link>
                                </nav>
                            </div>
                        </Row>
                    </Container>
                </Card>

            </div>

        )

    }
}

export default Concept4;
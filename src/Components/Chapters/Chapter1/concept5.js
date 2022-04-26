import React, { Component } from 'react'
import { Container, Row, Col, Card, Button, CardTitle, CardText } from 'reactstrap'
import { Routes, Route, Link } from "react-router-dom";
import img from './Images/isthme.png'
class Concept5 extends Component {



    render() {
        return (
            <div className="App" >

                <Card body inverse /*color="success"*/ style={{ position: "center", width: "1200px", "background": "#2F8DD6" }}>
                    <CardTitle style={{ "font-size": "50px", "font-family": "Times New Roman" }}>Introduction sur les graphes</CardTitle>
                    <Container>
                        <Row>
                            <Col xs="8">
                                <CardText>
                                    <p style={{ "font-size": "35px", "font-family": "Times New Roman" }}> Isthme et point d'articulation: </p>
                                    <p style={{ "font-size": "25px", "font-family": "Times New Roman" }} >
                                        <br />
                                        - Une arête d'un graphe est un isthme si sa suppression augmente le
                                        nombre de composantes connexes du graphe.
                                        <br />
                                        - Si le graphe est connexe, une arête est un isthme si et seulement si
                                        elle n'appartient à aucun cycle.
                                        <br />
                                        - Un sommet d'un graphe est un point d'articulation si sa
                                        suppression augmente le nombre de composantes connexes du   
                                        graphe. Plus généralement, un ensemble d'articulation d'un graphe
                                        est un ensemble de sommets dont la suppression augmente le
                                        nombre de composantes connexes du graphe.
                                    </p>
                                </CardText>
                            </Col>
                            <Col xs="1"></Col>
                            <Col xs="3">
                                <img style ={{marginLeft:"-100px",width:"370px",marginTop:"200px", height:"150px"}} src={img} />
                            </Col>
                        </Row>

                        <Row>
                            <Col sm="4" xs="6"  ></Col>
                            <Col sm="4" xs="6"></Col>
                            <Col sm="4" ></Col>
                            <br />
                            <div style={{ width: "300px", right: "100px" }} >
                                <nav>
                                    <Link to="/chapter1/qcm4" style={{ "font-size": "25px", "font-family": "Times New Roman", color: "green" }}><img style={{ height: "40px", width: "100px" }} id="profile-img" src="https://upload.wikimedia.org/wikipedia/commons/thumb/7/71/Arrow_east.svg/2560px-Arrow_east.svg.png" /></Link>
                                </nav>
                            </div>
                        </Row>
                    </Container>
                </Card>

            </div>

        )

    }
}

export default Concept5;
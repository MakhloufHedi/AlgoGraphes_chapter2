import React, { Component } from 'react'
import { Container, Row, Col, Card, Button, CardTitle, CardText } from 'reactstrap'
import { Routes, Route, Link } from "react-router-dom";
import img1 from './Images/liste dadj.png'
import img2 from './Images/intro.png'

class Concept9 extends Component {



    render() {
        return (
            <div className="App" >

                <Card body inverse /*color="success"*/ style={{ position: "center", width: "1200px", "background": "#2F8DD6" }}>
                    <CardTitle style={{ "font-size": "50px", "font-family": "Times New Roman" }}>Introduction sur les graphes</CardTitle>
                    <Container>
                        <Row>
                            <Col xs="8">
                                <CardText>
                                    <p style={{ "font-size": "35px", "font-family": "Times New Roman" }}> Représentation par listes </p>
                                    <p style={{ "font-size": "25px", "font-family": "Times New Roman" }} >
                                        <h1>A partir de la matrice d’adjacence: </h1>
                                        <br />
                                        - Un graphe peu dense est un graphe où
                                        Pour stocker uniquement les termes non nuls, on utilise deux
                                        tableaux (.) de dimension n+1 et β(.) de dimension m dans le
                                        cas orienté et 2m dans le cas non orienté.
                                        <br />
                                        - Pour chaque sommet i la liste des successeurs est contenu dans
                                        β(.) à partir de la case numéro (i). Donc l’ensemble des
                                        informations relatives à i est contenu entre les cases  α(i) et
                                        α(i+1)-1 du tableau β(.)
                                        <br />
                                        - α(.) de dimension n+1 et β(.) de dimension m dans le
                                        cas orienté et 2m dans le cas non orienté.
                                        <br />
                                        - Pour chaque sommet i la liste des successeurs est contenu dans
                                        β(.) à partir de la case numéro α(i). Donc l’ensemble des
                                        informations relatives à i est contenu entre les cases α(i) et
                                        α(i+1)-1 du tableau β(.) .
                                    </p>
                                </CardText>
                            </Col>
                            <Col xs="1"></Col>
                            <Col xs="3">
                                
                                <img src={img2} style={{ marginLeft: "-100px", width: "390px" }} />
                                <br />
                                <img src={img1} style={{ marginLeft: "-100px", width: "390px", marginTop: "20px" }} />
                            </Col>
                        </Row>

                        <Row>
                            <Col sm="4" xs="6"  ></Col>
                            <Col sm="4" xs="6"></Col>
                            <Col sm="4" ></Col>
                            <br />
                            <div style={{ width: "300px", right: "100px" }} >
                                <nav>
                                    <Link to="/chapter1/qcm8" style={{ "font-size": "25px", "font-family": "Times New Roman", color: "green" }}><img style={{ height: "40px", width: "100px" }} id="profile-img" src="https://upload.wikimedia.org/wikipedia/commons/thumb/7/71/Arrow_east.svg/2560px-Arrow_east.svg.png" /></Link>
                                </nav>
                            </div>
                        </Row>
                    </Container>
                </Card>

            </div>

        )

    }
}

export default Concept9;
import React, { Component } from 'react'
import { Container, Row, Col, Card, Button, CardTitle, CardText } from 'reactstrap'
import { Routes, Route, Link } from "react-router-dom";

class Concept3 extends Component {



    render() {
        return (
            <div className="App" >

                <Card body inverse /*color="success"*/ style={{ position: "center", width: "1200px", "background": "#2F8DD6" }}>
                    <CardTitle style={{ "font-size": "50px", "font-family": "Times New Roman" }}>Introduction sur les graphes</CardTitle>
                    <Container>
                        <Row>
                            <Col xs="8">
                                <CardText>
                                    <p style={{ "font-size": "35px", "font-family": "Times New Roman" }}> Matrice d’adjacence </p>
                                    <p style={{ "font-size": "25px", "font-family": "Times New Roman" }} >
                                        <br />
                                        
                                        *Soit le graphe G = (S;A). On suppose que les sommets de S sont
                                        numérotés de 1 à n, avec n =|S|. La représentation par matrice
                                        d’adjacence de G consiste en une matrice M de taille n n telle que:
                                        mij: 1 si (i,j) appartient à A, 0 sinon
                                        *Dans le cas de graphes non orientés, la matrice est symétrique par
                                        rapport à sa diagonale descendante. Dans ce cas, on peut ne mémoriser
                                        que la composante triangulaire supérieure de la matrice d’adjacence.
                                        mij =1 si i et j adjacents,0 sinon
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

export default Concept3;
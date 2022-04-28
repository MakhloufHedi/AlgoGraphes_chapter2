import React, { Component } from 'react'
import { Container, Row, Col, Card, Button, CardTitle, CardText } from 'reactstrap'
import { Routes, Route, Link } from "react-router-dom";
import graph1 from "./Images/graph1.jpg";
class Concept24 extends Component {



    render() {
        return (
            <div className="App" >

                <Card body inverse /*color="success"*/ style={{ position: "center", width: "1210px", "background": "#2F8DD6" }}>
                    <CardTitle style={{ "font-size": "50px", "font-family": "Times New Roman" }}>Ordonnancement</CardTitle>
                    <Container>
                        <Row>
                            <Col xs="8">
                                <CardText>
                                    <p style={{ "font-size": "35px", "font-family": "Times New Roman" }}> Chemain Critique </p>
                                    <p style={{ "font-size": "25px", "font-family": "Times New Roman" }} >
                                        <br />
                                        ◉  Comme on a indiquer au 1er concept les dates au plus tot se calculent comme suit: <br/>
                                        - t_init=0 <br />
                                        - t_i=max(t_j + d_j) avec j ∈ Γ- de i <br/>

                                        ◉  Les dates au plus tard :<br/>
                                        - T_fin= T_fin<br/>
                                        - T_j=min(T_i - d_j) avec i ∈ Γ+ de j<br/>

                                        ◉  On appelle Marge de tache i : m_i = T_i - t_i <br/>
                                        ◉  Les taches dont les marges sont nulles sont dites taches critiques. 
                                    </p>
                                </CardText>
                            </Col>
                            <Col xs="1">
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
                                    <Link to="/chapter2/about24" style={{ "font-size": "25px", "font-family": "Times New Roman", color: "green" }}><img style={{ height: "40px", width: "100px" }} id="profile-img" src="https://upload.wikimedia.org/wikipedia/commons/thumb/7/71/Arrow_east.svg/2560px-Arrow_east.svg.png" /></Link>
                                </nav>
                            </div>
                        </Row>
                    </Container>
                </Card>

            </div>

        )

    }
}

export default Concept24; 
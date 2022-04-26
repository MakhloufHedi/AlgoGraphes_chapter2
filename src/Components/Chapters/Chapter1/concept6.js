import React, { Component } from 'react'
import { Container, Row, Col, Card, Button, CardTitle, CardText } from 'reactstrap'
import { Routes, Route, Link } from "react-router-dom";

class Concept6 extends Component {



    render() {
        return (
            <div className="App" >

                <Card body inverse /*color="success"*/ style={{ position: "center", width: "1200px", "background": "#2F8DD6" }}>
                    <CardTitle style={{ "font-size": "50px", "font-family": "Times New Roman" }}>Degrès:</CardTitle>
                    <Container>
                        <Row>
                            <Col xs="8">
                                <CardText>
                                    <p style={{ "font-size": "35px", "font-family": "Times New Roman" }}> Modélisation </p>
                                    <p style={{ "font-size": "25px", "font-family": "Times New Roman" }} >
                                    
                                        Le degré extérieur de i, d+(i), est le nombre de sommets suivantsde i ; d+(i) = |S(i)|.
                                        <br />
                                        Le degré intérieur de i, d-(i), est le nombre de sommets précédentsde i ; d-(i) = |P(i)|.
                                        <br />
                                        Le degré de i est d(i) = d+(i) + d-(i).

                                    </p>
                                </CardText>
                            </Col>
                            <Col xs="1"></Col>
                            <Col xs="3">
                                {/* <img id="profile-img" className="profile-img-card" src="http://www.ensi-uma.tn/wp-content/uploads/2017/01/cropped-Logo-p.png" /> */}
                            </Col>
                        </Row>

                        <Row>
                            <Col sm="4" xs="6"  ></Col>
                            <Col sm="4" xs="6"></Col>
                            <Col sm="4" ></Col>
                            <br />
                            <div style={{ width: "300px", right: "100px" }} >
                                <nav>
                                    <Link to="/chapter1/qcm5" style={{ "font-size": "25px", "font-family": "Times New Roman", color: "green" }}><img style={{ height: "40px", width: "100px" }} id="profile-img" src="https://upload.wikimedia.org/wikipedia/commons/thumb/7/71/Arrow_east.svg/2560px-Arrow_east.svg.png" /></Link>
                                </nav>
                            </div>
                        </Row>
                    </Container>
                </Card>

            </div>

        )

    }
}

export default Concept6;
import React, { Component } from 'react'
import { Container, Row, Col, Card, Button, CardTitle, CardText } from 'reactstrap'
import { Routes, Route, Link } from "react-router-dom";
import abr from "./Images/ch3-2.png";

class Concept3_2 extends Component {



  render() {
    return (
      <div >

        <Card body inverse /*color="success"*/ style={{ position: "center", width: "1200px", "background": "#2F8DD6" }}>
          <CardTitle style={{ "font-size": "50px", "font-family": "Times New Roman" }}>chapitre 3: Arbres à poids minimum</CardTitle>
          <Container>
            <Row>
              <Col xs="8">
                <CardText>
                  <p style={{ "font-size": "35px", "font-family": "Times New Roman" }}> problème de l'arbre de poids minimum </p>
                  <p style={{ "font-size": "25px", "font-family": "Times New Roman" }} >
                    <br />
                    - on considere un graphe G=(X,U) non orienté et w(u) poids de l'arête u.
                      G'=(X,U') un graphe partiel de G. Son poids est:
                                    w(G')=Σw(u),u∈U'
                    <br />
                    - on suppose qu Ge st connexe, sinon on travaille sur chaque composante
                      connexe de G.
                    <br />
                    - le problème de l'arbre minimal est de chercher un arbre T' de G tel que:
                                  w(T')= min (w(T)), T: arbre de G
                  </p>
                </CardText>
              </Col>
              <Col xs="1"></Col>
              {/* images */}
              <Col xs="3">
                <img  src={abr} />
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
                  <Link to="/Qcm3_2" style={{ "font-size": "25px", "font-family": "Times New Roman", color: "green" }}><img style={{ height: "40px", width: "100px" }} id="profile-img" src="https://upload.wikimedia.org/wikipedia/commons/thumb/7/71/Arrow_east.svg/2560px-Arrow_east.svg.png" /></Link>
                </nav>
              </div>
            </Row>
          </Container>
        </Card>

      </div>

    )

  }
}

export default Concept3_2;
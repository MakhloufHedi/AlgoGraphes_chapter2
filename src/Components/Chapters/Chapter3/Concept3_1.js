import React, { Component } from 'react'
import { Container, Row, Col, Card, Button, CardTitle, CardText } from 'reactstrap'
import { Routes, Route, Link } from "react-router-dom";
import abr from "./Images/arbre.png"

class Concept3_1 extends Component {



  render() {
    return (
      <div className="App" >

        <Card body inverse /*color="success"*/ style={{ position: "center", width: "1200px", "background": "#2F8DD6" }}>
          <CardTitle style={{ "font-size": "50px", "font-family": "Times New Roman" }}>chapitre 3: Arbres à poids minimum</CardTitle>
          <Container>
            <Row>
              <Col xs="8">
                <CardText>
                  <p style={{ "font-size": "35px", "font-family": "Times New Roman" }}> définitions </p>
                  <p style={{ "font-size": "25px", "font-family": "Times New Roman" }} >
                    <br />
                    - Un arbre est un graphe non orienté connexe sans cycles.
                    <br />
                    - Un graphe sans cycles qui n’est pas connexe est appelé forêt. Chaque
                      composante connexe est un arbre.
                    <br />
                    - [X,T] est un arbre si et seulement si il existe une chaine et une seule 
                      entre deux sommets quelconques.
                  </p>
                </CardText>
              </Col>
              <Col xs="1"></Col>
              {/* images */}
              <Col xs="3">
                <img   src={abr} />
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
                  <Link to="/Qcm3_1" style={{ "font-size": "25px", "font-family": "Times New Roman", color: "green" }}><img style={{ height: "40px", width: "100px" }} id="profile-img" src="https://upload.wikimedia.org/wikipedia/commons/thumb/7/71/Arrow_east.svg/2560px-Arrow_east.svg.png" /></Link>
                </nav>
              </div>
            </Row>
          </Container>
        </Card>

      </div>

    )

  }
}

export default Concept3_1;
import React, { Component } from 'react'
import { Container, Row, Col, Card, Button, CardTitle, CardText } from 'reactstrap'
import { Routes, Route, Link } from "react-router-dom";

class Concept extends Component {



  render() {
    return (
      <div className="App" >

        <Card body inverse /*color="success"*/ style={{ position: "center", width: "1200px", "background": "#2F8DD6" }}>
          <CardTitle style={{ "font-size": "50px", "font-family": "Times New Roman" }}>Introduction sur les graphes</CardTitle>
          <Container>
            <Row>
              <Col xs="8">
                <CardText>
                  <p style={{ "font-size": "35px", "font-family": "Times New Roman" }}> Modélisation </p>
                  <p style={{ "font-size": "25px", "font-family": "Times New Roman" }} >
                    <br />
                    - Plusieurs problèmes dans différentes disciplines (Réseaux
                    informatiques, télécommunications, chimie, applications
                    industrielles, ...)
                    <br />
                    - Un graphe peut représenter simplement la structure, les
                    connexions, les cheminements possibles d’un ensemble
                    complexe comprenant un grand nombre de situations.
                    <br />
                    - Un graphe est une structure de données puissante pour
                    l’informatique.
                  </p>
                </CardText>
              </Col>
              <Col xs="1"></Col>
              {/* images */}
              <Col xs="3">
                <img id="profile-img" className="profile-img-card" src="http://www.ensi-uma.tn/wp-content/uploads/2017/01/cropped-Logo-p.png" />
              </Col>
              {/* images  */}
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

export default Concept;
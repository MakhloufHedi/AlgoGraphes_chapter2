import React, { Component } from 'react'
import { Container, Row, Col, Card, Button, CardTitle, CardText } from 'reactstrap'
import { Routes, Route, Link } from "react-router-dom";
import abr from "./Images/Prim.png";

class Concept3_4 extends Component {



  render() {
    return (
      <div className="App" >

        <Card body inverse /*color="success"*/ style={{ position: "center", width: "1200px", "background": "#2F8DD6" }}>
          <CardTitle style={{ "font-size": "50px", "font-family": "Times New Roman" }}>chapitre 3: Arbres à poids minimum</CardTitle>
          <Container>
            <Row>
              <Col xs="8">
                <CardText>
                  <p style={{ "font-size": "35px", "font-family": "Times New Roman" }}> solutions </p>
                  <p style={{ "font-size": "25px", "font-family": "Times New Roman" }} >
                    <br />
                    - Principe de l'algorithme de Prim:

                    <br />
                    - L'algorithme consiste à faire croître un arbre depuis un sommet. 
                    On part d'un sous-ensemble contenant un sommet unique. À chaque itération, 
                    on agrandit ce sous-ensemble en prenant l'arête incidente à ce sous-ensemble 
                    de coût minimum. En effet, si l'on prend une arête dont les deux extrémités 
                    appartiennent déjà à l'arbre, l'ajout de cette arête créerait un deuxième chemin 
                    entre les deux sommets dans l'arbre en cours de construction et le résultat 
                    contiendrait un cycle.
                    <br />
                    -on remarque que cet principe est voisin de celui de Dijikstra.
                  </p>
                </CardText>
              </Col>
              <Col xs="1"></Col>
              {/* images */}
              <Col xs="3">
                <img style={{marginTop:"-69px"}} src={abr} />
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
                  <Link to="/Qcm3_4" style={{ "font-size": "25px", "font-family": "Times New Roman", color: "green" }}><img style={{ height: "40px", width: "100px" }} id="profile-img" src="https://upload.wikimedia.org/wikipedia/commons/thumb/7/71/Arrow_east.svg/2560px-Arrow_east.svg.png" /></Link>
                </nav>
              </div>
            </Row>
          </Container>
        </Card>

      </div>

    )

  }
}

export default Concept3_4;
import React, { Component } from 'react'
import { Container, Row, Col, Card, Button, CardTitle, CardText } from 'reactstrap'
import { Routes, Route, Link } from "react-router-dom";
import abr from "./Images/Kruskal.gif";
class Concept3_3 extends Component {



  render() {
    return (
      <div >

        <Card body inverse /*color="success"*/ style={{ position: "center", width: "1200px", "background": "#2F8DD6" }}>
          <CardTitle style={{ "font-size": "50px", "font-family": "Times New Roman" }}>chapitre 3: Arbres à poids minimum</CardTitle>
          <Container>
            <Row>
              <Col xs="8">
                <CardText>
                  <p style={{ "font-size": "35px", "font-family": "Times New Roman" }}> solutions </p>
                  <p style={{ "font-size": "25px", "font-family": "Times New Roman" }} >
                    <br />
                    - Dans cette partie, on s'interresse que sur l'algorithme de Kruskal 
                      et l'algorithme de Prim.
                    <br />
                    - Principe de l'algorithme de Kruskal:
                      L'algorithme construit un arbre couvrant minimum en sélectionnant
                       des arêtes par poids croissant. Plus précisément, l'algorithme 
                       considère toutes les arêtes du graphe par poids croissant (en pratique,
                        on trie d'abord les arêtes du graphe par poids croissant) et pour chacune
                         d'elles, il la sélectionne si elle ne crée pas un cycle.
                    <br />
                    
                  </p>
                </CardText>
              </Col>
              <Col xs="1"></Col>
              {/* images */}
              <Col xs="3">
                <img style={{marginLeft:"-80px"}} src={abr} />
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
                  <Link to="/Qcm3_3" style={{ "font-size": "25px", "font-family": "Times New Roman", color: "green" }}><img style={{ height: "40px", width: "100px" }} id="profile-img" src="https://upload.wikimedia.org/wikipedia/commons/thumb/7/71/Arrow_east.svg/2560px-Arrow_east.svg.png" /></Link>
                </nav>
              </div>
            </Row>
          </Container>
        </Card>

      </div>

    )

  }
}

export default Concept3_3;
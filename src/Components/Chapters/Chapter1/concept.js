import React, { Component } from 'react'
import { Container, Row, Col, Card, Button, CardTitle, CardText } from 'reactstrap'

class Concept extends Component {





  
  render() {
    return (
      <div className="App" >

        <Card body inverse color="primary" style={{ position: "center", width: "1200px" }}>
          <CardTitle style={{ "font-size": "50px", "font-family": "Times New Roman" }}>Introduction sur les graphes</CardTitle>
          <Container>
            <Row>
              <Col
                xs="8"
              >
                <CardText>
                 <p style={{ "font-size": "35px", "font-family": "Times New Roman" }}> Modélisation </p>
                <p style={{ "font-size": "25px", "font-family": "Times New Roman" }} >  
                <br/>
                  - Plusieurs problèmes dans différentes disciplines (Réseaux
                  informatiques, télécommunications, chimie, applications
                  industrielles, ...)
                  <br/>
                  - Un graphe peut représenter simplement la structure, les
                  connexions, les cheminements possibles d’un ensemble
                  complexe comprenant un grand nombre de situations.
                  <br/>
                  - Un graphe est une structure de données puissante pour
                  l’informatique.
                </p>
                </CardText>
              </Col>
              <Col
                xs="1"
              ></Col>
              <Col
                // className="bg-light border"
                xs="3"
              >
                <img id="profile-img" className="profile-img-card" src="http://www.ensi-uma.tn/wp-content/uploads/2017/01/cropped-Logo-p.png" />

              </Col>
            </Row>


            <Row>
              <Col
                sm="4"
                xs="6"
              >

              </Col>
              <Col
                sm="4"
                xs="6"
              >

              </Col>
              <Col
                sm="4"
              >

              </Col>
              <br/>
              <div style={{ width: "300px", right: "100px" }} >
                <Button color="success"  >Next</Button>
              </div>
            </Row>
          </Container>
        </Card>

      </div>

    )

  }
}

export default Concept;
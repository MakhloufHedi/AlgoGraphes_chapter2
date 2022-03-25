import React, { Component } from 'react';
import { Container, Row, Col, Card, Button, CardTitle, CardText } from 'reactstrap'
import { Routes, Route, Link } from "react-router-dom";

class Menu extends Component {




    render() {

        return (
            <Card body inverse /*color="success"*/ style={{ position: "center", width: "1200px", "background": "#2F8DD6" }}>
                <img id="profile-img" className="profile-img-card" src="http://www.ensi-uma.tn/wp-content/uploads/2017/01/cropped-Logo-p.png" />
                <CardTitle style={{ "font-size": "50px", "font-family": "Times New Roman", "text-align": "center" }}>Main Menu</CardTitle>
                <br /> <br /><br />
                <Container>
                    <Row>
                        <Col xs="4" >
                            {/* <CardText>
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
                  </CardText> */}
                            <br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br />
                        </Col>

                        <Col xs="4">
                            <div className="d-grid gap-2"><Button style={{ "background": "#6FA6E6", "font-family": "Comic Sans MS", height: "50px", width: "350px" }}   > Start Game </Button></div>  <br />
                            <div className="d-grid gap-2"><Button style={{ "background": "#6FA6E6", "font-family": "Comic Sans MS", height: "50px", width: "350px" }}  > Playground </Button></div>  <br />
                            <div className="d-grid gap-2"><Button style={{ "background": "#6FA6E6", "font-family": "Comic Sans MS", height: "50px", width: "350px" }}  > Scoreboard </Button></div>  <br />
                            <div className="d-grid gap-2"><Button style={{ "background": "#6FA6E6", "font-family": "Comic Sans MS", height: "50px", width: "350px" }}  > FAQ </Button></div>  <br />
                            <div className="d-grid gap-2"><Button style={{ "background": "#6FA6E6", "font-family": "Comic Sans MS", height: "50px", width: "350px" }}  > Logout </Button></div>  <br />

                        </Col>

                        <Col xs="4" >
                            {/* <img id="profile-img" className="profile-img-card" src="http://www.ensi-uma.tn/wp-content/uploads/2017/01/cropped-Logo-p.png" /> */}
                        </Col>
                    </Row>




                </Container>
            </Card>
        )
    }
}

export default Menu;
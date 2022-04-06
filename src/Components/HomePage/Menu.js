import React, { Component } from 'react';
import { Container, Row, Col, Card, Button, CardTitle, CardText } from 'reactstrap'
import { Routes, Route, Link, Navigate } from "react-router-dom";
import Scoreboardd from '../Scoreboard/Scoreboard2';

class Menu extends Component {

    constructor(props) {
        super(props);
        this.state = { redirect: false };
        this.Logout = this.Logout.bind(this);
    }

    Logout() {
        localStorage.removeItem('token');
        this.setState({ redirect: true });
        localStorage.setItem("isLoggedout", true);

    }


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
                                </CardText> */}
                            <br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br />
                        </Col>

                        <Col xs="4">
                        <nav><Link to="/Chapters"><div className="d-grid gap-2"><Button style={{ "background": "#6FA6E6", "font-family": "Comic Sans MS", height: "50px", width: "350px" }}   > Start Game </Button></div> </Link></nav> <br />
                            <div className="d-grid gap-2"><Button style={{ "background": "#6FA6E6", "font-family": "Comic Sans MS", height: "50px", width: "350px" }}  > Playground </Button></div>  <br />
                            <nav><Link to="/Scoreboard"><div className="d-grid gap-2"><Button style={{ "background": "#6FA6E6", "font-family": "Comic Sans MS", height: "50px", width: "350px" }}  > Scoreboard </Button></div></Link></nav>  <br />
                            <nav><Link to="/Profile"><div className="d-grid gap-2"><Button style={{ "background": "#6FA6E6", "font-family": "Comic Sans MS", height: "50px", width: "350px", underline: "none" }} > Profile </Button></div></Link></nav>  <br />
                            <div className="d-grid gap-2"><Button style={{ "background": "#6FA6E6", "font-family": "Comic Sans MS", height: "50px", width: "350px" }}  > FAQ </Button></div>  <br />
                            <div className="d-grid gap-2"><Button style={{ "background": "#6FA6E6", "font-family": "Comic Sans MS", height: "50px", width: "350px" }} onClick={this.Logout} > Logout </Button></div>  <br />

                        </Col>

                        <Col xs="4" >
                            {/* <img id="profile-img" className="profile-img-card" src="http://www.ensi-uma.tn/wp-content/uploads/2017/01/cropped-Logo-p.png" /> */}
                        </Col>
                    </Row>

                   






                </Container>
                <Routes>
                    <Route path="/Scoreboard" element={<Scoreboardd />} />
                    {/* <Route path="/Profile" element={<Pro />} /> */}
                </Routes>
                {this.state.redirect ? <Navigate to="/" replace /> : null}
            </Card>
        )
    }
}

export default Menu;
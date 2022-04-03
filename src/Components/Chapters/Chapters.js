import react, { Component } from 'react';
import { Container, Row, Col, Card, Button, CardTitle, CardText } from 'reactstrap'
import { Routes, Route, Link, Navigate } from "react-router-dom";
import chap1 from '../Images/chapter1.png'
import chap2 from '../Images/chapter2.png'
import chap3 from '../Images/chapter3.png'
import chap4 from '../Images/chapter4.png'

class Chapters extends Component {


    render() {
        return (
            <Card body inverse /*color="success"*/ style={{ position: "center", width: "1200px", "background": "#2F8DD6" }}>
                <img id="profile-img" className="profile-img-card" src="http://www.ensi-uma.tn/wp-content/uploads/2017/01/cropped-Logo-p.png" />
                <CardTitle style={{ "font-size": "50px", "font-family": "Times New Roman", "text-align": "center" }}>Select a chapter</CardTitle>
                <br /> <br /><br />
                <Container>
                    <Row xs="4">

                        <nav ><Link to="/Concept"><img src={chap1} style={{ position: "center", marginBottom: "20px", width: "250px", height: "250px" }} /></Link></nav>  <br />
                        <nav ><Link to="/Scoreboard"><img src={chap2} style={{ position: "center", marginBottom: "20px", width: "250px", height: "250px" }} /></Link></nav>  <br />
                        <nav ><Link to="/Scoreboard"><img src={chap3} style={{ position: "center", width: "250px", height: "250px" }} /></Link></nav>  <br />
                        <nav ><Link to="/Scoreboard"><img src={chap4} style={{ position: "center", marginBottom: "20px ", width: "250px", height: "250px" }} /></Link></nav>  <br />

                    </Row>

                </Container>

                {/* {this.state.redirect ? <Navigate to="/" replace /> : null} */}
            </Card>
        )
    }

}


export default Chapters;
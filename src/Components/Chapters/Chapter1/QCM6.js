import React, { Component } from 'react'
import {
  Card,
  Button,
  Container,
  Row,
  Col,
  CardTitle,
  CardBody
} from 'reactstrap';
import "./mcqstyle.css";
import { Routes, Route, Link } from "react-router-dom";

class QCM extends Component {

  constructor(props) {
    super(props);
    this.state = {
      "rSelected": "",
      "setRSelected": "",
      "response": "",
    };
    this.onChange = this.onChange.bind(this);
  }

  onChange(e) {
    console.log(e.target.name);
    if (e.target.name.localeCompare("1") == 0) {
      //  alert("true"); 
      let c = parseInt(localStorage.getItem("sc"));
      c += 1;
      localStorage.setItem("sc", c);
      alert("true");
    }
    else
      alert("false");
  }

  render() {

    return (

      <div className="grid" style={{width:"1200px"}}>
        <Card className="cardpostion mcqstyle">
          <CardBody>
            <CardTitle className="textstyleheader">
              <h2>Q6. Soit C une matrice d'incidence et u1 un arc et i=2 le sommet, C(u1,2) vaut :</h2>
              <br />
            </CardTitle>
            <Row>
              <Button
                className="buttonstyle" value={this.state.response} name="1" onClick={this.onChange}
              >
                1. 1 si le sommet 2 est la source de l'arc.
              </Button>
            </Row>
            <br />
            <Row style={{ paddingTop: "5px" }}>
              <Button

                className="buttonstyle" value={this.state.response} name="2" onClick={this.onChange}
              >
                2. -1 si le sommet 2 est la source de l'arc.
              </Button>
            </Row>
            <br />
            <Row style={{ paddingTop: "5px" }}>
              <Button

                className="buttonstyle" value={this.state.response} name="3" onClick={this.onChange}
              >
                3.  0 si le sommet 2 est la source de l'arc.
              </Button>
            </Row>
            <br />
            <Row style={{ paddingTop: "5px" }}>
              <Button

                className="buttonstyle" value={this.state.response} name="4" onClick={this.onChange}
              >
                4. Aucune réponse correcte.
              </Button>
            </Row>
            <br />
            {/* <p className="buttonstyle">You Selected: </p> */}
          </CardBody>
          <Row>
            <Col sm="4" xs="6"  ></Col>
            <Col sm="4" xs="6"></Col>
            <Col sm="4" ></Col>
            <br />
            <div style={{ width: "300px", right: "100px" }} >
              <nav>
                <Link to="/chapter1/concept8" style={{ "font-size": "25px", "font-family": "Times New Roman", color: "green" }}><img style={{ height: "40px", width: "100px" }} id="profile-img" src="https://upload.wikimedia.org/wikipedia/commons/thumb/7/71/Arrow_east.svg/2560px-Arrow_east.svg.png" /></Link>
              </nav>
            </div>
          </Row>
        </Card>
      </div>
    );
  }
}

export default QCM;
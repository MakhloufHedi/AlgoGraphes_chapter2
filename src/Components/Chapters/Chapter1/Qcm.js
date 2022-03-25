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

class QCM extends Component {

  constructor(props) {
    super(props);
    this.state = {
      "rSelected": "",
      "setRSelected": "",
    };
  }

  render() {

    return (

      <div className="grid">
        <Card className="cardpostion mcqstyle">
          <CardBody>
            <CardTitle className="textstyleheader">
              <h2>Q1. Un graphe symétrique est :</h2>
              <br />
            </CardTitle>
            <Row>
              <Button
                className="buttonstyle"
              >
                1. Un graphe dans lequel il n'y a pas de sommets isolés.
              </Button>
            </Row>
            <br />
            <Row style={{ paddingTop: "5px" }}>
              <Button

                className="buttonstyle"
              >
                2. Un graphe dans lequel il y a au moins un arc entre deux sommets.
              </Button>
            </Row>
            <br />
            <Row style={{ paddingTop: "5px" }}>
              <Button

                className="buttonstyle"
              >
                3.  Un graphe dans lequel si l'arc (i,j) existe alors l'arc (j,i) existe aussi.
              </Button>
            </Row>
            <br />
            <Row style={{ paddingTop: "5px" }}>
              <Button

                className="buttonstyle"
              >
                4. Un graphe dans lequel soit l'arc (i,j) existe soit l'arc (j,i).
              </Button>
            </Row>
            <br />
            {/* <p className="buttonstyle">You Selected: </p> */}
          </CardBody>
        </Card>
      </div>
    );
  }
}

export default QCM;
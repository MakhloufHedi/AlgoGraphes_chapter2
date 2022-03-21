import React, { Component } from 'react'
import { Card,
    Button,
    Container,
    Row,
    Col,
    CardTitle,
    CardBody} from 'reactstrap';
import "./mcqstyle.css";    

class QCM extends Component{

    constructor(props) {
        super(props);
        this.state = {
            "rSelected": "",
            "setRSelected": "",           
        };
        this.onChange = this.onChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
        // this.redirect=this.redirect.bind(this);
    }

    onChange(e) {
        this.setState({ [e.target.name]: e.target.value });
    }
    render(){
        
        return(
        
        <div className="grid">
        <Card className="cardpostion mcqstyle">
          <CardBody>
            <CardTitle className="textstyleheader">
              <h2>Q1. What is your Name?</h2>
            </CardTitle>

            <Row>
              <Col>
                <Button
                
                  
                  className="buttonstyle"
                >
                  1. Anjil
                </Button>
              </Col>
              <Col style={{ paddingTop: "5px" }}>
                <Button
                  
                  className="buttonstyle"
                >
                  2. Anjil
                </Button>
              </Col>
              <Col style={{ paddingTop: "5px" }}>
                <Button
                  
                  className="buttonstyle"
                >
                  3. Anjil
                </Button>
              </Col>
              <Col style={{ paddingTop: "5px" }}>
                <Button
                  
                  className="buttonstyle"
                >
                  4. Anjil
                </Button>
              </Col>
            </Row>
            <p className="buttonstyle">You Selected: </p>
          </CardBody>
        </Card>
      </div>
      );
    }
}

export default QCM;
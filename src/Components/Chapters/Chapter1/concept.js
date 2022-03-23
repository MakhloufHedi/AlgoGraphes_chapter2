import React, { Component } from 'react'
import { Container, Row, Col, Card, Button, CardTitle, CardText } from 'reactstrap'

class Concept extends Component {


  render() {
    return (
      <div className="App" >

        <Card body inverse color="primary"  style={{ position: "center", width: "1200px"  }}>
          <CardTitle style={{ "font-size": "50px", "font-family": "Times New Roman"  }}>Title</CardTitle>
          <Container>
            <Row>
              <Col
                xs="8"
              >
                <CardText>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean at
                  elit cursus, pellentesque dolor sed, fringilla augue. Donec bibendum
                  nibh et auctor eleifend. Vestibulum ante ipsum primis in faucibus orci
                  luctus et ultrices posuere cubilia curae; Mauris ultrices justo quis
                  sapien faucibus ultricies.
                </CardText>
              </Col>
              <Col
                className="bg-light border"
                xs="4"
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
              <div style={{ width: "300px", right: "100px"}} >
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
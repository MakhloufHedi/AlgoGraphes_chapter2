import React, { Component } from 'react'
import Crossword from "@jaredreisinger/react-crossword";
import {
    Card,
    Button,
    Container,
    Row,
    Col,
    CardTitle,
    CardBody,
    CardText
} from 'reactstrap';

const data = {
    across: {
        1: {
            clue: "abbreviated programming language",
            answer: "JS",
            row: 1,
            col: 6
        },
        2: {
            clue: "JS library for building UIs",
            answer: "REACT",
            row: 3,
            col: 6
        },
        3: {
            clue: "DOM bindings for React Router",
            answer: "ROUTERDOM",
            row: 5,
            col: 0
        },
        4: {
            clue: "JS runtime environment",
            answer: "NODE",
            row: 10,
            col: 2
        }
    },
    down: {
        5: {
            clue: "content management system",
            answer: "WORDPRESS",
            row: 0,
            col: 0
        },
        6: {
            clue: "enable config override",
            answer: "REWIRED",
            row: 4,
            col: 4
        },
        7: {
            clue: "crossword creator",
            answer: "JARED",
            row: 1,
            col: 6
        },
        8: {
            clue: "online publishing platform",
            answer: "MEDIUM",
            row: 5,
            col: 8
        },
        9: {
            clue: "favourite code editor",
            answer: "ATOM",
            row: 2,
            col: 10
        }
    }
};

class crosswords extends Component {

    render() {
        return (
            <Card body inverse /*color="success"*/ style={{ position: "center", width: "1350px", "background": "#2F8DD6" }}>
                <Container>
                    <Row>
                        <Col xs="8">
                            <CardText style={{   "marginLeft":"400px", color:"black" }}>
                                <Crossword data={data}  />
                            </CardText>
                        </Col>
                    </Row>
                </Container>

            </Card>
        );
    }
}

export default crosswords;
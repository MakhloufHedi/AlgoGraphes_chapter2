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
            answer: "articulation",
            row: 3,
            col: 0
        },
        2: {
            clue: "JS library for building UIs",
            answer: "degre",
            row: 6,
            col: 7
        },
        3: {
            clue: "JS library for building UIs",
            answer: "suivant",
            row: 8,
            col: 3
        },
        4: {
            clue: "DOM bindings for React Router",
            answer: "precedant",
            row: 10,
            col: 5
        },
        5: {
            clue: "Un arc dont la supression augmente le nombre des comosantes connexes",
            answer: "incidence",
            row: 12,
            col: 0
        },
        6: {
            clue: "Un arc dont la supression augmente le nombre des comosantes connexes",
            answer: "isthme",
            row: 15,
            col: 8
        }
    },
    down: {
        7: {
            clue: "Un graphe qui possede une chaine entre 2 sommets quelconques",
            answer: "Connexe",
            row: 0,
            col: 11
        },
        8: {
            clue: "enable config override",
            answer: "adjacence",
            row: 5,
            col: 7
        },
        9: {
            clue: "crossword creator",
            answer: "symetrique",
            row: 6,
            col: 13
        }
    }
};

class crosswords extends Component {

    constructor(props) {
        super(props);
        this.state = {
          "rSelected": "",
          "setRSelected": "",
          "response": "",
        };
        this.correct = this.correct.bind(this);
      }
    correct(){
        alert("félications");
        document.write("félicitations")
    }
    render() {
        return (
            <Card body inverse /*color="success"*/ style={{ position: "center", width: "1350px", "background": "#2F8DD6" }}>
                <Container>
                    <Row>
                        <Col xs="8">
                            <CardText style={{   "marginLeft":"400px", color:"black" }}>
                                <Crossword data={data} onCrosswordCorrect={this.correct}  />
                            </CardText>
                        </Col>
                    </Row>
                    {/* <Button onclick={fillAllAnswers()}>Correct answers</Button> */}
                </Container>

            </Card>
        );
    }
}

export default crosswords;
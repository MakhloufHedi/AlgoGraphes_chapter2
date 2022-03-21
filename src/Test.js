import React, { Component } from 'react'
import { Breadcrumb, BreadcrumbItem,Card, CardBody, CardTitle, Button,CardText } from 'reactstrap'
class Test extends Component {

    render() {
        return (
            <div>
                <Card
                    body
                    inverse
                    style={{
                        backgroundColor: '#333',
                        borderColor: '#333'
                    }}
                >
                    <CardTitle tag="h5">
                        Special Title Treatment
                    </CardTitle>
                    <CardText>
                        With supporting text below as a natural lead-in to additional content.
                    </CardText>
                    <Button>
                        Button
                    </Button>
                </Card>
                <Card
                    body
                    color="primary"
                    inverse
                >
                    <CardTitle tag="h5">
                        Special Title Treatment
                    </CardTitle>
                    <CardText>
                        With supporting text below as a natural lead-in to additional content.
                    </CardText>
                    <Button>
                        Button
                    </Button>
                </Card>
                <Card
                    body
                    color="success"
                    inverse
                >
                    <CardTitle tag="h5">
                        Special Title Treatment
                    </CardTitle>
                    <CardText>
                        With supporting text below as a natural lead-in to additional content.
                    </CardText>
                    <Button>
                        Button
                    </Button>
                </Card>
                <Card
                    body
                    color="info"
                    inverse
                >
                    <CardTitle tag="h5">
                        Special Title Treatment
                    </CardTitle>
                    <CardText>
                        With supporting text below as a natural lead-in to additional content.
                    </CardText>
                    <Button>
                        Button
                    </Button>
                </Card>
                <Card
                    body
                    color="warning"
                    inverse
                >
                    <CardTitle tag="h5">
                        Special Title Treatment
                    </CardTitle>
                    <CardText>
                        With supporting text below as a natural lead-in to additional content.
                    </CardText>
                    <Button>
                        Button
                    </Button>
                </Card>
                <Card
                    body
                    color="danger"
                    inverse
                >
                    <CardTitle tag="h5">
                        Special Title Treatment
                    </CardTitle>
                    <CardText>
                        With supporting text below as a natural lead-in to additional content.
                    </CardText>
                    <Button>
                        Button
                    </Button>
                </Card>
            </div>
        )
    }

}
export default Test;
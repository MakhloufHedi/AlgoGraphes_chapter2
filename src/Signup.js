import React, { Component } from 'react';
// import { Row, Col, Button, Form, Card, Container } from 'reactstrap';
import { Button, Form, FormGroup, Label, Input, FormText,Card,Container } from 'reactstrap';
import axios from 'axios';
import jwt_decode from "jwt-decode";
import { Routes, Route, Link, Navigate } from "react-router-dom";

class Signup extends Component {

    constructor(props) {
        super(props);
        this.state = {
            "username": "",
            "roles": [],
            "password": "",
            "email": "",
            "nom": "",
            "prenom": "",
            "score": "",
        };
        this.onChange = this.onChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
        this.fieldsControl = this.fieldsControl.bind(this);

    }



    onChange(e) {
        this.setState({ [e.target.name]: e.target.value });
    }


    // updateUser(id, pid, gid) {
    //     axios({
    //         method: 'patch',
    //         url: `http://localhost:8000/api/users/${id}`,
    //         data: {
    //             "username": this.state.username,
    //             "roles": [
    //                 "string"
    //             ],
    //             "password": this.state.password,
    //             "nom": this.state.nom,
    //             "prenom": this.state.prenom,
    //             "email": this.state.email,
    //             "score": 0.5
    //         },
    //         headers: {
    //             "Content-Type": 'application/merge-patch+json'
    //         }
    //     }).then(res => {
    //         alert("Utilisateur modifié")
    //     }).catch(err => {
    //         alert("Opération non aboutie")
    //         console.log(err);
    //     })
    // }


    handleSubmit(e) {
        e.preventDefault();
        axios.post(`http://localhost:8000/api/users`, {

            "username": this.state.username,
            "roles": [
                "string"
            ],
            "password": this.state.password,
            "nom": this.state.nom,
            "prenom": this.state.prenom,
            "email": this.state.email,
            "score": 0.5
        })
            .then(res => {
                alert("Utilisateur ajouté")
            }).catch(err => {
                alert("Opération no aboutie")
            })
    }

    fieldsControl() {
        let message = "";

        if (!isNaN(this.state.username)) {
            message = message + " le username ne doit pas être un nombre! \n"
        }

        var test1 = this.state.username.split("")
        for (let i = 0; i < test1.length; i++) {
            if (!isNaN(test1[i])) {
                message = message + "le username ne peut pas contenir un nombre ! \n"
            }
        }

        if (!isNaN(this.state.nom)) {
            message = message + " le nom ne doit pas être un nombre ! \n"
        }

        var test2 = this.state.nom.split("");
        console.log(test2);
        for (let i = 0; i < test2.length; i++) {
            if (!isNaN(test2[i])) {
                message = message + " le nom ne peut pas contenir un nombre ! \n"
                break;
            }
        }

        if (!isNaN(this.state.prenom)) {
            message = message + " le prenom ne doit pas être un nombre ! \n"
        }

        var test3 = this.state.prenom.split("")
        console.log(test3);
        for (let i = 0; i < test3.length; i++) {
            if (!isNaN(test3[i])) {
                message = message + " le prenom ne peut pas contenir un nombre ! \n"
                break;
            }

        }




        return message;
    }



    render() {
        return (
            <Card body inverse /*color="success"*/ style={{ position: "center", width: "1350px", "background": "#2F8DD6" }}>
                <Container>
                    <Form onSubmit={this.handleSubmit}>
                    <FormGroup>
                            <Label for="Username">Username</Label>
                            <Input type="text" name="username" id="username" placeholder="username" value={this.state.username} onChange={this.onChange} required />
                        </FormGroup>
                    <FormGroup>
                            <Label for="Nom">Nom</Label>
                            <Input placeholder="Nom" name="nom" value={this.state.nom} onChange={this.onChange} required  />
                        </FormGroup>
                        <FormGroup>
                            <Label for="examplePassword">Prenom</Label>
                            <Input type="text" name="prenom" value={this.state.prenom} onChange={this.onChange} required placeholder="Prenom" />
                        </FormGroup>
                        <FormGroup>
                            <Label for="exampleEmail">Email</Label>
                            <Input type="text" placeholder="Email " name="email" value={this.state.email} onChange={this.onChange} required />
                        </FormGroup>
                        <FormGroup>
                            <Label for="password">Mot de passe</Label>
                            <Input type="password" name="password" value={this.state.password} onChange={this.onChange} required placeholder="password" />
                        </FormGroup>
                        
                        
                        
            
                     
                        <Button color="success" >Submit</Button> 
                        <nav ><Link to="/"><Button color="success" style={{width:"79px",marginTop:"10px"}}>Login</Button></Link> </nav >
                        
                    </Form>
                </Container>
            </Card>
        )
    }
}

export default Signup;
import Cards from './Cards';
import { Routes, Route, Link } from "react-router-dom";
import './cards.css';
import { Container, Row, Col, Card, Button, CardTitle, CardText } from 'reactstrap'

function Game() {
    return (
        <div className="App">
        <Card body inverse /*color="success"*/ style={{ position: "center", width: "1200px", "background": "#2F8DD6" }}>
            <h1>Your reward: Concentration game</h1>
             <div style={{marginLeft:"235px"}}>
            <Cards  />
            </div>
            <div style={{ width: "100px", left: "100px"  }} >
                <nav>
                    <Link to="/Chapters" style={{ "font-size": "25px", "font-family": "Times New Roman", color: "green" }}><img style={{ height: "40px", width: "100px" }} id="profile-img" src="https://upload.wikimedia.org/wikipedia/commons/thumb/7/71/Arrow_east.svg/2560px-Arrow_east.svg.png" /></Link>
                 </nav>
            </div>
            </Card>
        </div>
    );
}

export default Game;
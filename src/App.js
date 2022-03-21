import logo from './logo.svg';
// import './App.css';
// import 'bootstrap/dist/css/bootstrap.min.css';
import React from 'react';
import Login from './Login.js';
import { Route, Routes, Navigate , Link, withRouter } from 'react-router-dom';
// import qcm from './Components/Chapters/Chapter1/Qcm.js';
import { BrowserRouter as Router } from 'react-router-dom';
import Test from './Test';

function App() {
  return (
    // <Router>
    //   <Routes>  
    //     <Navigate exact from="/" to="/login" />
    //     <Route path="/login" component={Login} />
    //     {/* <Route path="/menu" component={Menu} /> */}
    //   </Routes>
    // </Router>
    //  <Login />
    <Test />
  );
}

export default App;

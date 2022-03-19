import logo from './logo.svg';
import './App.css';
import React from 'react';
import Login from './Login.js';
import { Route, Routes, Navigate , Link, withRouter } from 'react-router-dom';

import { BrowserRouter as Router } from 'react-router-dom';
function App() {
  return (
    // <Router>
    //   <Routes>  
    //     <Navigate exact from="/" to="/login" />
    //     <Route path="/login" component={Login} />
    //     {/* <Route path="/menu" component={Menu} /> */}
    //   </Routes>
    // </Router>
    <Login />
  );
}

export default App;

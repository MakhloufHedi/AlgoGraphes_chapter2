import logo from './logo.svg';
import './App.css';
// import 'bootstrap/dist/css/bootstrap.min.css';
import React from 'react';
import Login from './Login.js';
import { Route, Routes, Navigate, Link, withRouter } from 'react-router-dom';
import { BrowserRouter as Router } from 'react-router-dom';
import Test from './Test';
import QCM from './Components/Chapters/Chapter1/Qcm.js';
import QCM2 from './Components/Chapters/Chapter1/QCM2.js';
import QCM3 from './Components/Chapters/Chapter1/QCM3.js';
import QCM4 from './Components/Chapters/Chapter1/QCM4.js';
import QCM5 from './Components/Chapters/Chapter1/QCM5.js';
import QCM6 from './Components/Chapters/Chapter1/QCM6.js';
import QCM7 from './Components/Chapters/Chapter1/QCM7.js';
import QCM8 from './Components/Chapters/Chapter1/QCM8.js';
import QCM9 from './Components/Chapters/Chapter1/QCM9.js';
import QCM10 from './Components/Chapters/Chapter1/QCM10.js';

import Concept from './Components/Chapters/Chapter1/concept';
import Scoreboard from './Components/Scoreboard/Scoreboard';
import { Table } from 'reactstrap'
import Scoreboardd from './Components/Scoreboard/Scoreboard2';
import Menu from './Components/HomePage/Menu';
import Profile from './Components/Profile/Profile';
import Chapters from './Components/Chapters/Chapters';
import Concept2 from './Components/Chapters/Chapter1/concept2';
import Concept3 from './Components/Chapters/Chapter1/concept3';
import Concept4 from './Components/Chapters/Chapter1/concept4';
import Concept5 from './Components/Chapters/Chapter1/concept5';
import Concept6 from './Components/Chapters/Chapter1/concept6';
import Concept7 from './Components/Chapters/Chapter1/concept7';
import Concept8 from './Components/Chapters/Chapter1/concept8';
import Concept9 from './Components/Chapters/Chapter1/concept9';
import Concept10 from './Components/Chapters/Chapter1/concept10';

function App() {
  return (
    // <Router>
    //   <Routes>  
    //     <Navigate exact from="/" to="/login" />
    //     <Route path="/login" component={Login} />
    //     {/* <Route path="/menu" component={Menu} /> */}
    //   </Routes>
    // </Router>
    // <Login />
    // <QCM />
    // <Concept />
    // <Scoreboard />
    // <Scoreboardd />
    // <Menu />
    <div classname="test">
      <p style={{ fontSize: "10px" }}>User discretion advised</p>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/menu" element={<Menu />} />
        <Route path="/Scoreboard" element={<Scoreboardd />} />
        <Route path="/Profile" element={<Profile />} />
        <Route path="/chapter1/concept" element={<Concept />} />
        <Route path="/chapter1/concept2" element={<Concept2 />} />
        <Route path="/chapter1/concept3" element={<Concept3 />} />
        <Route path="/chapter1/concept4" element={<Concept4 />} />
        <Route path="/chapter1/concept5" element={<Concept5 />} />
        <Route path="/chapter1/concept6" element={<Concept6 />} />
        <Route path="/chapter1/concept7" element={<Concept7 />} />
        <Route path="/chapter1/concept8" element={<Concept8 />} />
        <Route path="/chapter1/concept9" element={<Concept9 />} />
        <Route path="/chapter1/concept10" element={<Concept10 />} />
        <Route path="/chapter1/qcm1" element={<QCM />} />
        <Route path="/chapter1/qcm2" element={<QCM2 />} />
        <Route path="/chapter1/qcm3" element={<QCM3 />} />
        <Route path="/chapter1/qcm4" element={<QCM4 />} />
        <Route path="/chapter1/qcm5" element={<QCM5 />} />
        <Route path="/chapter1/qcm6" element={<QCM6 />} />
        <Route path="/chapter1/qcm7" element={<QCM7 />} />
        <Route path="/chapter1/qcm8" element={<QCM8 />} />
        <Route path="/chapter1/qcm9" element={<QCM9 />} />
        <Route path="/chapter1/qcm10" element={<QCM10 />} />
        <Route path="/Chapters" element={<Chapters />} />
      </Routes>
    </div>
  );
}

export default App;

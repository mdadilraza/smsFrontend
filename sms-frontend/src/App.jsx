
import './App.css'

import React from 'react';
import { BrowserRouter as Router, Route, Routes, BrowserRouter } from 'react-router-dom';
import HomePage from './pages/HomePage';
import Register from './Components/Register';

function App() {
  return (
    // <BrowserRouter>
    // <Routes>
      
    //     <Route path="/" component={HomePage} exact />
      
    // </Routes>
    // </BrowserRouter>
    <Register/>
  );
}

export default App;

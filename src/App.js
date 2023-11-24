import logo from './logo.svg';
import './App.css';
import React, { useState } from 'react';
import HomePage from './components/HomePage';
import DetailsPage from './components/DetailsPage';
import LoginPage from './components/LoginPage';
import { BrowserRouter,Routes,Route } from 'react-router-dom';
 

function App() {
   const islogin = false;
  return (
          <BrowserRouter>
            <Routes>
               <Route path="/" element={<HomePage/>}/>
               <Route path="/login" element={<LoginPage/>}/>
               <Route path="/details" element={<DetailsPage/>}/>
            </Routes>
          </BrowserRouter>
  );
}

export default App;

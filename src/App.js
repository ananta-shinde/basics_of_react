import logo from './logo.svg';
import './App.css';
import React, { useState } from 'react';
import Navbar from './components/Navbar';
import AppCarousel from './components/AppCarousel';
import ProductSection from './components/ProductSection';
 

function App() {

  return (
         <>
         <Navbar/>
         <AppCarousel/>
         <ProductSection/>
         <ProductSection/>
         <ProductSection/>
         <ProductSection/>
         </>
  );
}

export default App;

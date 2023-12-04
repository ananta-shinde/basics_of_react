import logo from './logo.svg';
import './App.css';
import React, { useState } from 'react';
import HomePage from './components/HomePage';
import DetailsPage from './components/DetailsPage';
import LoginPage from './components/LoginPage';
import { BrowserRouter,Routes,Route } from 'react-router-dom';
 

function App() {
  
  const products = [
    {
      id : 0,
      image : "https://media.istockphoto.com/id/1350560575/photo/pair-of-blue-running-sneakers-on-white-background-isolated.webp?b=1&s=170667a&w=0&k=20&c=liUSgX6SafJ7HWvefFqR9-pnf3KuH6v1lwQ6iEpePWc=",
      name : "Sport shoe (Blue)",
      price : 6500
  },
  {
      id:1,
      image : "https://images.unsplash.com/photo-1542291026-7eec264c27ff?q=80&w=1000&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8c2hvZXN8ZW58MHx8MHx8fDA%3D",
      name : "Sport shoe (Red)",
      price : 5500
  },
  {
    id : 3,
    image : "https://images.unsplash.com/photo-1608231387042-66d1773070a5?q=80&w=1548&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    name : "Sport shoe (White)",
    price : 6500
},
{
    id:4,
    image : "https://images.unsplash.com/photo-1606107557195-0e29a4b5b4aa?q=80&w=1528&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    name : "Sport shoe (Green)",
    price : 5500
},
{
  id : 7,
  image : "https://images.unsplash.com/photo-1608231387042-66d1773070a5?q=80&w=1548&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  name : "Sport shoe (White)",
  price : 6500
},
{
  id:8,
  image : "https://images.unsplash.com/photo-1606107557195-0e29a4b5b4aa?q=80&w=1528&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  name : "Sport shoe (Green)",
  price : 5500
},
  ];

  return (
          <BrowserRouter>
            <Routes>
               <Route path="/" element={<HomePage/>}/>
               <Route path="/login" element={<LoginPage/>}/>
               <Route path="/details/:id" element={<DetailsPage productList={products}/>}/>
            </Routes>
          </BrowserRouter>
  );
}

export default App;

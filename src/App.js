import './App.css';
import React, {useState} from "react";
import {Routes, Route} from 'react-router-dom';
import PriceContextData from "./context/PriceContextData.js";
import Header from './components/Heading';
import Home from './pages/Home';
import Products from './pages/Products';
import About from './pages/About';
import TotalPrice from './components/TotalPrice';

export default function App() {

  const[totalPrice, SetTotalPrice] = useState(null);

  return (
    <div className="App">
        <PriceContextData.Provider value={{totalPrice, SetTotalPrice}}>
          <Header />
          <TotalPrice />
        <Routes>
          <Route exact path="/" element={<Home />} />
          <Route path="/products" element={<Products />} />
          <Route path="/about" element={<About />} />
        </Routes>
        </PriceContextData.Provider>

    </div>
  );
  }
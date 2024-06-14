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

  // ● In your Products component, display at least 10 product items on the page using this bootstrap card. 
  //     Make use of an array of objects and render each product using the .map() method.
  // ● Each product should have a responsive image, a title, a short description, a price, and a ‘buy’ button.
  // ● Each product should also have at least 3 colour options. Use a Bootstrap dropdown button for this.
  // ● When a colour option is selected inside the dropdown button, the text that
  //     says ‘Dropdown button’ should change to that selected colour.
  // ● Create a component called TotalPrice.js and define an <h2> tag that says, ‘Total price: ‘ – This will be used to display the 
  //     total price of both products.
  // ● When the 'buy' button is clicked, the total price component should be updated to display the total price of all purchased products.
  // ● The total price component should be imported into every other component
  //     except the Home component and displayed at the top-right corner.
  //     However, the total price component should only become visible after a user
  //     clicks the 'buy' button, and it should not be visible before that action is
  //     taken.
  // ● On your About component, make use of the React Bootstrap figures component to display:
  //     ○ your store's logo (image),
  //     ○ a short description of your store,
  //     ○ two fictional images of your store
  //     ○ and how to contact you.
  // ● Your app must be styled as attractively as possible. You can use custom CSS or other React UI libraries to achieve this.
  // ● Submit your code.
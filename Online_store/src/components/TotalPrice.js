import React from 'react';
import { useContext } from 'react';
import { useLocation } from 'react-router-dom';
import PriceContextData from '../context/PriceContextData';

// this component will return the tracked data for the total price
export default function TotalPrice() {

    //taking the data from the context
    const {totalPrice} = useContext(PriceContextData);
    // console.log(TotalPrice);

    const currentLocation = useLocation();

return (
    <div id="total-price-container">
        {/* if total price variable changes, the login elements will be displayed, except if it's the homepage */}
        {totalPrice === null || currentLocation.pathname === "/" ? 
            ( <></>
            ):(
                // only returning 2 numbers after decimal here as somehow it gets really messy
                <h2 id="total-price">Total price: {totalPrice.toFixed(2)} </h2> 
            )}
    </div>
    )
};
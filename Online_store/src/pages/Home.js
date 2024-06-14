import React from 'react';
import Login from '../components/Login';

// this component will retun the homepage with the link login component inside it
export default function Home() {
    return (
        <div id='homepage'>
            <h2>Welcome to the homepage!</h2>
            <Login />
        </div>
    );
}
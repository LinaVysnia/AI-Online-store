import React, {useState, useRef, useEffect} from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import Button from 'react-bootstrap/Button';

export default function Login() {

    const name = useRef()

    const [inputValue, setInputValue] = useState("");

    const [displayLoginStatus, setDisplayLoginStatus] = useState(true); //this variable will set whether to display login elements or welcome message

    //this will run only once when when component is loaded, checking if something is in the local storage
    useEffect (() => {
        //if there is something in the session storage alredy, the name will be set to the name 
        //from the storage and the login input will not be displayed
        if (sessionStorage.length > 0) {
            name.current = sessionStorage.getItem("name");
            setDisplayLoginStatus(false);
            console.log(`Something was found in the session storage:`, name.current)
        }
    }, [] );


    //This function will run when login button is pressed, it will use setDisplayLoginStatus to display the welcome message
    function handleLogin () {
        if (inputValue === "") { //if nothing was entered, it will alert the user
            alert("Please enter your name to log in") //checking if the name was entered when the button was pressed
        } else {
            name.current = inputValue;
            sessionStorage.setItem("name", name.current) //adding the name to the current session storage
            console.log(`name in the local storage was added`, sessionStorage.getItem("name"))
            setInputValue("");
            setDisplayLoginStatus(false);
        }
    };

    //This function will run when log out button is pressed, it will use setDisplayLoginStatus to display the login elements
    function handleLogOut () {
            sessionStorage.clear();    //clearing any data stored in the session storage if the user logs out
            console.log(`local storage was cleared`, sessionStorage)
            setDisplayLoginStatus(true);
    };

    return (
        <div>
            <hr/>
            {displayLoginStatus ? //if the display login status is true, the login elements will be displayed
            (
                <div id='login-container'>
                    <input 
                        id='login-input'
                        class="form-control"
                        type = "string"
                        value = {inputValue}
                        onChange={(event) => setInputValue(event.target.value)}
                        placeholder="Enter your name" 
                    />
                    <Button
                        onClick={handleLogin}
                        variant='success'
                        >Log In
                    </Button>
                </div>
            ) : ( // if display login status is false, it will display the welcome message using the name from the login
                <div>
                    <h1>Hi {name.current}!</h1>
                    <Button
                        onClick={handleLogOut}
                        variant='info'
                        >Log Out
                    </Button>
                </div>
            )
            }
        </div>
        );
}
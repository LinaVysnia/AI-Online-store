import React from 'react';
import Figure from 'react-bootstrap/Figure';
import AboutImage1 from '../images/robot-working.png'
import AboutImage2 from '../images/Storefront.jpeg'
import logo from '../images/logo.png'



export default function About() {
    return (
        <div>
            <h2>About</h2>
            <hr />
            <div className='about-container'>
                <div>
                <Figure id='logo'>
                    <Figure.Image
                        alt="logo"
                        src={logo}
                    />
                </Figure>
                </div>
                <div id="about-description"> 
                    Welcome to our ground-breaking online store, where cutting-edge technology 
                    meets nature's beauty! Our collection boasts an array of definitely real
                    lifelike plants, each meticulously crafted by humans and definitely not an artificial intelligence. 
                    From cat shaped tropical plants to rainbow grapes, our definitely real flora promises to 
                    enhance any space with its realism and unusual charm. Embrace the future of botanical 
                    design and bring home a super brand new definitely real never seen before plant of your own. 
                    Explore our catalog of definitely real plants today and discover the mind blowing realness of these real plants
                </div>
                <div id='contacts'>
                    <h2>Contacts</h2>
                    <div>Address: 123 Flower st. Essex, UK</div>
                    <div>Email: notAI@real.com</div>
                    <div>Phone Number: 123456789</div>
                </div>
                
                </div>
                <div id='images'>
                    <Figure>
                        <Figure.Image
                            alt="AI working in a flower shop"
                            src={AboutImage1}
                        />
                        <Figure.Caption className='about-photo-caption'>
                            Busy making flowers
                        </Figure.Caption>
                    </Figure>
                    <Figure>
                        <Figure.Image
                            alt="AI grandfather opening a shop"
                            src={AboutImage2}
                        />
                        <Figure.Caption className='about-photo-caption'>
                        Old AI grandfather opening a shop
                        </Figure.Caption>
                    </Figure>
            </div>
        </div>
    );
}
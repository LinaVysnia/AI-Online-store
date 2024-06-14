
import React, {useState} from 'react';

import 'bootstrap/dist/css/bootstrap.min.css';
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
import ButtonGroup from 'react-bootstrap/ButtonGroup';
import Dropdown from 'react-bootstrap/Dropdown';
import DropdownButton from 'react-bootstrap/DropdownButton';

import { useContext } from 'react';
import PriceContextData from '../context/PriceContextData';
// bootstrap works with styling only, for components install react-bootstrap!

import alienFlowerImage from '../images/alien-flower.jpg' //the only way I could make the images work, was if I imported every single one
import orangeCatFlowerImage from '../images/orange-cat-flower.jpg'
import sunflowerImage from '../images/pink-blue-sunflower.jpg'
import pinkCatImage from '../images/plink-cat-flower.jpg'
import pokemonRose from '../images/pokemon-rose.jpg'
import rainbowGrape from '../images/rainbow-grape.jpg'
import rainbowTom from '../images/rainbow-tom.jpg'
import starryRose from '../images/starry-rose.jpg'
import whiteButterfyFlower from '../images/white-butterfly-flower.jpg'
import whiteCatFlower from '../images/white-cat-flower.jpg'

import '../App.css';

export default function Products() {

    //this is here to track the total
    const {totalPrice, SetTotalPrice} = useContext(PriceContextData);

    //defining the product contruct. Id is to track the object id for Ract, selectedColour is to track the cosen colour
    class Product {

        constructor (title, image, description, price, id, selectedColour) {
            this.title = title;
            this.image = image;
            this.description = description;
            this.price = price;
            this.id = id;
            this.selectedColour = selectedColour; //I simply could not see a different way to track the colour of the object, do suggest something if there's a better way
        }
    };

    const product1 = new Product( 
        "Alien Flower", 
        alienFlowerImage, 
        "White and orange alien flower",
        10.99,
        0,
        null
    );

    const product2 = new Product( 
        "Orange Cat Flower", 
        orangeCatFlowerImage, 
        "White and red fluffy cat flower",
        15.99,
        1,
        null
    );

    const product3 = new Product( 
        "Sunflower", 
        sunflowerImage, 
        "Multicoloured sunflower",
        22.99,
        2,
        null
    );

    const product4 = new Product( 
        "Pink Cat flower", 
        pinkCatImage, 
        "Adorable fluffy pink cat",
        9.99,
        3,
        null
    );

    const product5 = new Product( 
        "Pokemon rose", 
        pokemonRose, 
        "I choose you! A perfect gift for a pokemon fan",
        49.99,
        4,
        null
    );

    const product6 = new Product( 
        "Rainbow grape", 
        rainbowGrape, 
        "Taste the rainbow, but as grapes",
        5.99,
        5,
        null
    );

    const product7 = new Product( 
        "Rainbow tomatoes", 
        rainbowTom, 
        "Taste the rainbow, but as tomatoes",
        8.99,
        6,
        null
    );

    const product8 = new Product( 
        "Star Rose", 
        starryRose, 
        "Cosmos in a rose bulb",
        99.99,
        7,
        null
    );

    const product9 = new Product( 
        "Butterfly flower", 
        whiteButterfyFlower, 
        "This is where butterflies come from",
        2.99,
        8,
        null
    );

    const product10 = new Product( 
        "White Cat flower", 
        whiteCatFlower, 
        "Fluffy happy cat flower. All the cat - zero vet bills",
        5.99,
        9,
        null
    );


    let productList = [];
    //pushing every created product. Maybe there's a better way push every object that starts with "product...""
    productList.push(product1, product2, product3, product4, product5, product6, product7, product8, product9, product10);

    // const [selectedColourList, setSelectedColourList] = useState(new Array(productList.length).fill(null))
    // console.log (selectedColourList)

    //this useState variable is used to update the display any time a property changes
    const [products, setProducts] = useState(productList)

   //I might have overcompicated this part. PLease do let me know if there's a more straightforward way to do this
   // This function recreates the product array and only changes the colour from (eventKey) for only the one with the maching productId
    function handleColorChoice(eventKey, productId) {

        // map each product over with the previous product
        setProducts(products.map((product) => {

            // check if the product is the one identified to be changed by the given productId variable from the button click
            if (product.id === productId) {
            
                // return { ...product, selectedColour: eventKey }; //this seems like a way easier way but it loses it's class

                //to be honest this seems ay too complicated? There must be a better way
                //so in this part I'm replacing the original product with a prototype to maintain the class info, which inherits
                //every single property from the original product, EXCEPT the selected colour property is updated
                return Object.assign (

                    //for some reason Product.prototype doesnt work? SO had to use Object.getPrototypeOf(product)
                    Object.create(Object.getPrototypeOf(product)), product, { selectedColour: eventKey } 
                )

            } else {
              // If it's not the identified product, return the original unchanged
              return product;
            } 

        }
    ));     //closing the products.map function

    // console.log(products); // here just for testing 
}

    return (
        <div >
            <h2 id="product-list-title">Product List</h2>
            <hr />
            <div id="product-component">
                <div id="product-list">
                {products.map((product)=>(
                    <div key={product.id}>
                        <Card className="product-card">
                            <Card.Body>
                                <Card.Title> {product.title} </Card.Title>
                            </Card.Body>
                            <Card.Img 
                                className="product-image" 
                                variant="top" 
                                src={product.image} />

                            <Card.Body>
                                <Card.Text className='card-description'> {product.description} </Card.Text>

                                <Dropdown >
                                <DropdownButton 
                                    onSelect={(eventKey) => handleColorChoice(eventKey, product.id)}
                                    key={product.id}
                                    id={`dropdown-button-${product.id}`}
                                    variant="secondary"
                                    as={ButtonGroup}

                                    //if selected colour is null, then it will ask to chose one, 
                                    //if there's already a chosen colour, then it will show that
                                    title={product.selectedColour ? product.selectedColour : 'Choose a color'} 

                                    // I've left this here for the future when I'm smarter and I knew how to overwite default bootstrap styles
                                    // style={{
                                    //     backgroundColor: product.selectedColour === 'yellow' ? 'rgb(255, 252, 61)' 
                                    //                     : product.selectedColour === 'green' ? 'rgb(6, 240, 61)' 
                                    //                     : product.selectedColour === 'red' ? 'rgb(228, 10, 10)' 
                                    //                     : 'rgb(61, 61, 61)'
                                    //   }}
                                    >
                                        
                                    <Dropdown.Item 
                                        key="yellow" 
                                        eventKey="yellow"
                                        className="yellow" 
                                        >
                                        Yellow
                                        </Dropdown.Item>
                                    <Dropdown.Item 
                                        key="green" 
                                        eventKey="green"
                                        className="green" 
                                        >
                                        Green
                                        </Dropdown.Item>
                                    <Dropdown.Item 
                                        key="red"  
                                        eventKey="red"
                                        className="red" 
                                        >
                                        Red
                                        </Dropdown.Item>
                                </DropdownButton>
                                </Dropdown>

                            </Card.Body>

                                <Card.Footer>
                                    <Card.Title className='price'> {product.price} </Card.Title>
                                    <Button 
                                        variant="primary" 
                                        onClick={() => SetTotalPrice(totalPrice + product.price)}
                                        size="lg"
                                    >Buy</Button>
                            </Card.Footer>

                        </Card>
                    </div>
                ))}
                </div>
            </div>
        </div>
    );
}
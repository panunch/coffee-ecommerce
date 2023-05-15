import { Card, Button } from 'react-bootstrap';
import { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import { Link, useNavigate } from 'react-router-dom';

export default function ProductCard({productProp}) {
    
    // Use the state hook for this component to be able to store its state
    // States are used to keep track of information related to individual components
    const [count, setCount] = useState(0);
    // Using the state hook returns an array with the first element being a value and the second element as function thats used to change the value of the first element
    console.log(useState(0));

    // Use state hook for getting and setting the seats for this product
    const [stocks, setStocks] = useState(10);

    const { _id, name, description, price } = productProp;

    const navigate = useNavigate();

    return (
        <Card>
            <Card.Body>
                <Card.Title>{name}</Card.Title>
                <Card.Subtitle>Description:</Card.Subtitle>
                <Card.Text>{description}</Card.Text>
                <Card.Subtitle>Price:</Card.Subtitle>
                <Card.Text>PhP {price}</Card.Text>
                <Card.Text>Stock: {stocks}</Card.Text>
                <Link className="btn btn-primary" to={`/products/${_id}`}>Details</Link>
            </Card.Body>
        </Card>


    )
}

ProductCard.propTypes = {
    // The shape method is usde to check  if a prop object conforms to a specific shape
    course: PropTypes.shape({
        // Define the properties and their expected types
        name: PropTypes.string.isRequired,
        description: PropTypes.string.isRequired,
        price: PropTypes.number.isRequired,
    })
}

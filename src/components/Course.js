import { Card, Button } from 'react-bootstrap';
import { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

export default function CourseCard({courseProp}) {
    // Checks to see if the data was successfully passed
    // console.log(props);
    // Every component receives information in a form of an object
    // console.log(typeof props);

    // Use the state hook for this component to be able to store its state
    // States are used to keep track of information related to individual components
    const [count, setCount] = useState(0);
    // Using the state hook returns an array with the first elemen t being a value and the secodn element as function thats used to change the value of the first element
    console.log(useState(0));

    // Use state hook for getting and setting the seats for this course
    const [seats, setSeats] = useState(10);


    // Function that keeps track of the enrollees for a course
    // By default JavaScript is synchronous it executes code form the top of the file all the way down
    // The setter function for useStates are asynchronous allowing it to execute seperately from other codes in the program
    // The "setCount" function is being executed while the "console.log" is already completed
    /*function enroll(){
        setCount(count + 1);
        console.log('Enrollees: ' + count);
        setSeats(seats - 1);
        console.log('Seats: ' + seats);
    
    }

    // Define a "useEffect" hook to have the "CourseCard" component perform a certain task after every DOM update
    // This is run automatically after initial render and for every dom UPDATE
    // Checking for the availability for enrollment of a course is better suited here
    // React will re-run this effect ONLY if any of the values contained in this array has changed from the last render/update
    useEffect(() => {
        if(seats === 0){
            // setIsOpen(false);
        }
    }, [seats])*/

    const {name, description, price, _id} = courseProp;

    return (
        <Card>
            <Card.Body>
                <Card.Title>{name}</Card.Title>
                <Card.Subtitle>Description:</Card.Subtitle>
                <Card.Text>{description}</Card.Text>
                <Card.Subtitle>Price:</Card.Subtitle>
                <Card.Text>PhP {price}</Card.Text>
                <Card.Text>Enrollees: {count}</Card.Text>
                <Card.Text>Seats: {seats}</Card.Text>
                <Link className="btn btn-primary" to={`/courses/${_id}`}>Details</Link>
            </Card.Body>
        </Card>


    )
}

CourseCard.propTypes = {
    // The shape method is usde to check  if a prop object conforms to a specific shape
    course: PropTypes.shape({
        // Define the properties and their expected types
        name: PropTypes.string.isRequired,
        description: PropTypes.string.isRequired,
        price: PropTypes.number.isRequired,
    })
}

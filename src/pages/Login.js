import { useState, useEffect, useContext } from 'react';
import { Form, Button } from 'react-bootstrap';
import { Navigate } from 'react-router-dom';
import Swal from 'sweetalert2';
import UserContext from '../UserContext';



export default function Login() {

	// Allows us to consume the User context object and it's properties to be used for validation.
	const { user, setUser } = useContext(UserContext);

	const [email, setEmail] = useState('');
	const [password, setPassword] = useState('');
	// State to determine whether the submit button is enabled or not.
	const [isActive, setIsActive] = useState(false);



	// Function to simulate user registration
	function authenticate(e) {
		
		e.preventDefault()

		fetch(`${process.env.REACT_APP_API_URL}/users/login`, {
			method: 'POST',
			headers: {
				'Content-Type': 'application/json'
			},
			body: JSON.stringify({
				email: email,
				password: password
			})
		})
		.then(res => res.json())
		.then(data => {
			// We will receive either a token or a false response.
			console.log(data)
			console.log(data.access)
			if(typeof data.access !== "undefined") {
				localStorage.setItem('token', data.access)
				retrieveUserDetails(data.access)

				Swal.fire({
					title: "Login Successful",
					icon: "success",
					text: "Welcome back to the Caffeine Consumers Club!"
				})

			} else {

				Swal.fire({
					title: "Authentication Failed",
					icon: "error",
					text: "Please, check your login details and try again."
				})
			}


		})



		// Set email of the authenticated user in the local storage.
		/*
			Syntax:
				localStorage.setItem("propertyName", value)
		*/

		// localStorage.setItem("email", email);

		// Sets the global user state to have properties obtained from local storage.
		// setUser({email: localStorage.getItem('email')});

		// Clear the input fields and states
		setEmail("");
		setPassword("");
		 

		// alert(`${email} has been verified! Welcome back!`);
	}


	const retrieveUserDetails = (token) => {

		fetch(`${process.env.REACT_APP_API_URL}/users/details`, {
			headers: {
				Authorization: `Bearer ${token}`
			}
		})
		.then(res => res.json())
		.then(data => {
			console.log(data);

			// Global user state for validation accross the whole app
			setUser({
				id: data._id,
				isAdmin: data.isAdmin
			})
		})
	}


	useEffect(() => {
		if((email !== "" && password !== "" )) {
			setIsActive(true)
		} else {
			setIsActive(false)
		}
	}, [email, password]);

	console.log(user.id)

	return (
		(user.id !== null) ?
			<Navigate to="/products" />
			:
			<Form onSubmit={e => authenticate(e)}>

				  <h1 className="text-center my-3">Login</h1>
				  
			      <Form.Group className="mb-3" controlId="userEmail">
			        <Form.Label>Email address</Form.Label>
			        <Form.Control 
			        	type="email" 
			        	placeholder="Enter email"
			        	value={email}
			        	onChange={e => setEmail(e.target.value)}
			        	required
			        />
			      </Form.Group>

			      <Form.Group className="mb-3" controlId="password">
			        <Form.Label>Password</Form.Label>
			        <Form.Control 
			        	type="password" 
			        	placeholder="Password"
			        	value={password}
			        	onChange={e => setPassword(e.target.value)}
			        	required
			        />
			      </Form.Group>

			      {
			      	isActive ?
			      		<Button variant="primary" type="submit" id="submitBtn">
			      		  Submit
			      		</Button>
			      		:
			      		<Button variant="primary" type="submit" id="submitBtn" disabled>
			      		  Submit
			      		</Button>
			      }

			    </Form>

		
	)

}

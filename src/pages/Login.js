import React, { useState, useEffect, useContext } from 'react';
import {Form, Button} from 'react-bootstrap';
import { Navigate } from 'react-router-dom';
import Swal from 'sweetalert2';
import UserContext from '../UserContext';

export default function Login(props){

	// Allows us to consume the User context object and it's properties to use for user validation 
	const { user, setUser } = useContext(UserContext);

	// State hooks to store the values of the input fields 
	const [email, setEmail] = useState('');
	const [password, setPassword] = useState('');
	// State to determine whether submit button is enabled or not
	const [isActive, setIsActive] = useState('');

	console.log(email);
	console.log(password);

	// Function to simulate user login 
	function authenticate(e){

		// Prevents page redirection via form submission 
		e.preventDefault();

		// Process a fetch request to the corresponding backend API 
		// The header information "Content-Type" is used to specify that the information is being sent to the backend will be sent in the form of JSON
		// The fetch request will communicate with our backend application providing it with a stringified JSON 
		fetch(`${process.env.REACT_APP_API_URL}/users/login`, {
			method: 'POST', 
			headers: {
				"Content-Type": 'application/json'
			}, 
			body: JSON.stringify({
				email: email, 
				password: password
			})
		})
		.then(res => res.json())
		.then(data => { 
			console.log(data);

			// If no user information is found, the "access property" will not be available and will return undefined
			if(typeof data.access != "undefined"){
				localStorage.setItem('token', data.access)
				retrieveUserDetails(data.access);

				Swal.fire({
					title:"Login Successful",
					icon: "success", 
					text: "Welcome to Zuitt!"
				});
			} else { 
				Swal.fire({
					title: "Authentication Failed", 
					icon: "error", 
					text: "Check your login details and try again."
				});
			};
		})

		// Clear input fields 
		setEmail('');
		setPassword('');

		console.log(`${email} has been verified! Welcome back!`);
	}

	const retrieveUserDetails = (token) => { 

		// The token will be sent as part of the requests header information 
		fetch(`${process.env.REACT_APP_API_URL}/users/details`, { 
			headers: {
				Authorization: `Bearer ${ token}`
			}
		})
		.then(res => res.json())
		.then(data => {
			console.log(data);

			setUser({
				id: data._id, 
				isAdmin: data.isAdmin
			})
		})
	};

	useEffect(() => { 

		// Validation to enable submit button when both fields are populated
		if(email !== '' && password !== ''){
			setIsActive(true);
		}else {
			setIsActive(false);
		}

	}, [email, password]);

	return (
		(user.id !== null) ? 
			<Navigate to="/products"/>
			:
			<Form onSubmit={(e) => authenticate(e)}>
	            <Form.Group controlId="userEmail">
	                <Form.Label>Email address</Form.Label>
	                <Form.Control 
	                    type="email" 
	                    placeholder="Enter email" 
	                    value={email}
	                    onChange={e => setEmail(e.target.value)}
	                    required
	                />
	                <Form.Text className="text-muted">
	                    We'll never share your email with anyone else.
	                </Form.Text>
	            </Form.Group>

	            <Form.Group controlId="userPassword">
	                <Form.Label>Password</Form.Label>
	                <Form.Control 
	                    type="password" 
	                    placeholder="Password" 
	                    value={password}
	                    onChange={e => setPassword(e.target.value)}
	                    required
	                />
	            </Form.Group>

	            {isActive ?	            
		            <Button variant="primary" type="submit" id="loginBtn">
		                Login
		            </Button>
		            :
		            <Button variant="primary" type="submit" id="loginBtn" disabled>
		                Login
		            </Button>
	        	}
	    	</Form>

	)
}

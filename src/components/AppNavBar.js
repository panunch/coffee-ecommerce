import Container from 'react-bootstrap/Container';
import { Fragment, useContext } from 'react';
import React from 'react';
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
import { Link, NavLink } from 'react-router-dom';
import UserContext from '../UserContext';

export default function AppNavBar(){
	// State to store the user information stored in the login page.
	const { user } = useContext(UserContext);

	return(
		<Navbar bg="light" expand="lg">
					    <Container fluid>
					        <Navbar.Brand as={Link} to="/">The Weird Coffee Person Consortium</Navbar.Brand>
					        <Navbar.Toggle aria-controls="basic-navbar-nav"/>
					        <Navbar.Collapse id="basic-navbar-nav">
					            <Nav className="mr-auto">
					            <Nav.Link as={NavLink} to="/">Home</Nav.Link>
					            <Nav.Link as={NavLink} to="/products" exact>Products</Nav.Link>
								{(user.id !== null) ? 				            
					            <Nav.Link as={NavLink} to="/logout" exact>Logout</Nav.Link>
					            :
					            <React.Fragment>
					            	<Nav.Link as={NavLink} to="/login" exact>Login</Nav.Link>
					            	<Nav.Link as={NavLink} to="/register" exact>Register</Nav.Link>
					            </React.Fragment>
					        	}
					            </Nav>
					        </Navbar.Collapse>
					    </Container>
					</Navbar>

		)
}
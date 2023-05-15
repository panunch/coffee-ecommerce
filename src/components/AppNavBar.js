import { Navbar, Nav, Container } from 'react-bootstrap';
import { useContext } from 'react';
import { Link, NavLink } from 'react-router-dom';
import UserContext from '../UserContext';

export default function AppNavBar(){
	// State to store the user information stored in the login page.
	const { user } = useContext(UserContext);
	console.log(user)
	console.log(user.isAdmin)

	return(
		<Navbar bg="light" expand="lg">
					    <Container fluid>
					        <Navbar.Brand as={Link} to="/">Caffeine Consumers Club</Navbar.Brand>
					        <Navbar.Toggle aria-controls="basic-navbar-nav"/>
					        <Navbar.Collapse id="basic-navbar-nav">
					            <Nav className="mr-auto">
					            <Nav.Link as={NavLink} to="/">Home</Nav.Link>

					            <Nav.Link as={NavLink} to="/products" exact>Products</Nav.Link>
								{
									(user.id !== null) ? 				            
						            <Nav.Link as={NavLink} to="/logout" exact>Logout</Nav.Link>
						            :
						            <>
						            	<Nav.Link as={NavLink} to="/login" exact>Login</Nav.Link>
						            	<Nav.Link as={NavLink} to="/register" exact>Register</Nav.Link>
						            </>
					        	}
					        	{
					        		
					        		(user.isAdmin === true) ? 
					        			<Nav.Link as={NavLink} to="/admin" exact>Admin</Nav.Link>
					        		:
					        		<>
					        		</>
					        	}
					            </Nav>
					        </Navbar.Collapse>
					    </Container>
					</Navbar>

		)
}
import { Navbar, Nav, Container, NavDropDown } from 'react-bootstrap';
import { useContext } from 'react';
import { Link, NavLink } from 'react-router-dom';
import UserContext from '../UserContext';
import ccclogo from '../assets/ccclogo.png';


export default function AppNavBar(){
	// State to store the user information stored in the login page.
	const { user } = useContext(UserContext);
	console.log(user)
	console.log(user.isAdmin)

	return(

		<Navbar bg="info" expand="lg" >
		      <Container>

		        <Navbar.Brand as={Link} to="/"><img src={ccclogo} style={{ width : '100px', height : '100px'}}/></Navbar.Brand>
		        <Navbar.Toggle aria-controls="basic-navbar-nav" />
		        <Navbar.Collapse id="basic-navbar-nav">
		          <Nav className="me-auto">
		            <Nav.Link as={Link} to="/">Home</Nav.Link>
		            
		            <Nav.Link as={Link} to="/products">Products</Nav.Link>
		            {
		            	
		            	(user.id !== null) ? 
		            		 <Nav.Link as={Link} to="/logout">Logout</Nav.Link>
		       

		            		 :
		            		 <>
		            		 	<Nav.Link as={Link} to="/login">Login</Nav.Link>
		            		 	<Nav.Link as={Link} to="/register">Register</Nav.Link>

		            		 </>

		            }

		            {
		            	(user.isAdmin === true) ?
		            		<Nav.Link as={Link} to="/admin">Admin</Nav.Link>
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


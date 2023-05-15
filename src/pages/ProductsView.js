import { useState, useEffect, useContext } from 'react';
import { Container, Card, Button, Row, Col } from 'react-bootstrap';
import { useParams, useNavigate, Link } from 'react-router-dom';
import Swal from 'sweetalert2';
import UserContext from '../UserContext';
import productData from '../data/productData';




export default function ProductsView() {

	// Allows use to gain access to methods that will allow us to redirect a user to a different page after enrolling to a course
	const navigate = useNavigate(); // useHistory

	const { user } = useContext(UserContext);

	// The "useParams" hook allows us to retrieve the productId passed via the URL params.
	const { productId } = useParams();
	
	const [name, setName] = useState("");
	const [description, setDescription] = useState("");
	const [price, setPrice] = useState(0);
	const [data, setData] = useState("");

	// let data = {products.find(product => {
	// 		return product._id === productId
	// 	})



	useEffect(() => {
		fetch(`${process.env.REACT_APP_API_URL}/products/${productId}`, {
				headers: {
				'Content-Type': 'application/json',
				Authorization: `Bearer ${localStorage.getItem('token')}`
		}
		})
		.then(res => res.json())
		.then(data => {
			console.log(data)
			setData(data) 
			// console.log(products)
		})
	}, [])

	const enroll = (productId) => {
		fetch(`${process.env.REACT_APP_API_URL}/orders/checkout`, {
			method: "POST",
			headers: {
				'Content-Type': 'application/json',
				Authorization: `Bearer ${localStorage.getItem('token')}`
			},
			body: JSON.stringify({
				productId:productId
			})
		})
		.then(res => res.json())
		.then(data => {
			console.log(data)

			if(data === true) {
				Swal.fire({
					title: "Successfully Ordered",
					icon: "success",
					text: "You have successfully ordered this item."
				})

				navigate("/")

			} else {
				Swal.fire({
					title: "Something went wrong",
					icon: "error",
					text: "Please try again."
				})
			}

		})
	};



	useEffect(() => {

		console.log(productId);

		fetch(`${process.env.REACT_APP_API_URL}/products/${productId}`)
		.then(res => res.json())
		.then(data => {
			console.log(data)

			setName(data.name);
			setDescription(data.description);
			setPrice(data.price)

		})


	}, [productId])


	return (
		<>

				<Container>
					<Row>
						<Col lg={{span: 6, offset:3}} >
							<Card>
							      <Card.Body className="text-center">
							        <Card.Title>{data.name}</Card.Title>
							        <Card.Subtitle>Description:</Card.Subtitle>
							        <Card.Text>{data.description}</Card.Text>
							        <Card.Subtitle>Price:</Card.Subtitle>
							        <Card.Text>PhP {data.price}</Card.Text>
							        {
							        	(user.id !== null) ?
							        		<Button variant="primary" onClick={() => enroll(productId)} >Checkout</Button>

							        		:

							        		<Button className="btn btn-danger" as={Link} to="/login" >Log in to Buy</Button>
							        	
							        }

							      </Card.Body>
							</Card>
						</Col>
					</Row>
				</Container>
				
		</>

	)
}

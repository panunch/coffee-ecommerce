import { useState, useEffect} from 'react';
import { Form, Row, Col, Card, Button, Table } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import Swal from 'sweetalert2';
import productData from '../data/productData';


export default function CreateProduct() {
	
	
	const [name, setName] = useState('');
	const [description, setDescription] = useState('');
	const [price, setPrice] = useState('');
	const [isActive, setIsActive] = useState(false);

	const createProduct = (e) => {

		e.preventDefault()

		fetch(`http://localhost:4000/products/`, {
			method: 'POST',
			headers: {
				'Content-Type': 'application/json',
				Authorization: `Bearer ${localStorage.getItem('token')}`
			},
			body: JSON.stringify({
				name: name,
				description: description,
				price: price
			})
		})
		.then(res => res.json())
		.then(data => {
			console.log(data);

			if (data === false){
				Swal.fire({
					title: "Duplicate product found",
					icon: "error"
				})
			} else {
				Swal.fire({
					title: "New product is successfully added!",
					icon: "success"
				})
			}

			
		})
	}

	useEffect(() => {
		if((name !== "" && description !== "" && price !== "")) {
			setIsActive(true)
		} else {
			setIsActive(false)
		}
	}, [name, description, price]);
	
	return (
			<Form onSubmit={e => createProduct(e)}>

				  <h1 className="text-center my-3">Create Product</h1>
				  
			      <Form.Group className="mb-3" controlId="prodName">
			        <Form.Label>Product Name</Form.Label>
			        <Form.Control 
			        	type="name" 
			        	placeholder="Enter Product Name"
			        	value={name}
			        	onChange={e => setName(e.target.value)}
			        	required
			        />
			      </Form.Group>

			      <Form.Group className="mb-3" controlId="description">
			        <Form.Label>Description</Form.Label>
			        <Form.Control 
			        	type="description" 
			        	placeholder="Enter Description"
			        	value={description}
			        	onChange={e => setDescription(e.target.value)}
			        	required
			        />
			      </Form.Group>

			       <Form.Group className="mb-3" controlId="price">
			        <Form.Label>Price</Form.Label>
			        <Form.Control 
			        	type="price" 
			        	placeholder="Enter Price"
			        	value={price}
			        	onChange={e => setPrice(e.target.value)}
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

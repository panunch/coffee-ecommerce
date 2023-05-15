import { useState, useEffect} from 'react';
import { Row, Col, Card, Button, Table } from 'react-bootstrap';
import { Navigate } from 'react-router-dom';
import { Link } from 'react-router-dom';
import Swal from 'sweetalert2';
import productData from '../data/productData';


export default function AdminTable() {
  const [products, setProducts] = useState([]);
  const [avail, setAvail] = useState([]);

  useEffect(() => {
    fetch(`${process.env.REACT_APP_API_URL}/products/all`, {
        headers: {
        'Content-Type': 'application/json',
        Authorization: `Bearer ${localStorage.getItem('token')}`
    }
    })
    .then(res => res.json())
    .then(data => {
      // console.log(data)
      setProducts(data) 
      // console.log(products)
    })
  }, [])

  const archiveProduct = (productId) => {
      fetch(`${process.env.REACT_APP_API_URL}/products/${productId}/archive`, {
        method: 'PUT',
        headers: {
          'Content-Type': 'application/json',
          Authorization: `Bearer ${localStorage.getItem('token')}`
        },
        body: JSON.stringify({
          isActive: false
        })
      })
      .then(res => res.json())
      .then(data => {
        console.log(data);

        if (data === false){
          Swal.fire({
            title: "Duplicate Product Found",
            icon: "error"
          })
        } else {
          Swal.fire({
            title: "Product successfully archived",
            icon: "success"
          })
        }

        
      })
  }

  const activateProduct = (productId) => {
    console.log("activateProduct")
    fetch(`${process.env.REACT_APP_API_URL}/products/${productId}/activate`, {
      method: 'PUT',
      headers: {
        'Content-Type': 'application/json',
        Authorization: `Bearer ${localStorage.getItem('token')}`
      },
      body: JSON.stringify({
        isActive: true
      })
    })
    .then(res => res.json())
    .then(data => {
      console.log(data);

      if (data === false){
        Swal.fire({
          title: "Duplicate Product Found",
          icon: "error"
        })
      } else {
        Swal.fire({
          title: "Product successfully activated",
          icon: "success"
        })
      }

      
    })
  }

  
  
  

  return (


    <>
      <div class = "text-center">
        <h1>Admin Dashboard</h1>
        <Link as={Link} to="/createproduct">
          <Button variant="outline-primary mx-2"  >Add New Product</Button>
        </Link>
        <Link as={Link} to="/userorder">
        <Button variant="outline-primary mx-2">Show User Orders</Button>
        </Link>
      </div>
  
      <table class="table table-light table-striped my-4">
      <thead>
          <tr>
            <th scope="col">Name</th>
            <th scope="col" colspan="3">Description</th>
            <th scope="col">Price</th>
            <th scope="col">Availability</th>
            <th scope="col">Actions</th>
          </tr>
        </thead>
        <tbody>
          {products.map((data) => {
            console.log(data._id)
            return(
              <tr>
                <th scope="row">{data.name}</th>
                <td colspan="3">{data.description}</td>
                <td>{data.price}</td>
                <td>{data.isActive ? "Available" : "Not Available"}</td>
                <td>
                  <Link as={Link} to={`/updateproduct/${data._id}`}>
                    <Button variant="outline-success my-1">Update</Button>
                  </Link>
                  {
                    (data.isActive === true) ?
                    <Button onClick={(e) => {archiveProduct(data._id)}} variant="outline-danger my-1">Disable</Button>
                    :
                    <Button onClick={(e) => {activateProduct(data._id)}} variant="outline-danger my-1">Enable</Button>
                  }
                </td>
              </tr>           
            )
          })}
        </tbody>
      </table>
    </>
  )

}


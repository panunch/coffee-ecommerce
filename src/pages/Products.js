import { Fragment } from 'react';
import { useEffect, useState, useContext } from 'react';
import { Row, Col} from 'react-bootstrap';
import ProductCard from '../components/ProductCard';
import UserContext from '../UserContext';



function Products() {
  const [products, setProducts] = useState([]);

  // Checks to see if the mock data was captured.
  // console.log(coursesData);
  // console.log(coursesData[0]);


  useEffect(() => {
    fetch(`${process.env.REACT_APP_API_URL}/products/allActive`, {
        headers: {
        'Content-Type': 'application/json',
        Authorization: `Bearer ${localStorage.getItem('token')}`
    }
    })
    .then(res => res.json())
    .then(data => {
      console.log(data)
      setProducts(data) 
      // console.log(products)
    })
  }, [])

  console.log(products)
  
  


  return (
    <>
      <h1>Products</h1>
      <>
        {products.map(product => {
          return (
            <ProductCard key={product._id} productProp={product} />
          )
        })}
      </>
{/*     {productData.map((data) => {
        return(
          <ProductCard
            name={data.name}
            description={data.description}
            price={data.price}
            _id={data.id}
          />
        )
      })}*/}
    </>
  )
}



export default Products;

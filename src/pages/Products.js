import { Fragment } from 'react';
import { useEffect, useState, useContext } from 'react';
import { Row, Col} from 'react-bootstrap';
import ProductCard from '../components/Product';
import UserContext from '../UserContext';



function Products() {
  const [products, setProducts] = useState([]);
  const [selectedProductId, setSelectedProductId] = useState(null);

  useEffect(() => {
    fetch(`http://localhost:4000/products/all`, {
      method: "GET",
      headers: {
        "Content-Type": "application/json"
      }
    })
      .then(res => res.json())
      .then(data => {
        console.log(data);
        setProducts(data);
      });
  }, []);

  return (
    <div>
      {products.map(product => (
        <div key={product._id}>
          <h2 onClick={() => handleProductClick(product._id)}>
            {product.name}
          </h2>
          <p>{product.description}</p>
          <p>{product.price}</p>
          <button onClick={() => handleArchive(product._id)}>Archive</button>
        </div>
      ))}
    </div>
  );
}

function ProductDetails({ productId }) {
  const [product, setProduct] = useState(null);

  useEffect(() => {
    fetch(`http://localhost:4000/products/:productId`, {
      method: "GET",
      headers: {
        "Content-Type": "application/json"
      }
    })
      .then(res => res.json())
      .then(data => {
        console.log(data);
        setProduct(data);
      });
  }, [productId]);

  if (!product) {
    return <div>Loading...</div>;
  }

  return (
    <div>
      <h2>{product.name}</h2>
      <p>{product.description}</p>
      <p>{product.price}</p>
    </div>
  );
}

export default Products;

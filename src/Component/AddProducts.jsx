import React, { useEffect, useState } from 'react';
import axios from 'axios';
import '../CSS/AddProduct.css';
import ProductListSkeletonLoading from './ProductListSkeletonLoading';

const AddProducts = () => {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    axios.get('https://fakestoreapi.com/products')
      .then((response) => {
        setProducts(response.data)
        setLoading(false)
      })
      .catch(error => console.error('Error Fetching Data:', error));
  }, []);

  return (
    <div>
      {loading ? (
        
        <ProductListSkeletonLoading />
      ) : (
        <div className="product-list">
          {products.map(product => (
            <div key={product.id} className='product-card'>
              <img src={product.image} alt={product.title} />
              <div className="product-details">
                <h3>{product.title}</h3>
                <p>{product.description}</p>
                <p>${product.price}</p>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default AddProducts;
// skeleton loading means it shows as a shimmer effect 
// when the data is loadede so it shows the shimmer effect and after somtime data will be loaded successfully
// it dosent show the exact effect it showa only the grey cards it shows when the dta is loaded
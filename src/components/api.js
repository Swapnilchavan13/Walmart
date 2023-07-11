import React, { useState, useEffect } from 'react';

const FakeStoreComponent = () => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    fetch('https://fakestoreapi.com/products')
      .then(response => response.json())
      .then(data => setProducts(data))
      .catch(error => console.error('Error fetching products:', error));
  }, []);

  return (
    <div>
      <h1>Fake Store Products</h1>
      {products.map(product => (
        <div key={product.id}>
          <h2>{product.title}</h2>
          <img src={product.image} alt={product.title} />
          <p>{product.description}</p>
          <p>Price: ${product.price}</p>
        </div>
      ))}
    </div>
  );
};

export default FakeStoreComponent;

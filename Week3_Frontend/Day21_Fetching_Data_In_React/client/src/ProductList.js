
import React, { useState, useEffect } from 'react';

function ProductList() {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        setLoading(true);
        setError(null);

        const response = await fetch('http://localhost:3000/products');

        if (!response.ok) {
          throw new Error(`HTTP error! status: ${response.status}`);
        }

        const data = await response.json();
        setProducts(data);
      } catch (e) {
        console.error("Failed to fetch products:", e);
        setError(e.message);
      } finally {
        setLoading(false);
      }
    };

    fetchProducts();

  }, []);

  if (loading) {
    return <p>Loading products...</p>;
  }

  if (error) {
    return <p>Error fetching products: {error}</p>;
  }

  if (products.length === 0) {
    return <p>No products found. Add some via your backend API!</p>;
  }

  return (
    <div>
      <h2>Our Products</h2>
      <ul>
        {products.map(product => (
          <li key={product._id}>
            <h3>{product.name}</h3>
            <p>Price: ${product.price}</p>
            <p>Category: {product.category}</p>
            {product.tags && product.tags.length > 0 && (
              <p>Tags: {product.tags.join(', ')}</p>
            )}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default ProductList;
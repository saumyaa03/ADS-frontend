import React, { useEffect, useState } from 'react';
import axios from 'axios';
import MyProductCard from '../components/temp/MyProductCard';

function Products() {
  const [products, setProducts] = useState([]);
  const [isError, setIsError] = useState(false);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get("http://localhost:8080/api/products");
        setProducts(response.data);
      } catch (error) {
        console.error("Error fetching data:", error);
        setIsError(true);
      }
    };

    fetchData();
  }, []);

  return (
    <div className="container pt-5">
      <div className="row justify-content-center">
        {products.map((product) => (
          <div key={product.id} className="col-md-4 mb-4 d-flex align-items-stretch">
            <MyProductCard product={product} />
          </div>
        ))}
      </div>
    </div>
  );
}

export default Products;

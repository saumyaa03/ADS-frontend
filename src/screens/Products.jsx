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

  console.log("Products loaded:", products);


  return (
    <div
      className="pt-[80px] px-6 flex flex-wrap gap-4 justify-center"
      style={{ maxWidth: "1200px", margin: "0 auto" }}
    >
         {products.map((product) => (
            <MyProductCard key={product.id} product={product} />
          ))}
          
    </div>
  );
  
}

export default Products;

import React, { useContext, useState } from "react";
import ProductForm from "../components/products/ProductForm";
import { toast } from "react-toastify";
import { uploadProduct } from "../services/ProductService";
import { Context } from "../contexts/AppContext";

const AddProduct = () => {

  const [product, setProduct] = useState({
    name: "",
    brand: "",
    description: "",
    price: "",
    category: "",
    stockQuantity: "",
    releaseDate: "",
    productAvailable: false,
  });

  const [image, setImage] = useState(null);

  const { token } = useContext(Context);


  const handleSubmit = async (e) => {
    e.preventDefault();

    // Basic required field validation
    if (!product.name || !product.brand || !product.price || !product.category || !image) {
      toast.error("Please fill all required fields and select an image.");
      return;
    }

    try {
      console.log("Token from context:", token);
      const result = await uploadProduct(product, image, token);
      // alert("Product added successfully!");
      // const token = localStorage.getItem("token");
      console.log("Token before submit:", token);

      toast.success("Product added successfully!");

      setProduct({
        name: "",
        brand: "",
        description: "",
        price: "",
        category: "",
        stockQuantity: "",
        releaseDate: "",
        productAvailable: false,
      });
      setImage(null);
    } catch (err) {
      console.error(err);
      toast.error("Something went wrong while uploading product!");
    }
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target; // object destructuring
    console.log("name: " + name + " value: " + value);
    setProduct(prev => ({ ...prev, [name]: value }));
  }

  const handleImageChange = (e) => {
    setImage(e.target.files[0]);
    // setProduct({...product, image: e.target.files[0]})
  };

  const handleCheckboxChange = (e) => {
    setProduct((prev) => ({ ...prev, productAvailable: e.target.checked }));
  };



  return (
    <div className="container">
      <div className="center-container">
        <ProductForm
          product={product}
          setProduct={setProduct}
          image={image}
          handleInputChange={handleInputChange}
          handleImageChange={handleImageChange}
          handleCheckboxChange={handleCheckboxChange}
          handleSubmit={handleSubmit}
        />
      </div>
    </div>
  );
};

export default AddProduct;

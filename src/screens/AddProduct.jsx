import React from "react";
import useProductForm from "../hooks/useProductForm";
import ProductForm from "../components/products/ProductForm";

const AddProduct = () => {
  const {
    product,
    image,
    handleInputChange,
    handleImageChange,
    handleCheckboxChange,
    submitHandler,
  } = useProductForm();

  return (
    <div className="container">
      <div className="center-container">
        <ProductForm
          product={product}
          image={image}
          onInputChange={handleInputChange}
          onImageChange={handleImageChange}
          onCheckboxChange={handleCheckboxChange}
          onSubmit={submitHandler}
        />
      </div>
    </div>
  );
};

export default AddProduct;

import { useState } from "react";
import axios from "../axios"; // use your secure axios instance (with token)

const useProductForm = () => {
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

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setProduct((prev) => ({ ...prev, [name]: value }));
  };

  const handleImageChange = (e) => {
    setImage(e.target.files[0]);
  };

  const handleCheckboxChange = (e) => {
    setProduct((prev) => ({ ...prev, productAvailable: e.target.checked }));
  };

  const submitHandler = (e) => {
    e.preventDefault();
    const formData = new FormData();
    formData.append("imageFile", image);
    formData.append(
      "product",
      new Blob([JSON.stringify(product)], { type: "application/json" })
    );

    axios
      .post("/product", formData)
      .then((res) => {
        alert("Product added");
        console.log("Product added:", res.data);
      })
      .catch((err) => {
        console.error("Error:", err);
        alert("Failed to add product");
      });
  };

  return {
    product,
    image,
    handleInputChange,
    handleImageChange,
    handleCheckboxChange,
    submitHandler,
  };
};

export default useProductForm;

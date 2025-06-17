// src/components/ProductCard.jsx
import React from "react";

const ProductCard = ({ product }) => {
  return (
    <div
      className="card mb-3"
      style={{
        width: "270px",
        height: "210px",
        boxShadow: "0 4px 8px rgba(0,0,0,0.1)",
        borderRadius: "10px",
        overflow: "hidden",
        display: "flex",
        flexDirection: "column",
        justifyContent: "flex-start",
        alignItems: "stretch",
      }}
    >
      <div
        className="card-body"
        style={{
          flexGrow: 1,
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          padding: "10px",
        }}
      >
        <div>
          <h5
            className="card-title"
            style={{ margin: "0 0 10px 0", fontSize: "1.2rem" }}
          >
            {product.name.toUpperCase()}
          </h5>
          <i
            className="card-brand"
            style={{ fontStyle: "italic", fontSize: "0.8rem" }}
          >
            {"by " + product.brand}
          </i>
        </div>
        <hr className="hr-line" style={{ margin: "10px 0" }} />
        <div className="home-cart-price">
          <h5
            className="card-text"
            style={{
              fontWeight: "600",
              fontSize: "1.1rem",
              marginBottom: "5px",
            }}
          >
            ₹{product.price}
          </h5>
        </div>
        <button
          className="btn-hover color-9"
          style={{ margin: "10px 25px 0px " }}
        >
          Add To Cart
        </button>
      </div>
    </div>
  );
};

export default ProductCard;

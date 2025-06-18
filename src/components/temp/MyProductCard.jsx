import React from 'react';

const MyProductCard = ({ product }) => {
  return (
    <div className="card h-100 shadow-sm" style={{ width: "100%", maxWidth: "270px" }}>
      {/* Image Section */}
      <div className="bg-light d-flex align-items-center justify-content-center" style={{ height: "200px", overflow: "hidden" }}>
        <img
          src={`http://localhost:8080/api/product/${product.id}/image`}
          alt={product.name}
          className="img-fluid"
          style={{ objectFit: 'cover', height: '100%', width: '100%' }}
        />
      </div>

      {/* Card Body */}
      <div className="card-body d-flex flex-column justify-content-between">
        <div>
          <h5 className="card-title text-uppercase">{product.name}</h5>
          <p className="text-muted small fst-italic mb-2">by {product.brand}</p>
        </div>

        <div>
          <h5 className="text-success fw-bold mb-2">${product.price}</h5>
          <button className="btn btn-primary w-100">Add to Cart</button>
        </div>
      </div>
    </div>
  );
};

export default MyProductCard;

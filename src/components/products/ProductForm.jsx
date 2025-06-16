import React from "react";

const ProductForm = ({
  product,
  image,
  onInputChange,
  onImageChange,
  onCheckboxChange,
  onSubmit,
}) => {
  return (
    <form className="row g-3 pt-5" onSubmit={onSubmit}>
      {/* Name */}
      <div className="col-md-6">
        <label className="form-label"><h6>Name</h6></label>
        <input
          type="text"
          className="form-control"
          placeholder="Product Name"
          onChange={onInputChange}
          value={product.name}
          name="name"
        />
      </div>

      {/* Brand */}
      <div className="col-md-6">
        <label className="form-label"><h6>Brand</h6></label>
        <input
          type="text"
          name="brand"
          className="form-control"
          placeholder="Brand"
          value={product.brand}
          onChange={onInputChange}
        />
      </div>

      {/* Description */}
      <div className="col-12">
        <label className="form-label"><h6>Description</h6></label>
        <input
          type="text"
          className="form-control"
          placeholder="Description"
          value={product.description}
          name="description"
          onChange={onInputChange}
        />
      </div>

      {/* Price */}
      <div className="col-md-4">
        <label className="form-label"><h6>Price</h6></label>
        <input
          type="number"
          className="form-control"
          placeholder="$1000"
          onChange={onInputChange}
          value={product.price}
          name="price"
        />
      </div>

      {/* Category */}
      <div className="col-md-4">
        <label className="form-label"><h6>Category</h6></label>
        <select
          className="form-select"
          value={product.category}
          onChange={onInputChange}
          name="category"
        >
          <option value="">Select</option>
          <option value="Laptop">Laptop</option>
          <option value="Mobile">Mobile</option>
          <option value="Fashion">Fashion</option>
          <option value="Medical">Medical</option>
          <option value="Fitness">Fitness</option>
        </select>
      </div>

      {/* Stock */}
      <div className="col-md-4">
        <label className="form-label"><h6>Stock</h6></label>
        <input
          type="number"
          className="form-control"
          placeholder="Stock"
          onChange={onInputChange}
          value={product.stockQuantity}
          name="stockQuantity"
        />
      </div>

      {/* Release Date */}
      <div className="col-md-4">
        <label className="form-label"><h6>Release Date</h6></label>
        <input
          type="date"
          className="form-control"
          value={product.releaseDate}
          name="releaseDate"
          onChange={onInputChange}
        />
      </div>

      {/* Image Upload */}
      <div className="col-md-4">
        <label className="form-label"><h6>Image</h6></label>
        <input
          className="form-control"
          type="file"
          onChange={onImageChange}
        />
      </div>

      {/* Availability */}
      <div className="col-12">
        <div className="form-check">
          <input
            className="form-check-input"
            type="checkbox"
            name="productAvailable"
            id="gridCheck"
            checked={product.productAvailable}
            onChange={onCheckboxChange}
          />
          <label className="form-check-label">Product Available</label>
        </div>
      </div>

      {/* Submit */}
      <div className="col-12">
        <button type="submit" className="btn btn-primary">Submit</button>
      </div>
    </form>
  );
};

export default ProductForm;

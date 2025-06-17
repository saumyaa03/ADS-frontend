import React from "react";

const ProductForm = ({
  product,
  image,
  handleInputChange,
  handleImageChange,
  handleCheckboxChange,
  handleSubmit,
}) => {
  return (
    <form
      onSubmit={handleSubmit}
      style={{
        display: "grid",
        gridTemplateColumns: "1fr 1fr",
        gap: "1.5rem",
        paddingTop: "2rem",
      }}
    >
      {/* Product Name */}
      <div>
        <label className="form-label">Name</label>
        <input
          type="text"
          className="form-control"
          placeholder="Product Name"
          name="name"
          value={product.name}
          onChange={handleInputChange}
        />
      </div>

      {/* Brand */}
      <div>
        <label className="form-label">Brand</label>
        <input
          type="text"
          className="form-control"
          placeholder="Brand"
          name="brand"
          value={product.brand}
          onChange={handleInputChange}
        />
      </div>

      {/* Category */}
      <div>
        <label className="form-label">Category</label>
        <select
          className="form-select"
          name="category"
          value={product.category}
          onChange={handleInputChange}
        >
          <option value="">Select category</option>
          <option value="fitness">Gym & Fitness</option>
          <option value="medical">Medical Equipment</option>
          <option value="wellness">Wellness</option>
          <option value="misc">Miscellaneous</option>
        </select>
      </div>

      {/* Stock Quantity */}
      <div>
        <label className="form-label">Stock Quantity</label>
        <input
          type="number"
          className="form-control"
          name="stockQuantity"
          placeholder="Available units"
          value={product.stockQuantity}
          onChange={handleInputChange}
        />
      </div>

      {/* Price */}
      <div>
        <label className="form-label">Price</label>
        <input
          type="number"
          className="form-control"
          name="price"
          placeholder="Enter price in $"
          value={product.price}
          onChange={handleInputChange}
        />
      </div>

      {/* Release Date */}
      <div>
        <label className="form-label">Release Date</label>
        <input
          type="date"
          className="form-control"
          name="releaseDate"
          value={product.releaseDate}
          onChange={handleInputChange}
        />
      </div>

      {/* Description (full width) */}
      <div style={{ gridColumn: "span 2" }}>
        <label className="form-label">Description</label>
        <input
          type="text"
          className="form-control"
          name="description"
          placeholder="Short description"
          value={product.description}
          onChange={handleInputChange}
        />
      </div>

      {/* Image Upload */}
      <div>
        <label className="form-label">Product Image</label>
        <input
          type="file"
          className="form-control"
          onChange={handleImageChange}
        />

        {image && (
          <div className="mt-2">
            <label className="form-label">Preview:</label>
            <img
              src={URL.createObjectURL(image)}
              alt="Preview"
              style={{ width: "120px", height: "120px", objectFit: "cover", border: "1px solid #ccc", borderRadius: "6px" }}
            />
          </div>
        )}
      </div>


      {/* Product Availability */}
      <div className="form-check mt-4">
        <input
          className="form-check-input"
          type="checkbox"
          id="availableCheck"
          checked={product.productAvailable}
          onChange={handleCheckboxChange}
        />
        <label className="form-check-label" htmlFor="availableCheck">
          Product Available
        </label>
      </div>

      {/* Submit Button (full width) */}
      <div style={{ gridColumn: "span 2" }}>
        <button type="submit" className="btn btn-primary w-100">
          Submit Product
        </button>
      </div>
    </form>
  );
};

export default ProductForm;

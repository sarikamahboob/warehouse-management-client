import React from "react";
import { useNavigate } from "react-router-dom";
import "./Product.css";

const Product = ({ product }) => {
  const navigate = useNavigate();
  const { _id, name, image, price, description, quantity, supplier_name } =
    product;
  return (
    <div>
      <div
        className="product-card"
        data-aos="fade-right"
        data-aos-easing="linear"
        data-aos-duration="1000"
      >
        <div className="product-image">
          <img src={image} alt="" className="w-75" />
        </div>
        <p className="product-name">{name}</p>
        <p className="product-description">
          {description.length > 200 ? description.slice(0, 200) : description}
          <span onClick={() => navigate(`/inventory/${_id}`)}>
            ...Read More
          </span>
        </p>
        <p className="product-price">
          <span>Price:</span> ${price}
        </p>
        <p className="product-supplier">
          <span>Supplier Name:</span> {supplier_name}
        </p>
        <p className="product-quantity">
          <span>Quantity:</span> {quantity}
        </p>
        <button
          className="stock-update-button"
          onClick={() => navigate(`/inventory/${_id}`)}
        >
          Stock Update
        </button>
      </div>
    </div>
  );
};

export default Product;

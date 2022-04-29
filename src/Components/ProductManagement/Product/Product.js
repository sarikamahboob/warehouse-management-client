import React from "react";
import { useNavigate } from "react-router-dom";
import "./Product.css";

const Product = ({ product }) => {
  const navigate = useNavigate();
  const { _id, name, image, price, description, quantity, supplier_name } =
    product;
  return (
    <div>
      <div className="product-card">
        <div className="product-image">
          <img src={image} alt="" className="w-75" />
        </div>
        <p>{name}</p>
        <p>
          {description.length > 200 ? description.slice(0, 200) : description}
          <span onClick={() => navigate(`/inventory/${_id}`)}>
            ...Read More
          </span>
        </p>
        <p>Price: ${price}</p>
        <p>Supplier Name: {supplier_name}</p>
        <p>Quantity: {quantity}</p>
        <button onClick={() => navigate(`/inventory/${_id}`)}>
          Stock Update
        </button>
      </div>
    </div>
  );
};

export default Product;

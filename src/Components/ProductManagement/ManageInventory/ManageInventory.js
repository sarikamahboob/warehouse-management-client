import React, { useEffect, useState } from "react";
import { Table } from "react-bootstrap";
import { useNavigate } from "react-router-dom";
import "./ManageInventory.css";

const ManageInventory = ({ product }) => {
  const navigate = useNavigate();
  const [products, setProducts] = useState([]);
  const { _id, name, image, price, description, quantity, supplier_name } =
    product;

  return (
    <div>
      <div className="product-table">
        <li className="single-product">
          <span className="">
            <img src={image} alt="" className="w-75" />
          </span>
          <span className="single-product-name">{name}</span>
          <span className="single-product-description">
            {description.length > 200 ? description.slice(0, 200) : description}
            <span onClick={() => navigate(`/inventory/${_id}`)}>
              ...Read More
            </span>
          </span>
          <span className="single-product-price">${price}</span>
          <span className="single-product-supplier">{supplier_name}</span>
          <span className="single-product-quantity">{quantity}</span>
          <button
            className="stock-update-button"
            onClick={() => navigate(`/inventory/${_id}`)}
          >
            Stock Update
          </button>
        </li>
      </div>
    </div>
  );
};

export default ManageInventory;

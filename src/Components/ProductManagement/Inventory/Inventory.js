import userEvent from "@testing-library/user-event";
import React, { useEffect, useState } from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import { useNavigate } from "react-router-dom";
import { toast, ToastContainer } from "react-toastify";
import auth from "../../../firebase.init";
import Product from "../Product/Product";
import "./Inventory.css";

const Inventory = () => {
  const navigate = useNavigate();
  const [user] = useAuthState(auth);
  const [products, setProducts] = useState([]);

  useEffect(() => {
    fetch("http://localhost:5000/inventory")
      .then((res) => res.json())
      .then((data) => setProducts(data));
  }, []);

  const handleDeleteProduct = (id) => {
    const proceed = window.confirm("Are you sure to delete the product?");
    if (proceed) {
      fetch(`http://localhost:5000/inventory/${id}`, {
        method: "DELETE",
      })
        .then((res) => res.json())
        .then((data) => {
          console.log(data);
          const remaining = products.filter((order) => order._id !== id);
          setProducts(remaining);
        });
    }
  };

  return (
    <div className="container">
      <div className="product-container">
        {products.map((product) => (
          <div>
            <Product key={product._id} product={product}></Product>
            <ToastContainer />
            <button onClick={() => handleDeleteProduct(product._id)}>
              Delete
            </button>
          </div>
        ))}
      </div>
      <button onClick={() => navigate(`/addProduct`)}>Add New Product</button>
    </div>
  );
};

export default Inventory;

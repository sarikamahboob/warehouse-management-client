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

  const handleOrder = (product) => {
    const { _id, image, name, price } = product;
    fetch("http://localhost:5000/orders", {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify({
        _id,
        image,
        name,
        price,
        email: user.email,
      }),
    })
      .then((res) => res.json())
      .then((data) => {
        toast("Order Added Successfully !!!");
        console.log(data);
      });
  };

  return (
    <div className="container">
      <div className="product-container">
        {products.map((product) => (
          <div>
            <Product key={product._id} product={product}></Product>
            <button onClick={() => handleOrder(product)}>Order Now </button>
            <ToastContainer />
          </div>
        ))}
      </div>
      <button onClick={() => navigate(`/addProduct`)}>Add New Product</button>
    </div>
  );
};

export default Inventory;

import React, { useEffect, useState } from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import { FaTrashAlt } from "react-icons/fa";
import { useNavigate } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import auth from "../../../firebase.init";
import ManageInventory from "../ManageInventory/ManageInventory";
import "./Inventory.css";

const Inventory = () => {
  const navigate = useNavigate();
  const [user] = useAuthState(auth);
  const [products, setProducts] = useState([]);
  const [isReload, setIsReload] = useState(false);

  useEffect(() => {
    fetch("https://warehouse-management-server2.vercel.app/inventory")
      .then((res) => res.json())
      .then((data) => setProducts(data));
  }, [isReload]);

  const handleDeleteProduct = (id) => {
    const proceed = window.confirm("Are you sure to delete the product?");
    if (proceed) {
      fetch(`https://warehouse-management-server2.vercel.app/inventory/${id}`, {
        method: "DELETE",
      })
        .then((res) => res.json())
        .then((data) => {
          console.log(data);
          const remaining = products.filter((order) => order._id !== id);
          setProducts(remaining);
          setIsReload(!isReload);
        });
    }
  };

  return (
    <div className="container">
      <div className="product-container-table">
        <li className="product-title">
          <span style={{ width: "20%" }}>Product Image</span>
          <span style={{ width: "15%" }}>Product Name</span>
          <span style={{ width: "25%" }}>Description</span>
          <span style={{ width: "6%" }}>Price</span>
          <span style={{ width: "13%" }}>Supplier Name</span>
          <span style={{ width: "5%" }}>Quantity</span>
          <span style={{ width: "15%" }}>Stock</span>
        </li>
        {products.map((product) => (
          <div
            className="products"
            data-aos="fade-right"
            data-aos-easing="linear"
            data-aos-duration="1000"
          >
            <ManageInventory
              key={product._id}
              product={product}
            ></ManageInventory>
            <ToastContainer />
            <span
              className="delete-product"
              onClick={() => handleDeleteProduct(product._id)}
            >
              <FaTrashAlt />
            </span>
          </div>
        ))}
      </div>
      <div className="inventory-button">
        <button
          className="manage-inventory-button"
          onClick={() => navigate(`/addProduct`)}
        >
          Add New Product
        </button>
      </div>
    </div>
  );
};

export default Inventory;

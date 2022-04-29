import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import Inventory from "../../ProductManagement/Inventory/Inventory";
import Product from "../../ProductManagement/Product/Product";
import Banner from "../Banner/Banner";
import "./Home.css";

const Home = () => {
  const navigate = useNavigate();
  const [products, setProducts] = useState([]);

  useEffect(() => {
    fetch("http://localhost:5000/inventory")
      .then((res) => res.json())
      .then((data) => setProducts(data));
  }, []);

  return (
    <div>
      <Banner />
      <div className="container">
        <div className="home-product-container">
          {products.slice(0, 6).map((product) => (
            <Product key={product._id} product={product}></Product>
          ))}
        </div>
        <button
          className="manage-inventory-button"
          onClick={() => navigate(`/inventory`)}
        >
          Manage Inventories
        </button>
      </div>
    </div>
  );
};

export default Home;

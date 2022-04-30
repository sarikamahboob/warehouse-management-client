import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import Inventory from "../../ProductManagement/Inventory/Inventory";
import Product from "../../ProductManagement/Product/Product";
import Banner from "../Banner/Banner";
import "./Home.css";
import { HiOutlineArrowNarrowRight } from "react-icons/hi";

const Home = () => {
  const navigate = useNavigate();
  const [products, setProducts] = useState([]);

  useEffect(() => {
    fetch("https://young-sands-25247.herokuapp.com/inventory")
      .then((res) => res.json())
      .then((data) => setProducts(data));
  }, []);

  return (
    <div>
      <Banner />
      <div className="container">
        <div className="home-products-section">
          <div className="home-product-container">
            {products.slice(0, 6).map((product) => (
              <Product key={product._id} product={product}></Product>
            ))}
          </div>
        </div>
        <div className="inventory-button">
          <button
            className="manage-inventory-button"
            onClick={() => navigate(`/inventory`)}
          >
            Manage Inventories
            <span>
              <HiOutlineArrowNarrowRight />
            </span>
          </button>
        </div>
      </div>
    </div>
  );
};

export default Home;

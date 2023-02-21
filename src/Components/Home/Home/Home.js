import React, { useEffect, useState } from "react";
import { HiOutlineArrowNarrowRight } from "react-icons/hi";
import { useNavigate } from "react-router-dom";
import Product from "../../ProductManagement/Product/Product";
import Banner from "../Banner/Banner";
import Benefits from "../Benefits/Benefits";
import WarehouseInfo from "../WarehouseInfo/WarehouseInfo";
import "./Home.css";

const Home = () => {
  const navigate = useNavigate();
  const [products, setProducts] = useState([]);

  useEffect(() => {
    fetch("https://warehouse-management-server2.vercel.app/inventory")
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

        <Benefits />
        <WarehouseInfo />
      </div>
    </div>
  );
};

export default Home;

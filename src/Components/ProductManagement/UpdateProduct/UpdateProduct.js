import React, { useEffect, useState } from "react";
import { } from "react-bootstrap";
import { BiArrowBack } from "react-icons/bi";
import { MdDeliveryDining } from "react-icons/md";
import { useNavigate, useParams } from "react-router-dom";
import { toast, ToastContainer } from "react-toastify";
import "./UpdateProduct.css";

const UpdateProduct = () => {
  const navigate = useNavigate();
  const { id } = useParams();
  const [product, setProduct] = useState([]);
  const [isReload, setIsReload] = useState(false);

  useEffect(() => {
    fetch(`https://warehouse-management-server-0tt3.onrender.com/inventory/${id}`)
      .then((res) => res.json())
      .then((data) => setProduct(data));
  }, [isReload]);

  const handleIncreaseQuantity = (event) => {
    event.preventDefault();
    const quantity =
      parseInt(event.target.quantity.value) + parseInt(product.quantity);

    const updateQuantity = { quantity };

    fetch(`https://warehouse-management-server-0tt3.onrender.com/inventory/${id}`, {
      method: "PUT",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(updateQuantity),
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        setIsReload(!isReload);
        toast("Stock Added Successfully!!!");
        event.target.reset();
      });
  };

  const handleDecreaseProduct = (event) => {
    event.preventDefault();
    const quantity = parseInt(product.quantity) - 1;
    console.log(quantity);

    const updateQuantity = { quantity };

    fetch(`https://warehouse-management-server-0tt3.onrender.com/inventory/${id}`, {
      method: "PUT",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(updateQuantity),
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        setIsReload(!isReload);
        toast("One Product Delivered!!!");
      });
  };

  return (
    <div className="container">
      <div className="update-product-container">
        <div className="single-product-card">
          <div className="single-product-image">
            <img src={product.image} alt="" className="w-75" />
          </div>
          <div className="update-product-info">
            <p className="update-product-name">{product.name}</p>
            <p className="update-product-description">{product.description}</p>
            <p className="update-product-price">
              <span>Price:</span> ${product.price}
            </p>
            <p className="update-product-supplier">
              <span>Supplier Name:</span> {product.supplier_name}
            </p>
            <p className="update-product-quantity">
              <span>Quantity:</span> {product.quantity}
            </p>
            <form
              className="update-product-stock"
              onSubmit={handleIncreaseQuantity}
            >
              <input
                className="stock-number"
                type="number"
                name="quantity"
                id=""
                placeholder="Number"
              />
              <span>
                {" "}
                <BiArrowBack />{" "}
              </span>
              <input
                className="restock-item-button"
                type="submit"
                value="Restock "
              />
            </form>
            <button
              className="delivered-button"
              onClick={handleDecreaseProduct}
            >
              Delivered{" "}
              <span>
                <MdDeliveryDining />
              </span>
            </button>
          </div>
        </div>
        <button
          className="manage-inventory-button"
          onClick={() => navigate(`/inventory`)}
        >
          Manage Inventories
        </button>
      </div>

      <ToastContainer />
    </div>
  );
};

export default UpdateProduct;

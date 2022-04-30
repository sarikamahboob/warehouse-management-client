import React, { useEffect, useState } from "react";
import {} from "react-bootstrap";
import { useAuthState } from "react-firebase-hooks/auth";
import { useLocation, useNavigate, useParams } from "react-router-dom";
import { toast, ToastContainer } from "react-toastify";

const UpdateProduct = () => {
  const navigate = useNavigate();
  const { id } = useParams();
  const [product, setProduct] = useState([]);
  const [isReload, setIsReload] = useState(false);

  useEffect(() => {
    fetch(`https://young-sands-25247.herokuapp.com/inventory/${id}`)
      .then((res) => res.json())
      .then((data) => setProduct(data));
  }, [isReload]);

  const handleIncreaseQuantity = (event) => {
    event.preventDefault();
    const quantity =
      parseInt(event.target.quantity.value) + parseInt(product.quantity);

    const updateQuantity = { quantity };

    fetch(`https://young-sands-25247.herokuapp.com/inventory/${id}`, {
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

    fetch(`https://young-sands-25247.herokuapp.com/inventory/${id}`, {
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
    <div>
      <div className="single-product-card">
        <div className="single-product-image">
          <img src={product.image} alt="" className="w-75" />
        </div>
        <p>{product.name}</p>
        <p>{product.description}</p>
        <p>Price: ${product.price}</p>
        <p>Supplier Name: {product.supplier_name}</p>
        <p>Quantity: {product.quantity}</p>
        <button onClick={handleDecreaseProduct}>Delivered</button>
        <form onSubmit={handleIncreaseQuantity}>
          <input type="number" name="quantity" id="" />
          <input type="submit" value="Restock item" />
        </form>
      </div>
      <button
        className="manage-inventory-button"
        onClick={() => navigate(`/inventory`)}
      >
        Manage Inventories
      </button>
      <ToastContainer />
    </div>
  );
};

export default UpdateProduct;

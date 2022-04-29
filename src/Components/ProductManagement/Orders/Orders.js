import React, { useEffect, useState } from "react";
import { Table } from "react-bootstrap";
import { useAuthState } from "react-firebase-hooks/auth";
import auth from "../../../firebase.init";
import "./Orders.css";

const Orders = () => {
  const [user] = useAuthState(auth);
  const [orderList, setOrderList] = useState([]);

  useEffect(() => {
    fetch("http://localhost:5000/orderList")
      .then((res) => res.json())
      .then((data) => setOrderList(data));
  }, [user.email]);

  const handleDelete = (id) => {
    const proceed = window.confirm("Are you sure to delete the item?");
    if (proceed) {
      fetch(`http://localhost:5000/orderList/${id}`, {
        method: "DELETE",
      })
        .then((res) => res.json())
        .then((data) => {
          console.log(data);
          const remaining = orderList.filter((order) => order._id !== id);
          setOrderList(remaining);
        });
    }
  };

  return (
    <div>
      <h1>Orders</h1>
      <div className="order-container">
        {orderList.map((order) => (
          <div className="order">
            <li>
              <span>
                <img className="order-image" src={order.image} alt="" />
              </span>
              <span className="order-name"> {order.name}</span>
              <span className="order-price">${order.price}</span>
              <span>
                <button onClick={() => handleDelete(order._id)}>X</button>
              </span>
            </li>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Orders;

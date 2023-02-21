import { signOut } from "firebase/auth";
import React, { useEffect, useState } from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import { FaTrashAlt } from "react-icons/fa";
import { useNavigate } from "react-router-dom";
import auth from "../../../firebase.init";
import "./UserProducts.css";

const UserProducts = () => {
  const [user] = useAuthState(auth);
  const [userProducts, setUserProducts] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    const email = user.email;
    console.log(user.email);
    try {
      fetch(
        `https://warehouse-management-server-0tt3.onrender.com/addProduct?email=${email}`,
        {
          headers: {
            authorization: `Bearer ${localStorage.getItem("accessToken")}`,
          },
        }
      )
        .then((res) => res.json())
        .then((data) => {
          setUserProducts(data);
        });
    } catch (error) {
      console.log(error.message);
      if (error.response.status === 401 || error.response.status === 403) {
        signOut(auth);
        navigate("/login");
      }
    }
  }, [user]);

  const handleDelete = (id) => {
    const proceed = window.confirm("Are you sure to delete the item?");
    if (proceed) {
      fetch(`https://warehouse-management-server-0tt3.onrender.com/inventory/${id}`, {
        method: "DELETE",
      })
        .then((res) => res.json())
        .then((data) => {
          console.log(data);
          const remaining = userProducts.filter(
            (product) => product._id !== id
          );
          setUserProducts(remaining);
        });
    }
  };

  return (
    <div className="container">
      <h1 className="benefit-section-title">Add Products Please !!!</h1>
      <div className="user-product-container">
        {userProducts.map((order) => (
          <div className="user-product">
            <li>
              <span>
                <img className="user-product-image" src={order.image} alt="" />
              </span>
              <span className="user-product-name"> {order.name}</span>
              <span className="user-product-price">${order.price}</span>
              <span>
                <button
                  className="user-product-delete"
                  onClick={() => handleDelete(order._id)}
                >
                  <FaTrashAlt />
                </button>
              </span>
            </li>
          </div>
        ))}
      </div>
    </div>
  );
};

export default UserProducts;

import React from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import { useForm } from "react-hook-form";
import auth from "../../../firebase.init";
import "./AddProduct.css";

const AddProduct = () => {
  const { register, handleSubmit } = useForm();
  const [user] = useAuthState(auth);

  const onSubmit = (data, event) => {
    console.log(data);
    fetch("https://warehouse-management-server-0tt3.onrender.com/addProduct", {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(data),
    })
      .then((res) => res.json())
      .then((result) => {
        console.log(result);
        event.target.reset();
      });
  };
  return (
    <div className="container">
      <form className="form" onSubmit={handleSubmit(onSubmit)}>
        <input
          placeholder="Product Name"
          {...register("name", { required: true })}
        />
        <input
          placeholder="Product Image"
          {...register("image", { required: true })}
        />
        <input
          placeholder="Product Description"
          {...register("description", { required: true })}
        />
        <input
          placeholder="Product Price"
          {...register("price", { required: true })}
        />
        <input
          placeholder="Product Supplier Name"
          {...register("supplier_name", { required: true })}
        />
        <input
          placeholder="Product Quantity"
          {...register("quantity", { required: true })}
        />
        <input
          placeholder="User Email"
          value={user.email}
          {...register("email", { value: user.email, required: true })}
          disabled
        />

        <input className="add-product" type="submit" value="Add Product" />
      </form>
    </div>
  );
};

export default AddProduct;

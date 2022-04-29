import React from "react";
import { useForm } from "react-hook-form";

const AddProduct = () => {
  const { register, handleSubmit } = useForm();

  const onSubmit = (result) => {
    fetch("http://localhost:5000/inventory", {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(result),
    })
      .then((res) => res.json())
      .then((data) => console.log(data));
  };
  return (
    <div>
      <form onSubmit={handleSubmit(onSubmit)}>
        <input
          placeholder="Product Name"
          {...register("name", { required: true, maxLength: 30 })}
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

        <input type="submit" value="Add Product" />
      </form>
    </div>
  );
};

export default AddProduct;

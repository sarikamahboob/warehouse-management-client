import React from "react";
import "./Benefits.css";
import benefit1 from "../../../Images/benefit1.png";
import benefit2 from "../../../Images/benefit2.png";
import benefit3 from "../../../Images/benefit3.png";
import benefit4 from "../../../Images/benefit4.png";

const Benefits = () => {
  return (
    <div
      className="container"
      data-aos="fade-right"
      data-aos-easing="linear"
      data-aos-duration="1000"
    >
      <h1 className="benefit-section-title">Customer Benefits</h1>
      <div className="benefit-container">
        <div className="single-benefit">
          <div className="single-benefit-image">
            <img src={benefit1} alt="" />
          </div>
          <h2 className="single-benefit-title">Professional Staff</h2>
          <p className="single-benefit-des">
            Warehouse workers assist with all shipping, receiving, and inventory
            organization within the warehouse space. Their job is physically
            demanding and includes unloading and loading goods from trucks,
            picking designated items from a shelf, packaging these items, and
            preparing them for shipment. They also move products around the
            warehouse, tracking and labeling inventory.
          </p>
        </div>
        <div className="single-benefit">
          <div className="single-benefit-image">
            <img src={benefit2} alt="" />
          </div>
          <h2 className="single-benefit-title">Distribution & Delivery</h2>
          <p className="single-benefit-des">
            The order fulfillment process begins once the order is received with
            warehouse picking. The picking team receives a packing slip
            consisting of all the product orders, the quantities, and the
            storage locations at the facility for collecting the products. Once
            the picker has picked all items in the order, they are securely
            packed up. After packing the order, it is labeled and finally
            shipped off to be delivered to the customer's doorstep. These
            centers can even do one-day or two-day delivery.
          </p>
        </div>
        <div className="single-benefit">
          <div className="single-benefit-image">
            <img src={benefit3} alt="" />
          </div>
          <h2 className="single-benefit-title">Packaging</h2>
          <p className="single-benefit-des">
            We delivers powerful and insightful security solutions that enable
            protectors to drive forward. As the leader in security, we customize
            a home security system to meet your safety needs. Ensuring our
            places of work and leisure are safe shaping the smart businesses of
            tomorrow.
          </p>
        </div>
        <div className="single-benefit">
          <div className="single-benefit-image">
            <img src={benefit4} alt="" />
          </div>
          <h2 className="single-benefit-title">Supply Chain</h2>
          <p className="single-benefit-des">
            The revolution in digital technology is opening up a whole new world
            of options for organizing supply chains. The industry meetup brings
            together leading supply chain experts from the manufacturing,
            retail, and logistics industries to share real-world insights into
            value chain concepts, goals, and outcomes. Discover new trends and
            join us in exploring what will drive the industries and markets of
            the future.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Benefits;

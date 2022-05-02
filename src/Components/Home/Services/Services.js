import React from "react";
import "./Services.css";
import service1 from "../../../Images/service1.png";
import service2 from "../../../Images/service2.png";
import service3 from "../../../Images/service3.png";
import service4 from "../../../Images/service4.png";
import service5 from "../../../Images/service5.png";
import service6 from "../../../Images/service6.png";
import service7 from "../../../Images/service7.png";

const Services = () => {
  return (
    <div className="container">
      <h1 className="benefit-section-title">Our Services</h1>
      <div className="all-services">
        <div className="single-service">
          <div className="service-img">
            <img src={service1} alt="" />
          </div>
          <div className="service-info">
            <h1>Warehouse Storage</h1>
            <p>
              Depending on your product, needs and requirements, we provide
              professional warehouse activities.
            </p>
          </div>
        </div>

        <div className="single-service">
          <div className="service-img">
            <img src={service2} alt="" />
          </div>
          <div className="service-info">
            <h1>24/7 Hours Support</h1>
            <p>
              We enhance our logistics operations by relieving you of the
              worries associated with freight forwarding.
            </p>
          </div>
        </div>

        <div className="single-service">
          <div className="service-img">
            <img src={service3} alt="" />
          </div>
          <div className="service-info">
            <h1>Transparent Pricing</h1>
            <p>
              Depending on your product, needs and requirements, we provide
              professional warehouse activities.
            </p>
          </div>
        </div>
        <div className="single-service">
          <div className="service-img">
            <img src={service4} alt="" />
          </div>
          <div className="service-info">
            <h1>Real Time Tracking</h1>
            <p>
              We enhance our logistics operations by relieving you of the
              worries associated with freight forwarding.
            </p>
          </div>
        </div>
        <div className="single-service">
          <div className="service-img">
            <img src={service5} alt="" />
          </div>
          <div className="service-info">
            <h1>Security For Cargo</h1>
            <p>
              Our facilities meet high security requirements and are certified
              to the highest local standards.
            </p>
          </div>
        </div>
        <div className="single-service">
          <div className="service-img">
            <img src={service6} alt="" />
          </div>
          <div className="service-info">
            <h1>Easy Payment Methods</h1>
            <p>
              You can make use the easy convenient payment options, listed
              below, that are available in your country.
            </p>
          </div>
        </div>
        <div className="single-service">
          <div className="service-img">
            <img src={service7} alt="" />
          </div>
          <div className="service-info">
            <h1>Fast & Efficient Delivery</h1>
            <p>
              We enhance our logistics operations by relieving you of the
              worries associated with freight forwarding.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Services;

import React from "react";
import warehouse from "../../../Images/warehouse.png";
import "./AboutUs.css";
import { BsFillArrowRightCircleFill } from "react-icons/bs";

const AboutUs = () => {
  return (
    <div className="container">
      <div className="about-us">
        <div
          className="about-img"
          data-aos="fade-right"
          data-aos-easing="linear"
          data-aos-duration="1000"
        >
          <img src={warehouse} alt="" />
        </div>
        <div
          className="about-info"
          data-aos="fade-left"
          data-aos-easing="linear"
          data-aos-duration="1000"
        >
          <p className="first-para">
            Our skilled personnel, utilizing latest communications, tracking
            processing software, combined with decades of experience! Through
            integrated supply chain solutions, E-warehouse drives sustainable
            competitive advantages to some of the World's largest companies.
          </p>
          <p className="second-para">
            We pride ourselves on providing the best warehouse services
            available allover the world. Our skilled personnel, utilizing the
            latest communications.
          </p>
          <div className="third-para">
            <p>
              <span>
                <BsFillArrowRightCircleFill />
              </span>
              Quality Control System, 100% Satisfaction Guarantee
            </p>
            <p>
              <span>
                <BsFillArrowRightCircleFill />
              </span>
              Highly Professional Staff, Accurate Testing Processes
            </p>
            <p>
              <span>
                <BsFillArrowRightCircleFill />
              </span>
              Unrivalled workmanship, Professional and Qualified Local Charges
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutUs;

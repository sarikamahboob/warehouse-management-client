import React from "react";
import { useNavigate } from "react-router-dom";
import { MdEmail } from "react-icons/md";
import { BsFillPhoneFill } from "react-icons/bs";
import { FaMapMarkerAlt } from "react-icons/fa";
import { BsFacebook } from "react-icons/bs";
import { AiFillTwitterCircle } from "react-icons/ai";
import { FaLinkedin } from "react-icons/fa";
import { AiFillInstagram } from "react-icons/ai";
import "./Footer.css";
import { BsArrowRightShort } from "react-icons/bs";
import footer from "../../../Images/footer.jpg";

const Footer = () => {
  const navigate = useNavigate();
  return (
    <div className="footer">
      <div className="container">
        <div className="first-footer-container">
          <div className="quick-link">
            <h1>Quick Link</h1>
            <li onClick={() => navigate(`/home`)}> Home</li>
            <li onClick={() => navigate(`/blogs`)}>Blogs</li>
            <li onClick={() => navigate(`/inventory`)}>Inventory</li>
            <li onClick={() => navigate(`/userproducts`)}>User Products</li>
          </div>
          <div className="industries">
            <h1>Industries</h1>
            <li>
              {" "}
              <span>
                <BsArrowRightShort />
              </span>
              Retail & Consumer
            </li>
            <li>
              {" "}
              <span>
                <BsArrowRightShort />
              </span>
              Industrial & Chemical
            </li>
            <li>
              {" "}
              <span>
                <BsArrowRightShort />
              </span>
              Sciences & Healthcare
            </li>
            <li>
              <span>
                <BsArrowRightShort />
              </span>
              Power Generation
            </li>
            <li>
              <span>
                <BsArrowRightShort />
              </span>
              Food & Beverage
            </li>
            <li>
              <span>
                <BsArrowRightShort />
              </span>
              Oil & Gas
            </li>
          </div>
          <div className="services">
            <h1> Services</h1>
            <li>
              <span>
                <BsArrowRightShort />
              </span>
              Warehouse Storage
            </li>
            <li>
              {" "}
              <span>
                <BsArrowRightShort />
              </span>
              24/7 Hours Support
            </li>
            <li>
              {" "}
              <span>
                <BsArrowRightShort />
              </span>
              Transparent Pricing
            </li>
            <li>
              <span>
                <BsArrowRightShort />
              </span>
              Security For Cargo
            </li>
            <li>
              <span>
                <BsArrowRightShort />
              </span>
              Easy Payment Methods
            </li>
            <li>
              <span>
                <BsArrowRightShort />
              </span>
              Fast & Efficient Delivery
            </li>
            <li>
              <span>
                <BsArrowRightShort />
              </span>
              Real Time Tracking
            </li>
          </div>
          <div className="contact-us">
            <h1>Contact Us</h1>
            <div className="contact">
              <span className="icon">
                <MdEmail />
              </span>
              <span>info@e.warehouse.com</span>
            </div>
            <div className="contact">
              <span className="icon">
                <BsFillPhoneFill />
              </span>
              <span>01700000000</span>
            </div>
            <div className="contact">
              <span className="icon">
                {" "}
                <FaMapMarkerAlt />
              </span>
              <span>California, U.S.</span>
            </div>
          </div>
        </div>
      </div>
      <div className="container">
        <div className="second-footer-container">
          <div className="social-login-icons">
            <div className="s-icon">
              <span>
                <BsFacebook />
              </span>
            </div>
            <div className="s-icon">
              <span>
                <AiFillInstagram />
              </span>
            </div>
            <div className="s-icon">
              <span>
                <AiFillTwitterCircle />
              </span>
            </div>
            <div className="s-icon">
              <span>
                <FaLinkedin />
              </span>
            </div>
          </div>
          <div className="copyright">
            <p>
              Sarika Mahboob 2022 <span> ©</span> All Rights Reserved
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;

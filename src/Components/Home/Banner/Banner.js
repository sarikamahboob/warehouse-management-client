import React, { useState } from "react";
import { Carousel } from "react-bootstrap";
import { useNavigate } from "react-router-dom";
import banner1 from "../../../Images/banner1.png";
import banner2 from "../../../Images/banner2.png";
import banner3 from "../../../Images/banner3.png";
import banner4 from "../../../Images/banner4.png";
import banner5 from "../../../Images/banner5.png";
import "./Banner.css";

const Banner = () => {
  const navigate = useNavigate();
  const [index, setIndex] = useState(0);

  const handleSelect = (selectedIndex, e) => {
    setIndex(selectedIndex);
  };
  return (
    <div className="banner">
      <Carousel
        activeIndex={index}
        onSelect={handleSelect}
        fade
        className="top-0"
      >
        <Carousel.Item>
          <img className="d-block w-100" src={banner1} alt="Second slide" />
          <Carousel.Caption>
            <small>Smart Watch</small>
            <h3>Xiaomi Imtlab KW66 Smart Watch</h3>
            <p>
              The Xiaomi iMi KW66 Multifunctional Watch is a gadget that will
              help in everyday life. Modern design with zinc alloy and IML
              coated case back give it a stylish look.
            </p>
            <button
              className="banner-button"
              onClick={() => navigate(`/inventory`)}
            >
              Sell All Products
            </button>
          </Carousel.Caption>
        </Carousel.Item>

        <Carousel.Item>
          <img className="d-block w-100" src={banner2} alt="Second slide" />
          <Carousel.Caption>
            <small>Laptop</small>
            <h3>Apple MacBook Air 13.3-Inch</h3>
            <p>
              Apple's thinnest, lightest notebook, completely transformed by the
              Apple M1 chip. CPU speeds up to 3.5x faster. GPU speeds up to 5x
              faster.
            </p>
            <button
              className="banner-button"
              onClick={() => navigate(`/inventory`)}
            >
              Sell All Products
            </button>
          </Carousel.Caption>
        </Carousel.Item>

        <Carousel.Item>
          <img className="d-block w-100" src={banner3} alt="Third slide" />
          <Carousel.Caption>
            <small>Headphone</small>
            <h3>Edifier H840</h3>
            <p>
              Edifier's H840 ergonomic over-ear headphones produces the ideal
              sound quality user could expect from headphones. Calibrated and
              tuned by Phil Jones of Pure Sound, they provide a powerful
              boasting acoustic experience.
            </p>
            <button
              className="banner-button"
              onClick={() => navigate(`/inventory`)}
            >
              Sell All Products
            </button>
          </Carousel.Caption>
        </Carousel.Item>

        <Carousel.Item>
          <img className="d-block w-100" src={banner4} alt="First slide" />
          <Carousel.Caption>
            <small>Smart Watch</small>
            <h3>Apple Watch Series 7</h3>
            <p>
              The Apple Watch Series 7 45mm Sports Band features the largest,
              most advanced display yet. It comes with an always-On Retina LTPO
              OLED display, 1,000 nits brightness.
            </p>
            <button
              className="banner-button"
              onClick={() => navigate(`/inventory`)}
            >
              Sell All Products
            </button>
          </Carousel.Caption>
        </Carousel.Item>

        <Carousel.Item>
          <img className="d-block w-100" src={banner5} alt="First slide" />
          <Carousel.Caption>
            <small>Bluetooth Speaker</small>
            <h3>X-mini INFINITI </h3>
            <p>
              Unlike conventional directional audio systems, the X-mini INFINITI
              can fill the entire room with breathtaking and immersive
              Omni-directional sound without losing audio detail and depth.
            </p>
            <button
              className="banner-button"
              onClick={() => navigate(`/inventory`)}
            >
              Sell All Products
            </button>
          </Carousel.Caption>
        </Carousel.Item>
      </Carousel>
    </div>
  );
};

export default Banner;

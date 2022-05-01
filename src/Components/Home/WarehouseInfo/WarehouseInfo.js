import React from "react";
import { Tab, Tabs } from "react-bootstrap";
import "./WarehouseInfo.css";
import warehouse1 from "../../../Images/warehouse1.jpg";
import warehouse2 from "../../../Images/warehouse2.jpg";
import warehouse3 from "../../../Images/warehouse3.jpg";
import warehouse4 from "../../../Images/warehouse4.jpg";

const WarehouseInfo = () => {
  return (
    <div className="warehouse-info-container">
      <Tabs
        defaultActiveKey="profile"
        id="uncontrolled-tab-example"
        className="mb-3"
      >
        <Tab eventKey="home" title="Connect Your Store">
          <div className="warehouse-info">
            <div className="warehouse-info-des">
              <h2 className="warehouse-info-title">
                Connect Your Store To Our Database And Send Your Products To Our
                Warehouse
              </h2>
              <p className="warehouse-info-para">
                Whether you are a small business or a larger one, part of your
                forward planning will include growth and expansion. That growth
                may regional, national, international, or even global, having an
                experienced logistics company as your partner will be something
                that can stimulate. Leaving experts to concentrate on the
                intricacies of getting the goods to markets means that you have
                more time to grow your company.
              </p>
            </div>
            <div className="warehouse-info-image">
              <img src={warehouse1} alt="" />
            </div>
          </div>
        </Tab>

        <Tab eventKey="profile" title="We Store Your Products">
          <div className="warehouse-info">
            <div className="warehouse-info-des">
              <h2 className="warehouse-info-title">
                We Store Your Inventory Securely In Our Warehouse Fulfillment
                Centers
              </h2>
              <p className="warehouse-info-para">
                Most e-commerce business entities avoid storing inventory or
                handling e-commerce warehousing. Having to pack boxes, run to
                the post office, and deliver goods can be quite challenging;
                this is where a e-warehouse center comes in as a viable
                alternative. With increasing volume in orders,e-warehouse
                providers specializing in wholesale and retail fulfillment can
                easily help in order fulfillment of customers.
              </p>
            </div>
            <div className="warehouse-info-image">
              <img src={warehouse2} alt="" />
            </div>
          </div>
        </Tab>
        <Tab eventKey="contact" title="We Pick And Ship">
          <div className="warehouse-info">
            <div className="warehouse-info-des">
              <h2 className="warehouse-info-title">
                Connect Your Store To Our Database And Send Your Products To Our
                Warehouse
              </h2>
              <p className="warehouse-info-para">
                The primary aim of e-warehouse is to deliver online orders to
                customers' doorstep, known as the fulfillment process. Every
                e-commerce business stores its inventory in e-warehouse to help
                prepare and fulfill customer orders. Once customers place an
                order from an e-commerce store, the inventory is picked, boxes
                are packaged and labeled, making them ready to be shipped. Apart
                from customer orders,e-warehouse also fulfill
                business-to-business (B2B) orders. This involves shipping high
                volumes of ordered products to be sent to a big-box retailer.
                When sellers outsource an e-commerce fulfillment, e-warehouse
                complete this process on behalf of the store owner, including
                inventory management, negotiating rates, etc.
              </p>
            </div>
            <div className="warehouse-info-image">
              <img src={warehouse3} alt="" />
            </div>
          </div>
        </Tab>
        <Tab eventKey="warehouse" title="Client Places An Order">
          <div className="warehouse-info">
            <div className="warehouse-info-des">
              <h2 className="warehouse-info-title">
                Customer Places An Order On Your Store, So We Get An Alert To
                Make The Shipment
              </h2>
              <p className="warehouse-info-para">
                Fulfillment companies have tie-ups with numerous shipping
                carriers because they operate to fulfill customer orders
                immediately after they are placed to ensure that their orders
                will be delivered as promised. On the other hand, warehouses
                usually require scheduled and less frequent pick-ups because
                shipping freight with the boxes wrapped together on a pallet
                instead of individually labeling them is much more
                cost-effective.
              </p>
            </div>
            <div className="warehouse-info-image">
              <img src={warehouse4} alt="" />
            </div>
          </div>
        </Tab>
      </Tabs>
    </div>
  );
};

export default WarehouseInfo;

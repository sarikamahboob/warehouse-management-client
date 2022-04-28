import React from "react";
import notfound from "../../Images/notfound.jpg";

const NotFound = () => {
  return (
    <div>
      <div className="d-flex justify-content-center align-items-center">
        <img style={{ width: "60%" }} src={notfound} alt="" />
      </div>
    </div>
  );
};

export default NotFound;

import React from "react";
import "./HeaderInner.css";
import logoImg from "../../img/image 1.png";

const HeaderInner = () => {
  return (
    <div className="bannerInner">
      <div className="container px-lg-0">
        <div className="row">
          <div className="col-lg-12">
            <div className="img-box">
              <img src={logoImg} alt="" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HeaderInner;

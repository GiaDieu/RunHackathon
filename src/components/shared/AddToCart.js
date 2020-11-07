import React from "react";
import "../shared/customCSS/AddToCard.css";
import { FaLinkedin } from "react-icons/fa";

const AddToCart = () => {
  return (
    <div className="left-container">
      <div className="left-card">
        <div className="face face1">
          <div className="left-content">
            <div className="left-icon">
              <i className="fa fa-linkedin-square" aria-hidden="true"></i>
            </div>
          </div>
        </div>
        <div className="face face2">
          <div className="left-content">
            <h3>
              <a href="#" target="_blank">
                Name1
              </a>
            </h3>
            <p>
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AddToCart;

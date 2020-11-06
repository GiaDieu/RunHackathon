import React from "react";
import "../shared/customCSS/AddToCard.css";

const AddToCart = () => {
  return (
    <div className="container">
      <div className="card">
        <div className="face face1">
          <div className="content">
            <div className="icon">
              <i className="fa fa-linkedin-square" aria-hidden="true"></i>
            </div>
          </div>
        </div>
        <div className="face face2">
          <div className="content">
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
      <div className="card">
        <div className="face face1">
          <div className="content">
            <div className="icon">
              <i className="fa fa-twitter-square" aria-hidden="true"></i>
            </div>
          </div>
        </div>
        <div className="face face2">
          <div className="content">
            <h3>
              <a href="#" target="_blank">
                Name2
              </a>
            </h3>
            <p>
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry.
            </p>
          </div>
        </div>
      </div>
      <div className="card">
        <div className="face face1">
          <div className="content">
            <div className="icon">
              <i className="fa fa-github-square" aria-hidden="true"></i>
            </div>
          </div>
        </div>
        <div className="face face2">
          <div className="content">
            <h3>
              <a href="#" target="_blank">
                Name3
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

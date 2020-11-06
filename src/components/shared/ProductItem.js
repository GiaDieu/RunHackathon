import React from "react";
import { Container } from "semantic-ui-react";
import "./customCSS/ProductItem.css";

const ProductItem = () => {
  return (
    <Container>
      <div className="wrapper">
        <div className="cols">
          <div className="col">
            <div className="container">
              <div
                className="front"
                style={{
                  backgroundImage: "url('https://unsplash.it/500/500/') ",
                }}
              >
                <div className="inner">
                  <p>Diligord</p>
                  <span>Lorem ipsum</span>
                </div>
              </div>
            </div>
          </div>
          <div className="col">
            <div className="container">
              <div
                className="front"
                style={{
                  backgroundImage: "url('https://unsplash.it/500/500/') ",
                }}
              >
                <div className="inner">
                  <p>Diligord</p>
                  <span>Lorem ipsum</span>
                </div>
              </div>
            </div>
          </div>
          <div className="col">
            <div className="container">
              <div
                className="front"
                style={{
                  backgroundImage: "url('https://unsplash.it/500/500/') ",
                }}
              >
                <div className="inner">
                  <p>Diligord</p>
                  <span>Lorem ipsum</span>
                </div>
              </div>
            </div>
          </div>
          <div className="col">
            <div className="container">
              <div
                className="front"
                style={{
                  backgroundImage: "url('https://unsplash.it/500/500/') ",
                }}
              >
                <div className="inner">
                  <p>Diligord</p>
                  <span>Lorem ipsum</span>
                </div>
              </div>
            </div>
          </div>
          <div className="col">
            <div className="container">
              <div
                className="front"
                style={{
                  backgroundImage: "url('https://unsplash.it/500/500/') ",
                }}
              >
                <div className="inner">
                  <p>Diligord</p>
                  <span>Lorem ipsum</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Container>
  );
};

export default ProductItem;

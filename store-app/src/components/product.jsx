import React from "react";
import { ProductWrapper } from "./card";
import { ProductConsumer } from "../context";

export default class Productm extends React.Component {
  render() {
    const { _id, bizTitle, bizinCart, bizCompany, bizImage, bizPrice } =
      this.props.product;

    return (
      <ProductWrapper className="col-9 mx-auto col-md-6 col-lg-3 my-3">
        <div className="card">
          <ProductConsumer>
            {(value) => (
              <div className="img-container p-5">
                <div>
                  <img src={bizImage} alt="products" className="card-img-top" />

                  <button
                    className="cart-btn"
                    disabled={bizinCart ? true : false}
                    onClick={() => {
                      value.addToCart(_id);
                      value.openModal(_id);
                    }}
                  >
                    {bizinCart ? (
                      <p className="text-capitalize mb-0" disabled>
                        {" "}
                        in Cart
                      </p>
                    ) : (
                      <i className="fas fa-cart-plus"></i>
                    )}
                  </button>
                </div>
              </div>
            )}
          </ProductConsumer>
          {/* {card footer} */}
          <div className="card-footer d-flex justify-content-between">
            <p className="align-self-center mb-0 text-blue">{bizTitle}</p>
            <h4 className="align-self-center mb-0">
              <strong>{bizCompany}</strong>
            </h4>
            <h5 className="text-blue font-italic mb-0">
              <span className="mr-1">$</span>
              {bizPrice}
            </h5>
          </div>
        </div>
      </ProductWrapper>
    );
  }
}

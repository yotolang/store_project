import React from "react";
import { Link } from "react-router-dom";

export default function CartTotal({ value }) {
  const { cartSubTotal, cartTotal, cartTax, clearCart } = value;
  return (
    <>
      <div className="container">
        <div className="row">
          <div className="col-10 mt-2 ml-sm-5 ml-md-auto col-sm-8 text-capitalize text-right">
            <Link to="/">
              <button
                className="btn btn-outline-danger text-uppercase mb-3 px-5"
                type="button"
                onClick={() => clearCart()}
              >
                clere cart
              </button>
            </Link>
            <h5>
              <span className="text-title text-dark">subtotal :</span>
              <strong>$ {cartSubTotal}</strong>
            </h5>
            <h5>
              <span className="text-title text-dark">tax :</span>
              <strong>$ {cartTax}</strong>
            </h5>
            <h5>
              <span className="text-title text-dark">total :</span>
              <strong>$ {cartTotal}</strong>
            </h5>
          </div>
        </div>
      </div>
    </>
  );
}

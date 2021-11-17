import React from "react";

function CartItem({ value, item }) {
  const { _id, bizImage, bizCompany, bizPrice, bizCount, bizTotal } = item;
  const { increment, decrement, removeItem } = value;

  return (
    <div className="row my-2 text-capitalize text-center">
      <div className="col-10 mx-auto col-lg-2">
        <img
          src={bizImage}
          style={{ width: "5rem", height: "5rem" }}
          className="img-fluid"
          alt="product"
        />
      </div>
      <div className="col-10 mx-auto col-lg-2">
        <span className="d-lg-none">product:</span>
        {bizCompany}
      </div>
      <div className="col-10 mx-auto col-lg-2">
        <span className="d-lg-none">price:</span>
        {bizPrice}
      </div>
      <div className="col-10 mx-auto col-lg-2 my-2 my-lg-0">
        <div className="d-flex justify-content-center">
          <div>
            <span className="btn btn-black mx-1" onClick={() => decrement(_id)}>
              -
            </span>
            <span className="btn btn-black mx-1">{bizCount}</span>
            <span className="btn btn-black mx-1" onClick={() => increment(_id)}>
              +
            </span>
          </div>
        </div>
      </div>
      {/* {} */}
      <div className="col-10 mx-auto col-lg-2">
        <div
          className="cart-icon"
          onClick={() => {
            removeItem(_id);
          }}
        >
          <i className="fas fa-trash"></i>
        </div>
      </div>

      <div className="col-10 mx-auto col-lg-2">
        <stong>item total : $ {bizTotal}</stong>
      </div>
    </div>
  );
}

export default CartItem;

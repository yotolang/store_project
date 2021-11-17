import React from "react";
import styled from "styled-components";
import image from "../../images/image2.webp";

export default function EmptyCart() {
  return (
    <StyledEmptyCart>
      <div className="container mt-5">
        <div className="row">
          <div className="col-10 mx-auto text-center text-title">
            <h1>your cart is currintly empty</h1>
          </div>
          <img src={image} alt="" />
        </div>
      </div>
    </StyledEmptyCart>
  );
}
const StyledEmptyCart = styled.div`
  width: 100%;
  height: 500px;

  .container {
    display: flex;
    justify-content: center;
  }
  img {
    width: 100%;
    height: 400px;
  }
`;

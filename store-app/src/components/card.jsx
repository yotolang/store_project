import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import { ButtonContainer } from "./common/button";
const Card = ({
  card: { _id, bizCompany, bizTitle, bizPrice, bizImage },
  onDelete,
}) => {
  return (
    <>
      <ProductWrapper className="col-9 mx-auto col-md-6 col-lg-3 my-3">
        <div className="card">
          <h4 className="text-center md-0 text-dark">{bizCompany}</h4>
          <div className="img-container p-5">
            <img
              src={bizImage}
              className="card-img-top"
              style={{ height: "200px", width: "150px" }}
              alt="product"
            />
          </div>

          <div className="card-text border-top pt-3">
            <h5 className="text-center text-dark">{bizTitle}</h5>

            <h5 className="text-center text-dark">
              <span className="mr-1 ">$</span>
              {bizPrice}
            </h5>
          </div>
          <br />
          <div className="container-button">
            <ButtonContainer
              className="btn btn-danger"
              danger
              onClick={onDelete}
            >
              Delet
            </ButtonContainer>
            <Link to={`/my-cards/edit/${_id}`}>
              <ButtonContainer className="btn btn-success">
                Edite
              </ButtonContainer>
            </Link>
          </div>
        </div>
      </ProductWrapper>
    </>
  );
};
export const ProductWrapper = styled.div`
  .card {
    border-color: transparent;
    transition: all 1s linear;
  }

  .card-footer {
    background: transparent;
    border-top: transparent;
    transition: all 1s linear;
  }

  &:hover {
    .card {
      border: 0.04rem soled rgba(55, 55, 55, 0.2);
      box-shadow: 2px 2px 5px 0px rgba(0, 0, 0, 0.2);
    }
    .card-footer {
      background: rgba(247, 247, 247);
    }
  }

  .img-container {
    position: relative;
    overflow: hidden;
  }
  .card-img-top {
    transition: all 1s linear;
    height: 200px;
    width: 150px;
  }
  .img-container:hover .card-img-top {
    transform: scale(1.2);
  }
  .cart-btn {
    position: absolute;
    bottom: 0;
    right: 0;
    padding: 0.2rem 0.4rem;
    background: var(--lightBlue);
    border: none;
    color: var(--mainWhite);
    font-size: 1.4rem;
    border-radius: 0.5rem 0 0 0;
    transform: translate(100%, 100%);
    transition: all 1s linear;
  }
  .img-container:hover .cart-btn {
    transform: translate(0, 0);
  }
  .cart-btn:hover {
    color: var(--mainBlue);
    cursor: pointer;
  }
  .container-button {
    display: flex;
    justify-content: center;
  }
`;

export default Card;

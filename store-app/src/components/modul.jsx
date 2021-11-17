import React from "react";
import styled from "styled-components";
import { ButtonContainer } from "./common/button";
import { Link } from "react-router-dom";
import { ProductConsumer } from "../context";

class Modul extends React.Component {
  render() {
    return (
      <ProductConsumer>
        {(value) => {
          const { modalOpen, closeModal } = value;
          const { product } = value;

          if (!modalOpen) {
            return null;
          } else {
            return (
              <ModalContainer>
                <div className="container">
                  <div className="row">
                    <div
                      id="modal"
                      className="col-8 mx-auto col-md-6 col-lg-4 text-center text-capitalize p-5"
                    >
                      <h5>item added to cart</h5>

                      <img
                        src={product.bizImage}
                        alt="product"
                        className="img-fluid"
                      />
                      <h5>Company:{product.bizCompany}</h5>
                      <h5 className="text-muted">price:{product.bizPrice}</h5>
                      <Link to="/story">
                        <ButtonContainer onClick={() => closeModal()}>
                          store
                        </ButtonContainer>
                      </Link>
                      <Link to="/my-cart">
                        <ButtonContainer cart onClick={() => closeModal()}>
                          go to my-cart
                        </ButtonContainer>
                      </Link>
                    </div>
                  </div>
                </div>
              </ModalContainer>
            );
          }
        }}
      </ProductConsumer>
    );
  }
}

const ModalContainer = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: rgba(0, 0, 0, 0.3);
  display: flex;
  align-items: center;
  justify-content: center;
  #modal {
    background: var(--mainWhite);
  }
`;

export default Modul;

import React from "react";
import styled from "styled-components";
import logo from "../logo.svg";
import { Link, NavLink } from "react-router-dom";
import { ButtonContainer } from "./common/button";

class Navbar extends React.Component {
  render() {
    const { user } = this.props;

    return (
      <NavWrapper className="navbar navbar-expand-md bg-primary navbar-dark px-sm-5">
        {/* {https://www.iconfinder.com/icons/1243689/call_phone_icon
Creative Commons (Attribution 3.0 Unported);
https://www.iconfinder.com/Makoto_msk  */}
        <Link to="/">
          <img src={logo} alt="story" className="navbar-brand" />
        </Link>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarsExample04"
          aria-controls="navbarsExample04"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarsExample04">
          <ul className="navbar-nav align-items-center">
            <li className="nav-item ml-5">
              <Link to="/" className="nav-link">
                Home
              </Link>
            </li>
            {/* if user is login */}
            {user && (
              <li className="nav-item ml-5">
                <NavLink className="nav-link" to="/story">
                  store
                </NavLink>
              </li>
            )}
            {/* only if user created a user bizzness account */}
            {user?.biz && (
              <li className="nav-item">
                <NavLink to="/my-cards" className="nav-link">
                  my-cards
                </NavLink>
              </li>
            )}
          </ul>
          <ul className="navbar-nav ms-auto mb-2 mb-md-0">
            {!user && (
              <>
                <li className="nav-item">
                  <NavLink className="nav-link" to="/sign-in">
                    Sign-in
                  </NavLink>
                </li>

                <li className="nav-item">
                  <NavLink className="nav-link" to="/sign-up">
                    Sig-up
                  </NavLink>
                </li>
                <li className="nav-item">
                  <NavLink className="nav-link" to="/sign-up-biz">
                    Biz
                  </NavLink>
                </li>
              </>
            )}
            {user && (
              <>
                <li className="nav-item">
                  <NavLink className="nav-link" to="/logout">
                    Logout
                  </NavLink>
                </li>

                <li className="nav-item">
                  <NavLink className="nav-link" to="/my-cart">
                    <ButtonContainer>
                      <span className="mr-2">
                        <i className="fas fa-cart-plus"></i>
                      </span>
                      my-cart
                    </ButtonContainer>
                  </NavLink>
                </li>
              </>
            )}
            {/* <ButtonContainer>
            <span className="mr-2">
              <i className="fas fa-cart-plus"></i>
            </span>
            my-cart
          </ButtonContainer> */}
          </ul>
        </div>
      </NavWrapper>
    );
  }
}

const NavWrapper = styled.nav`
  background: var(--mainBlue) !important;
  .nav-link {
    color: var(--mainWhite) !important;
    font-size: 1.3rem;
    text-transform: capitalize;
  }
`;

export default Navbar;

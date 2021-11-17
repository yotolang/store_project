import React from "react";
import { Link, NavLink } from "react-router-dom";
import Title from "./common/PageTitle";
import "../style/homestyle.css";

class Home extends React.Component {
  render() {
    return (
      <>
        <div className="home-container">
          <Title
            name={"Shopping From Home"}
            title={"shop your way to the store app"}
          />
          <h4 className="hero text-dark">
            <ul className="home-list">
              <li>
                to start shopping sign up or login ...{" "}
                <Link to="/sign-in">
                  <i class="bi bi-door-open text-dark"></i>
                </Link>
              </li>

              <li>
                to creat a product and jouin the store-app creat a business
                account !
                <Link to="/sign-up">
                  <i class="bi bi-briefcase text-dark ms-3"></i>
                </Link>
              </li>
            </ul>
          </h4>
        </div>
      </>
    );
  }
}

export default Home;

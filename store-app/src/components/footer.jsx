import React from "react";
import "../style/footer.css";
import logo from "../logo.svg";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="footer-container py-5">
      <div className="row">
        <div className="col-6 col-md ms-5">
          <ul className="list-unstyled text-small">
            <li>
              <a
                className="link-secondary"
                href="https://www.google.com/"
                target="_blank"
                rel="noreferrer"
              >
                <i className="bi bi-google"></i>
              </a>
            </li>
            <li>
              <a
                className="link-secondary"
                href="https://www.instagram.com/"
                target="_blank"
                rel="noreferrer"
              >
                <i className="bi bi-instagram"></i>
              </a>
            </li>
            <li>
              <a
                className="link-secondary"
                href="https://www.facebook.com/"
                target="_blank"
                rel="noreferrer"
              >
                <i className="bi bi-facebook"></i>
              </a>
            </li>
            <li>
              <a
                className="link-secondary"
                href="https://web.whatsapp.com/"
                target="_blank"
                rel="noreferrer"
              >
                <i className="bi bi-whatsapp"></i>
              </a>
            </li>
          </ul>
        </div>
        <div className="col-6 col-md ms-5">
          <h5>Features</h5>
          <ul className="list-unstyled text-small">
            <li>
              <Link className="link-secondary" to="/sign-in">
                Sign-in
              </Link>
            </li>
            <li>
              <Link className="link-secondary" to="sign-up">
                Sign-Up
              </Link>
            </li>
            <li>
              <Link className="link-secondary" to="/sign-up-biz">
                create bizzness acount
              </Link>
            </li>
          </ul>
        </div>

        <div className="col-12 col-md m-5">
          {/* {https://www.iconfinder.com/icons/1243689/call_phone_icon
Creative Commons (Attribution 3.0 Unported);
https://www.iconfinder.com/Makoto_msk  */}
          <img src={logo} alt="" />
          <title>Product</title>

          <small className="d-block mb-3 text-white">
            © 2019–2021<span className="ms-1">&cope;</span>
          </small>
        </div>
      </div>
    </footer>
    // <>
    //   <footer>
    //     <div classNameName="footer-container">
    //       <section classNameName="footer-subscription">
    //         <p classNameName="footer-subscription-headening">
    //           Join are new store for safe ecommers on-line
    //         </p>
    //         <p classNameName="footer-subscription-text">you can join at any time</p>
    //       </section>
    //     </div>
    //   </footer>
    // </>
  );
};

export default Footer;

import React from "react";

import "../style/footer.css";

import logo from "../logo.svg";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer class="footer-container py-5">
      <div class="row">
        <div class="col-6 col-md ms-5">
          <ul class="list-unstyled text-small">
            <li>
              <a
                class="link-secondary"
                href="https://www.google.com/"
                target="_blank"
              >
                <i class="bi bi-google"></i>
              </a>
            </li>
            <li>
              <a
                class="link-secondary"
                href="https://www.instagram.com/"
                target="_blank"
              >
                <i class="bi bi-instagram"></i>
              </a>
            </li>
            <li>
              <a
                class="link-secondary"
                href="https://www.facebook.com/"
                target="_blank"
              >
                <i class="bi bi-facebook"></i>
              </a>
            </li>
            <li>
              <a
                class="link-secondary"
                href="https://web.whatsapp.com/"
                target="_blank"
              >
                <i class="bi bi-whatsapp"></i>
              </a>
            </li>
          </ul>
        </div>
        <div class="col-6 col-md ms-5">
          <h5>Features</h5>
          <ul class="list-unstyled text-small">
            <li>
              <Link class="link-secondary" to="/sign-in">
                Sign-in
              </Link>
            </li>
            <li>
              <Link class="link-secondary" to="sign-up">
                Sign-Up
              </Link>
            </li>
            <li>
              <Link class="link-secondary" to="/sign-up-biz">
                create bizzness acount
              </Link>
            </li>
            <li>
              <a class="link-secondary" href="#">
                Stuff for developers
              </a>
            </li>
          </ul>
        </div>

        <div class="col-12 col-md m-5">
          {/* {https://www.iconfinder.com/icons/1243689/call_phone_icon
Creative Commons (Attribution 3.0 Unported);
https://www.iconfinder.com/Makoto_msk  */}
          <img src={logo} alt="" />
          <title>Product</title>

          <small class="d-block mb-3 text-white">
            © 2019–2021<span className="ms-1">&cope;</span>
          </small>
        </div>
      </div>
    </footer>
    // <>
    //   <footer>
    //     <div className="footer-container">
    //       <section className="footer-subscription">
    //         <p className="footer-subscription-headening">
    //           Join are new store for safe ecommers on-line
    //         </p>
    //         <p className="footer-subscription-text">you can join at any time</p>
    //       </section>
    //     </div>
    //   </footer>
    // </>
  );
};

export default Footer;

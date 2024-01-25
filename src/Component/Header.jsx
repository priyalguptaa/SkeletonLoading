import React, { useState } from "react";
import { Link } from "react-router-dom";
import "../CSS/HeaderCSS.css"
import logo from '../Images/logo.png'

const Header = () => {
  const [menuToggle, setMenuToggle] = useState(false);
  const [socialToggle, setSocialToggle] = useState(false);
  const [headerFixed, setHeaderFixed] = useState(false);

  window.addEventListener("scroll", () => {
    if (window.scrollY > 200) {
      setHeaderFixed(true);
    } else {
      setHeaderFixed(false);
    }
  });

  return (
    <header
      className={`header-section style-4  ${
        headerFixed ? "header-fixed fadeInUp" : ""
      }`} style={{marginTop: '50px'}}
    >
      <div className="header-bottom">
        <div className="container">
          <div className="header-wrapper">
            <div className="logo-search-acte">
              <div className="logo">
                <Link to="/">
                  <img src={logo} alt="" />
                </Link>
              </div>
            </div>

            <div className="menu-area">
              {/* Left-aligned menu items */}
              <div className="menu">
                <ul className={`lab-ul ${menuToggle ? "active" : ""}`} style={{marginTop: '-80px'}}>
                  <li>
                    <Link to="/">Home</Link>
                  </li>
                  <li>
                    <Link to="/shop">Shop</Link>
                  </li>
                  <li>
                    <Link to="/blog">Blog</Link>
                  </li>
                  <li>
                    <Link to="/about">About</Link>
                  </li>
                </ul>
              </div>

              {/* Right-aligned buttons */}
              <div className="right-menu" style={{ marginLeft: '1064px' }}>

                <Link to="/sign-up" className="lab-btn me-3">
                  Create Account
                </Link>

                <Link to="/liked-products" className="show-liked-button">
                  <button className="lab-btn me-3">Show Liked Products</button>
                </Link>

                <Link to="/cart-page" className="show-liked-button">
                  <button className="lab-btn me-3">Cart Item</button>
                </Link>

                <Link to="/login" className="d-none d-md-block">
                  Log In
                </Link>
              </div>

              {/* menu toggler */}
              {/* <div
                onClick={() => setMenuToggle(!menuToggle)}
                className={`header-bar d-lg-none ${menuToggle ? "active" : ""}`}
              >
                <span></span>
                <span></span>
                <span></span>
              </div> */}

              {/* Social toggle */}
              <div
                className="ellepsis-bar d-md-none"
                onClick={() => setSocialToggle(!socialToggle)}
              >
                <i className="icofont-info-square"></i>
              </div>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;

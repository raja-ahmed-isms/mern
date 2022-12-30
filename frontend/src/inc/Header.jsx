import React from "react";
import { Link, useNavigate } from "react-router-dom";
function Header() {
  const navigate = useNavigate();
  return (
    <>
      <header>
        {/* <!-- tp-header-area-start --> */}
        <div
          id="header-sticky"
          className="tp-header-area header-pl-pr header-transparent header-border-bottom"
        >
          <div className="container-fluid">
            <div className="row g-0 align-items-center">
              <div className="col-xl-2 col-lg-2 col-md-4 col-6">
                <div className="tp-logo tp-logo-border">
                  <Link to="index-2.html">
                    <img src="assets/img/logo/logo.png" alt="" />
                  </Link>
                </div>
              </div>
              <div className="col-xl-10 col-lg-10 col-md-8 col-6 d-flex justify-content-end">
                <div className="tp-main-menu d-none d-xl-block">
                  <nav id="mobile-menu">
                    <ul>
                      <li>
                        <Link to="/">Home</Link>
                        <ul className="submenu">
                          <li>
                            <Link to="/home">Home 1</Link>
                          </li>
                          <li>
                            <Link to="/home2">Home 2</Link>
                          </li>
                          <li>
                            <Link to="/home3">Home 3</Link>
                          </li>
                        </ul>
                      </li>
                      <li>
                        <Link to="/about-us">About</Link>
                        <ul className="submenu">
                          <li>
                            <Link to="/about-us">About Us</Link>
                          </li>
                          <li>
                            <Link to="/about-me">About Me</Link>
                          </li>
                        </ul>
                      </li>
                      <li>
                        <Link to="/case-studies">Our project</Link>
                        <ul className="submenu">
                          <li>
                            <Link to="/case-studies">Case Studies</Link>
                          </li>
                          <li>
                            <Link to="/case-details">Case Details</Link>
                          </li>
                        </ul>
                      </li>
                      <li>
                        <Link to="/services">Services</Link>
                        <ul className="submenu">
                          <li>
                            <Link to="/services">Service</Link>
                          </li>
                          <li>
                            <Link to="/service-details">Service Details</Link>
                          </li>
                        </ul>
                      </li>
                      <li>
                        <Link to="#">Pages</Link>
                        <ul className="submenu">
                          <li>
                            <Link to="/blog">Blogs</Link>
                          </li>
                          <li>
                            <Link to="/blog-details">Blog Details</Link>
                          </li>
                          <li>
                            <Link to="/contact">Contact</Link>
                          </li>
                          <li>
                            <Link to="/team">Team</Link>
                          </li>
                        </ul>
                      </li>

                      {localStorage.getItem("token") &&
                        localStorage.getItem("type") === "ADMIN" && (
                          <li>
                            <Link to="#">Admin</Link>

                            <ul className="submenu">
                              <li>
                                <Link to="/blogs">Blog</Link>
                              </li>
                              <li>
                                <Link to="/addblogs">Add Blog</Link>
                              </li>
                              {/* <li>
                                <Link to="/edit/:id">Edit Blog</Link>
                              </li> */}
                            </ul>
                          </li>
                        )}
                      {localStorage.getItem("token") &&
                        localStorage.getItem("type") === "ADMIN" && (
                          <button
                            className="btn btn-primary"
                            onClick={() => {
                              localStorage.clear();
                              navigate("/home");
                            }}
                          >
                            Logout
                          </button>
                        )}
                    </ul>
                  </nav>
                </div>
                <div className="tp-header-right">
                  <ul>
                    <li className=" d-none d-md-inline-block search-wrapper">
                      <Link
                        className="tp-search-box"
                        to=""
                        onClick={(e) => {
                          e.preventDefault();
                        }}
                      >
                        <i className="tp-search-toggle fal fa-search"></i>
                        <i className="search-close  far fa-times"></i>
                      </Link>
                      <div className="tp-search-form p-relative">
                        <form action="#">
                          <input type="text" placeholder="Search ..." />
                          <button type="submit">
                            <i className="far fa-search"></i>
                          </button>
                        </form>
                      </div>
                    </li>
                    <li className="d-none d-md-inline-block">
                      <Link to="cart.html">
                        <i className="fal fa-shopping-basket"></i>
                        <span>03</span>
                      </Link>
                      <div className="minicart">
                        <div>
                          <div className="cart-img">
                            <Link to="product-details.html">
                              <img src="assets/img/shop/shop-2.jpg" alt="" />
                            </Link>
                          </div>
                          <div className="cart-content">
                            <h3>
                              <Link to="product-details.html">
                                Mobile - phone
                              </Link>
                            </h3>
                            <div className="cart-price">
                              <span className="new">$ 22.9</span>
                              <span>
                                <del>$39.9</del>
                              </span>
                            </div>
                          </div>
                          <div className="del-icon">
                            <Link to="#">
                              <i className="far fa-trash-alt"></i>
                            </Link>
                          </div>
                        </div>
                        <div>
                          <div className="cart-img">
                            <Link to="product-details.html">
                              <img src="assets/img/shop/shop-1.jpg" alt="" />
                            </Link>
                          </div>
                          <div className="cart-content">
                            <h3>
                              <Link to="product-details.html">
                                Gothelf learn UX
                              </Link>
                            </h3>
                            <div className="cart-price">
                              <span className="new">$ 22.9</span>
                              <span>
                                <del>$39.9</del>
                              </span>
                            </div>
                          </div>
                          <div className="del-icon">
                            <Link to="#">
                              <i className="far fa-trash-alt"></i>
                            </Link>
                          </div>
                        </div>
                        <div>
                          <div className="total-price">
                            <span className="f-left">Total:</span>
                            <span className="f-right">$100.0</span>
                          </div>
                        </div>
                        <div>
                          <div className="checkout-link">
                            <Link
                              className="tp-btn-orange-radius w-100"
                              to="cart.html"
                            >
                              Shopping Cart
                            </Link>
                            <Link
                              className="tp-btn-radius-2 w-100"
                              to="checkout.html"
                            >
                              Checkout
                            </Link>
                          </div>
                        </div>
                      </div>
                    </li>
                    <li>
                      <Link
                        className="tp-menu-bar"
                        to=""
                        onClick={(e) => {
                          e.preventDefault();
                        }}
                      >
                        <i className="fas fa-bars"></i>
                      </Link>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* <!-- tp-header-area-end --> */}
      </header>

      {/* <!-- tp-offcanvus-area-start --> */}
      <div className="tp-offcanvas-area">
        <div className="tpoffcanvas">
          <div className="tpoffcanvas__close-btn">
            <button className="close-btn">
              <i className="fal fa-times"></i>
            </button>
          </div>
          <div className="tpoffcanvas__logo pt-50">
            <Link to="index-2.html">
              <img src="assets/img/logo/logo-white.png" alt="" />
            </Link>
          </div>
          <div className="tpoffcanvas__text">
            <p>
              Suspendisse interdum consectetur libero id. Fermentum leo vel orci
              porta non. Euismod viverra nibh cras pulvinar suspen.
            </p>
          </div>
          <div className="mobile-menu"></div>
          <div className="tpoffcanvas__info">
            <h3 className="offcanva-title">Get In Touch</h3>
            <div className="tp-info-wrapper mb-20 d-flex align-items-center">
              <div className="tpoffcanvas__info-icon">
                <Link to="#">
                  <i className="fal fa-envelope"></i>
                </Link>
              </div>
              <div className="tpoffcanvas__info-address">
                <span>Email</span>
                <Link to="maito:hello@yourmail.com">
                  <span
                    className="__cf_email__"
                    data-cfemail="9af2fff6f6f5dae3f5efe8f7fbf3f6b4f9f5f7"
                  >
                    [email&#160;protected]
                  </span>
                </Link>
              </div>
            </div>
            <div className="tp-info-wrapper mb-20 d-flex align-items-center">
              <div className="tpoffcanvas__info-icon">
                <Link to="#">
                  <i className="fal fa-phone-alt"></i>
                </Link>
              </div>
              <div className="tpoffcanvas__info-address">
                <span>Phone</span>
                <Link to="tel:(00)45611227890">(00) 456 1122 7890</Link>
              </div>
            </div>
            <div className="tp-info-wrapper mb-20 d-flex align-items-center">
              <div className="tpoffcanvas__info-icon">
                <Link to="#">
                  <i className="fas fa-map-marker-alt"></i>
                </Link>
              </div>
              <div className="tpoffcanvas__info-address">
                <span>Location</span>
                <Link
                  to="https://www.google.com/maps/@37.4801311,22.8928877,3z"
                  target="_blank"
                >
                  Riverside 255, San Francisco, USA{" "}
                </Link>
              </div>
            </div>
          </div>
          <div className="tpoffcanvas__social">
            <div className="social-icon">
              <Link to="#">
                <i className="fab fa-twitter"></i>
              </Link>
              <Link to="#">
                <i className="fab fa-instagram"></i>
              </Link>
              <Link to="#">
                <i className="fab fa-facebook-square"></i>
              </Link>
              <Link to="#">
                <i className="fab fa-dribbble"></i>
              </Link>
            </div>
          </div>
        </div>
      </div>

      <div className="body-overlay"></div>
      {/* <!-- tp-offcanvus-area-end --> */}
    </>
  );
}

export default Header;

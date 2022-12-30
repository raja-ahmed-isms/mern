import React from "react";
import { Link } from "react-router-dom";

const Contact = () => {
  const bannerImg = "assets/img/breadcrumb/breadcurmb.jpg";
  return (
    <>
      <main>
        {/* <!-- breadcrumb area start --> */}
        <section
          className="breadcrumb__area breadcrumb-height include-bg p-relative"
          style={{
            backgroundImage: `url(${bannerImg})`,
          }}
          data-background="assets/img/breadcrumb/breadcurmb.jpg"
        >
          <div className="container">
            <div className="row">
              <div className="col-xxl-12">
                <div className="breadcrumb__content">
                  <h3 className="breadcrumb__title">Contact us</h3>
                  <span className="breadcrumb__subtitle">
                    Home <i className="far fa-angle-right"></i>{" "}
                    <Link to="#"> Contact us</Link>
                  </span>
                  <div
                    className="breadcrumb__list wow tpfadeUp"
                    data-wow-duration=".9s"
                  >
                    <span>
                      <Link to="#">Home</Link>
                    </span>
                    <span className="dvdr">
                      <i className="fa fa-angle-right"></i>
                    </span>
                    <span>Contact Us</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        {/* <!-- breadcrumb area end --> */}

        {/* <!-- contact area start --> */}
        <div className="tp-contact-area pt-130 pb-130">
          <div className="container">
            <div className="row g-0 align-items-center justify-content-center">
              <div className="col-xl-4 col-lg-4 col-md-5 col-12">
                <div className="contact-box">
                  <div className="contact-box-circle">
                    <span>O</span>
                    <span>R</span>
                  </div>
                  <h3 className="contact-box__title">
                    Contact <br /> Directly
                  </h3>
                  <div className="contact-box__info-list">
                    <ul>
                      <li>
                        <Link to="tel:4805550103">
                          <i className="fal fa-phone-alt"></i> (480) 555-0103
                        </Link>
                      </li>
                      <li>
                        <Link
                          to="https://www.google.com.bd/maps/@-26.7452242,128.312617,5.17z"
                          target="_blank"
                        >
                          <i className="fal fa-map-marker-alt"></i> Canberra,
                          Australia
                        </Link>
                      </li>
                      <li>
                        <Link to="mailto:michelle.rivera@example.com">
                          <i className="fal fa-globe"></i>help@example.com
                        </Link>
                      </li>
                    </ul>
                  </div>
                  <div className="contact-box__social">
                    <ul>
                      <li>
                        <Link to="">
                          <i className="fab fa-instagram"></i>
                        </Link>
                      </li>
                      <li>
                        <Link to="">
                          <i className="fab fa-facebook-f"></i>
                        </Link>
                      </li>
                      <li>
                        <Link to="">
                          <i className="fab fa-linkedin"></i>
                        </Link>
                      </li>
                      <li>
                        <Link to="">
                          <i className="fab fa-twitter"></i>
                        </Link>
                      </li>
                      <li>
                        <Link to="">
                          <i className="fab fa-youtube"></i>
                        </Link>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
              <div className="col-xl-8 col-lg-8 col-md-7 col-12">
                <div className="postbox__comment-form contact-wrapper">
                  <h3 className="postbox__comment-form-title">
                    Send us a Message
                  </h3>
                  <form action="#">
                    <div className="row">
                      <div className="col-12">
                        <div className="postbox__comment-input">
                          <input type="text" placeholder="Enter your name" />
                        </div>
                      </div>
                      <div className="col-12">
                        <div className="postbox__comment-input">
                          <input type="email" placeholder="Enter your mail" />
                        </div>
                      </div>
                      <div className="col-12">
                        <div className="postbox__comment-input">
                          <textarea placeholder="Enter your message"></textarea>
                        </div>
                      </div>
                      <div className="col-12">
                        <div className="postbox__comment-btn">
                          <button type="submit" className="tp-btn">
                            Let,s Talk
                          </button>
                        </div>
                      </div>
                    </div>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* <!-- contact area end --> */}

        {/* <!-- tp-social-area-start --> */}
        <div className="tp-social-area social-space-bottom fix">
          <div className="container-fluid p-0">
            <div className="row g-0">
              <div className="col-lg-2 col-md-4 col-sm-6">
                <Link to="#">
                  <div className="tp-social-item">
                    <span>
                      <i className="fab fa-facebook-f"></i> Facebook
                    </span>
                  </div>
                </Link>
              </div>
              <div className="col-lg-2 col-md-4 col-sm-6">
                <Link to="#">
                  <div className="tp-social-item tp-youtube">
                    <span>
                      <i className="fab fa-youtube"></i> youtube
                    </span>
                  </div>
                </Link>
              </div>
              <div className="col-lg-2 col-md-4 col-sm-6">
                <Link to="#">
                  <div className="tp-social-item tp-behance">
                    <span>
                      <i className="fab fa-behance"></i> behance
                    </span>
                  </div>
                </Link>
              </div>
              <div className="col-lg-2 col-md-4 col-sm-6">
                <Link to="#">
                  <div className="tp-social-item tp-dribble">
                    <span>
                      <i className="fab fa-dribbble"></i> dribbble
                    </span>
                  </div>
                </Link>
              </div>
              <div className="col-lg-2 col-md-4 col-sm-6">
                <Link to="#">
                  <div className="tp-social-item tp-twitter">
                    <span>
                      <i className="fab fa-twitter"></i> twitter
                    </span>
                  </div>
                </Link>
              </div>
              <div className="col-lg-2 col-md-4 col-sm-6">
                <Link to="#">
                  <div className="tp-social-item tp-linkedin">
                    <span>
                      <i className="fab fa-linkedin"></i>linkedin
                    </span>
                  </div>
                </Link>
              </div>
            </div>
          </div>
        </div>
        {/* <!-- tp-social-area-end --> */}
      </main>
    </>
  );
};

export default Contact;

import React from "react";
import { Link } from "react-router-dom";
import service from "../api/servicesApi";
import ContactForm from "../inc/ContactForm";
import SocialArea from "../inc/SocialArea";

const Services = () => {
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
                  <h3
                    className="breadcrumb__title wow tpfadeUp"
                    data-wow-duration=".7s"
                    data-wow-delay=".5s"
                  >
                    Sixart Service{" "}
                  </h3>
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
                    <span>Our Service</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        {/* <!-- breadcrumb area end --> */}

        {/* <!-- tp-service-area-start --> */}
        <div className="tp-service-area pt-120 pb-100">
          <div className="container">
            <div className="row">
              {service.map((item, index) => {
                return (
                  <div
                    key={index}
                    className="col-xl-4 col-lg-4 mb-30  wow tpfadeUp"
                    data-wow-duration=".7s"
                    data-wow-delay=".3s"
                  >
                    <div className="service-item-three text-center">
                      <div className="service-item-three__img">
                        <img src={item.image} alt={item.alt_text} />
                      </div>
                      <div className="service-item-three__content">
                        <h4 className="tp-service-sm-title">
                          <Link to="/service-details">{item.title}</Link>
                        </h4>
                        <p>{item.description}</p>
                      </div>
                      <div className="service-item-three__button">
                        <Link to="/service-details">
                          <span>
                            <svg
                              width="34"
                              height="16"
                              viewBox="0 0 34 16"
                              fill="none"
                              xmlns="http://www.w3.org/2000/svg"
                            >
                              <path
                                d="M33.7071 8.70711C34.0976 8.31659 34.0976 7.68342 33.7071 7.2929L27.3431 0.928935C26.9526 0.53841 26.3195 0.53841 25.9289 0.928934C25.5384 1.31946 25.5384 1.95262 25.9289 2.34315L31.5858 8L25.9289 13.6569C25.5384 14.0474 25.5384 14.6805 25.9289 15.0711C26.3195 15.4616 26.9526 15.4616 27.3431 15.0711L33.7071 8.70711ZM-8.74228e-08 9L33 9L33 7L8.74228e-08 7L-8.74228e-08 9Z"
                                fill="currentColor"
                              />
                            </svg>
                          </span>
                          Read More
                        </Link>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
        {/* <!-- tp-service-area-end --> */}

        {/* <!-- tp-about-area-start --> */}
        <div className="tp-about-area ab-area-sapce pb-120">
          <div className="container">
            <div className="row align-items-center">
              <div
                className="col-xl-5 col-lg-5 order-2 order-lg-1 wow tpfadeLeft"
                data-wow-duration=".7s"
                data-wow-delay=".5s"
              >
                <div className="tp-ab-wrapper p-relative">
                  <div className="tp-ab-shape-one z-index-3">
                    <img src="assets/img/about/about-shape-1.png" alt="" />
                  </div>
                  <div className="tp-ab-shape-two z-index-3">
                    <img src="assets/img/about/about-circle-shape.png" alt="" />
                  </div>
                  <div className="tp-about-thumb">
                    <img src="assets/img/about/about-img.jpg" alt="" />
                  </div>
                </div>
              </div>
              <div
                className="col-xl-7 col-lg-7 order-1 order-lg-2 wow tpfadeRight"
                data-wow-duration=".7s"
                data-wow-delay=".8s"
              >
                <div className="tp-ab-section-title-box">
                  <h4 className="tp-section-subtitle tp-green-color">
                    Who we are?
                  </h4>
                  <h3 className="tp-section-title">
                    We are dynamic team of creative design and development
                  </h3>
                  <p>
                    We have almost 12+ years of experience for helping
                    consulting services <br /> and business solutions and best
                    protect.
                  </p>
                  <Link className="tp-btn" to="about-us.html">
                    About our Agency
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* <!-- tp-about-area-end --> */}

        {/* <!-- tp-contact-area-start --> */}
        <ContactForm />
        {/* <!-- tp-contact-area-end --> */}

        {/* <!-- tp-social-area-start --> */}
        <SocialArea />
        {/* <!-- tp-social-area-end --> */}
      </main>
    </>
  );
};

export default Services;

import React, { useState } from "react";
import { Link } from "react-router-dom";
import CaseSlider from "../inc/CaseSlider";
import SocialArea from "../inc/SocialArea";
import TestimonialSlider from "../inc/TestimonialSlider";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";

const Home3 = () => {
  const brandImg = "assets/img/brand/barnd-bg.png";
  const [sliderRef, setSliderRef] = useState(null);
  const sliderSettings = {
    speed: 8000,
    autoplay: true,
    autoplaySpeed: 0,
    centerMode: false,
    cssEase: "linear",
    slidesToShow: 1,
    draggable: false,
    focusOnSelect: false,
    pauseOnFocus: false,
    pauseOnHover: false,
    slidesToScroll: 1,
    variableWidth: true,
    infinite: true,
    initialSlide: 1,
    arrows: false,

    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 1,
        },
      },
    ],
  };

  return (
    <>
      <main>
        {/* <!-- tp-slider-area-start --> */}
        <div className="tp-hero-area hero-space-three">
          <div className="tp-hero-blue-shape d-none d-lg-block"></div>
          <div className="container">
            <div className="row align-items-center">
              <div className="col-xxl-5 col-xl-6 col-lg-5">
                <div className="tp-hero">
                  <div className="tp-hero__section-box mb-30">
                    <h4
                      className="tp-section-subtitle wow tpfadeUp"
                      data-wow-duration=".7s"
                      data-wow-delay=".5s"
                    >
                      Get best digital Experience
                    </h4>
                    <h2
                      className="tp-slider-sm-title mb-40 wow tpfadeUp"
                      data-wow-duration=".7s"
                      data-wow-delay=".8s"
                    >
                      Hello, my Name's Sixart I'm a Visual Designer...
                    </h2>
                  </div>
                  <div
                    className="tp-hero__wrapper d-flex align-items-center wow tpfadeUp"
                    data-wow-duration=".7s"
                    data-wow-delay=".9s"
                  >
                    <div className="tp-hero__button">
                      <Link className="tp-btn" to="contact.html">
                        Contact me
                      </Link>
                    </div>
                    <div className="tp-hero__play-button">
                      <Link
                        className="popup-video"
                        to="https://www.youtube.com/watch?v=hiEb1m7CXH4"
                      >
                        <i className="fas fa-play"></i>
                      </Link>
                      <span>Hi, Sixart</span>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-xxl-7 col-xl-6 col-lg-7">
                <div className="tp-hero d-flex justify-content-end">
                  <div className="tp-hero__thumb3 p-relative">
                    <img
                      className="wow tpfadeRight"
                      data-wow-duration=".7s"
                      data-wow-delay=".8s"
                      src="assets/img/slider/hero-3.png"
                      alt=""
                    />
                    <div className="tp-hero__thumb3-shape-1">
                      <img src="assets/img/slider/hero-shape-3-1.png" alt="" />
                    </div>
                    <div className="tp-hero__thumb3-shape-2">
                      <img src="assets/img/slider/hero-shape-3-3.png" alt="" />
                    </div>
                    <div className="review-wrapper d-none d-xl-block">
                      <div className="review-box d-flex align-items-center">
                        <div className="tp-icon mr-10">
                          <img
                            src="assets/img/slider/hero-shape-3-2.png"
                            alt=""
                          />
                        </div>
                        <div className="reviews-text">
                          <span>100% Business Growth</span>
                          <p className="mb-0">
                            {" "}
                            <i className="fa fa-star"></i> <span>4.9</span>{" "}
                            (1520 Reviews)
                          </p>
                        </div>
                      </div>
                    </div>
                    <div className="review-wrapper-2 d-none d-xl-block">
                      <div className="reviews-text">
                        <span>1000,000 Happy Clients</span>
                        <p className="mb-0">
                          {" "}
                          <i className="fa fa-star"></i> <span>4.9</span> (1520
                          Reviews)
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* <!-- tp-slider-area-end --> */}

        {/* <!-- tp-cta-area-start --> */}
        <div className="tp-cta-area cta-space-three pt-120 pb-120">
          <div className="container">
            <div
              className="cta-space wow tpfadeUp"
              data-wow-duration=".7s"
              data-wow-delay=".3s"
            >
              <div className="row">
                <div className="col-xl-8 col-lg-9 ">
                  <div className="cta-section-box">
                    <h4 className="tp-section-subtitle">
                      Get best digital Experience
                    </h4>
                    <h2 className="tp-section-title-xs">
                      I enjoy creating delightful, <br /> human-centered digital
                      experiences.
                    </h2>
                  </div>
                </div>
                <div className="col-xl-4 col-lg-3">
                  <div className="cta-img text-start text-lg-center">
                    <img src="assets/img/cta/cta-1.png" alt="" />
                  </div>
                </div>
              </div>
            </div>
            <div className="row">
              <div className="col-xl-4 col-lg-4 col-md-4 col-sm-4">
                <div
                  className="cta-item p-relative wow tpfadeUp"
                  data-wow-duration=".7s"
                  data-wow-delay=".5s"
                >
                  <h3 className="cta-big-text">
                    <Link to="#">Think.</Link>
                  </h3>
                  <div className="cta-effect-img">
                    <img src="assets/img/cta/cta-2.png" alt="" />
                  </div>
                </div>
              </div>
              <div className="col-xl-4 col-lg-4 col-md-4 col-sm-4">
                <div
                  className="cta-item p-relative wow tpfadeUp"
                  data-wow-duration=".7s"
                  data-wow-delay=".7s"
                >
                  <h3 className="cta-big-text">
                    <Link to="#">Make.</Link>
                  </h3>
                  <div className="cta-effect-img">
                    <img src="assets/img/cta/cta-3.png" alt="" />
                  </div>
                </div>
              </div>
              <div className="col-xl-4 col-lg-4 col-md-4 col-sm-4">
                <div
                  className="cta-item p-relative wow tpfadeUp"
                  data-wow-duration=".7s"
                  data-wow-delay=".9s"
                >
                  <h3 className="cta-big-text">
                    <Link to="#">Solve.</Link>
                  </h3>
                  <div className="cta-effect-img">
                    <img src="assets/img/cta/cta-4.png" alt="" />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* <!-- tp-cta-area-end --> */}

        {/* <!-- tp-service-area-start --> */}
        <div className="tp-service-area pb-100">
          <div className="container">
            <div className="row">
              <div
                className="col-xl-4 col-lg-4 mb-30 wow tpfadeUp"
                data-wow-duration=".7s"
                data-wow-delay=".5s"
              >
                <div className="service-item-three text-center">
                  <div className="service-item-three__img">
                    <img src="assets/img/service/sv-1.png" alt="" />
                  </div>
                  <div className="service-item-three__content">
                    <h4 className="tp-service-sm-title">
                      <Link to="service-details.html">
                        User Experience <br /> Design
                      </Link>
                    </h4>
                    <p>
                      Sixart have got quite a few already made templates for
                      better project management that you can use now.
                    </p>
                  </div>
                  <div className="service-item-three__button">
                    <Link to="service-details.html">
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
              <div
                className="col-xl-4 col-lg-4 mb-30 wow tpfadeUp"
                data-wow-duration=".7s"
                data-wow-delay=".7s"
              >
                <div className="service-item-three active text-center">
                  <div className="service-item-three__img">
                    <img src="assets/img/service/sv-2.png" alt="" />
                  </div>
                  <div className="service-item-three__content">
                    <h4 className="tp-service-sm-title">
                      <Link to="service-details.html">
                        User Interface <br /> Design
                      </Link>
                    </h4>
                    <p>
                      Sixart have got quite a few already made templates for
                      better project management that you can use now.
                    </p>
                  </div>
                  <div className="service-item-three__button">
                    <Link to="service-details.html">
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
              <div
                className="col-xl-4 col-lg-4 mb-30 wow tpfadeUp"
                data-wow-duration=".7s"
                data-wow-delay=".9s"
              >
                <div className="service-item-three text-center">
                  <div className="service-item-three__img">
                    <img src="assets/img/service/sv-3.png" alt="" />
                  </div>
                  <div className="service-item-three__content">
                    <h4 className="tp-service-sm-title">
                      <Link to="service-details.html">
                        Ui Kit and 3d <br /> Desgin
                      </Link>
                    </h4>
                    <p>
                      Sixart have got quite a few already made templates for
                      better project management that you can use now.
                    </p>
                  </div>
                  <div className="service-item-three__button">
                    <Link to="service-details.html">
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
            </div>
          </div>
        </div>
        {/* <!-- tp-service-area-end --> */}

        {/* <!-- tp-case-area-start --> */}
        <CaseSlider />
        {/* <!-- tp-case-area-end --> */}

        {/* <!-- tp-marque-area-start --> */}
        <div className="tp-marque-area fix">
          <div className="tp-marque-wrapper">
            <div className="marque-slider-active carousel-rtl" dir="rtl">
              <button onClick={sliderRef?.slickPrev}></button>
              <button onClick={sliderRef?.slickNext}></button>
              <Slider ref={setSliderRef} {...sliderSettings}>
                <div className="marque-item">
                  <span>Web Design.</span>
                </div>
                <div className="marque-item">
                  <span>UI,UX Design.</span>
                </div>
                <div className="marque-item">
                  <span>Branding Design</span>
                </div>
                <div className="marque-item">
                  <span>Web Design.</span>
                </div>
                <div className="marque-item">
                  <span>UI,UX Design.</span>
                </div>
                <div className="marque-item">
                  <span>Branding Design</span>
                </div>
              </Slider>
            </div>
          </div>
          <div className="tp-marque-wrapper">
            <div className="marque-slider-active-2">
              <button onClick={sliderRef?.slickPrev}></button>
              <button onClick={sliderRef?.slickNext}></button>
              <Slider ref={setSliderRef} {...sliderSettings}>
                <div className="marque-item">
                  <span>Animation.</span>
                </div>
                <div className="marque-item">
                  <span>3D Design.</span>
                </div>
                <div className="marque-item">
                  <span>Branding Design</span>
                </div>
                <div className="marque-item">
                  <span>Animation.</span>
                </div>
                <div className="marque-item">
                  <span>3D Design.</span>
                </div>
                <div className="marque-item">
                  <span>Branding Design</span>
                </div>
              </Slider>
            </div>
          </div>
        </div>
        {/* <!-- tp-marque-area-end --> */}

        {/* <!-- tp-barnd-area-start --> */}
        <div
          className="tp-barnd-area pt-120 pb-120"
          style={{
            backgroundImage: `url(${brandImg})`,
          }}
          data-background="assets/img/brand/barnd-bg.png"
        >
          <div className="container ">
            <div className="row justify-content-center">
              <div
                className="col-xl-5 wow tpfadeUp"
                data-wow-duration=".9s"
                data-wow-delay=".3s"
              >
                <div className="tp-brand-section-title-box text-center mb-60">
                  <h4 className="tp-section-title-xs text-white">
                    I Work With Global Top Brands.
                  </h4>
                </div>
              </div>
            </div>
            <div className="row align-items-center">
              <div
                className="col-lg col-md wow tpfadeUp"
                data-wow-duration=".9s"
                data-wow-delay=".5s"
              >
                <div className="brand-logo">
                  <img src="assets/img/brand/brand-7.png" alt="" />
                </div>
              </div>
              <div
                className="col-lg col-md wow tpfadeUp"
                data-wow-duration=".9s"
                data-wow-delay=".6s"
              >
                <div className="brand-logo">
                  <img src="assets/img/brand/brand-8.png" alt="" />
                </div>
              </div>
              <div
                className="col-lg col-md wow tpfadeUp"
                data-wow-duration=".9s"
                data-wow-delay=".7s"
              >
                <div className="brand-logo">
                  <img src="assets/img/brand/brand-9.png" alt="" />
                </div>
              </div>
              <div
                className="col-lg col-md wow tpfadeUp"
                data-wow-duration=".9s"
                data-wow-delay=".8s"
              >
                <div className="brand-logo">
                  <img src="assets/img/brand/brand-10.png" alt="" />
                </div>
              </div>
              <div
                className="col-lg col-md wow tpfadeUp"
                data-wow-duration=".9s"
                data-wow-delay=".9s"
              >
                <div className="brand-logo">
                  <img src="assets/img/brand/brand-11.png" alt="" />
                </div>
              </div>
            </div>
            <div className="row brand-center align-items-center">
              <div
                className="col-lg-3 col-md-3 wow tpfadeUp"
                data-wow-duration=".9s"
                data-wow-delay=".9s"
              >
                <div className="brand-logo">
                  <img src="assets/img/brand/brand-12.png" alt="" />
                </div>
              </div>
              <div
                className="col-lg-3 col-md-3 wow tpfadeUp"
                data-wow-duration=".9s"
                data-wow-delay="1s"
              >
                <div className="brand-logo">
                  <img src="assets/img/brand/brand-13.png" alt="" />
                </div>
              </div>
              <div
                className="col-lg-3 col-md-3 wow tpfadeUp"
                data-wow-duration=".9s"
                data-wow-delay="1s"
              >
                <div className="brand-logo">
                  <img src="assets/img/brand/brand-14.png" alt="" />
                </div>
              </div>
              <div
                className="col-lg-3 col-md-3 wow tpfadeUp"
                data-wow-duration=".9s"
                data-wow-delay="1.1s"
              >
                <div className="brand-logo">
                  <img src="assets/img/brand/brand-15.png" alt="" />
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* <!-- tp-barnd-area-end --> */}

        {/* <!-- tp-testimonial-area-start --> */}
        <TestimonialSlider />
        {/* <!-- tp-testimonial-area-end --> */}

        {/* <!-- tp-social-area-start --> */}
        <SocialArea />
        {/* <!-- tp-social-area-end --> */}
      </main>
    </>
  );
};

export default Home3;

import React, { useState } from "react";
import { Link } from "react-router-dom";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";

const CaseSlider = () => {
  const [sliderRef, setSliderRef] = useState(null);
  const sliderSettings = {
    arrows: false,
    slidesToShow: 4,
    slidesToScroll: 1,
    infinite: true,
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
      <div className="tp-case-area case-grident-bg pt-120 pb-120 fix">
        <div className="container-fluid">
          <div className="row g-0 justify-content-center">
            <div className="col-xl-6">
              <div
                className="tp-case-title-box mb-60 text-center wow tpfadeUp"
                data-wow-duration=".7s"
                data-wow-delay=".5s"
              >
                <h3 className="tp-section-subtitle">My Portfolio</h3>
                <h3 className="tp-section-title-sm">
                  Look at My Recent <br /> Case Studies
                </h3>
              </div>
            </div>
          </div>
          <div
            className="tp-case-wrapper wow tpfadeUp"
            data-wow-duration=".7s"
            data-wow-delay=".7s"
          >
            <div className="tp-case-active">
              <button onClick={sliderRef?.slickPrev}></button>
              <button onClick={sliderRef?.slickNext}></button>
              <Slider ref={setSliderRef} {...sliderSettings}>
                {}
                <div className="tp-case-item text-center p-relative mb-30">
                  <div className="tp-case-item__thumb fix">
                    <Link to="case-details.html">
                      <img src="assets/img/case/case-3-1.jpg" alt="" />
                    </Link>
                  </div>
                  <div className="tp-circle-text">
                    <Link to="case-details.html">
                      Case <br /> Studies
                    </Link>
                  </div>
                </div>
                <div className="tp-case-item text-center p-relative mb-30">
                  <div className="tp-case-item__thumb fix">
                    <Link to="case-details.html">
                      <img src="assets/img/case/case-3-2.jpg" alt="" />
                    </Link>
                  </div>
                  <div className="tp-circle-text">
                    <Link to="case-details.html">
                      Case <br /> Studies
                    </Link>
                  </div>
                </div>
                <div className="tp-case-item text-center p-relative mb-30">
                  <div className="tp-case-item__thumb fix">
                    <Link to="case-details.html">
                      <img src="assets/img/case/case-3-3.jpg" alt="" />
                    </Link>
                  </div>
                  <div className="tp-circle-text">
                    <Link to="case-details.html">
                      Case <br /> Studies
                    </Link>
                  </div>
                </div>
                <div className="tp-case-item text-center p-relative mb-30">
                  <div className="tp-case-item__thumb fix">
                    <Link to="case-details.html">
                      <img src="assets/img/case/case-3-4.jpg" alt="" />
                    </Link>
                  </div>
                  <div className="tp-circle-text">
                    <Link to="#">
                      Case <br /> Studies
                    </Link>
                  </div>
                </div>
                <div className="tp-case-item text-center p-relative mb-30">
                  <div className="tp-case-item__thumb fix">
                    <Link to="case-details.html">
                      <img src="assets/img/case/case-3-2.jpg" alt="" />
                    </Link>
                  </div>
                  <div className="tp-circle-text">
                    <Link to="case-details.html">
                      Case <br /> Studies
                    </Link>
                  </div>
                </div>
              </Slider>
            </div>
          </div>
          <div
            className="row wow tpfadeUp"
            data-wow-duration=".7s"
            data-wow-delay=".9s"
          >
            <div className="case-button mt-30 text-center">
              <Link className="tp-btn" to="case-studies.html">
                more Case Studies
              </Link>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default CaseSlider;

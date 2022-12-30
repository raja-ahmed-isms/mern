import React, { useState } from "react";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import testimonial from "../api/testimonialsApi";

const TestimonialSlider = () => {
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
      <div className="tp-testimonial-area grey-bg pt-120 pb-120 fix">
        <div className="container-fluid">
          <div className="row g-0 justify-content-center">
            <div
              className="col-xl-4 wow tpfadeUp"
              data-wow-duration=".7s"
              data-wow-delay=".5s"
            >
              <div className="tp-testtimonial-title-box mb-60 text-center">
                <h3 className="tp-section-subtitle">Testimonial</h3>
                <h3 className="tp-section-title-sm">Trusted by Clients.</h3>
              </div>
            </div>
          </div>
          <div className="testimonial-slide-wrapper">
            <div className="testimonial-active-three">
              <button onClick={sliderRef?.slickPrev}></button>
              <button onClick={sliderRef?.slickNext}></button>
              <Slider ref={setSliderRef} {...sliderSettings}>
                {testimonial.map((item, index) => {
                  return (
                    <div
                      key={index}
                      className="tp-testimonial-three text-center wow tpfadeUp"
                      data-wow-duration=".7s"
                      data-wow-delay=".6s"
                    >
                      <div className="tp-testimonial-three__content">
                        <div className={item.icon}>
                          <i className="fas fa-quote-right"></i>
                        </div>
                        <div className="tp-testimonial-three__content-text">
                          <p>{item.review}</p>
                        </div>
                      </div>
                      <div className="tp-testimonial-three__user">
                        <div className="tp-testimonial-three__user-img">
                          <img src={item.image} alt={item.alt_text} />
                        </div>
                        <div className="tp-testimonial-three__user-content">
                          <h4 className="user-title">{item.name}</h4>
                          <span>{item.job_title}</span>
                        </div>
                      </div>
                    </div>
                  );
                })}
              </Slider>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default TestimonialSlider;

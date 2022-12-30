import React from "react";
import { Link } from "react-router-dom";
import ContactForm from "../inc/ContactForm";
import SocialArea from "../inc/SocialArea";
import team from "../api/teamPageApi";

const Team = () => {
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
                    Sixart Team{" "}
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
                    <span>Our Team</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        {/* <!-- breadcrumb area end --> */}

        {/* <!-- tp-team-area-start --> */}
        <div className="tp-team-area pt-120 pb-70">
          <div className="container">
            <div className="row">
              {team.map((item, index) => {
                return (
                  <div
                    className="col-xl-3 col-lg-3 col-md-6 mb-60 wow tpfadeUp"
                    key={index}
                    data-wow-duration=".7s"
                    data-wow-delay=".3s"
                  >
                    <div className="tp-team team-inner text-center">
                      <div className="tp-team-thumb p-relative">
                        <img src={item.image} alt={item.alt_text} />
                        <div className="tp-team-thumb-icon">
                          <Link to={item.link}>
                            <i className="far fa-long-arrow-right"></i>
                          </Link>
                        </div>
                      </div>
                      <div className="tp-team-content">
                        <h4 className="tp-team-title">
                          <Link to={item.link}>{item.name}</Link>
                        </h4>
                        <span>{item.title}</span>
                      </div>
                      <div className="tp-team-social">
                        <Link to={item.link_facebook}>
                          <i className="fab fa-facebook-f"></i>
                        </Link>
                        <Link to={item.link_twitter}>
                          <i className="fab fa-twitter"></i>
                        </Link>
                        <Link to={item.link_youtube}>
                          <i className="fab fa-youtube"></i>
                        </Link>
                        <Link to={item.link_pinterest}>
                          <i className="fab fa-pinterest"></i>
                        </Link>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
        {/* <!-- tp-team-area-end --> */}

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

export default Team;

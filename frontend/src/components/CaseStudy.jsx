import React from "react";
import { Link } from "react-router-dom";
import ContactForm from "../inc/ContactForm";
import SocialArea from "../inc/SocialArea";

const CaseStudy = () => {
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
                  <h3 className="breadcrumb__title">Case Studies</h3>
                  <div
                    className="breadcrumb__list wow tpfadeUp"
                    data-wow-duration=".9s"
                  >
                    <span>
                      <Link to="#">Home</Link>{" "}
                    </span>
                    <span className="dvdr">
                      <i className="fa fa-angle-right"></i>
                    </span>
                    <span>Case Studies</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        {/* <!-- breadcrumb area end --> */}

        {/* <!-- tp-case-area-start --> */}
        <div className="tp-case-area pt-120 pb-120">
          <div className="container">
            <div className="row gx-20">
              <div className="col-xl-6 col-lg-6">
                <div className="tp-case-thumb p-relative fix mb-20">
                  <img src="assets/img/case/case-1.jpg" alt="" />
                  <div className="case-icon">
                    <Link to="/case-details">
                      <i className="fas fa-arrow-alt-up"></i>
                    </Link>
                  </div>
                </div>
              </div>
              <div className="col-xl-6 col-lg-6">
                <div className="tp-case-thumb p-relative fix mb-20">
                  <img src="assets/img/case/case-2.jpg" alt="" />
                  <div className="case-icon">
                    <Link to="/case-details">
                      <i className="fas fa-arrow-alt-up"></i>
                    </Link>
                  </div>
                </div>
              </div>
              <div className="col-xl-6 col-lg-6">
                <div className="tp-case-thumb p-relative fix mb-20">
                  <img src="assets/img/case/case-3.jpg" alt="" />
                  <div className="case-icon">
                    <Link to="/case-details">
                      <i className="fas fa-arrow-alt-up"></i>
                    </Link>
                  </div>
                </div>
              </div>
              <div className="col-xl-6 col-lg-6">
                <div className="tp-case-thumb p-relative fix mb-20">
                  <img src="assets/img/case/case-4.jpg" alt="" />
                  <div className="case-icon">
                    <Link to="/case-details">
                      <i className="fas fa-arrow-alt-up"></i>
                    </Link>
                  </div>
                </div>
              </div>
              <div className="col-xl-6 col-lg-6">
                <div className="tp-case-thumb p-relative fix mb-20">
                  <img src="assets/img/case/case-3-1.jpg" alt="" />
                  <div className="case-icon">
                    <Link to="/case-details">
                      <i className="fas fa-arrow-alt-up"></i>
                    </Link>
                  </div>
                </div>
              </div>
              <div className="col-xl-6 col-lg-6">
                <div className="tp-case-thumb p-relative fix mb-20">
                  <img src="assets/img/case/case-3-2.jpg" alt="" />
                  <div className="case-icon">
                    <Link to="/case-details">
                      <i className="fas fa-arrow-alt-up"></i>
                    </Link>
                  </div>
                </div>
              </div>
              <div className="col-xl-6 col-lg-6">
                <div className="tp-case-thumb p-relative fix mb-20">
                  <img src="assets/img/case/case-3-3.jpg" alt="" />
                  <div className="case-icon">
                    <Link to="/case-details">
                      <i className="fas fa-arrow-alt-up"></i>
                    </Link>
                  </div>
                </div>
              </div>
              <div className="col-xl-6 col-lg-6">
                <div className="tp-case-thumb p-relative fix mb-20">
                  <img src="assets/img/case/case-3-4.jpg" alt="" />
                  <div className="case-icon">
                    <Link to="/case-details">
                      <i className="fas fa-arrow-alt-up"></i>
                    </Link>
                  </div>
                </div>
              </div>
            </div>
            <div className="row">
              <div className="col-xl-12">
                <div className="tp-case-button text-center mt-40">
                  <Link className="tp-btn" to="/case-details">
                    all Case studeis
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* <!-- tp-case-area-end --> */}

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

export default CaseStudy;

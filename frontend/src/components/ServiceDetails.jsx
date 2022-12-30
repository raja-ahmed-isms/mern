import React from "react";
import { Link } from "react-router-dom";
import ContactForm from "../inc/ContactForm";
import SocialArea from "../inc/SocialArea";

const ServiceDetails = () => {
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
                  <h3 className="breadcrumb__title">Service Details</h3>
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
                    <span>Service Details</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        {/* <!-- breadcrumb area end --> */}

        {/* <!-- sv-details area start --> */}
        <div className="sv-details-area pt-120">
          <div className="container">
            <div className="row">
              <div className="col-xl-12">
                <div className="sv-details-content">
                  <div className="sv-details-thumb mb-50">
                    <img src="assets/img/service/sv-details-1.jpg" alt="" />
                  </div>
                  <h4 className="sv-details-title mb-60">
                    How To Improve And Measure Your Progress Learning Web Design
                  </h4>
                  <p className="pb-30">
                    Must explain to you how all this mistaken idea of denouncing
                    works pleasure and praising uts pain was born and I will
                    gives you a itself completed account of the system, and sed
                    expounds the ut actual teachings of that greater sed
                    explores truth. Denouncing works pleasures and praising
                    pains was us born and I will gives you a completed ut
                    workers accounts of the system. sit aspernatur aut odit aut
                    fugit, sed quia consequuntur magni dolores eos qui ratione
                    voluptatem sequi nesciunt.
                  </p>
                </div>
                <div className="sv-details-content sv-details-md-space">
                  <h5 className="sv-details-title-sm pb-20">
                    Personal Exprience
                  </h5>
                  <p>
                    Sed ut perspiciatis unde omnis iste natus error sit
                    voluptatem accusantium doloremque laudantium, totam rem
                    aperiam, eaque ipsa quae ab illo inventore veritatis et
                    quasi architecto beatae vitae dicta sunt explicabo. Nemo
                    enim ipsam voluptatem quia voluptas sit aspernatur aut odit
                    aut fugit, sed quia consequuntur magni dolores eos qui
                    ratione voluptatem sequi nesciunt. Neque porro quisquam est,
                    qui dolorem ipsum quia dolor sit amet,
                  </p>
                  <p>
                    Must explain to you how all this mistaken idea of denouncing
                    works pleasure and praising uts pain was born and I will
                    gives you a itself completed account of the system, and sed
                    expounds the ut actual teachings of that greater sed
                    explores truth. Denouncing works pleasures and praising
                    pains was us born and I will gives you a completed ut
                    workers accounts of the system. sit aspernatur aut odit aut
                    fugit, sed quia consequuntur magni dolores eos qui ratione
                    voluptatem sequi nesciunt.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* <!-- sv-details area end --> */}

        {/* <!-- tp-cta-area-start --> */}
        <div className="tp-cta-area cta-space-three pt-120 pb-120">
          <div className="container">
            <div className="row">
              <div className="col-xl-4 col-lg-4 col-md-4 col-sm-4">
                <div className="cta-item p-relative">
                  <h3 className="cta-big-text">
                    <Link to="#">Think.</Link>
                  </h3>
                  <div className="cta-effect-img">
                    <img src="assets/img/cta/cta-2.png" alt="" />
                  </div>
                </div>
              </div>
              <div className="col-xl-4 col-lg-4 col-md-4 col-sm-4">
                <div className="cta-item p-relative">
                  <h3 className="cta-big-text">
                    <Link to="#">Make.</Link>
                  </h3>
                  <div className="cta-effect-img">
                    <img src="assets/img/cta/cta-3.png" alt="" />
                  </div>
                </div>
              </div>
              <div className="col-xl-4 col-lg-4 col-md-4 col-sm-4">
                <div className="cta-item p-relative">
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

export default ServiceDetails;

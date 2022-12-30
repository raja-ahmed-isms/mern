import React from "react";
import { Link } from "react-router-dom";
import ContactForm from "../inc/ContactForm";
import SocialArea from "../inc/SocialArea";

function CaseDetails() {
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
                  <h3 className="breadcrumb__title">Case Details</h3>
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
                    <span>Case Details</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        {/* <!-- breadcrumb area end --> */}

        {/* <!-- tp-abou-me-area-start --> */}
        <div className="am-about-area pt-110 pb-80">
          <div className="container">
            <div className="row">
              <div className="col-xl-12">
                <div className="ac-ab-img p-relative fix">
                  <img src="assets/img/case/case-details.jpg" alt="" />
                  <div className="tp-inner-play-button">
                    <Link
                      className="popup-video"
                      to="https://www.youtube.com/watch?v=wnlK41gHuMk"
                    >
                      <i className="fas fa-play"></i>
                    </Link>
                  </div>
                </div>
              </div>
            </div>
            <div className="row case-custom-space-1">
              <div className="col-xl-8">
                <div className="sv-details-content case-custom-space-2">
                  <h4 className="case-details-title mb-50">
                    How To Improve And Measure Your Progress Learning Web Design
                    and Development
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
              </div>
              <div className="col-xl-4">
                <div className="row case-custom-space-3">
                  <div className="col-xl-12 col-lg-6 col-md-6">
                    <div className="amaboutinfo mb-30">
                      <div className="amaboutinfo__experience">
                        <p>
                          <b>Client:</b> Ritarexar Dimandi (UK)
                        </p>
                        <p>
                          <b>Date :</b> 24 January 2022
                        </p>
                        <p>
                          <Link to="mailto:webmail.info@gmail.com">
                            <b>E-mail:</b> webmail.info@gmail.com
                          </Link>{" "}
                        </p>
                        <p>
                          <Link to="#">
                            <b>Categories:</b> Web Development
                          </Link>{" "}
                        </p>
                      </div>
                    </div>
                  </div>
                  <div className="col-xl-12 col-lg-6 col-md-6">
                    <div className="case-social-icon">
                      <Link className="behance w-100" to="#">
                        <i className="fab fa-behance"></i>
                      </Link>
                      <Link className="twitter w-100" to="#">
                        <i className="fab fa-twitter"></i>
                      </Link>
                      <Link className="pinterest w-100" to="#">
                        <i className="fab fa-pinterest "></i>
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="row">
              <div className="col-xl-12">
                <div className="sv-details-content case-sapce-top sv-details-md-space mb-60">
                  <h5 className="sv-details-title-sm pb-20">
                    Project Process and Experiment
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
                    Sed ut perspiciatis unde omnis iste natus error sit
                    voluptatem accusantium doloremque laudantium, totam rem
                    aperiam, eaque ipsa quae ab illo inventore veritatis et
                    quasi architecto beatae vitae dicta sunt explicabo. Nemo
                    enim ipsam voluptatem quia voluptas sit aspernatur aut odit
                    aut fugit, sed quia consequuntur magni dolores eos qui
                    ratione voluptatem sequi nesciunt. Neque porro quisquam est,
                    qui dolorem ipsum quia dolor sit amet,
                  </p>
                </div>
              </div>
              <div className="col-xl-12">
                <div className="sv-details-content sv-details-md-space">
                  <h5 className="sv-details-title-sm pb-20">
                    Our Final Solution
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
                    Sed ut perspiciatis unde omnis iste natus error sit
                    voluptatem accusantium doloremque laudantium, totam rem
                    aperiam, eaque ipsa quae ab illo inventore veritatis et
                    quasi architecto beatae vitae dicta sunt explicabo. Nemo
                    enim ipsam voluptatem quia voluptas sit aspernatur aut odit
                    aut fugit, sed quia consequuntur magni dolores eos qui
                    ratione voluptatem sequi nesciunt. Neque porro quisquam est,
                    qui dolorem ipsum quia dolor sit amet,
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* <!-- tp-about-me-area-end --> */}

        {/* <!-- tp-contact-area-start --> */}
        <ContactForm />
        {/* <!-- tp-contact-area-end --> */}

        {/* <!-- tp-social-area-start --> */}
        <SocialArea />
        {/* <!-- tp-social-area-end --> */}
      </main>
    </>
  );
}

export default CaseDetails;

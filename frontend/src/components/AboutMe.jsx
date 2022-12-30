import React from "react";
import { Link } from "react-router-dom";
import SocialArea from "../inc/SocialArea";

const AboutMe = () => {
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
                    About me
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
                    <span>About me</span>
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
              <div
                className="col-xl-12 wow tpfadeUp"
                data-wow-duration=".7s"
                data-wow-delay=".5s"
              >
                <div className="ac-ab-img p-relative fix">
                  <img src="assets/img/about/ab-inner-2-1.jpg" alt="" />
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
            <div className="row ab-info-space">
              <div
                className="col-xl-4 col-lg-4 col-md-5 col-sm-12 mb-40 wow tpfadeUp"
                data-wow-duration=".7s"
                data-wow-delay=".7s"
              >
                <div className="amaboutinfo">
                  <div className="amaboutinfo__client-info">
                    <h4>Ritarexa Ditarmen</h4>
                    <span>UI/UX Designer</span>
                    <p>
                      Phasellus in libero et nunc malesuada tincidu Morbi auctor
                      tristique semper. Nunc condimentum dapibus felis
                    </p>
                  </div>
                </div>
              </div>
              <div
                className="col-xl-6 col-lg-5 col-md-4 col-sm-12 mb-40 d-flex justify-content-start justify-content-md-center wow tpfadeUp"
                data-wow-duration=".7s"
                data-wow-delay=".9s"
              >
                <div className="amaboutinfo">
                  <div className="amaboutinfo__experience">
                    <p>
                      <b>Expertise:</b> Genetic Specialist
                    </p>
                    <p>
                      <b>Experience:</b> 5 Years
                    </p>
                    <p>
                      <Link to="mailto:webmail.info@gmail.com">
                        <b>E-mail:</b> webmail.info@gmail.com
                      </Link>
                    </p>
                    <p>
                      <Link to="#">
                        <b>Website:</b> Alextineditarson.io
                      </Link>
                    </p>
                  </div>
                </div>
              </div>
              <div
                className="col-xl-2 col-lg-2 col-md-3 col-sm-12 mb-40 wow tpfadeUp"
                data-wow-duration=".7s"
                data-wow-delay="1s"
              >
                <div className="amaboutsocial text-start text-md-end">
                  <div className="amaboutsocial__icon mb-30">
                    <Link to="" className="si-btn-link">
                      <div className="tp-si-wrapper d-flex justify-content-end">
                        <div className="tp-si__text">
                          <span>Facebook</span>
                        </div>
                        <div className="tp-si__icon">
                          <i className="fab fa-facebook-f"></i>
                        </div>
                      </div>
                    </Link>
                  </div>
                  <div className="amaboutsocial__icon mb-30">
                    <Link to="" className="si-btn-link">
                      <div className="tp-si-wrapper d-flex justify-content-end">
                        <div className="tp-si__text tp-si-color-1">
                          <span>Pintarest</span>
                        </div>
                        <div className="tp-si__icon tp-si-color-1">
                          <i className="fab fa-pinterest-p"></i>
                        </div>
                      </div>
                    </Link>
                  </div>
                  <div className="amaboutsocial__icon mb-30">
                    <Link to="" className="si-btn-link">
                      <div className="tp-si-wrapper d-flex justify-content-end">
                        <div className="tp-si__text  tp-si-color-2">
                          <span>Behance</span>
                        </div>
                        <div className="tp-si__icon  tp-si-color-2">
                          <i className="fab fa-behance"></i>
                        </div>
                      </div>
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* <!-- tp-about-me-area-end --> */}

        {/* <!-- exprience-area-start --> */}
        <div
          className="tp-skill-area wow tpfadeUp"
          data-wow-duration=".7s"
          data-wow-delay=".7s"
        >
          <div className="container">
            <div className="row">
              <div className="col-xl-12">
                <div className="amskill">
                  <div className="amskill__title">
                    <h3 className="am-skill-title">Personal Experience</h3>
                    <p className="pb-10">
                      {" "}
                      Sed ut perspiciatis unde omnis iste natus error sit
                      voluptatem accusantium doloremque laudantium, totam rem
                      aperiam, eaque ipsa quae ab illo inventore veritatis et
                      quasi architecto beatae vitae dicta sunt explicabo. Nemo
                      enim ipsam voluptatem quia voluptas sit aspernatur aut
                      odit aut fugit, sed quia consequuntur magni dolores eos
                      qui ratione voluptatem sequi nesciunt. Neque porro
                      quisquam est, qui dolorem ipsum quia dolor sit amet,
                    </p>
                    <p>
                      Must explain to you how all this mistaken idea of
                      denouncing works pleasure and praising uts pain was born
                      and I will gives you a itself completed account of the
                      system, and sed expounds the ut actual teachings of that
                      greater sed explores truth. Denouncing works pleasures and
                      praising pains was us born and I will gives you a
                      completed ut workers accounts of the system. sit
                      aspernatur aut odit aut fugit, sed quia consequuntur magni
                      dolores eos qui ratione voluptatem sequi nesciunt.
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <div className="row feature-bottom-space">
              <div className="col-xl-4 col-lg-4">
                <div className="amfeature">
                  <div className="amfeature__item">
                    <h4 className="am-skill-sm-title">Skills</h4>
                    <p className=" am-p-space-1">
                      Must explain to you how all praising uts pain was born and
                      I will gives you a itself completed account of the system,
                      and sed expounds the ut actual teachings of that greater
                    </p>
                  </div>
                  <div className="amfeature__list">
                    <ul>
                      <li>
                        <i className="fal fa-check"></i> Extramural Funding
                      </li>
                      <li>
                        <i className="fal fa-check"></i> Bacteria Markers
                      </li>
                      <li>
                        <i className="fal fa-check"></i> Type of system involved
                      </li>
                      <li>
                        <i className="fal fa-check"></i> Nam nec mi euismod
                        euismod
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
              <div className="col-xl-4 col-lg-4">
                <div className="amfeature am-fea-space">
                  <div className="amfeature__item">
                    <h4 className="am-skill-sm-title">Education</h4>
                    <p className=" am-p-space-2">
                      Must explain to you how all praising uts pain was born and
                      I will gives you a itself completed account of the system,
                      and sed expounds the ut actual teachings of that greater
                    </p>
                  </div>
                  <div className="amfeature__list">
                    <ul>
                      <li>
                        <i className="fal fa-check"></i> Extramural Funding
                      </li>
                      <li>
                        <i className="fal fa-check"></i> Bacteria Markers
                      </li>
                      <li>
                        <i className="fal fa-check"></i> Type of system involved
                      </li>
                      <li>
                        <i className="fal fa-check"></i> Nam nec mi euismod
                        euismod
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
              <div className="col-xl-4 col-lg-4">
                <div className="amfeature am-fea-space-2">
                  <div className="amfeature__item">
                    <h4 className="am-skill-sm-title">Awards</h4>
                    <p className="am-p-space-3">
                      Must explain to you how all praising uts pain was born and
                      I will gives you a itself completed account of the system,
                      and sed expounds the ut actual teachings of that greater
                    </p>
                  </div>
                  <div className="amfeature__list">
                    <ul>
                      <li>
                        <i className="fal fa-check"></i> Extramural Funding
                      </li>
                      <li>
                        <i className="fal fa-check"></i> Bacteria Markers
                      </li>
                      <li>
                        <i className="fal fa-check"></i> Type of system involved
                      </li>
                      <li>
                        <i className="fal fa-check"></i> Nam nec mi euismod
                        euismod
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* <!-- exprience-area-end --> */}

        {/* <!-- project-area-start --> */}
        <div className="tp-project-area pb-60">
          <div className="container">
            <div className="row">
              <div className="col-xl-6">
                <h4 className="am-skill-title">My Recent Complete Project</h4>
              </div>
            </div>
            <div className="row">
              <div
                className="col-xl-4 col-lg-4 col-md-6 wow tpfadeUp"
                data-wow-duration=".7s"
                data-wow-delay=".5s"
              >
                <div className="tp-case-item text-center p-relative">
                  <div className="tp-case-item__thumb fix">
                    <Link to="case-details.html">
                      <img src="assets/img/about/ab-inner-2-2.jpg" alt="" />
                    </Link>
                  </div>
                  <div className="tp-circle-text">
                    <Link to="case-details.html">
                      Case <br /> Studies
                    </Link>
                  </div>
                </div>
              </div>
              <div
                className="col-xl-4 col-lg-4 col-md-6 wow tpfadeUp"
                data-wow-duration=".7s"
                data-wow-delay=".7s"
              >
                <div className="tp-case-item text-center p-relative">
                  <div className="tp-case-item__thumb fix">
                    <Link to="case-details.html">
                      <img src="assets/img/about/ab-inner-2-3.jpg" alt="" />
                    </Link>
                  </div>
                  <div className="tp-circle-text">
                    <Link to="case-details.html">
                      Case <br /> Studies
                    </Link>
                  </div>
                </div>
              </div>
              <div
                className="col-xl-4 col-lg-4 col-md-6 wow tpfadeUp"
                data-wow-duration=".7s"
                data-wow-delay=".9s"
              >
                <div className="tp-case-item text-center p-relative">
                  <div className="tp-case-item__thumb fix">
                    <Link to="case-details.html">
                      <img src="assets/img/about/ab-inner-2-4.jpg" alt="" />
                    </Link>
                  </div>
                  <div className="tp-circle-text">
                    <Link to="case-details.html">
                      Case <br /> Studies
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* <!-- project-area-end --> */}

        {/* <!-- contact-area-start --> */}
        <div
          className="am-contact-area pb-130 wow tpfadeUp"
          data-wow-duration=".7s"
          data-wow-delay=".5s"
        >
          <div className="container">
            <div className="row">
              <div className="col-12">
                <div className="am-contact-info p-relative">
                  <div>
                    <h4 className="am-contact-title">Direct message me!</h4>
                  </div>
                  <div className="am-border-shape"></div>
                </div>
              </div>
            </div>
            <div className="row">
              <div className="col-12">
                <div className="contact-form text-center">
                  <form action="#">
                    <div className="row">
                      <div className="col-md-6 col-12">
                        <div className="input">
                          <input type="text" placeholder="Enter your name" />
                        </div>
                      </div>
                      <div className="col-md-6 col-12">
                        <div className="input">
                          <input type="email" placeholder="Enter you mail" />
                        </div>
                      </div>
                      <div className="col-12">
                        <div className="textarea">
                          <textarea placeholder="Enter your message"></textarea>
                        </div>
                      </div>
                    </div>
                    <button className="tp-btn" type="submit">
                      Send Message
                    </button>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* <!-- contact-area-end --> */}

        {/* <!-- tp-social-area-start --> */}
        <SocialArea />
        {/* <!-- tp-social-area-end --> */}
      </main>
    </>
  );
};

export default AboutMe;

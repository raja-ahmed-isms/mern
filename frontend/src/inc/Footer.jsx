import React from "react";
import { Link } from "react-router-dom";
const Footer = () => {
  const footerImg = "assets/img/footer/footer-bg.jpg";
  return (
    <>
       <footer>
      {/* <!-- tp-footer-area-start --> */}
      <div className="tp-footer-area footer-bg pt-130"  style={{
            backgroundImage: `url(${footerImg})`,
          }} data-background="assets/img/footer/footer-bg.jpg">
         <div className="container">
            <div className="row">
               <div className="col-xl-2 col-lg-2 col-md-3 col-6 mb-30">
                  <div className="tp-footer-widget z-index-3">
                     <div className="tp-footer-widget__title">
                        <h4 className="tp-footer-title">Product</h4>
                     </div>
                     <div className="tp-footer-widget__list">
                        <ul>
                           <li><Link to="index.html">Landing Page</Link></li>
                           <li><Link to="#">Popup Builder</Link></li>
                           <li><Link to="#">Web-design</Link></li>
                           <li><Link to="#">Content</Link></li>
                           <li><Link to="#">Integrations</Link></li>
                        </ul>
                     </div>
                  </div>
               </div>
               <div className="col-xl-3 col-lg-2 col-md-3 col-6 mb-30">
                  <div className="tp-footer-widget footer-space-one z-index-3">
                     <div className="tp-footer-widget__title">
                        <h4 className="tp-footer-title">Use Cases</h4>
                     </div>
                     <div className="tp-footer-widget__list">
                        <ul>
                           <li><Link to="#">Web-designers</Link></li>
                           <li><Link to="#">Marketers</Link></li>
                           <li><Link to="#">Small Business</Link></li>
                           <li><Link to="#">Website Builder</Link></li>
                        </ul>
                     </div>
                  </div>
               </div>
               <div className="col-xl-2 col-lg-2 col-md-3 col-6 mb-30">
                  <div className="tp-footer-widget footer-space-two z-index-3">
                     <div className="tp-footer-widget__title">
                        <h4 className="tp-footer-title">Resources</h4>
                     </div>
                     <div className="tp-footer-widget__list">
                        <ul>
                           <li><Link to="#">Academy</Link></li>
                           <li><Link to="blog-details.html">Blog</Link></li>
                           <li><Link to="#">Themes</Link></li>
                           <li><Link to="#">Hosting</Link></li>
                           <li><Link to="#">Developers</Link></li>
                           <li><Link to="contact.html">Support</Link></li>
                        </ul>
                     </div>
                  </div>
               </div>
               <div className="col-xl-2 col-lg-2 col-md-3 col-6 mb-30">
                  <div className="tp-footer-widget footer-space-three z-index-3">
                     <div className="tp-footer-widget__title">
                        <h4 className="tp-footer-title">Product</h4>
                     </div>
                     <div className="tp-footer-widget__list">
                        <ul>
                           <li><Link to="index.html">Landing Page</Link></li>
                           <li><Link to="#">Popup Builder</Link></li>
                           <li><Link to="#">Web-design</Link></li>
                           <li><Link to="#">Content</Link></li>
                           <li><Link to="#">Integrations</Link></li>
                        </ul>
                     </div>
                  </div>
               </div>
               <div className="col-xl-3 col-lg-4 col-md-6 col-12 mb-30">
                  <div className="tp-footer-widget z-index-3">
                     <div className="tp-footer-widget__title">
                        <h4 className="tp-footer-title">Contact Us</h4>
                     </div>
                     <div className="tp-footer-widget__list">
                        <ul className="footer-position">
                           <li><Link to="https://www.google.com/maps/@38.4999525,-103.0632285,6.46z" target="_blank">
                              <span><i className="fal fa-map-marker-alt"></i></span>
                              Wisconsin Ave, Suite 700
                              Chevy Chase, Maryland 20815</Link>
                           </li>
                           <li><Link to="mailto:support@figma">
                              <span><i className="fal fa-envelope-open"></i></span>
                              support@figma.com</Link>
                           </li>
                           <li><Link to="tel:778886664">
                              <span><i className="fal fa-phone-alt"></i></span>
                               088 (778 886 664)</Link>
                           </li>
                        </ul>
                     </div>
                  </div>
               </div>
            </div>
            <div className="row">
               <div className="col-12">
                  <div className="tp-newsletter-wrapper z-index-3">
                     <div className="row align-items-center">
                        <div className="col-lg-6 col-md-12 col-12">
                           <div className="tp-newsletter">
                              <div className="tp-newsletter__title">
                                 <h4 className="tp-newsletter-title">Get latest updates</h4>
                              </div>
                           </div>
                        </div>
                        <div className="col-lg-6 col-md-12 col-12">
                           <div className="tp-newsletter">
                              <div className="tp-newsletter__input p-relative">
                                 <form action="#">
                                    <input type="email" placeholder="Enter your mail" />
                                    <button className="tp-btn-yellow">Subscribe <i className="far fa-arrow-right"></i></button>
                                 </form>
                              </div>
                           </div>
                        </div>
                     </div>
                  </div>
               </div>
            </div>
            <div className="copy-right-wrapper z-index-3">
               <div className="row">
                  <div className="col-xl-6 col-lg-7 col-12">
                     <div className="copyright-left text-center text-lg-start">
                        <p>©Copy RIght @2022 All Rights Reserved - Sixart Digital Agency</p>
                     </div>
                  </div>
                  <div className="col-xl-6 col-lg-5 col-12">
                     <div className="copyright-right-side text-center text-lg-end">
                        <ul>
                           <li><Link to="#">Privacy Policy</Link></li>
                           <li><Link to="#">Terms of Use</Link></li>
                           <li><Link to="#">Sales and Refunds</Link></li>
                        </ul>
                     </div>
                  </div>
               </div>
           </div>
         </div>
      </div>
      {/* <!-- tp-footer-area-end --> */}

      <button className="scroll-top scroll-to-target" data-target="html">
         <i className="far fa-angle-double-up"></i>
     </button>


   </footer>
    </>
  );
};

export default Footer;

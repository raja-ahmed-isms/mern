import React from 'react'
import {Link} from "react-router-dom"

const SocialArea = () => {
  return (
      <>
           <div className="tp-social-area social-space-bottom fix">
         <div className="container-fluid p-0">
            <div className="row g-0">
               <div className="col-lg-2 col-md-4 col-sm-6">
                  <Link to="#">
                     <div className="tp-social-item">
                        <span><i className="fab fa-facebook-f"></i> Facebook</span>
                     </div>
                  </Link>
               </div>
               <div className="col-lg-2 col-md-4 col-sm-6">
                  <Link to="#">
                     <div className="tp-social-item tp-youtube">
                        <span><i className="fab fa-youtube"></i> youtube</span>
                     </div>
                  </Link>
               </div>
               <div className="col-lg-2 col-md-4 col-sm-6">
                 <Link to="#">
                     <div className="tp-social-item tp-behance">
                        <span><i className="fab fa-behance"></i> behance</span>
                     </div>
                 </Link>
               </div>
               <div className="col-lg-2 col-md-4 col-sm-6">
                  <Link to="#">
                     <div className="tp-social-item tp-dribble">
                        <span><i className="fab fa-dribbble"></i> dribbble</span>
                     </div>
                  </Link>
               </div>
               <div className="col-lg-2 col-md-4 col-sm-6">
                  <Link to="#">
                     <div className="tp-social-item tp-twitter">
                        <span><i className="fab fa-twitter"></i> twitter</span>
                     </div>
                  </Link>
               </div>
               <div className="col-lg-2 col-md-4 col-sm-6">
                 <Link to="#">
                     <div className="tp-social-item tp-linkedin">
                        <span><i className="fab fa-linkedin"></i>linkedin</span>
                     </div>
                 </Link>
               </div>
            </div>
         </div>
      </div>
      </>
  )
}

export default SocialArea
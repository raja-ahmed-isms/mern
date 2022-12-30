import React from "react";
import { Link } from "react-router-dom";

const Nopage = () => {
  const bannerImg = "assets/img/404/404.jpg";
  return (
    <>
      <main>
        {/* <!-- breadcrumb area start --> */}
        <section
          className="tp-404-area height-404"
          style={{
            backgroundImage: `url(${bannerImg})`,
          }}
          data-background="assets/img/404/404.jpg"
        >
          <div className="container">
            <div className="row">
              <div className="col-xl-12">
                <div className="wrapper-404 d-flex justify-content-center align-items-end">
                  <div className="tp-404-content text-center pb-60">
                    <h4 className="mb-40">Opps! Page Not Found</h4>
                    <Link className="tp-btn" to="/">
                      Back To Home
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        {/* <!-- breadcrumb area end --> */}
      </main>
    </>
  );
};

export default Nopage;

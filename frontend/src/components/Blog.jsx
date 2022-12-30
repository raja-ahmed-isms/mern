import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import SocialArea from "../inc/SocialArea";

const Blog = () => {
  const bannerImg = "assets/img/breadcrumb/breadcurmb.jpg";

  const [data, setData] = useState();
  useEffect(() => {
    const fetch = async () => {
      await axios
        .get("http://localhost:5000/api/allBlogs")
        .then((res) => setData(res.data.blogs));
    };
    fetch();
  }, []);
  // const deleteRequest = async (id) => {
  //   await axios
  //     .delete(`http://localhost:5000/api/deleteBlog/${id}`)
  //     .then((res) => alert(res.data.message))
  //     .then(window.location.reload(true));
  // };
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
                  <h3 className="breadcrumb__title">Recent Blog</h3>
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
                    <span>Blog</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        {/* <!-- breadcrumb area end --> */}

        {/* <!-- postbox area start --> */}
        <div className="postbox__area pt-120 pb-120">
          <div className="container">
            <div className="row">
              <div className="col-xxl-8 col-xl-8 col-lg-8">
                <div className="postbox__wrapper pr-20">
                  {data &&
                    data.map((item, index) => {
                      return (
                        <article className="postbox__item format-image mb-50 transition-3">
                          <div className="postbox__thumb w-img">
                            <Link to="/blog-details">
                              <img
                                src={`../upload/${item.blogImage}`}
                                alt=""
                                width={843}
                                height={402}
                              />
                            </Link>
                          </div>
                          <div className="postbox__content">
                            <div className="postbox__meta">
                              <span>
                                <Link to="#">
                                  <i className="fal fa-user-circle"></i>{" "}
                                  {item.author}{" "}
                                </Link>{" "}
                              </span>
                              {/* <span>
                                <Link to="#">
                                  <i className="fal fa-clock"></i>{" "}
                                  {item.created_at}
                                </Link>{" "}
                              </span> */}
                              {/* <span>
                                <Link to="#">
                                  <i className="fal fa-comment-alt-lines"></i>
                                  (04) Coments
                                </Link>{" "}
                              </span> */}
                            </div>
                            <h3 className="postbox__title">
                              <Link to="/blog-details">{item.blogTitle}</Link>
                            </h3>
                            <div className="postbox__text">
                              <p>{item.description}</p>
                            </div>
                            <div className="post__button">
                              <Link className="tp-btn-sm" to="/blog-details">
                                {" "}
                                READ MORE
                              </Link>
                            </div>
                          </div>
                        </article>
                      );
                    })}

                  <div className="basic-pagination">
                    <nav>
                      <ul>
                        <li>
                          <Link to="blog.html">
                            <i className="fal fa-arrow-left"></i>
                          </Link>
                        </li>
                        <li>
                          <Link to="blog.html">1</Link>
                        </li>
                        <li>
                          <span className="current">2</span>
                        </li>
                        <li>
                          <Link to="blog.html">3</Link>
                        </li>
                        <li>
                          <Link to="blog.html">
                            <i className="fal fa-arrow-right"></i>
                          </Link>
                        </li>
                      </ul>
                    </nav>
                  </div>
                </div>
              </div>
              <div className="col-xxl-4 col-xl-4 col-lg-4">
                <div className="sidebar__wrapper">
                  <div className="sidebar__widget mb-40">
                    <h3 className="sidebar__widget-title">Search Here</h3>
                    <div className="sidebar__widget-content">
                      <div className="sidebar__search">
                        <form action="#">
                          <div className="sidebar__search-input-2">
                            <input
                              type="text"
                              placeholder="Search your keyword..."
                            />
                            <button type="submit">
                              <i className="far fa-search"></i>
                            </button>
                          </div>
                        </form>
                      </div>
                    </div>
                  </div>
                  <div className="sidebar__widget mb-40">
                    <h3 className="sidebar__widget-title">Recent Post</h3>
                    <div className="sidebar__widget-content">
                      <div className="sidebar__post rc__post">
                        <div className="rc__post mb-20 d-flex">
                          <div className="rc__post-thumb mr-20">
                            <Link to="blog-details.html">
                              <img src="assets/img/blog/blog-sm-1.jpg" alt="" />
                            </Link>
                          </div>
                          <div className="rc__post-content">
                            <div className="rc__meta">
                              <span>4 March. 2022</span>
                            </div>
                            <h3 className="rc__post-title">
                              <Link to="blog-details.html">
                                Don’t Underestimate The Software
                              </Link>
                            </h3>
                          </div>
                        </div>
                        <div className="rc__post mb-20 d-flex">
                          <div className="rc__post-thumb mr-20">
                            <Link to="blog-details.html">
                              <img src="assets/img/blog/blog-sm-2.jpg" alt="" />
                            </Link>
                          </div>
                          <div className="rc__post-content">
                            <div className="rc__meta">
                              <span>4 March. 2022</span>
                            </div>
                            <h3 className="rc__post-title">
                              <Link to="blog-details.html">
                                Designing Human-Machine Interfaces..
                              </Link>
                            </h3>
                          </div>
                        </div>
                        <div className="rc__post mb-20 d-flex">
                          <div className="rc__post-thumb mr-20">
                            <Link to="blog-details.html">
                              <img src="assets/img/blog/blog-sm-3.jpg" alt="" />
                            </Link>
                          </div>
                          <div className="rc__post-content">
                            <div className="rc__meta">
                              <span>4 March. 2022</span>
                            </div>
                            <h3 className="rc__post-title">
                              <Link to="blog-details.html">
                                Web Design Done Well: Excellent
                              </Link>
                            </h3>
                          </div>
                        </div>
                        <div className="rc__post mb-20 d-flex">
                          <div className="rc__post-thumb mr-20">
                            <Link to="blog-details.html">
                              <img src="assets/img/blog/blog-sm-4.jpg" alt="" />
                            </Link>
                          </div>
                          <div className="rc__post-content">
                            <div className="rc__meta">
                              <span>4 March. 2022</span>
                            </div>
                            <h3 className="rc__post-title">
                              <Link to="blog-details.html">
                                Don’t Underestimate The Software{" "}
                              </Link>
                            </h3>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="sidebar__widget mb-40">
                    <h3 className="sidebar__widget-title">Categories</h3>
                    <div className="sidebar__widget-content">
                      <ul>
                        <li>
                          <Link to="blog.html">
                            Web Design
                            <span>
                              <i className="fal fa-angle-right"></i>
                            </span>
                          </Link>{" "}
                        </li>
                        <li>
                          <Link to="blog.html">
                            Branding Design
                            <span>
                              <i className="fal fa-angle-right"></i>
                            </span>
                          </Link>{" "}
                        </li>
                        <li>
                          <Link to="blog.html">
                            Photography{" "}
                            <span>
                              <i className="fal fa-angle-right"></i>
                            </span>
                          </Link>{" "}
                        </li>
                        <li>
                          <Link to="blog.html">
                            Business Statergy
                            <span>
                              <i className="fal fa-angle-right"></i>
                            </span>
                          </Link>{" "}
                        </li>
                        <li>
                          <Link to="blog.html">
                            UI/UX Deisgn
                            <span>
                              <i className="fal fa-angle-right"></i>
                            </span>
                          </Link>{" "}
                        </li>
                        <li>
                          <Link to="blog.html">
                            Web Development
                            <span>
                              <i className="fal fa-angle-right"></i>
                            </span>
                          </Link>{" "}
                        </li>
                      </ul>
                    </div>
                  </div>
                  <div className="sidebar__widget mb-40">
                    <h3 className="sidebar__widget-title">Tags</h3>
                    <div className="sidebar__widget-content">
                      <div className="tagcloud">
                        <Link to="#">landing </Link>
                        <Link to="#">Charity</Link>
                        <Link to="#">apps</Link>
                        <Link to="#">Education </Link>
                        <Link to="#">data</Link>
                        <Link to="#">book</Link>
                        <Link to="#">Design</Link>
                        <Link to="#">website</Link>
                        <Link to="#">landing page</Link>
                        <Link to="#">data</Link>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* <!-- postbox area end --> */}

        {/* <!-- tp-social-area-start --> */}
        <SocialArea />
        {/* <!-- tp-social-area-end --> */}
      </main>
    </>
  );
};

export default Blog;

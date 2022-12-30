import React, { useEffect, useState } from "react";
import axios from "axios";
import { Link, useNavigate } from "react-router-dom";

const Listblog = () => {
  const navigate = useNavigate();
  useEffect(() => {
    if (localStorage.getItem("type") !== "ADMIN") {
      navigate("/home");
    }
  }, []);

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
  const deleteRequest = async (id) => {
    await axios
      .delete(`http://localhost:5000/api/deleteBlog/${id}`)
      .then((res) => alert(res.data.message))
      .then(window.location.reload(true));
  };
  return (
    <>
      <section
        className="breadcrumb__area breadcrumb-height include-bg p-relative"
        data-background="assets/img/breadcrumb/breadcurmb.jpg"
        style={{
          backgroundImage: `url(${bannerImg})`,
        }}
      ></section>
      <div className="container">
        <div className="row">
          <h3>Blog section</h3>
          {/* {data ? <div>Data Feched!</div> : <div>Loading...</div>} */}
          {data &&
            data.map((item, index) => {
              return (
                <div
                  className="card col-lg-4"
                  key={item._id + 1}
                  style={{ padding: "2em", margin: "10px", width: "20rem" }}
                >
                  {/* <img variant="top" src={item.image} width="300" height="350" /> */}
                  <img
                    className="card-img-top"
                    variant="top"
                    src={`../upload/${item.blogImage}`}
                    width="300"
                    height="350"
                    alt=""
                  />
                  <div className="card-body">
                    <div className="card-title">
                      <h1>{item.blogTitle}</h1>
                    </div>
                    <div>{item.author}</div>
                    <div className="card-text">
                      <p>{item.description}</p>
                    </div>
                    <button variant="warning" className="btn btn-warning">
                      <Link className="link-style" to={`../edit/${item._id}`}>
                        {" "}
                        Update
                      </Link>
                    </button>
                    <button
                      className="ms-5 btn btn-danger"
                      variant="danger"
                      onClick={() => deleteRequest(item._id)}
                    >
                      Delete
                    </button>
                  </div>
                </div>
              );
            })}
        </div>
      </div>
    </>
  );
};

export default Listblog;

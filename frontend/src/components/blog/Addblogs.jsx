import React, { useState, useEffect } from "react";
// import { Form, Button, Container } from "react-bootstrap";
import axios from "axios";
import { Link, useNavigate } from "react-router-dom";

const Addblogs = () => {
  const navigate = useNavigate();
  useEffect(() => {
    if (localStorage.getItem("type") !== "ADMIN") {
      navigate("/home");
    }
  }, []);

  const bannerImg = "assets/img/breadcrumb/breadcurmb.jpg";

  const [blogTitle, setBlogTitle] = useState("");
  const [description, setDescription] = useState("");
  const [author, setAuthor] = useState("");
  const [blogImage, setBlogImage] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    const formData = new FormData();

    formData.append("blogTitle", blogTitle);
    formData.append("description", description);
    formData.append("author", author);
    formData.append("blogImage", blogImage);
    axios
      .post("http://localhost:5000/api/addBlog", formData, {
        headers: {
          "content-type": "multipart/formdata",
          Authorization: localStorage.getItem("token"),
        },
      })
      // .then((res) => {
      //   console.log(res);
      // });
      .then((res) => {
        if (res.data.code === 403 && res.data.message === "Token Expired!") {
          localStorage.setItem("token", null);
        }
        alert(res.data.message);
      });
    e.preventDefault();

    setBlogTitle("");
    setDescription("");
    setAuthor("");
    setBlogImage("");
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
        <form onSubmit={handleSubmit} encType="multipart/form-data">
          <div className="mb-3 col-md-3 form-group">
            <label>Blog Title</label>
            <input
              className="form-control"
              name="blogTitle"
              type="text"
              required="required"
              placeholder="Enter Blog Name"
              onChange={(e) => setBlogTitle(e.target.value)}
              value={blogTitle}
            />
          </div>
          <div className="mb-3 col-md-3 form-group">
            <label>Description</label>
            <textarea
              className="form-control"
              name="description"
              required="required"
              as="textarea"
              placeholder="Enter Blog Description"
              onChange={(e) => setDescription(e.target.value)}
              value={description}
            ></textarea>
          </div>

          <div className="form-group mb-3 col-md-3">
            <label>Author</label>
            <input
              className="form-control"
              name="author"
              type="text"
              required="required"
              placeholder="Enter Author"
              onChange={(e) => setAuthor(e.target.value)}
              value={author}
            />
          </div>

          <div className="form-group mb-3 col-md-3">
            <label>Blog Image</label>
            <input
              className="form-control"
              name="blogImage"
              required="required"
              type="file"
              onChange={(e) => {
                setBlogImage(e.target.files[0]);
              }}
            />
          </div>

          <button className="btn btn-primary" variant="primary" type="submit">
            Submit
          </button>
        </form>
      </div>
    </>
  );
};

export default Addblogs;

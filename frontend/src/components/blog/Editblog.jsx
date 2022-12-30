import React, { useState, useEffect } from "react";
// import { Form, Button, Container } from "react-bootstrap";
import { useParams, useNavigate } from "react-router-dom";
import axios from "axios";

const Editblog = () => {
  const bannerImg = "assets/img/breadcrumb/breadcurmb.jpg";
  const navigate = useNavigate();
  const { id } = useParams("");

  const [blogTitle, setBlogTitle] = useState("");
  const [description, setDescription] = useState("");
  const [author, setAuthor] = useState("");
  const [blogImage, setBlogImage] = useState("");

  useEffect(() => {
    const fetch = async () => {
      await axios.get(`http://localhost:5000/api/blog/${id}`).then((res) => {
        setBlogTitle(res.data.blogs.blogTitle);
        setDescription(res.data.blogs.description);
        setAuthor(res.data.blogs.author);
        setBlogImage(res.data.blogs.blogImage);
        console.log(res.data);
      });
    };
    fetch();
  }, []);

  const handleSubmit = async (e) => {
    e.preventDefault();
    const formData = new FormData();

    formData.append("blogTitle", blogTitle);
    formData.append("description", description);
    formData.append("author", author);
    formData.append("blogImage", blogImage);
    await axios
      .patch(`http://localhost:5000/api/updateBlog/${id}`, formData, {
        headers: {
          "content-type": "multipart/formdata",
        },
      })
      .then((res) => alert(res.data.message))
      .then(navigate("/blogs"));

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
              required="required"
              type="text"
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

export default Editblog;

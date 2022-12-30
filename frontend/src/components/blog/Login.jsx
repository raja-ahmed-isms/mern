import axios from "axios";
import { React, useState } from "react";
import { useNavigate } from "react-router-dom";

export const Login = () => {
  const bannerImg = "assets/img/breadcrumb/breadcurmb.jpg";

  const [userName, setUserName] = useState();
  const [password, setPassword] = useState();

  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    // console.log(userName, password);
    axios
      .post("http://localhost:5000/api/login", {
        userName: userName,
        password: password,
      })
      .then((res) => {
        localStorage.setItem("type", res.data.type);
        localStorage.setItem("token", res.data.token);
        // console.log(res.data);
        alert(res.data.message);
        navigate("/blogs");
      })
      .catch((error) => {
        console.log(error);
      });
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
      <div className="login-wrapper">
        <h1> Log In</h1>
        <form onSubmit={handleSubmit}>
          <label>
            <p>Username</p>
          </label>
          <input
            type="text"
            className="form-control"
            onChange={(e) => setUserName(e.target.value)}
          />
          <label>
            <p>Password</p>
          </label>
          <input
            type="password"
            className="form-control"
            onChange={(e) => setPassword(e.target.value)}
          />
          <div>
            <button type="submit" className="btn btn-success">
              Submit
            </button>
          </div>
        </form>
      </div>
    </>
  );
};

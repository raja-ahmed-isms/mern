import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

import Header from "./inc/Header";
import Footer from "./inc/Footer";
import Home from "./components/Home";
import Home2 from "./components/Home2";
import Home3 from "./components/Home3";
import AboutUs from "./components/AboutUs";
import AboutMe from "./components/AboutMe";
import Services from "./components/Services";
import ServiceDetails from "./components/ServiceDetails";
import CaseStady from "./components/CaseStudy";
import CaseDetails from "./components/CaseDetails";
import Blog from "./components/Blog";
import BlogDetails from "./components/BlogDetails";
import Contact from "./components/Contact";
import Team from "./components/Team";
import NoPage from "./components/Nopage";

import { Login } from "./components/blog/Login";
import Listblog from "./components/blog/Listblog";
import Addblogs from "./components/blog/Addblogs";
import Editblog from "./components/blog/Editblog";
import "./App.css";

function App() {
  return (
    <>
      <Router>
        <Header />
        <Routes>
          <Route path="/" element={<Home />} exact />
          <Route path="/home" element={<Home />} />
          <Route path="/home2" element={<Home2 />} />
          <Route path="/home3" element={<Home3 />} />
          <Route path="/login" element={<Login />} />
          <Route path="/about-us" element={<AboutUs />} />
          <Route path="/about-me" element={<AboutMe />} />
          <Route path="/services" element={<Services />} />
          <Route path="/service-details" element={<ServiceDetails />} />
          <Route path="/case-studies" element={<CaseStady />} />
          <Route path="/Case-details" element={<CaseDetails />} />
          <Route path="/blog" element={<Blog />} />
          <Route path="/blog-details" element={<BlogDetails />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/team" element={<Team />} />
          <Route path="/404" element={<NoPage />} />

          <Route path="/blogs" element={<Listblog />} />
          <Route path="/addblogs" element={<Addblogs />} />
          <Route path="/edit/:id" element={<Editblog />} />
        </Routes>
        <Footer />
      </Router>
    </>
  );
}

export default App;

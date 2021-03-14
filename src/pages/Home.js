import React from "react";
import Banner from "../components/Banner";
import About from "../components/About";
import Projects from "../components/Projects";
import Blogs from "../components/Blogs";
import Contact from "../components/ContactMe";

const Home = () => {
  // useState
  // useFetch

  return (
    <div>
      <Banner />
      <About />
      <Projects />
      <Blogs />
      <Contact />
    </div>
  );
};

export default Home;

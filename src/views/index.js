import React from "react";
import NavBar from "../components/NavBar";
import Projects from "./Projects";
import Banner from "./Banner";
import About from "./About";
import Contact from "./Contact";
import Skills from "./Skills";


import AOS from 'aos';
import 'aos/dist/aos.css';

const Home = () => {

    React.useEffect(() => {
        AOS.init();
    });
    return (
      <>
        <div className="container-fluid container-fluid1">
          <NavBar />
          <Banner />
          <About />
          <Skills />
          <Projects />
          <Contact />
        </div>
      </>
    );
}

export default Home
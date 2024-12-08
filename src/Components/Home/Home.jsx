import React from "react";
import Hero from "./Section/Hero";
import ServicesConent from "./Section/ServicesConent";
import Services from "./Section/Services";
import WhyUs from "./Section/WhyUs";
import Banner from "./Section/Banner";
import ProjectShowCase from "./Section/ProjectShowCase";
import Contact from "./Section/Contact";

const Home = () => {
  return (
    <div className='text-white bg-local'>
      <Hero/>
      <ServicesConent/>
      <Services/>
      <WhyUs/>
      <Banner/>
      <ProjectShowCase/>
      <Contact/>
    </div>
  );
};

export default Home;

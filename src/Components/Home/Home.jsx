import React, {useRef} from "react";
import Hero from "./Section/Hero";
import ServicesConent from "./Section/ServicesConent";
import Services from "./Section/Services";
import WhyUs from "./Section/WhyUs";
import Banner from "./Section/Banner";
import ProjectShowCase from "./Section/ProjectShowCase";
import Contact from "./Section/Contact";
import Footer from "./Section/Footer";

const Home = () => {

  const contactRef = useRef(null);

  const scrollToContact = () => {
    if (contactRef.current) {
      contactRef.current.scrollIntoView({
        behavior: 'smooth',
      });
    }
  };
  
  return (
    <div className='text-white cursor-default'>
      <Hero/>
      <ServicesConent/>
      <Services/>
      <WhyUs/>
      <Banner onContactClick={scrollToContact}/>
      <ProjectShowCase/>
      <Contact ref={contactRef}/>
      <Footer/>
    </div>
  );
};

export default Home;

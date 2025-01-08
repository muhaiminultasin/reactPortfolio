import React, {useRef} from "react";
import Hero from "./Section/Hero";
import ProjectShowCase from "./Section/ProjectShowCase";
import ServicesConent from "./Section/ServicesConent";
import Services from "./Section/Services";
import WhyUs from "./Section/WhyUs";
import Banner from "./Section/Banner";
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
    <section className=' overflow-y-hidden space-y-[100px] text-white cursor-default'>
      <Hero/>
      <ProjectShowCase/>
      <ServicesConent/>
      <Services/>
      <WhyUs/>
      <Banner onContactClick={scrollToContact}/>
      <Contact ref={contactRef}/>
      <Footer/>
    </section>
  );
};

export default Home;

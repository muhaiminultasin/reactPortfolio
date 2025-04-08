import React, {useRef} from "react";
import Hero from "./Section/Hero";
import ProjectShowCase from "./Section/ProjectShowCase";
import ServicesContent from "./Section/ServicesContent";
import Services from "./Section/Services";
import WhyUs from "./Section/WhyUs";
import Banner from "./Section/Banner";
import Contact from "./Section/Contact";
import Footer from "./Section/Footer";
import ExpertiseSection from "./Section/ExpertiseSection";

const Home = () => {

  const contactRef = useRef(null);

  const scrollToContact = () => {
    if (contactRef.current) {
      contactRef.current.scrollIntoView({
        behavior: 'smooth',
      });
    }
  };


  const portfolioRef = useRef(null);

  const scrollToPortfolio = () => {
    if (portfolioRef.current) {
      portfolioRef.current.scrollIntoView({
        behavior: "smooth",
      });
    }
  };

  
  return (
    <section className=' overflow-y-hidden space-y-[100px] text-white cursor-default'>
      <Hero onViewMyWrok={scrollToPortfolio}/>
      <ProjectShowCase ref={portfolioRef}/>
      <ServicesContent/>
      <Services/>
      <WhyUs/>
      <Banner onContactClick={scrollToContact}/>
      <ExpertiseSection/>
      <Contact ref={contactRef}/>
      <Footer/>
    </section>
  );
};

export default Home;

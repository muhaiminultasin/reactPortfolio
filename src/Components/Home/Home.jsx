import React, { useRef } from "react";
import Hero from "./Section/Hero";
import ProjectShowCase from "./Section/ProjectShowCase";
import ServicesContent from "./Section/ServicesContent";
import Services from "./Section/Services";
import WhyUs from "./Section/WhyUs";
import Banner from "./Section/Banner";
import Contact from "./Section/Contact";
import Footer from "./Section/Footer";
import ExpertiseSection from "./Section/ExpertiseSection";
import Navbar from "../Common/Navbar";

const Home = () => {
  const homeRef = useRef(null);
  const portfolioRef = useRef(null);
  const featureRef = useRef(null);
  const packagesRef = useRef(null);
  const contactRef = useRef(null);



  const scrollToSection = (ref) => {
    if (ref.current) {
      ref.current.scrollIntoView({
        behavior: "smooth",
      });
    }
  };

  return (
    <section className=" overflow-y-hidden space-y-[100px] text-white cursor-default">
      <Navbar
       scrollToSection={scrollToSection}
       homeRef={homeRef}
       portfolioRef={portfolioRef}
       featureRef={featureRef}
       packagesRef={packagesRef}
       contactRef={contactRef}/>
      <Hero ref={homeRef} onClick={() => scrollToSection(portfolioRef)} />
      <ProjectShowCase ref={portfolioRef} />
      <ServicesContent />
      <Services ref={featureRef}/>
      <WhyUs />
      <Banner onClick={() => scrollToSection(contactRef)} />
      <ExpertiseSection ref={packagesRef}/>
      <Contact ref={contactRef} />
      <Footer />
    </section>
  );
};

export default Home;
